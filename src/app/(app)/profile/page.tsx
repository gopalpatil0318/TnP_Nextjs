"use client";
import React, { useState } from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { User } from 'next-auth';
import { cn } from "@/lib/utils";
import SideBar from "@/components/SideBar"
import { useSession } from 'next-auth/react';
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useUserContext } from "@/context/AppContext";

const page = () => {

    const { data: session } = useSession();
   


    return (
        <div
            className={cn(
                "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                "h-screen "
            )}
        >
            <SideBar />
            <Dashboard />
        </div>
    );
}






//     return (
//         <div className="flex flex-1">
//             <div className="p-2 md:p-3 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-black flex flex-col gap-3 flex-1 w-full h-full">
//                 <div className="flex gap-2">
//                     <div
//                         key={"first"}
//                         className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse flex items-center justify-center"
//                     >
//                         <h1 className="text-4xl font-normal text-neutral-600 dark:text-neutral-400">Profile</h1>
//                     </div>
//                 </div>

//                 <div className="flex flex-col md:flex-row gap-2 flex-1">
//                     {/* First child div with the student profile card */}
//                     <div
//                         key={"first"}
//                         className="h-full w-full md:w-1/2 rounded-lg bg-gray-300 dark:bg-neutral-800 animate-pulse p-4"
//                     >
//                         {/* Profile Card */}
//                         <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md relative overflow-hidden">
//                             {/* Background Image or Color */}
//                             <div className="mb-4 h-32 bg-blue-500 rounded-lg relative">
//                                 <img
//                                     src="https://assets.aceternity.com/manu.png" // Replace with the student's background image URL
//                                     alt="Profile Background"
//                                     className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-50"
//                                 />
//                             </div>

//                             {/* Profile Photo */}
//                             <div className="flex justify-center">
//                                 <img
//                                     src="https://assets.aceternity.com/manu.png" // Replace with the student's profile photo URL
//                                     alt="Profile"
//                                     className="h-24 w-24 rounded-full border-4 border-white shadow-lg z-10 relative -mt-16"
//                                 />
//                             </div>

//                             {/* Name and Summary */}
//                             <div className="text-center mt-6">
//                                 <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Name of Student</h2>
//                                 <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
//                                 <p className="text-gray-500 dark:text-gray-400 mt-2">
//                                     A brief summary about the student in one or two sentences. This should highlight their skills and experiences.
//                                 </p>
//                             </div>

//                             {/* Skills Section */}
//                             <div className="mt-4">
//                                 <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Skills:</h3>
//                                 <div className="flex flex-wrap gap-2 mt-2">
//                                     {['Java', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'Git', 'TypeScript'].map(skill => (
//                                         <span key={skill} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 text-sm">
//                                             {skill}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Share Profile Link Button */}
//                             <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//                                 Share Profile Link
//                             </button>
//                         </div>
//                     </div>

//                     {/* Second child div with three vertical divs */}
//                     <div
//                         key={"profile-card"}
//                         className="h-full w-full md:w-1/2 rounded-lg bg-gray-300 dark:bg-neutral-800 animate-pulse flex flex-col gap-2 p-4"
//                     >
//                         <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
//                             <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Profile Details:</h3>
//                             <ul className="list-disc list-inside mt-2">
//                                 <li>PRN Number: <span className="font-bold">123456</span></li>
//                                 <li>Roll Number: <span className="font-bold">789012</span></li>
//                                 <li>Branch: <span className="font-bold">Computer Engineering</span></li>
//                                 <li>Division: <span className="font-bold">A</span></li>
//                                 <li>CGPA: <span className="font-bold">8.5</span></li>
//                             </ul>
//                         </div>

//                         {/* Links Section */}
//                         <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 mt-2">
//                             <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Links:</h3>
//                             <div className="flex flex-col mt-2">
//                                 <a href="https://yourportfolio.com" className="text-blue-500 hover:underline">Portfolio</a>
//                                 <a href="https://github.com/yourusername" className="text-blue-500 hover:underline">GitHub</a>
//                                 <a href="https://linkedin.com/in/yourusername" className="text-blue-500 hover:underline">LinkedIn</a>
//                                 <a href="https://instagram.com/yourusername" className="text-blue-500 hover:underline">Instagram</a>
//                                 <a href="https://twitter.com/yourusername" className="text-blue-500 hover:underline">Twitter</a>
//                                 <a href="https://leetcode.com/yourusername" className="text-blue-500 hover:underline">LeetCode</a>
//                                 <a href="https://geeksforgeeks.org/yourusername" className="text-blue-500 hover:underline">GeeksforGeeks</a>
//                                 <a href="https://codechef.com/users/yourusername" className="text-blue-500 hover:underline">CodeChef</a>
//                                 <a href="https://hackerrank.com/yourusername" className="text-blue-500 hover:underline">HackerRank</a>
//                             </div>
//                         </div>

//                         {/* Personal Information Section */}
//                         <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 mt-2">
//                             <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Personal Information:</h3>
//                             <ul className="list-disc list-inside mt-2">
//                                 <li>Email: <span className="font-bold">your.email@example.com</span></li>
//                                 <li>Phone Number: <span className="font-bold">+1234567890</span></li>
//                                 <li>Resume: <a href="/path/to/resume.pdf" className="text-blue-500 hover:underline">Download PDF</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

const Dashboard = () => {
    const { userData, fetchUserData } = useUserContext();

    return (
        <div className="flex flex-1">
            <div className="p-2 md:p-3 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-black flex flex-col gap-3 flex-1 w-full h-full">
                <div className="flex gap-2">
                    <div
                        key={"first"}
                        className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse flex items-center justify-center"
                    >
                        <h1 className="text-4xl font-normal text-neutral-600 dark:text-neutral-400">Profile</h1>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-2 flex-1">
                    {/* First child div with the student profile card */}
                    <div
                        key={"first"}
                        className="h-full w-full md:w-1/2 rounded-lg bg-gray-300 dark:bg-neutral-800 animate-pulse p-4"
                    >
                        {/* Profile Card */}
                        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md relative overflow-hidden">
                            {/* Background Image or Color */}
                            <div className="mb-4 h-32 bg-blue-500 rounded-lg relative">
                                <img
                                    src="https://assets.aceternity.com/manu.png"
                                    alt="Profile Background"
                                    className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-50"
                                />
                            </div>

                            {/* Profile Photo */}
                            <div className="flex justify-center">
                                <img
                                    src="https://assets.aceternity.com/manu.png" 
                                    alt="Profile"
                                    className="h-24 w-24 rounded-full border-4 border-white shadow-lg z-10 relative -mt-16"
                                />
                            </div>

                            <div className="text-center mt-6">
                                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{userData?.firstName} {userData?.middleName} {userData?.lastName}</h2>
                                <p className="text-gray-600 dark:text-gray-400">{userData?.areaOfInterest}</p>
                                <p className="text-gray-500 dark:text-gray-400 mt-2">
                                   {userData?.aboutYou}
                                </p>
                                <p className="text-gray-500 dark:text-gray-400 mt-2">
                                    Branch: <span className="font-bold">{userData?.department}</span>
                                </p>
                            </div>

                            {/* Skills Section */}
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Skills:</h3>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {['Java', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'Git', 'TypeScript'].map(skill => (
                                        <span key={skill} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Share Profile Link Button */}
                            <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                Share Profile Link
                            </button>
                        </div>
                    </div>

                    {/* Second child div with Personal Information and Links */}
                    <div
                        key={"profile-card"}
                        className="h-full w-full md:w-1/2 rounded-lg bg-gray-300 dark:bg-neutral-800 animate-pulse flex flex-col gap-2 p-4"
                    >
                        {/* Personal Information Section */}
                        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Personal Information:</h3>
                            <ul className="list-disc list-inside mt-2">
                                <li>Email: <span className="font-bold">{userData?.email}</span></li>
                                <li>Phone Number: <span className="font-bold">{userData?.mobileNumber}</span></li>
                                <li>Resume: <a href="/path/to/resume.pdf" className="text-blue-500 hover:underline">Download PDF</a></li>
                            </ul>
                        </div>

                        {/* Links Section */}
                        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 mt-2">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Links:</h3>
                            <div className="flex flex-col mt-2">
                                <a href={userData?.personalPortfolioLink} className="text-blue-500 hover:underline">Portfolio</a>
                                <a href={userData?.githubLink} className="text-blue-500 hover:underline">GitHub</a>
                                <a href={userData?.linkedinLink} className="text-blue-500 hover:underline">LinkedIn</a>
                                <a href={userData?.instagramLink} className="text-blue-500 hover:underline">Instagram</a>
                                <a href={userData?.twitterLink} className="text-blue-500 hover:underline">Twitter</a>
                                <a href={userData?.leetcodeLink} className="text-blue-500 hover:underline">LeetCode</a>
                                <a href={userData?.geeksForGeeksLink} className="text-blue-500 hover:underline">GeeksforGeeks</a>
                                <a href={userData?.codechefLink} className="text-blue-500 hover:underline">CodeChef</a>
                                <a href={userData?.hackerRankLink} className="text-blue-500 hover:underline">HackerRank</a>
                            </div>
                        </div>

                        {/* Projects Section */}
                        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 mt-2">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Projects:</h3>
                            <div className="flex flex-col gap-2 mt-2">
                                {/* Project 1 */}
                                <div className="flex justify-between items-center p-2 border border-gray-200 rounded">
                                    <span>Project Name 1</span>
                                    <div>
                                        <a href="https://github.com/yourusername/project1" className="text-blue-500 hover:underline">GitHub</a>
                                        <span className="mx-2">|</span>
                                        <a href="https://liveproject1.com" className="text-blue-500 hover:underline">Live Link</a>
                                    </div>
                                </div>
                                {/* Project 2 */}
                                <div className="flex justify-between items-center p-2 border border-gray-200 rounded">
                                    <span>Project Name 2</span>
                                    <div>
                                        <a href="https://github.com/yourusername/project2" className="text-blue-500 hover:underline">GitHub</a>
                                        <span className="mx-2">|</span>
                                        <a href="https://liveproject2.com" className="text-blue-500 hover:underline">Live Link</a>
                                    </div>
                                </div>
                                {/* Project 3 */}
                                <div className="flex justify-between items-center p-2 border border-gray-200 rounded">
                                    <span>Project Name 3</span>
                                    <div>
                                        <a href="https://github.com/yourusername/project3" className="text-blue-500 hover:underline">GitHub</a>
                                        <span className="mx-2">|</span>
                                        <a href="https://liveproject3.com" className="text-blue-500 hover:underline">Live Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};





export default page
