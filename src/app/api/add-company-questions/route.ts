import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import CompanyQuestionModel from "@/model/CompanyQuestions";

export async function POST(request: Request): Promise<Response> {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return new Response(JSON.stringify({
            success: false,
            message: "Not Authenticated"
        }), { status: 401 });
    }

    await dbConnect();

    try {
        const { company, questions, review } = await request.json();
        const studentName = session.user.name || "Anonymous"; 

        if (!company || !questions || questions.length === 0) {
            return new Response(JSON.stringify({
                success: false,
                message: "Company and questions are required"
            }), { status: 400 });
        }

        
        const currentDate = new Date();

        const newCompanyQuestion = new CompanyQuestionModel({
            company,
            questions,
            studentName,
            review,
            dateAdded: currentDate, 
        });

        await newCompanyQuestion.save();

        return new Response(JSON.stringify({
            success: true,
            message: "Company questions added successfully",
            companyQuestion: newCompanyQuestion
        }), { status: 201 });

    } catch (error) {
        console.error('Error adding company questions:', error);
        return new Response(JSON.stringify({
            success: false,
            message: "Error adding company questions"
        }), { status: 500 });
    }
}