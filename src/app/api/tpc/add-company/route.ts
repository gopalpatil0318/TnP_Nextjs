import dbConnect from "@/lib/dbConnect";
import CompanyModel from "@/model/AddCompany";
import UserModel from "@/model/User";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function POST(request: NextRequest): Promise<NextResponse> {
    await dbConnect();
    try {
        const token = await getToken({ req: request });
        if (!token) {
            return NextResponse.json(
                { success: false, message: "Unauthorized access." },
                { status: 401 }
            );
        }

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

        if (!name || !salary || !location) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Name, salary, and location are required fields.",
                },
                { status: 400 }
            );
        }

        const existingCompany = await CompanyModel.findOne({ name });
        if (existingCompany) {
            return NextResponse.json(
                {
                    success: false,
                    message: "A company with this name already exists.",
                },
                { status: 400 }
            );
        }

        // Extract criteria fields
        const {
            overallCGPA,
            gender,
            passoutYear,
            anyLiveKTs,
            anyGapDuringEducation,
            department,
            tenthMarks,
            twelfthPercentage,
        } = criteria;

        const matchingStudents = await UserModel.find({
            overallCGPA: { $gte: overallCGPA || 0 },
            gender: { $in: gender || [] },
            passoutYear,
            anyLiveKTs,
            anyGapDuringEducation,
            department: { $in: department || [] },
            tenthMarks: { $gte: tenthMarks || 0 },
            twelfthDiplomaPercentage: { $gte: twelfthPercentage || 0 },
        }).select("_id");



        const selectedStudentIds = matchingStudents.map((student) => student._id);

        console.log("Matching students list ----> ", matchingStudents);
        console.log("Selected student IDs ----> ", selectedStudentIds);

        
        const eligibleStudents = {
            roundNumber: 1,
            roundName: "Eligible Students",
            selectedStudents: selectedStudentIds, 
        };
        const acceptStudents = {
            roundNumber: 2,
            roundName: "Accept Students",
            selectedStudents: [], 
        };

     
        const allRounds = [eligibleStudents,acceptStudents, ...rounds]; 

        const newCompany = new CompanyModel({
            name,
            description,
            salary,
            bond,
            location,
            criteria,
            rounds: allRounds, // Add all rounds
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
            { status: 500 }
        );
    }
}


