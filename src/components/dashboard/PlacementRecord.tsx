import React from 'react'
import StudentPlacementCard from './StudentPlacementCard'
import { placedStudent } from '@/data/dashboard';

interface Student {
  name: string;
  course: string;
  company: string;
  package: string;
  position: string;
  studentImage: string;
  companyLogo: string;
  backgroundColor:string;
}

const PlacementRecord: React.FC = () => {
   
      
  
  return (
    <div className="w-full flex flex-col bg-white items-center overflow-hidden md:py-0 mb-10">
      <div className="mb-8 mt-5">
      <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          RCPIT ShanShine
        </h4>
 
        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4">
        {placedStudent.map((student, index) => (
          <StudentPlacementCard key={index} student={student} />
        ))}
      </div>
    </div>
  )
}

export default PlacementRecord
