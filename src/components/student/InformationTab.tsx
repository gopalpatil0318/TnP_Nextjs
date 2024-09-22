"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"

interface UserData {
  firstName: string
  middleName: string
  lastName: string
  email: string
  mobileNumber: string
  birthDate: string | Date
  gender: string
  adharNumber: string
  cast: string
  bloodGroup: string
  fatherName: string
  fatherMobileNumber: string
  fatherOccupation: string
  motherName: string
  motherMobileNumber: string
  motherOccupation: string
  city: string
  district: string
  state: string
  pincode: string
  localAddress: string
  prnNumber: string
  department: string
  division: string
  passoutYear: number
  lgName: string
  tenthMarks: string
  twelfthDiploma: string
  twelfthDiplomaPercentage: string
  admissionBasedOn: string
  sem1SGPA: number
  sem1CGPA: number
  sem1Backlog: number
  sem2SGPA: number
  sem2CGPA: number
  sem2Backlog: number
  sem3SGPA: number
  sem3CGPA: number
  sem3Backlog: number
  sem4SGPA: number
  sem4CGPA: number
  sem4Backlog: number
  sem5SGPA: number
  sem5CGPA: number
  sem5Backlog: number
  sem6SGPA: number
  sem6CGPA: number
  sem6Backlog: number
  overallCGPA: number
  anyLiveKTs: number
  anyGapDuringEducation: string
  gapReason?: string
}

export default function InformationTab({ userData }: { userData: UserData }) {
  const [activeTab, setActiveTab] = useState("personal")

  if (!userData) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">Student Information</CardTitle>
        <CardDescription className="text-center">View personal and academic details</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="personal">Personal Information</TabsTrigger>
            <TabsTrigger value="academic">Academic Information</TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <ScrollArea className="h-[600px] w-full rounded-md border p-4">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHead className="font-medium">Full Name</TableHead>
                    <TableCell>{`${userData.firstName} ${userData.middleName} ${userData.lastName}`}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Email</TableHead>
                    <TableCell>{userData.email}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Mobile Number</TableHead>
                    <TableCell>{userData.mobileNumber}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Birth Date</TableHead>
                    <TableCell>{new Date(userData.birthDate).toLocaleDateString()}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Gender</TableHead>
                    <TableCell>{userData.gender}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Aadhar Number</TableHead>
                    <TableCell>{userData.adharNumber}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Cast</TableHead>
                    <TableCell>{userData.cast}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Blood Group</TableHead>
                    <TableCell>{userData.bloodGroup}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Father's Name</TableHead>
                    <TableCell>{userData.fatherName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Father's Mobile</TableHead>
                    <TableCell>{userData.fatherMobileNumber}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Father's Occupation</TableHead>
                    <TableCell>{userData.fatherOccupation}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Mother's Name</TableHead>
                    <TableCell>{userData.motherName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Mother's Mobile</TableHead>
                    <TableCell>{userData.motherMobileNumber}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Mother's Occupation</TableHead>
                    <TableCell>{userData.motherOccupation}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">City</TableHead>
                    <TableCell>{userData.city}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">District</TableHead>
                    <TableCell>{userData.district}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">State</TableHead>
                    <TableCell>{userData.state}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Pincode</TableHead>
                    <TableCell>{userData.pincode}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Local Address</TableHead>
                    <TableCell>{userData.localAddress}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="academic">
            <ScrollArea className="h-[600px] w-full rounded-md border p-4">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHead className="font-medium">PRN Number</TableHead>
                    <TableCell>{userData.prnNumber}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Department</TableHead>
                    <TableCell>{userData.department}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Division</TableHead>
                    <TableCell>{userData.division}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Passout Year</TableHead>
                    <TableCell>{userData.passoutYear}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">LG Name</TableHead>
                    <TableCell>{userData.lgName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">10th Percentage</TableHead>
                    <TableCell>{userData.tenthMarks}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">12th/Diploma</TableHead>
                    <TableCell>{userData.twelfthDiploma}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">{userData.twelfthDiploma} Percentage</TableHead>
                    <TableCell>{userData.twelfthDiplomaPercentage}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Admission Based On</TableHead>
                    <TableCell>{userData.admissionBasedOn}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Table className="mt-4">
                <TableHeader>
                  <TableRow>
                    <TableHead>Semester</TableHead>
                    <TableHead>SGPA</TableHead>
                    <TableHead>CGPA</TableHead>
                    <TableHead>Backlog</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Semester 1</TableCell>
                    <TableCell>{userData.sem1SGPA ?? 'N/A'}</TableCell>
                    <TableCell>{userData.sem1CGPA ?? 'N/A'}</TableCell>
                    <TableCell>{userData.sem1Backlog ?? 'N/A'}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Semester 2</TableCell>
                    <TableCell>{userData.sem2SGPA ?? 'N/A'}</TableCell>
                    <TableCell>{userData.sem2CGPA ?? 'N/A'}</TableCell>
                    <TableCell>{userData.sem2Backlog ?? 'N/A'}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Semester 3</TableCell>
                    <TableCell>{userData.sem3SGPA ?? 'N/A'}</TableCell>
                    <TableCell>{userData.sem3CGPA ?? 'N/A'}</TableCell>
                    <TableCell>{userData.sem3Backlog ?? 'N/A'}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Semester 4</TableCell>
                    <TableCell>{userData.sem4SGPA ?? 'N/A'}</TableCell>
                    <TableCell>{userData.sem4CGPA ?? 'N/A'}</TableCell>
                    <TableCell>{userData.sem4Backlog ?? 'N/A'}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Semester 5</TableCell>
                    <TableCell>{userData.sem5SGPA ?? 'N/A'}</TableCell>
                    <TableCell>{userData.sem5CGPA ?? 'N/A'}</TableCell>
                    <TableCell>{userData.sem5Backlog ?? 'N/A'}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Semester 6</TableCell>
                    <TableCell>{userData.sem6SGPA ?? 'N/A'}</TableCell>
                    <TableCell>{userData.sem6CGPA ?? 'N/A'}</TableCell>
                    <TableCell>{userData.sem6Backlog ?? 'N/A'}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Table className="mt-4">
                <TableBody>
                  <TableRow>
                    <TableHead className="font-medium">Overall CGPA</TableHead>
                    <TableCell>{userData.overallCGPA}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Live KT's</TableHead>
                    <TableCell>{userData.anyLiveKTs}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Any gap during education</TableHead>
                    <TableCell>{userData.anyGapDuringEducation}</TableCell>
                  </TableRow>
                  {userData.anyGapDuringEducation === "Yes" && (
                    <TableRow>
                      <TableHead className="font-medium">Gap Reason</TableHead>
                      <TableCell>{userData.gapReason}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}