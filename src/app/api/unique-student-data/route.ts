import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest): Promise<NextResponse> {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return NextResponse.json({
            success: false,
            message: "Not Authenticated"
        }, { status: 401 });
    }

    await dbConnect();

    try {
        const { username, email, ...otherDetails } = await request.json();
        
        const updatedUser = await UserModel.findOneAndUpdate(
            { username, isVerified: true },
            { $set: otherDetails },
            { new: true }
        );

        if (!updatedUser) {
            return NextResponse.json({
                success: false,
                message: "User Not Found"
            }, { status: 400 });
        }

        return NextResponse.json({
            success: true,
            message: "Profile updated successfully",
            user: updatedUser
        }, { status: 200 });

    } catch (error) {
        console.error('Error updating user profile:', error);
        return NextResponse.json({
            success: false,
            message: "Error updating user profile"
        }, { status: 500 });
    }
}
