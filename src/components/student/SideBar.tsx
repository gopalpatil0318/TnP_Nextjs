"use client";
import React, { useState } from "react";
import { useSession, signOut } from 'next-auth/react';
import { User } from "next-auth";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { useUserContext } from '@/context/AppContext';
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUserGraduate } from "react-icons/fa";


export default function SideBar() {
  const { data: session } = useSession();
  const user: User = session?.user as User;
  const profileName: string = user?.username || "Error";
  const { studentData, fetchstudentData } = useUserContext();

  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Students",
      href: "/all-students-profile",
      icon: (
        <FaUserGraduate className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "/profile",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Update-Profile",
      href: "/update-profile",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (

    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden fixed">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}

          </div>
          <div className="mt-[390px] flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md cursor-pointer" onClick={() => signOut()}>
            <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            <span className={`transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}>Logout</span>
          </div>

          <div>
          <SidebarLink
            link={{
              label: studentData?.firstName || "Loading..",
              href: "/profile",
              icon: (
                <Image
                  src={studentData?.image || "/image.png"}
                  className="h-7 w-7 flex-shrink-0 rounded-full"
                  width={50}
                  height={50}
                  alt="Avatar"
                />
              ),
            }}
          />
        </div>
        
        </div>
       
      </SidebarBody>
    </Sidebar>


  );
}
export const Logo = () => {
  return (
    <Link
      href="/dashboard"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
        <Image
        src="/rcpitlogo.png"
        className="h-7 w-7 flex-shrink-0 rounded-full"
        width={50}
        height={50}
        alt="Avatar"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-bold text-black dark:text-white whitespace-pre"
      >
        RCPIT T&P
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image
        src="/rcpitlogo.png"
        className="h-7 w-7 flex-shrink-0 rounded-full"
        width={50}
        height={50}
        alt="Avatar"
      />
    </Link>
  );
};


