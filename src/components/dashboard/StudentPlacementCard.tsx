import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Student {
  name: string;
  course: string;
  company: string;
  package: string;
  city: string;
  studentImage: string;
  companyLogo: string;
  backgroundColor: string; 
}

interface StudentPlacementCardProps {
  student: Student;
}

const StudentPlacementCard: React.FC<StudentPlacementCardProps> = ({ student }) => {
  return (
    <Card className="w-64 bg-white shadow-lg mt-20 rounded-lg relative">
     
    
      <div className="h-24" style={{ backgroundColor: student.backgroundColor }} /> 
     
     
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src={student.studentImage}  
          alt={student.name}
          width={120}
          height={120}
          className="rounded-lg border-4 border-white"  
        />
      </div>
      <CardContent className="pt-2 pb-4 px-4">
        <h2 className="text-xl font-bold text-center mt-2 mb-1">{student.name}</h2>
        <p className="text-sm text-gray-600 text-center mb-3">{student.course}</p>

       
        <div className="flex flex-col items-center mb-4">
          <p className="text-sm text-center mb-2">Placed in</p>
          
          {/* Company logo */}
          <Image
            src={student.companyLogo} 
            alt={`${student.company} Logo`}
            width={80}  
            height={80}
            className="mb-2"
          />
          
          {/* Company name */}
          <span className="text-sm font-semibold text-center">{student.company}</span>
        </div>
        
        <p className="text-sm text-center mb-2">
          <span className="font-semibold">Package:</span> {student.package}
        </p>
        <p className="text-sm text-center">
          <span className="font-semibold">City:</span> {student.city}
        </p>
      </CardContent>
    </Card>
  )
}

export default StudentPlacementCard