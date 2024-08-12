import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";

import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(request: Request) {
    await dbConnect()

    try {

        const { username, email, password } = await request.json()
        const existingUserVerifiedByUsername = await UserModel.findOne({
            username,
            isVerified: true
        })

        if (existingUserVerifiedByUsername) {
            return Response.json({
                success: false,
                message: "Username is already taken"
            }, { status: 400 })
        }

        const existingUserByMail = await UserModel.findOne({ email })

        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString()

        if (existingUserByMail) {
            if (existingUserByMail.isVerified) {
                return Response.json({
                    success: false,
                    message: "User already exist with this email"
                }, { status: 400 })
            }
            else {
                const hashedPassword = await bcrypt.hash(password, 10)
                existingUserByMail.password = hashedPassword;
                existingUserByMail.verifyCode = verifyCode;
                existingUserByMail.verifyCodeExpiry = new Date(Date.now() + 3600000);
                await existingUserByMail.save()
            }
        } else {
            const hashedPassword = await bcrypt.hash(password, 10)
            const expiryDate = new Date()
            expiryDate.setHours(expiryDate.getHours() + 1)

            const newUser = new UserModel({
                username,
                email,
                password: hashedPassword,
                verifyCode,
                verifyCodeExpiry: expiryDate,
                isVerified: false,
                isAcceptingMessage: true,
                messages: [],
            })

            await newUser.save()
        }

        const emailResponse = await sendVerificationEmail(
            email,
            username,
            verifyCode
        )


        console.log(emailResponse.success)
        
        if (!emailResponse.success) {
            return Response.json({
                success: false,
                message: emailResponse.message
            }, { status: 500 })

        }


        return Response.json({
            success: true,
            message: "User registered successfully. Please verify your email"
        }, { status: 201 })


    } catch (error) {
        console.error('Error registering User ', error)
        return Response.json(
            {
                success: false,
                message: "Error registering User"
            },
            {
                status: 500
            }
        )

    }
}