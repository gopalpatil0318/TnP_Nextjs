import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
    await dbConnect();

    try {
        // Extract query and passoutYear from the URL search params
        const url = new URL(request.url); // Get the full URL
        const query = url.searchParams.get("query");
        const passoutYear = url.searchParams.get("passoutYear");

        // Build the search filter
        const searchFilter: any = {};

        if (query) {
            const regex = new RegExp(query, "i");  // Case-insensitive search
            searchFilter.$or = [
                { firstName: { $regex: regex } },
                { lastName: { $regex: regex } }
            ];
        }

        if (passoutYear) {
            searchFilter["passoutYear"] = parseInt(passoutYear, 10);  // Ensure it's a number
        }

        // Perform the search in the User model with the constructed filter
        const students = await UserModel.find(searchFilter).select('firstName lastName email passoutYear department username');

        // Check if any students were found
        if (students.length === 0) {
            return NextResponse.json({
                success: false,
                message: "No students found"
            }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            students,
        }, { status: 200 });

    } catch (error) {
        console.error("Error searching students: ", error);
        return NextResponse.json({
            success: false,
            message: "Error searching students"
        }, { status: 500 });
    }
}