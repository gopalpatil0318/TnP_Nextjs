"use client";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import SideBar from "@/components/SideBar"
import { useSession } from 'next-auth/react';

import { useUserContext } from "@/context/AppContext";
import HeroSection from "@/components/dashboard/HeroSection";
import PlacementRecord from "@/components/dashboard/PlacementRecord";
import OurRecruiters from "@/components/dashboard/OurRecruiters";
import TnpHead from "@/components/dashboard/TnpHeads";
import Footer from "@/components/dashboard/Footer";
import StatCard from '@/components/dashboard/StatCard';


const Dashboard = () => {
    return (
        <div className="flex-col w-full h-full rounded-tl-xl ">
        <HeroSection />
        <StatCard />
        <PlacementRecord/>
        <OurRecruiters/>
        <TnpHead />
        <Footer />
        </div>
        
        // <div className="flex flex-1">
        //     <div className="flex flex-col rounded-tl-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-black  w-full h-full overflow-hidden ">
        //         <HeroSection />
        //         <StatCard />
        //         <PlacementRecord/>
        //         <OurRecruiters/>
        //         <TnpHead />
        //         <Footer />
        //     </div>
        // </div>
    );
};


const Page = () => {

    const { data: session } = useSession();
    const { userData, fetchUserData } = useUserContext();



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













export default Page
