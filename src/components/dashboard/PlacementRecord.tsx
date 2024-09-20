import React from 'react'
import StudentPlacementCard from './StudentPlacementCard'

interface Student {
  name: string;
  course: string;
  company: string;
  package: string;
  city: string;
  studentImage: string;
  companyLogo: string;
  backgroundColor:string;
}

const PlacementRecord: React.FC = () => {
    const students = [
        {
          name: 'Jane Smith',
          course: 'Information Technology',
          company: 'Innovate Solutions',
          package: '$75,000/year',
          city: 'New York, NY',
          studentImage: '/demophotos/gopal.jpeg', 
          companyLogo: '/company_photos/company115.png',
          backgroundColor: "#20B2AA", 
        },
        {
          name: 'John Doe',
          course: 'Computer Science',
          company: 'Tech Corp',
          package: '$80,000/year',
          city: 'San Francisco, CA',
          studentImage: '/demophotos/gopal.jpeg',
          companyLogo: '/company_photos/company101.png',
          backgroundColor: "#FAFAD2", 
        },
        {
          name: 'Alice Johnson',
          course: 'Software Engineering',
          company: 'DevWorks',
          package: '$85,000/year',
          city: 'Los Angeles, CA',
          studentImage: '/demophotos/gopal.jpeg',
          companyLogo: '/company_photos/company102.jpg',
          backgroundColor: "#F0F8FF", // Light Pink background
        },
        {
          name: 'Alice Johnson',
          course: 'Software Engineering',
          company: 'DevWorks',
          package: '$85,000/year',
          city: 'Los Angeles, CA',
          studentImage: '/demophotos/gopal.jpeg',
          companyLogo: '/company_photos/company102.jpg',
          backgroundColor: "#FFB6C1", // Light Pink background
        },
        {
          name: 'Alice Johnson',
          course: 'Software Engineering',
          company: 'DevWorks',
          package: '$85,000/year',
          city: 'Los Angeles, CA',
          studentImage: '/demophotos/gopal.jpeg',
          companyLogo: '/company_photos/company102.jpg',
          backgroundColor: "#FAFAD2", // Light Pink background
        },
        {
          name: 'Alice Johnson',
          course: 'Software Engineering',
          company: 'DevWorks',
          package: '$85,000/year',
          city: 'Los Angeles, CA',
          studentImage: '/demophotos/gopal.jpeg',
          companyLogo: '/company_photos/company102.jpg',
          backgroundColor: "#FFDAB9", // Light Pink background
        },
        {
          name: 'Alice Johnson',
          course: 'Software Engineering',
          company: 'DevWorks',
          package: '$85,000/year',
          city: 'Los Angeles, CA',
          studentImage: '/demophotos/gopal.jpeg',
          companyLogo: '/company_photos/company102.jpg',
          backgroundColor: "#F5F5DC", // Light Pink background
        },
        {
          name: 'Alice Johnson',
          course: 'Software Engineering',
          company: 'DevWorks',
          package: '$85,000/year',
          city: 'Los Angeles, CA',
          studentImage: '/demophotos/gopal.jpeg',
          companyLogo: '/company_photos/company102.jpg',
          backgroundColor: "#FFA07A", // Light Pink background
        },
      ];
      
  
  return (
    <div className="w-full flex flex-col bg-white items-center overflow-hidden md:py-0 mb-10">
      <div className="mb-8 mt-5">
      <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with thousands of features
        </h4>
 
        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4">
        {students.map((student, index) => (
          <StudentPlacementCard key={index} student={student} />
        ))}
      </div>
    </div>
  )
}

export default PlacementRecord
