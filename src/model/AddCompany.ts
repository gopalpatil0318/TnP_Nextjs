import mongoose, { Schema, Document } from "mongoose";

export interface Company extends Document {
    name: string;
    description: string;
    salary: number;
    bond: string;
    location: string;
    criteria: {
        cgpa: number;
        gender: string[];
        passoutYear: number;
        liveKT: number;
        educationGap: string;
        department: string[];
        tenthPercentage: number;
        twelfthPercentage: number;
        diplomaPercentage: number;
        skills: string[];
    };
    rounds: {
        roundNumber: number;
        roundName: string;
        selectedStudents: mongoose.Types.ObjectId[]; // References student IDs
    }[];
    createdBy: mongoose.Types.ObjectId; // References the TPC who created the company
}

const CompanySchema: Schema<Company> = new Schema({
    name: { type: String, required: [true, "Company name is required"] },
    description: { type: String },
    salary: { type: Number, required: true },
    bond: { type: String },
    location: { type: String },
    criteria: {
        cgpa: { type: Number },
        gender: { type: [String] },
        passoutYear: { type: Number },
        liveKT: { type: Number },
        educationGap: { type: String },
        department: { type: [String] },
        tenthPercentage: { type: Number },
        twelfthPercentage: { type: Number },
        diplomaPercentage: { type: Number },
        skills: { type: [String] },
    },
    rounds: [
        {
            roundNumber: { type: Number },
            roundName: { type: String },
            selectedStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        },
    ],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TPC",
        required: true,
    },
});

const CompanyModel = mongoose.model<Company>("Company", CompanySchema);
export default CompanyModel;
