"use client";
import React, { useEffect, useState } from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { User } from 'next-auth';
import { cn } from "@/lib/utils";
import SideBar from "@/components/SideBar"
import { useSession } from 'next-auth/react';
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useUserContext } from "@/context/AppContext";

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








const Dashboard = () => {
    return (
        <div className="flex flex-1">
            <div className="p-2 md:p-3 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-black flex flex-col gap-3 flex-1 w-full h-full">
            <div className="flex gap-2">
          {[...new Array(4)].map((i) => (
            <div
              key={"first-array" + i}
              className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div>
        <div className="flex gap-2 flex-1">
          {[...new Array(2)].map((i) => (
            <div
              key={"second-array" + i}
              className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div>
            </div>
        </div>
    );
};





export default Page
