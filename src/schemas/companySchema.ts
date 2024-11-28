import {z} from "zod";

export const companySchema = z.object({
    name: z.string().min(1, { message: "Company name is required" }),
    description: z.string().optional(),
    salary: z.number().min(0, { message: "Salary must be a positive number" }),
    bond: z.string().optional(),
    location: z.string().min(1, { message: "Location is required" }),
    criteria: z.object({
        cgpa: z.number().min(0, { message: "CGPA must be at least 0" }).max(10, { message: "CGPA cannot exceed 10" }),
        gender: z.array(z.enum(["Male", "Female", "Other"])).optional(),
        passoutYear: z.number().min(1900, { message: "Passout year is invalid" }).max(new Date().getFullYear()),
        liveKT: z.number().min(0, { message: "Live KT must be at least 0" }),
        educationGap: z.string().optional(),
        department: z.array(z.string()).optional(),
        tenthPercentage: z.number().min(0).max(100).optional(),
        twelfthPercentage: z.number().min(0).max(100).optional(),
        diplomaPercentage: z.number().min(0).max(100).optional(),
        skills: z.array(z.string()).optional(),
    }),
    rounds: z.array(
        z.object({
            roundNumber: z.number().min(1, { message: "Round number must be at least 1" }),
            roundName: z.string().min(1, { message: "Round name is required" }),
        })
    ).optional(),
});
