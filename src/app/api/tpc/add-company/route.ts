import dbConnect from "@/lib/dbConnect";
import CompanyModel from "@/model/AddCompany";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function POST(request: NextRequest): Promise<NextResponse> {

    await dbConnect();
    try {
        const token = await getToken({req:request});
        const {
            name,
            description,
            salary,
            bond,
            location,
            criteria,
            rounds,
            createdBy,
        } = await request.json();
        console.log("fbgfnbgfkbnfgb",name,
            description,
            salary,
            bond,
            location,
            criteria,
            rounds,
            createdBy,)

        if (!name || !salary || !location) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Name, salary, location, and createdBy are required fields."
                },
                { status: 400 }
            );
        }


        const existingCompany = await CompanyModel.findOne({ name });
        if (existingCompany) {
            return NextResponse.json(
                {
                    success: false,
                    message: "A company with this name already exists."
                },
                { status: 400 }
            );
        }


        const newCompany = new CompanyModel({
            name,
            description,
            salary,
            bond,
            location,
            criteria,
            rounds,
            createdBy: token?._id,
        });


        await newCompany.save();

        return NextResponse.json(
            {
                success: true,
                message: "Company added successfully.",
                company: newCompany,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error adding company:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Error adding company. Please try again.",
            },
            { status: 550 }
        );
    }
}
