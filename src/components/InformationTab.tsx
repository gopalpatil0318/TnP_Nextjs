"use client";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Tabs } from "@/components/ui/tab";

const InformationTab = ({ userData }: any) => {
  
   
  
    const tabs = [
        {
            title: "Personal",
            value: "Personal",
            content: (
                <div className="w-full  overflow-hidden relative h-max rounded-2xl p-5 md:p-10 text-lg md:text-2xl lg:text-4xl font-bold text-black bg-gradient-to-br from-gray-100 to-gray-200">
                    <p>Personal Information</p>
                    <div className="flex flex-col md:flex-row justify-evenly bg-slate-200 mt-2 md:mt-5 p-2 md:p-4 rounded-lg">
                        <div className="flex-1 mb-4 md:mb-0">
                            <Table className="min-w-full text-sm md:text-lg relative z-10">
                                <TableBody>
                                    <TableRow>
                                        <TableCell >Name:</TableCell>
                                        <TableCell className="font-semibold">
                                            {userData.firstName} {userData.middleName} {userData.lastName}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Email:</TableCell>
                                        <TableCell className="font-semibold">{userData.email}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Mobile Number:</TableCell>
                                        <TableCell className="font-semibold">{userData.mobileNumber}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >BirthDate:</TableCell>
                                        <TableCell className="font-semibold">{userData.birthDate}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Gender:</TableCell>
                                        <TableCell className="font-semibold">{userData.gender}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Aadhar Number:</TableCell>
                                        <TableCell className="font-semibold">{userData.adharNumber}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Cast:</TableCell>
                                        <TableCell className="font-semibold">{userData.cast}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Blood Group:</TableCell>
                                        <TableCell className="font-semibold">{userData.bloodGroup}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Father Name:</TableCell>
                                        <TableCell className="font-semibold">{userData.fatherName}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Father Mobile Number:</TableCell>
                                        <TableCell className="font-semibold">{userData.fatherMobileNumber}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Father Occupation:</TableCell>
                                        <TableCell className="font-semibold">{userData.fatherOccupation}</TableCell>
                                    </TableRow>


                                </TableBody>
                            </Table>

                        </div>
                        <div className="flex-1">
                            <Table className="min-w-full text-sm md:text-lg">
                                <TableBody>
                                    <TableRow>
                                        <TableCell >Mother Name:</TableCell>
                                        <TableCell className="font-semibold">{userData.motherName}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Mother Mobile Number:</TableCell>
                                        <TableCell className="font-semibold">{userData.motherMobileNumber}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Mother Occupation:</TableCell>
                                        <TableCell className="font-semibold">{userData.motherOccupation}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >City:</TableCell>
                                        <TableCell className="font-semibold">{userData.city}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >District:</TableCell>
                                        <TableCell className="font-semibold">{userData.district}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >State:</TableCell>
                                        <TableCell className="font-semibold">{userData.state}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Pincode:</TableCell>
                                        <TableCell className="font-semibold">{userData.pincode}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Local Address:</TableCell>
                                        <TableCell className="font-semibold">{userData.localAddress}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Academic",
            value: "Academic",
            content: (
                <div className="w-full  overflow-hidden relative h-max rounded-2xl p-5 md:p-10 text-lg md:text-2xl lg:text-4xl font-bold text-black bg-gradient-to-br from-gray-100 to-gray-200">
                    <p>Academic Information</p>
                    <div className="flex flex-col md:flex-row justify-evenly bg-slate-200 mt-2 md:mt-5 p-2 md:p-4 rounded-lg">
                        <div className="flex-1 mb-4 md:mb-0">
                            <Table className="min-w-full text-sm md:text-lg relative z-10">
                                <TableBody>
                                    <TableRow>
                                        <TableCell >PRN Number:</TableCell>
                                        <TableCell className="font-semibold">{userData.prnNumber}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Department:</TableCell>
                                        <TableCell className="font-semibold">{userData.department}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Division:</TableCell>
                                        <TableCell className="font-semibold">{userData.division}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Passout Year:</TableCell>
                                        <TableCell className="font-semibold">{userData.passoutYear}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >LG Name:</TableCell>
                                        <TableCell className="font-semibold">{userData.lgName}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >10th Percentage:</TableCell>
                                        <TableCell className="font-semibold">{userData.tenthMarks}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >12th/Diploma:</TableCell>
                                        <TableCell className="font-semibold">{userData.twelfthDiploma}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >{userData.twelfthDiploma} Percentage:</TableCell>
                                        <TableCell className="font-semibold">{userData.twelfthDiplomaPercentage}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Admission Based On:</TableCell>
                                        <TableCell className="font-semibold">{userData.admissionBasedOn}</TableCell>
                                    </TableRow>





                                </TableBody>
                            </Table>

                        </div>
                        <div className="flex-1">
                            <Table className="min-w-full text-sm md:text-lg relative z-10 ">
                                <TableHeader>
                                    <TableRow >
                                        <TableHead>Semester</TableHead>
                                        <TableHead>SGPA</TableHead>
                                        <TableHead>CGPA</TableHead>
                                        <TableHead>Backlog</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell >Semester 1:</TableCell>
                                        <TableCell className="font-semibold">{userData.sem1SGPA}</TableCell>
                                        <TableCell className="font-semibold">{userData.sem1CGPA}</TableCell>
                                        <TableCell className="font-semibold">{userData.sem1Backlog}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Semester 2:</TableCell>
                                        <TableCell className="font-semibold">{userData.sem2SGPA}</TableCell>
                                        <TableCell className="font-semibold">{userData.sem2CGPA}</TableCell>
                                        <TableCell className="font-semibold">{userData.sem2Backlog}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Semester 3:</TableCell>
                                        <TableCell className="font-semibold">{userData.sem3SGPA}</TableCell>
                                        <TableCell className="font-semibold">{userData.sem3CGPA}</TableCell>
                                        <TableCell className="font-semibold">{userData.sem3Backlog}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Semester 4:</TableCell>
                                        <TableCell className="font-semibold">{userData.sem4SGPA}</TableCell>
                                        <TableCell className="font-semibold">{userData.sem4CGPA}</TableCell>
                                        <TableCell className="font-semibold">{userData.sem4Backlog}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Semester 5:</TableCell>
                                        <TableCell className="font-semibold">{userData.sem5SGPA}</TableCell>
                                        <TableCell className="font-semibold">{userData.sem5CGPA}</TableCell>
                                        <TableCell className="font-semibold">{userData.sem5Backlog}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Semester 6:</TableCell>
                                        <TableCell className="font-semibold">{userData.sem6SGPA}</TableCell>
                                        <TableCell className="font-semibold">{userData.sem6CGPA}</TableCell>
                                        <TableCell className="font-semibold">{userData.sem6Backlog}</TableCell>
                                    </TableRow>
                                </TableBody>
                                <TableBody>
                                    <TableRow>
                                        <TableCell >Total CGPA:</TableCell>
                                        <TableCell className="font-semibold">{userData.overallCGPA}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Live KT&apos;s:</TableCell>
                                        <TableCell className="font-semibold">{userData.anyLiveKTs}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Any gap during education:</TableCell>
                                        <TableCell className="font-semibold ">{userData.anyGapDuringEducation}</TableCell>
                                    </TableRow>
                                </TableBody>

                            </Table>
                            <Table className="min-w-full text-sm md:text-lg relative z-10 ">

                                <TableFooter>
                                    {
                                        userData.anyGapDuringEducation === "Yes" ? (<TableRow>
                                            <TableCell >Education Gap Reason:</TableCell>
                                            <TableCell className="font-semibold">{userData.gapReason}</TableCell>
                                        </TableRow>) : (<></>)
                                    }
                                </TableFooter>
                            </Table>


                        </div>

                    </div>
                </div>
            ),
        },
       
    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-full mx-auto w-full items-start justify-start my-10">
            <Tabs
                tabs={tabs}  // Pass the tabs array here
                containerClassName="your-container-class"
                activeTabClassName="your-active-tab-class"
                tabClassName="your-tab-class"
                contentClassName="your-content-class"
            />
        </div>
    );
};


export default InformationTab;
