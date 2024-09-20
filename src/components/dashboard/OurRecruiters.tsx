import React from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'
import { testimonials } from '@/data/dashboard'

const OurRecruiters = () => {
  return (
    <div className="h-auto w-full flex flex-col justify-center bg-gray-100 items-center overflow-hidden  md:py-0">
      {/* Title Section */}
      <div className="text-center mb-8 mt-5">
        <p className="text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
          Our Recruiters
        </p>
      </div>

   
      <div className="w-full px-20">
      <InfiniteMovingCards
        items={images1}
        direction="right"
        speed="normal"
      />
      </div>

     
      <div className="w-full px-20">
      <InfiniteMovingCards
        items={images2}
        direction="left"
        speed="normal"
      />
      </div>

      <div className="w-full px-20">
      <InfiniteMovingCards
        items={images3}
        direction="right"
        speed="normal"
      />
      </div>
    </div>
  )
}

const images1 = [
  { src: "/company_photos/company101.png" },
  { src: "/company_photos/company102.jpg" },
  { src: "/company_photos/company103.png" },
  { src: "/company_photos/company104.jpeg" },
  { src: "/company_photos/company105.png" },
  { src: "/company_photos/company106.png" },
  { src: "/company_photos/company107.jpeg" },
];


const images2 = [
  { src: "/company_photos/company108.jpg" },
  { src: "/company_photos/company109.png" },
  { src: "/company_photos/company110.jpeg" },
  { src: "/company_photos/company111.png" },
  { src: "/company_photos/company112.png" },
  { src: "/company_photos/company113.jpeg" },
  { src: "/company_photos/company114.png" },
 
];

const images3 = [
 
  { src: "/company_photos/company115.png" },
  { src: "/company_photos/company116.png" },
  { src: "/company_photos/company117.png" },
  { src: "/company_photos/company118.jpeg" },
  { src: "/company_photos/company120.jpeg" },
  { src: "/company_photos/company121.jpeg" },
  { src: "/company_photos/company122.png" },
  { src: "/company_photos/company119.jpeg" },
 
];
export default OurRecruiters
