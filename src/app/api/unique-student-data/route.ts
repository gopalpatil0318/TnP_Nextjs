import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    await dbConnect(); // Establish the database connection

    try {
        // Extract the username from the request body
        const { username } = await request.json();

        // Decode the username (to handle URL encoding)
        const decodedUsername = decodeURIComponent(username);

        // Find the user with case-insensitive matching and projection to only return required fields
        const user = await UserModel.findOne({ username: new RegExp(`^${decodedUsername}$`, 'i') })
            .select('firstName lastName middleName email mobileNumber image department areaOfInterest aboutYou githubLink linkedinLink leetcodeLink personalPortfolioLink instagramLink twitterLink hackerRankLink codechefLink geeksForGeeksLink projectTitle1 projectLink1 projectDescription1 projectTitle2 projectLink2 projectDescription2'); // Projection: select only required fields

        if (!user) {
            return NextResponse.json({
                success: false,
                message: "User not found"
            }, { status: 404 });
        }

        // Return the student data with selected fields
        return NextResponse.json({
            success: true,
            data: user
        }, { status: 200 });

    } catch (error) {
        console.error('Error fetching student data:', error);

        return NextResponse.json({
            success: false,
            message: "Error fetching student data"
        }, { status: 500 });
    }
}
