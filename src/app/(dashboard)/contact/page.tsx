"use client";
import React from "react";
import { Label } from "@/components/ui/label_aceternity";
import { Input } from "@/components/ui/input_aceternity";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea_aceternity";

import Footer from "@/components/dashboard/Footer";
import Header from "@/components/dashboard/Header";

const Contact = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className='min-h-screen bg-white relative'>
           
            <div className="mt-16 max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white mb-10">
                <h2 className="flex justify-center font-bold text-3xl text-[#244855]">
                    Contact
                </h2>

                <form className="my-8" onSubmit={handleSubmit}>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="firstname">Name</Label>
                        <Input id="firstname" placeholder="Gopal" type="text" />
                    </LabelInputContainer>

                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" placeholder="gopalpatilrcpit@gmail.com" type="email" />
                    </LabelInputContainer>

                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" placeholder="Enter your description here..." />
                    </LabelInputContainer>

                    <button
                        className="bg-[#E64833] hover:bg-[#d43d29] relative group/btn text-white w-full rounded-md h-10 font-medium"
                        type="submit"
                    >
                        Send Message &rarr;
                        <BottomGradient />
                    </button>

                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                </form>
            </div>
          
        </div>
    );
}

export default Contact;

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
