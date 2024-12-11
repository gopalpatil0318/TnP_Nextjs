'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Building2, MapPin, Banknote, FileText, Clock, Users, Briefcase, GraduationCap, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

interface Company {
  _id: string
  name: string
  description: string
  salary: number
  bond: string
  location: string
  criteria: {
    cgpa: number
    gender: string[]
    passoutYear: number
    liveKT: string
    educationGap: string
    department: string[]
    tenthPercentage: number
    twelfthPercentage: number
    diplomaPercentage: number
    skills: string[]
  }
  rounds: {
    roundNumber: number
    roundName: string
    selectedStudents: Student[]
  }[]
}

interface Student {
  _id: string
  name: string
  email: string
  branch: string
  rollNumber: string
  cgpa: number
}

export default function SingleCompanyPage() {
  const [company, setCompany] = useState<Company | null>(null)
  const [loading, setLoading] = useState(true)
  const params = useParams<{ id: string }>()

  useEffect(() => {
    async function fetchCompany() {
      try {
        const response = await axios.get(`/api/tpc/get-company/${params.id}`)
        setCompany(response.data.company)
      } catch (error) {
        console.error('Failed to fetch company:', error)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchCompany()
    }
  }, [params.id])

  if (loading) {
    return <CompanySkeleton />
  }

  if (!company) {
    return <div className="text-center text-2xl text-[#244855]">Company not found</div>
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      <Link
        href="/tpc/companies"
        className="inline-flex items-center text-[#244855] hover:text-[#E64833] transition-colors"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Companies
      </Link>

      <div className="grid gap-8 md:grid-cols-3">
        <Card className="md:col-span-2 bg-white shadow-lg">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-3xl font-bold text-[#244855]">{company.name}</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-[#E64833]" />
                <span className="text-gray-700">{company.location}</span>
              </div>
              <div className="flex items-center">
                <Banknote className="w-5 h-5 mr-2 text-[#E64833]" />
                <span className="text-gray-700">₹{company.salary} LPA</span>
              </div>
              <div className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-[#E64833]" />
                <span className="text-gray-700">Bond: {company.bond}</span>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-[#244855] mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">{company.description}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-2xl font-bold text-[#244855]">Eligibility Criteria</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ScrollArea className="h-[calc(100vh-20rem)]">
              <div className="space-y-4">
                <div className="flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-[#E64833]" />
                  <span className="text-gray-700">CGPA: {company.criteria.cgpa}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-[#E64833]" />
                  <span className="text-gray-700">Gender: {company.criteria.gender.join(', ')}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-[#E64833]" />
                  <span className="text-gray-700">Passout Year: {company.criteria.passoutYear}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-[#E64833]" />
                  <span className="text-gray-700">Live KT: {company.criteria.liveKT}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-[#E64833]" />
                  <span className="text-gray-700">Education Gap: {company.criteria.educationGap}</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#244855] mb-2">Departments</h4>
                  <div className="flex flex-wrap gap-2">
                    {company.criteria.department.map((dept) => (
                      <Badge key={dept} variant="secondary" className="bg-[#90AEAD] text-white">
                        {dept}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-semibold text-[#244855]">10th Percentage: </span>
                  <span className="text-gray-700">{company.criteria.tenthPercentage}%</span>
                </div>
                <div>
                  <span className="font-semibold text-[#244855]">12th Percentage: </span>
                  <span className="text-gray-700">{company.criteria.twelfthPercentage}%</span>
                </div>
                <div>
                  <span className="font-semibold text-[#244855]">Diploma Percentage: </span>
                  <span className="text-gray-700">{company.criteria.diplomaPercentage}%</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#244855] mb-2">Required Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {company.criteria.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-[#E64833] text-[#E64833]">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white shadow-lg">
        <CardHeader className="border-b border-gray-200">
          <CardTitle className="text-2xl font-bold text-[#244855]">Selection Rounds</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs defaultValue={company.rounds[0]?.roundNumber.toString()}>
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-6">
              {company.rounds.map((round) => (
                <TabsTrigger
                  key={round.roundNumber}
                  value={round.roundNumber.toString()}
                  className="data-[state=active]:bg-[#244855] data-[state=active]:text-white"
                >
                  Round {round.roundNumber}
                </TabsTrigger>
              ))}
            </TabsList>
            {company.rounds.map((round) => (
              <TabsContent key={round.roundNumber} value={round.roundNumber.toString()}>
                <h3 className="text-xl font-semibold text-[#244855] mb-4">{round.roundName}</h3>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]"></TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Branch</TableHead>
                        <TableHead>Roll Number</TableHead>
                        <TableHead>CGPA</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {round.selectedStudents.map((student) => (
                        <TableRow key={student._id}>
                          <TableCell>
                            <Checkbox />
                          </TableCell>
                          <TableCell className="font-medium">{student.name}</TableCell>
                          <TableCell>{student.email}</TableCell>
                          <TableCell>{student.branch}</TableCell>
                          <TableCell>{student.rollNumber}</TableCell>
                          <TableCell>{student.cgpa}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

function CompanySkeleton() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <Skeleton className="h-6 w-40" />
      <div className="grid gap-8 md:grid-cols-3">
        <Card className="md:col-span-2 bg-white shadow-lg">
          <CardHeader>
            <Skeleton className="h-8 w-3/4" />
          </CardHeader>
          <CardContent className="space-y-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-6 w-full" />
            ))}
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <Skeleton className="h-6 w-1/2" />
          </CardHeader>
          <CardContent className="space-y-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="h-6 w-full" />
            ))}
          </CardContent>
        </Card>
      </div>
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <Skeleton className="h-6 w-1/2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-10 w-full mb-4" />
          <Skeleton className="h-64 w-full" />
        </CardContent>
      </Card>
    </div>
  )
}

