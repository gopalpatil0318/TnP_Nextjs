import mongoose, { Schema, Document } from "mongoose";
import { boolean } from "zod";

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isProfileComplete:boolean;
    firstName: string; 
    middleName: string; 
    lastName: string;
    mobileNumber: string;
    birthDate: Date;
    gender: string;
    // confirmPassword: string;
    bloodGroup: string;
    adharNumber: string;
    cast: string;
    fatherName: string;
    fatherMobileNumber: string;
    fatherOccupation: string;
    motherName: string;
    motherMobileNumber: string;
    motherOccupation: string;
    localAddress: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    prnNumber: string;
    tenthMarks: string;
    twelfthDiploma: string;
    twelfthDiplomaPercentage: string;
    admissionBasedOn: string;
    department: string;
    division: string;
    passoutYear: number;
    lgName: string;
    sem1SGPA: number;
    sem1CGPA: number;
    sem1Backlog: number;
    sem2SGPA: number;
    sem2CGPA: number;
    sem2Backlog: number;
    sem3SGPA: number;
    sem3CGPA: number;
    sem3Backlog: number;
    sem4SGPA: number;
    sem4CGPA: number;
    sem4Backlog: number;
    sem5SGPA: number;
    sem5CGPA: number;
    sem5Backlog: number;
    sem6SGPA: number;
    sem6CGPA: number;
    sem6Backlog: number;
    overallCGPA: number;
    anyLiveKTs: number;
    anyGapDuringEducation: string;
    gapReason: string;
  

    
    areaOfInterest: string;
    aboutYou: string;
    projectTitle1: string;
    projectLink1: string;
    projectDescription1: string;
    projectTitle2: string;
    projectLink2: string;
    projectDescription2: string;
    personalPortfolioLink: string;
    githubLink: string;
    linkedinLink: string;
    instagramLink: string;
    twitterLink: string;
    leetcodeLink: string;
    geeksForGeeksLink: string;
    codechefLink: string;
    hackerRankLink: string; 
    image:string;

}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please use a valid email address']
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    verifyCode: {
        type: String,
        required: [true, "Verify Code is required"]
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "Verify Code Expiry is required"]
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isProfileComplete: {
        type: Boolean,
        default: false,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    // confirmPassword: {
    //     type: String,
    //     required: false,
    // },
    bloodGroup: {
        type: String,
        required: true,
    },
    adharNumber: {
        type: String,
        required: true,
    },
    cast: {
        type: String,
        required: true,
    },
    fatherName: {
        type: String,
        required: true,
    },
    fatherMobileNumber: {
        type: String,
        required: true,
    },
    fatherOccupation: {
        type: String,
        required: true,
    },
    motherName: {
        type: String,
        required: true,
    },
    motherMobileNumber: {
        type: String,
        required: true,
    },
    motherOccupation: {
        type: String,
        required: true,
    },
    localAddress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    prnNumber: {
        type: String,
        required: true,
    },
    tenthMarks: {
        type: String,
        required: false,
    },
    twelfthDiploma: {
        type: String,
        required: true,
    },
    twelfthDiplomaPercentage: {
        type: String,
        required: false,
    },
    admissionBasedOn: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    division: {
        type: String,
        required: true,
    },
    passoutYear: {
        type: Number,
        required: true,
    },
    lgName: {
        type: String,
        required: true,
    },
    sem1SGPA: {
        type: Number,
        required: false,
    },
    sem1CGPA: {
        type: Number,
        required: false,
    },
    sem1Backlog: {
        type: Number,
        required: false,
    },
    sem2SGPA: {
        type: Number,
        required: false,
    },
    sem2CGPA: {
        type: Number,
        required: false,
    },
    sem2Backlog: {
        type: Number,
        required: false,
    },
    sem3SGPA: {
        type: Number,
        required: true,
    },
    sem3CGPA: {
        type: Number,
        required: true,
    },
    sem3Backlog: {
        type: Number,
        required: true,
    },
    sem4SGPA: {
        type: Number,
        required: true,
    },
    sem4CGPA: {
        type: Number,
        required: true,
    },
    sem4Backlog: {
        type: Number,
        required: true,
    },
    sem5SGPA: {
        type: Number,
        required: true,
    },
    sem5CGPA: {
        type: Number,
        required: true,
    },
    sem5Backlog: {
        type: Number,
        required: true,
    },
    sem6SGPA: {
        type: Number,
        required: true,
    },
    sem6CGPA: {
        type: Number,
        required: true,
    },
    sem6Backlog: {
        type: Number,
        required: true,
    },
    overallCGPA: {
        type: Number,
        required: true,
    },
    anyLiveKTs: {
        type: Number,
        required: true,
    },
    anyGapDuringEducation: {
        type: String,
        required: true,
    },
    gapReason: {
        type: String,
        required: true,
    },
  
    areaOfInterest: {
        type: String,
        required: true,
    },
    aboutYou: {
        type: String,
        required: true,
    },
    projectTitle1: {
        type: String,
        required: true,
    },
    projectLink1: {
        type: String,
        required: true,
    },
    projectDescription1: {
        type: String,
        required: true,
    },
    projectTitle2: {
        type: String,
        required: true,
    },
    projectLink2: {
        type: String,
        required: true,
    },
    projectDescription2: {
        type: String,
        required: true,
    },
    personalPortfolioLink: {
        type: String,
        required: true,
    },
    githubLink: {
        type: String,
        required: false,
    },
    linkedinLink: {
        type: String,
        required: true,
    },
    instagramLink: {
        type: String,
        required: false,
    },
    twitterLink: {
        type: String,
        required: false,
    },
    leetcodeLink: {
        type: String,
        required: false,
    },
    geeksForGeeksLink: {
        type: String,
        required: false,
    },
    codechefLink: {
        type: String,
        required: false,
    },
    hackerRankLink: {
        type: String,
        required: false,
    },
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
 
});

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema);

export default UserModel;
