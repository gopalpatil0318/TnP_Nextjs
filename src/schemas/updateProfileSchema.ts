import { z } from 'zod';


export const updateProfileSchema = z.object({

    // Personal Details
    firstName:z.string().min(2,{message:"First Name must be minium of 2 Characters "}).max(20,{message:"First Name must not exceed 20 Characters "}).regex(/^[A-Za-z\s-]+$/,{message:"First Name is in Invalid Format"}),
    middleName:z.string().min(2,{message:"Middle Name must be minium of 2 Characters "}).max(20,{message:"Middle Name must not exceed 20 Characters "}).regex(/^[A-Za-z\s-]+$/,{message:"Middle Name is in Invalid Format"}),
    lastName:z.string().min(2,{message:"Last Name must be minium of 2 Characters "}).max(20,{message:"Last Name must not exceed 20 Characters "}).regex(/^[A-Za-z\s-]+$/,{message:"Last Name is in Invalid Format"}),
    email:z.string().email({message:"Invalid email address"}),
    mobileNumber:z.string().regex(/^\d{10}$/,{message:"Invalid Mobile Number"}).regex(/^\d+$/,{message:"Invalid Mobile Number"}),
    birthDate:z.date(),
    gender:z.string(),
    adharNumber:z.string().min(12,{message:"Invalid Aadhaar Number"}).max(12,{message:"Invalid Aadhaar Number"}).regex(/^\d+$/,{message:"Invalid Aadhaar Number"}),
    cast:z.string(),
    bloodGroup:z.string(),
    fatherName:z.string().min(2,{message:"Father Name must be minium of 2 Characters "}).max(20,{message:"Father Name must not exceed 20 Characters "}).regex(/^[A-Za-z\s-]+$/,{message:"Father Name is in Invalid Format"}),
    fatherMobileNumber:z.string().regex(/^\d{10}$/,{message:"Invalid Mobile Number"}).regex(/^\d+$/,{message:"Invalid Mobile Number"}),
    fatherOccupation:z.string(),
    motherName:z.string().min(2,{message:"Mother Name must be minium of 2 Characters "}).max(20,{message:"Mother Name must not exceed 20 Characters "}).regex(/^[A-Za-z\s-]+$/,{message:"Mother Name is in Invalid Format"}),
    motherMobileNumber:z.string().regex(/^\d{10}$/,{message:"Invalid Mobile Number"}).regex(/^\d+$/,{message:"Invalid Mobile Number"}),
    motherOccupation:z.string(),
    city:z.string().min(3,{message:"Invalid City Name"}).max(50,{message:"Invalid City Name"}).regex(/^[A-Za-z\s-]+$/,{message:"City Name is in Invalid Format"}),
    district:z.string().min(3,{message:"Invalid District Name"}).max(50,{message:"Invalid District Name"}).regex(/^[A-Za-z\s-]+$/,{message:"District Name is in Invalid Format"}),
    state:z.string().min(3,{message:"Invalid State Name"}).max(50,{message:"Invalid State Name"}).regex(/^[A-Za-z\s-]+$/,{message:"State Name is in Invalid Format"}),
    pincode:z.string().min(6,{message:"Invalid Pincode "}).max(6,{message:"Invalid Pincode"}).regex(/^\d+$/,{message:"Invalid Pincode Number"}),
    localAddress:z.string().min(3,{message:"Invalid Local Address"}).max(50,{message:"Invalid Local Address"}).regex(/^[A-Za-z0-9-]+$/,{message:"Local Address is in Invalid Format"}),


    //Login
    username: z.string().min(9,{message:"Invalid username Number "}).max(9,{message:"Invalid username Number"}),

    // Academic details
    prnNumber:z.string().min(9,{message:"Invalid PRN Number "}).max(9,{message:"Invalid PRN Number"}),
    tenthMarks:z.string().min(2,{message:"Enter Valid 10 marks"}).max(6,{message:"Enter Valid 10 marks"}).regex(/^\d*\.?\d+$/,{message:"Enter Valid 10 marks"}),
    twelfthDiploma:z.string(),
    twelfthDiplomaPercentage:z.string().min(2,{message:"Enter Valid Diploma marks"}).max(6,{message:"Enter Valid Diploma marks"}).regex(/^\d*\.?\d+$/,{message:"Enter Valid Diploma marks"}).optional(),
    admissionBasedOn:z.string(),
    department:z.string(),
    division:z.string(),
    passoutYear:z.number().max(4,{message:"Enter Valid Pass out Year"}),
    lgName:z.string().min(2,{message:"LG Name must be minium of 2 Characters "}).max(20,{message:"LG Name must not exceed 20 Characters "}).regex(/^[A-Za-z\s-]+$/,{message:"LG Name is in Invalid Format"}),
    

    sem1SGPA: z.number().min(2,{message:"Enter Valid Semester 1 SGPA"}).max(6,{message:"Enter Valid Semester 1 SGPA"}).optional(),
    sem1CGPA: z.number().min(2,{message:"Enter Valid Semester 1 CGPA"}).max(6,{message:"Enter Valid Semester 1 CGPA"}).optional(),
    sem1Backlog: z.number(),
    sem2SGPA: z.number().min(2,{message:"Enter Valid Semester 2 SGPA"}).max(6,{message:"Enter Valid Semester 2 SGPA"}).optional(),
    sem2CGPA: z.number().min(2,{message:"Enter Valid Semester 2 CGPA"}).max(6,{message:"Enter Valid Semester 2 CGPA"}).optional(),
    sem2Backlog: z.number(),
    sem3SGPA: z.number().min(2,{message:"Enter Valid Semester 3 SGPA"}).max(6,{message:"Enter Valid Semester 3 SGPA"}),
    sem3CGPA: z.number().min(2,{message:"Enter Valid Semester 3 CGPA"}).max(6,{message:"Enter Valid Semester 3 CGPA"}),
    sem3Backlog: z.number(),
    sem4SGPA: z.number().min(2,{message:"Enter Valid Semester 4 SGPA"}).max(6,{message:"Enter Valid Semester 4 SGPA"}),
    sem4CGPA: z.number().min(2,{message:"Enter Valid Semester 4 CGPA"}).max(6,{message:"Enter Valid Semester 4 CGPA"}),
    sem4Backlog: z.number(),
    sem5SGPA: z.number().min(2,{message:"Enter Valid Semester 5 SGPA"}).max(6,{message:"Enter Valid Semester 5 SGPA"}),
    sem5CGPA: z.number().min(2,{message:"Enter Valid Semester 5 CGPA"}).max(6,{message:"Enter Valid Semester 5 CGPA"}),
    sem5Backlog: z.number(),
    sem6SGPA: z.number().min(2,{message:"Enter Valid Semester 6 SGPA"}).max(6,{message:"Enter Valid Semester 6 SGPA"}),
    sem6CGPA: z.number().min(2,{message:"Enter Valid Semester 6 CGPA"}).max(6,{message:"Enter Valid Semester 6 CGPA"}),
    sem6Backlog: z.number(),
    overallCGPA: z.number().min(2,{message:"Enter Valid Overall CGPA"}).max(6,{message:"Enter Valid Overall CGPA"}),
    anyLiveKTs: z.number(),
    anyGapDuringEducation: z.string(),
    gapReason: z.string(),



    // Skills , Project & Social Profiles
    areaOfInterest: z.string(),
    aboutYou: z.string().min(25,{message:"Enter Valid Information"}).max(250,{message:"Enter Valid Information"}),
    projectTitle1: z.string().min(5,{message:"Enter Valid Project Title"}).max(30,{message:"Enter Valid Project Title"}),
    projectLink1: z.string().optional(),
    projectDescription1: z.string().min(25,{message:"Enter Valid Project Description"}).max(250,{message:"Enter Valid Project Description"}),
    projectTitle2: z.string().min(5,{message:"Enter Valid Project Title"}).max(30,{message:"Enter Valid Project Title"}),
    projectLink2: z.string().optional(),
    projectDescription2: z.string().min(25,{message:"Enter Valid Project Description"}).max(250,{message:"Enter Valid Project Description"}),
    personalPortfolioLink: z.string().optional(),
    githubLink: z.string().optional(),
    linkedinLink: z.string(),
    instagramLink: z.string().optional(),
    twitterLink: z.string().optional(),
    leetcodeLink: z.string().optional(),
    geeksForGeeksLink: z.string().optional(),
    codechefLink: z.string().optional(),
    hackerRankLink: z.string().optional(),
   
    isProfileComplete: z.boolean().optional().default(false),
    image: z
        .any()
    //     .refine((file) => file?.length == 1, "File is required.")
    //     .refine(
    //         (file) =>
    //             file[0]?.type === "image/png" ||
    //             file[0]?.type === "image/jpeg" ||
    //             file[0]?.type === "image/jpg",
    //         "Must be a png, jpeg or jpg.",
    //     )
    //     .refine((file) => file[0]?.size <= 5000000, `Max file size is 5MB.`),
});
