"use client"


import { useUserContext } from "@/context/AppContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaFileAlt } from 'react-icons/fa'
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiHackerrank } from 'react-icons/si'
import { Skeleton } from '@/components/ui/skeleton';
import InformationTab from '@/components/student/InformationTab';
import { FaLink } from "react-icons/fa6";

export default function UserProfile() {
    const { userData, loading } = useUserContext();

    if (loading) {
        return (
            <div className="container mx-auto p-4 mt-28 mb-10">
                <Card className="w-full max-w-4xl mx-auto">
                    <CardHeader className="relative pb-0">
                        <div className="absolute -top-24 left-1/2 transform -translate-x-1/2">
                            <Skeleton className="w-48 h-48 rounded-full" />
                        </div>
                    </CardHeader>
                    <CardContent className="pt-28">
                        <div className="text-center mb-6">
                            <Skeleton className="h-8 w-64 mx-auto mb-2" />
                            <Skeleton className="h-6 w-48 mx-auto mb-2" />
                            <Skeleton className="h-4 w-32 mx-auto" />
                        </div>
                        <div className="space-y-4">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-center space-x-4">
                        {[1, 2, 3, 4].map((i) => (
                            <Skeleton key={i} className="w-8 h-8 rounded-full" />
                        ))}
                    </CardFooter>
                </Card>
            </div>
        )
    }

    if (!userData) {
        return <p className="text-center text-2xl mt-10">No user data available</p>
    }


    return (
        <div className="container mx-auto p-4">
            <Card className="w-full max-w-6xl mx-auto bg-white mt-28 mb-10">
                <CardHeader className="relative pb-0">
                    <div className="absolute -top-24 left-1/2 transform -translate-x-1/2">
                        <Avatar className="w-48 h-48 border-4 border-white shadow-lg">
                            <AvatarImage src={userData.image || "/placeholder-avatar.png"} alt={`${userData.firstName} ${userData.lastName}`} />
                            <AvatarFallback className="text-4xl">{userData.firstName.charAt(0)}{userData.lastName.charAt(0)}</AvatarFallback>
                        </Avatar>
                    </div>
                </CardHeader>

                <CardContent className="pt-28">
                    <div className="text-center mb-10">
                        <CardTitle className="text-4xl font-bold text-[#244855] mb-2">{userData.firstName} {userData.middleName} {userData.lastName}</CardTitle>
                        <CardDescription className="text-2xl text-[#874F41] mb-2">{userData.areaOfInterest || "Area of Interest"}</CardDescription>
                        <p className="text-xl text-muted-foreground">{userData.department || "Department"}</p>
                    </div>
                    <CardFooter className="flex justify-center flex-wrap gap-4 mt-10">
                        {userData.githubLink && (
                            <Button variant="outline" size="icon" className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-[#244855]" asChild>
                                <a href={userData.githubLink} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="h-5 w-5 sm:h-6 sm:w-6 text-[#181717]" />
                                </a>
                            </Button>
                        )}
                        {userData.linkedinLink && (
                            <Button variant="outline" size="icon" className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-[#244855]" asChild>
                                <a href={userData.linkedinLink} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6 text-[#0A66C2]" />
                                </a>
                            </Button>
                        )}
                        {userData.instagramLink && (
                            <Button variant="outline" size="icon" className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-[#244855]" asChild>
                                <a href={userData.instagramLink} target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6 text-[#E4405F]" />
                                </a>
                            </Button>
                        )}
                        {userData.twitterLink && (
                            <Button variant="outline" size="icon" className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-[#244855]" asChild>
                                <a href={userData.twitterLink} target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className="h-5 w-5 sm:h-6 sm:w-6 text-[#1DA1F2]" />
                                </a>
                            </Button>
                        )}
                        {userData.leetcodeLink && (
                            <Button variant="outline" size="icon" className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-[#244855]" asChild>
                                <a href={userData.leetcodeLink} target="_blank" rel="noopener noreferrer">
                                    <SiLeetcode className="h-5 w-5 sm:h-6 sm:w-6 text-[#FFA116]" />
                                </a>
                            </Button>
                        )}
                        {userData.hackerRankLink && (
                            <Button variant="outline" size="icon" className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-[#244855]" asChild>
                                <a href={userData.hackerRankLink} target="_blank" rel="noopener noreferrer">
                                    <SiHackerrank className="h-5 w-5 sm:h-6 sm:w-6 text-[#00EA64]" />
                                </a>
                            </Button>
                        )}
                        {userData.codechefLink && (
                            <Button variant="outline" size="icon" className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-[#244855]" asChild>
                                <a href={userData.codechefLink} target="_blank" rel="noopener noreferrer">
                                    <SiCodechef className="h-5 w-5 sm:h-6 sm:w-6 text-[#5B4638]" />
                                </a>
                            </Button>
                        )}
                        {userData.geeksForGeeksLink && (
                            <Button variant="outline" size="icon" className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-[#244855]" asChild>
                                <a href={userData.geeksForGeeksLink} target="_blank" rel="noopener noreferrer">
                                    <SiGeeksforgeeks className="h-5 w-5 sm:h-6 sm:w-6 text-[#0F9D58]" />
                                </a>
                            </Button>
                        )}
                    </CardFooter>
                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-[#244855] to-transparent h-[1px] my-8 w-full" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-[#244855] mb-4">About Me</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">{userData.aboutYou || "No bio available."}</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-[#244855] mb-4">Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {userData.skills && userData.skills.length > 0 ? (
                                        userData.skills.map((skill: string) => (
                                            <Badge
                                                key={skill}
                                                variant="secondary"
                                                className="text-lg py-1 px-3 bg-[#244855] text-white hover:bg-[#90AEAD]"
                                            >
                                                {skill}
                                            </Badge>
                                        ))
                                    ) : (
                                        <p className="text-lg text-muted-foreground">No skills available.</p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-2xl font-semibold text-[#244855] mb-4">Contact</h3>
                                <div className="flex flex-wrap gap-4">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="flex items-center space-x-2 border-[#E64833] text-[#244855]"
                                    >
                                        <FaEnvelope className="h-5 w-5" />
                                        <span>{userData.email}</span>
                                    </Button>

                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="flex items-center space-x-2 border-[#E64833] text-[#244855]"
                                    >
                                        <FaPhone className="h-5 w-5" />
                                        <span>+91 {userData.mobileNumber}</span>
                                    </Button>
                                    
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="flex items-center space-x-2 border-[#E64833] text-[#244855]"
                                        asChild
                                    >
                                        <a href={userData.resumeLink} target="_blank" rel="noopener noreferrer">
                                            <FaFileAlt className="h-5 w-5" />
                                            <span>View Resume</span>
                                        </a>
                                    </Button>

                                 

                                    {userData.personalPortfolioLink && (
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="flex items-center space-x-2 border-[#E64833] text-[#244855]"
                                            asChild
                                        >
                                            <a href={userData.personalPortfolioLink} target="_blank" rel="noopener noreferrer">
                                                <FaLink className="h-5 w-5" />
                                                <span>View Portfolio</span>
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>

                        </div>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-[#244855] mb-4">Projects</h3>
                                <div className="space-y-6">
                                    <Card className="bg-[#90AEAD] dark:bg-gray-800/50 backdrop-blur-sm">
                                        <CardHeader>
                                            <CardTitle className="text-xl text-[#244855]">{userData.projectTitle1}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-[#244855]">{userData.projectDescription1}</p>
                                        </CardContent>
                                        <CardFooter>
                                            <Button variant="outline" className="border-[#E64833]" asChild>
                                                <a href={userData.projectLink1} target="_blank" rel="noopener noreferrer">Explore Project</a>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                    <Card className="bg-[#90AEAD] dark:bg-gray-800/50 backdrop-blur-sm">
                                        <CardHeader>
                                            <CardTitle className="text-xl text-[#244855]">{userData.projectTitle2}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-[#244855]">{userData.projectDescription2}</p>
                                        </CardContent>
                                        <CardFooter>
                                            <Button variant="outline" className="border-[#E64833]" asChild>
                                                <a href={userData.projectLink2} target="_blank" rel="noopener noreferrer">Explore Project</a>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>


            </Card>
            <InformationTab userData={userData} />
        </div>
    )
}
