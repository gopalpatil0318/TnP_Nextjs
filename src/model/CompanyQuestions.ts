import mongoose, { Schema, Document } from "mongoose";

export interface CompanyQuestion extends Document {
    company: string;
    questions: string[];
    studentName: string;
    review?: string;
    dateAdded: Date; 
}

const CompanyQuestionSchema: Schema<CompanyQuestion> = new Schema({
    company: {
        type: String,
        required: true,
    },
    questions: {
        type: [String],
        required: true,
    },
    studentName: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: false,
    },
    dateAdded: {
        type: Date,
        default: Date.now, 
    },
});

const CompanyQuestionModel = mongoose.models.CompanyQuestion || mongoose.model<CompanyQuestion>("CompanyQuestion", CompanyQuestionSchema);

export default CompanyQuestionModel;
