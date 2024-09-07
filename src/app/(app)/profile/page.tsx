"use client";
import { Tabs } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { User } from 'next-auth';
import { cn } from "@/lib/utils";
import SideBar from "@/components/SideBar"
import { useSession } from 'next-auth/react';
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useUserContext } from "@/context/AppContext";
import InformationTab from "@/components/InformationTab";
import { Divide } from "lucide-react";
import { FaGithub, FaLinkedin, FaRegAddressCard } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiHackerrank } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import { TiPhoneOutline } from "react-icons/ti";
import { BsPostcard } from "react-icons/bs";
import Image from 'next/image';



const Page = () => {

    const { data: session } = useSession();



    return (
        <div
            className={"rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden"
            }
        >
            <SideBar />
            <Dashboard />
        </div>
    );
}



const Dashboard = () => {
    const { userData, fetchUserData } = useUserContext();
  

    return (
        <div className="flex flex-1">
            <div className="p-2 md:p-3 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-black flex flex-col gap-3 flex-1 w-full h-full">
                <div className="flex gap-2">
                    <div
                        key={"first"}
                        className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center"
                    >
                        <h1 className="text-4xl font-normal text-neutral-600 dark:text-neutral-400">Profile</h1>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-2 flex-1">

                    <div
                        key={"first"}
                        className="bg-gray-200 shadow-md h-full w-full md:w-[30%] rounded-lg dark:bg-neutral-800 p-4 pt-[150px]">

                        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">

                            <div className="flex justify-center">
                                <div className="relative w-72 h-72 -mt-[150px]">
                                    <Image
                                        src={userData?.image || "/image.png"}
                                        alt="Profile"
                                        className="rounded-2xl border-4 border-white shadow-lg"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        priority={true}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust sizes based on your layout
                                    />



                                </div>
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



                        </div>
                    </div>


                    <div
                        key={"profile-card"}
                        className="h-full w-full md:w-[70%] rounded-lg bg-gray-200 dark:bg-neutral-800 flex flex-col gap-2 p-4"
                    >
                        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-4">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Personal Information:</h3>
                            <ul className="list-none mt-2 space-y-2">
                                <li className="flex items-center">
                                    <MdOutlineMail className="text-blue-500 mr-2" />
                                    <span className="font-bold">Email:</span> <span>{userData?.email}</span>
                                </li>
                                <li className="flex items-center">
                                    <TiPhoneOutline className="text-green-500 mr-2" />
                                    <span className="font-bold">Phone Number:</span> <span>{userData?.mobileNumber}</span>
                                </li>
                                <li className="flex items-center">
                                    <BsPostcard className="text-red-500 mr-2" />
                                    <span className="font-bold">Resume:</span>
                                    <a href="/path/to/resume.pdf" className="inline-block px-4 py-2 text-gray-800 bg-gray-200 rounded hover:bg-gray-300 mt-1">Download PDF</a>
                                </li>
                            </ul>
                        </div>


                        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-4 mt-2">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Links:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                                {userData?.personalPortfolioLink ? (
                                    <a href={userData.personalPortfolioLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-800 bg-gray-200 rounded p-2 hover:bg-gray-300">
                                        <FaRegAddressCard className="mr-2 text-blue-600" /> Portfolio
                                    </a>
                                ) : (
                                    <div className="flex items-center justify-center text-gray-800 bg-gray-200 rounded p-2">
                                        <FaRegAddressCard className="mr-2 text-gray-400" /> Portfolio
                                    </div>
                                )}
                                {userData?.githubLink ? (
                                    <a href={userData.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-800 bg-gray-200 rounded p-2 hover:bg-gray-300">
                                        <FaGithub className="mr-2 text-black" /> GitHub
                                    </a>
                                ) : (
                                    <div className="flex items-center justify-center text-gray-800 bg-gray-200 rounded p-2">
                                        <FaGithub className="mr-2 text-gray-400" /> GitHub
                                    </div>
                                )}
                                {userData?.linkedinLink ? (
                                    <a href={userData.linkedinLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-800 bg-gray-200 rounded p-2 hover:bg-gray-300">
                                        <FaLinkedin className="mr-2 text-blue-700" /> LinkedIn
                                    </a>
                                ) : (
                                    <div className="flex items-center justify-center text-gray-800 bg-gray-200 rounded p-2">
                                        <FaLinkedin className="mr-2 text-gray-400" /> LinkedIn
                                    </div>
                                )}
                                {userData?.instagramLink ? (
                                    <a href={userData.instagramLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-800 bg-gray-200 rounded p-2 hover:bg-gray-300">
                                        <FaSquareInstagram className="mr-2 text-pink-500" /> Instagram
                                    </a>
                                ) : (
                                    <div className="flex items-center justify-center text-gray-800 bg-gray-200 rounded p-2">
                                        <FaSquareInstagram className="mr-2 text-gray-400" /> Instagram
                                    </div>
                                )}
                                {userData?.twitterLink ? (
                                    <a href={userData.twitterLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-800 bg-gray-200 rounded p-2 hover:bg-gray-300">
                                        <FaXTwitter className="mr-2 text-blue-500" /> Twitter
                                    </a>
                                ) : (
                                    <div className="flex items-center justify-center text-gray-800 bg-gray-200 rounded p-2">
                                        <FaXTwitter className="mr-2 text-gray-400" /> Twitter
                                    </div>
                                )}
                                {userData?.leetcodeLink ? (
                                    <a href={userData.leetcodeLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-800 bg-gray-200 rounded p-2 hover:bg-gray-300">
                                        <SiLeetcode className="mr-2 text-yellow-500" /> LeetCode
                                    </a>
                                ) : (
                                    <div className="flex items-center justify-center text-gray-800 bg-gray-200 rounded p-2">
                                        <SiLeetcode className="mr-2 text-gray-400" /> LeetCode
                                    </div>
                                )}
                                {userData?.hackerRankLink ? (
                                    <a href={userData.hackerRankLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-800 bg-gray-200 rounded p-2 hover:bg-gray-300">
                                        <SiHackerrank className="mr-2 text-green-500" /> HackerRank
                                    </a>
                                ) : (
                                    <div className="flex items-center justify-center text-gray-800 bg-gray-200 rounded p-2">
                                        <SiHackerrank className="mr-2 text-gray-400" /> HackerRank
                                    </div>
                                )}
                                {userData?.codechefLink ? (
                                    <a href={userData.codechefLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-800 bg-gray-200 rounded p-2 hover:bg-gray-300">
                                        <SiCodechef className="mr-2 text-purple-600" /> CodeChef
                                    </a>
                                ) : (
                                    <div className="flex items-center justify-center text-gray-800 bg-gray-200 rounded p-2">
                                        <SiCodechef className="mr-2 text-gray-400" /> CodeChef
                                    </div>
                                )}
                                {userData?.geeksForGeeksLink ? (
                                    <a href={userData.geeksForGeeksLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-800 bg-gray-200 rounded p-2 hover:bg-gray-300">
                                        <SiGeeksforgeeks className="mr-2 text-green-500" /> GeeksforGeeks
                                    </a>
                                ) : (
                                    <div className="flex items-center justify-center text-gray-800 bg-gray-200 rounded p-2">
                                        <SiGeeksforgeeks className="mr-2 text-gray-400" /> GeeksforGeeks
                                    </div>
                                )}
                            </div>
                        </div>



                        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-4 mt-2">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Projects:</h3>
                            <div className="flex flex-wrap md:flex-nowrap gap-4 mt-4">
                                {/* Project 1 */}
                                <div className="w-full md:w-1/2 flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800">
                                    <div className="w-full h-40 relative">
                                        <Image
                                            src="https://corporate-assets.lucid.co/chart/09255df0-f147-42b4-805e-163ad3001feb.png?v=1707845547429"
                                            alt="Project 1"
                                            className="rounded-md"
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust this based on your layout
                                            priority={false}
                                        />


                                    </div>
                                    <div className="w-full flex flex-col items-start mt-4">
                                        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{userData?.projectTitle1}</h4>
                                        <p className="text-gray-600 dark:text-gray-400 mt-2">{userData?.projectDescription1}</p>
                                        <div className="mt-4 w-full">
                                            <a href={userData?.projectLink1} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 text-gray-800 bg-gray-200 rounded hover:bg-gray-300">Explore</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Project 2 */}
                                <div className="w-full md:w-1/2 flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800">
                                    <div className="w-full h-40 relative">
                                        <Image
                                            src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg"
                                            alt="Project 2"
                                            className="rounded-md"
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            priority={false}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />

                                    </div>
                                    <div className="w-full flex flex-col items-start mt-4">
                                        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{userData?.projectTitle2}</h4>
                                        <p className="text-gray-600 dark:text-gray-400 mt-2">{userData?.projectDescription2}</p>
                                        <div className="mt-4 w-full">
                                            <a href={userData?.projectLink2} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 text-gray-800 bg-gray-200 rounded hover:bg-gray-300">Explore</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>








                    </div>
                </div>


                <div className="flex gap-2 mb-20">
                    {userData ? (<InformationTab userData={userData} />) : (<div>Loading</div>)}
                </div>





            </div>
        </div>
    );
};





export default Page
