"use client"

import { useUserContext } from "@/context/AppContext"
import { StudentProfile } from '@/components/student/StudentProfile'
import InformationTab from '@/components/student/InformationTab'

export default function UserProfile() {
  const { studentData, loading } = useUserContext()

  return (
    <div className="container mx-auto p-4">
      <StudentProfile studentData={studentData} loading={loading} />
      <InformationTab studentData={studentData} loading={loading} />
    </div>
  )
}

