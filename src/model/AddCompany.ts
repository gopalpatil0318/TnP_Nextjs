import mongoose, { Schema, Document } from "mongoose";

export interface Company extends Document {
    name: string;
    description: string;
    salary: number;
    bond: string;
    location: string;
    criteria: {
        overallCGPA: number;
        gender: string[];
        passoutYear: number;
        anyLiveKTs: string;
        anyGapDuringEducation: string;
        department: string[];
        tenthPercentage: number;
        twelfthPercentage: number;
        diplomaPercentage: number;
        skills: string[];
    };
    rounds: {
        roundNumber: number;
        roundName: string;
        selectedStudents: mongoose.Types.ObjectId[];
    }[];
    createdBy: mongoose.Types.ObjectId;
}

const CompanySchema: Schema<Company> = new Schema({
    name: { type: String, required: [true, "Company name is required"] },
    description: { type: String },
    salary: { type: Number, required: true },
    bond: { type: String },
    location: { type: String },
    criteria: {
        overallCGPA: { type: Number },
        gender: { type: [String] },
        passoutYear: { type: Number },
        anyLiveKTs: { type: String },
        anyGapDuringEducation: { type: String },
        department: { type: [String] },
        tenthMarks: { type: Number },
        twelfthPercentage: { type: Number },
        diplomaPercentage: { type: Number },
        skills: { type: [String] },
    },
    rounds: [
        {
            roundNumber: { type: Number, required: true },
            roundName: { type: String, required: true },
            selectedStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        },
    ],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TPC",
        required: true,
    },
}, {
    timestamps: true, 
});

const CompanyModel = mongoose.models.Company ||mongoose.model<Company>("Company", CompanySchema);
export default CompanyModel;
