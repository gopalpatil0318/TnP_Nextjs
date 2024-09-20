import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import { Cover } from "@/components/ui/cover";
import Image from "next/image"; // Import the Next.js Image component

const HeroSection = () => {
  const images = [
    "/bg1.jpg",
    
    "/bg3.jpeg",
  ];

  return (
    <ImagesSlider
      className="h-auto md:h-[40rem] w-full  flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
      images={images}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        {/* Add the logos before the text */}
        <motion.p className="font-bold text-xs md:text-5xl text-center text-white py-4 flex items-center gap-4 flex-col">
          <div className="flex items-center">
            <Image
              src="/rcpitlogo.png"
              alt="RCPIT Logo"
              width={150}  // Increased the width
              height={150} // Increased the height
              className="w-20 h-20 md:w-24 md:h-24" // Increased responsive sizes
            />
          </div>
          {/* Updated text in white */}
          <span className="text-sm md:text-2xl block">
            Shirpur Education Society's
          </span>
          <span className="text-2xl md:text-4xl block font-semibold ">
            R. C. Patel Institute of Technology, Shirpur
          </span>
          <span className="text-xs md:text-xl block">
            An Autonomous Institute
          </span>
          <span className="text-base md:text-4xl block text-white font-semibold">
             <Cover>Training and Placement Department</Cover>
          </span>
        </motion.p>

        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Explore →</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
};

export default HeroSection;
