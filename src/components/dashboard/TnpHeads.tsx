"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Training and Placement Officer",
    description: (
      <div>
        <p><strong>Name:</strong> Mr. Milkesh P. Jain</p>
        <p><strong>Designation:</strong> Training and Placement Officer</p>
        <p><strong>Qualification:</strong> MBA (Marketing)</p>
        <p><strong>Area of Expertise:</strong> Corporate Relations and Placements</p>
        <p><strong>Experience:</strong> 12 Years</p>
        <p><strong>Email ID:</strong> tandp@rcpit.ac.in</p>
        <p><strong>Phone:</strong> 9403560548 / 9860107963</p>
      </div>
    ),
    image: "/tnpcoordinator/milkesh_jain.jpg",
  },
  {
    title: "T&P Co-ordinator (Computer)",
    description: (
      <div>
         <p><strong>Name:</strong> Mr. Mayur Jagdish Patil</p>
        <p><strong>Designation:</strong> Assistant Professor</p>
        <p><strong>Qualification:</strong> Ph.D (Pursuing), M.E.</p>
        <p><strong>Area of Expertise:</strong> Computer Network</p>
        <p><strong>Experience:</strong> 13 Years</p>
        <p><strong>Email ID:</strong> mayur.patil@rcpit.ac.in</p>
      </div>
    ),
    image: "/tnpcoordinator/mayurpatilsir.jpg",
  },
  {
    title: "T&P Co-ordinator (DS, AIML & AIDS)",
    description: (
      <div>
         <p><strong>Name:</strong> Mr. Krunal Prakash Rane</p>
        <p><strong>Designation:</strong> Assistant Professor</p>
        <p><strong>Qualification:</strong> M.E.</p>
        <p><strong>Area of Expertise:</strong> Communication Engineering</p>
        <p><strong>Experience:</strong> 14 Years</p>
        <p><strong>Email ID:</strong> krunal.rane@rcpit.ac.in</p>
      </div>
    ),
    image: "/tnpcoordinator/krunalsir.jpeg",
  },

  {
    title: "T&P Co-ordinator (Electrical)",
    description: (
      <div>
         <p><strong>Name:</strong> Mr. Vinitkumar Vasantbhai Patel</p>
        <p><strong>Designation:</strong> Assistant Professor</p>
        <p><strong>Qualification:</strong>  M.E., Ph.D Registered</p>
        <p><strong>Area of Expertise:</strong> Communication Engineering, Internet of Things, Electric Vehicle</p>
        <p><strong>Experience:</strong> 14 Years 4 Months</p>
        <p><strong>Email ID:</strong> vinit.patel@rcpit.ac.in</p>
      </div>
    ),
    image: "/tnpcoordinator/vinitsir.jpeg", 
  },
  {
    title: "T&P Co-ordinator (E&TC)",
    description: (
      <div>
         <p><strong>Name:</strong> Prof. Anupkumar Bhatulal Jayaswal</p>
        <p><strong>Designation:</strong> Assistant Professor</p>
        <p><strong>Qualification:</strong>  Pursuing PhD (Electronics Engineering), M.Tech (Electronics & Communication Engineering)</p>
        <p><strong>Area of Expertise:</strong> Image processing</p>
        <p><strong>Experience:</strong> 12.8 Years</p>
        <p><strong>Email ID:</strong> anupkumar.jayaswal@rcpit.ac.in</p>
      </div>
    ),
    image: "/tnpcoordinator/anupkumarsir.jpg", // Added image property
  },
 
  {
    title: "T&P Co-ordinator (Mechanical)",
    description: (
      <div>
         <p><strong>Name:</strong> Name: Dr. Pandit Subhash Patil</p>
        <p><strong>Designation:</strong> Assistant Professor</p>
        <p><strong>Qualification:</strong>  PhD, M.E. Machine Design</p>
        <p><strong>Area of Expertise:</strong> Solar Dryer, Tribology</p>
        <p><strong>Experience:</strong> Teaching 15 Years, Industry- 1year.</p>
        <p><strong>Email ID:</strong> pandit.patil@rcpit.ac.in</p>
      </div>
    ),
    image: "/tnpcoordinator/panditpatilsir.jpg", // Added image property
  },
 
];

const TnpHead = () => {
  return (
    <div className="p-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className="text-3xl leading-8 font-extrabold tracking-tight mb-10 text-black sm:text-4xl">
            About Placement Cell
          </p>
        </div>
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default TnpHead;