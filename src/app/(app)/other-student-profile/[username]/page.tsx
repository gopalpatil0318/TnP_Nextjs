"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from 'next/navigation'
import { useSession } from "next-auth/react";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileCard from "@/components/ProfileCard";
import PersonalInfo from "@/components/PersonalInfo";
import LinksSection from "@/components/LinksSection";
import axios from "axios";
import SideBar from "@/components/SideBar";
import PersonalProject from "@/components/PersonalProject";

const StudentProfilePage = () => {
    const { data: session } = useSession();
    const [studentData, setStudentData] = useState(null);
    const router = useRouter();
    const params = useParams<{ username: string }>()

    useEffect(() => {
        if (params?.username) {  
            const fetchStudentData = async () => {
                try {
                    const response = await axios.post(`/api/unique-student-data`, {
                        username: params.username,
                    });

                    console.log("response.data: ",response.data.data)
                    setStudentData(response.data.data); 
                } catch (error) {
                    console.error("Failed to fetch student data:", error);
                }
            };
            fetchStudentData();
        }
    }, [params.username]); 

    // if (!studentData) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div
        className={"rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden"
        }
    >
        <SideBar />

        <div className="rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden">
            <div className="flex flex-1">
                <div className="p-2 md:p-3 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-black flex flex-col gap-3 flex-1 w-full h-full">
                    
                   
                    <ProfileHeader />

                    <div className="flex flex-col md:flex-row gap-2 flex-1">
                   
                        <ProfileCard studentData={studentData} />

                        {/* Personal Information and Links */}
                        <div className="h-full w-full md:w-[70%] rounded-lg bg-gray-200 dark:bg-neutral-800 flex flex-col gap-2 p-4">
                            <PersonalInfo studentData={studentData} />
                            <LinksSection studentData={studentData} />
                            <PersonalProject studentData={studentData}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default StudentProfilePage;
