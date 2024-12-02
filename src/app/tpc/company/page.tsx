'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button'

interface Company {
  _id: string
  name: string
  description: string
  location: string
  salary: number
}

export default function CompaniesPage() {
  const [companies, setCompanies] = useState<Company[]>([])
  const router = useRouter();

  useEffect(() => {
   
    async function fetchCompanies() {
      try {
        const response = await fetch('/api/companies')
        const data = await response.json()
        setCompanies(data)
      } catch (error) {
        console.error('Failed to fetch companies:', error)
      }
    }

    fetchCompanies()
  }, [])

  const handleAddCompany = () => {
    router.push('/tpc/company/add-company')
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#244855] mb-6">Companies</h1>
      <Button
        onClick={handleAddCompany}
        className="mb-6 bg-[#E64833] text-white hover:bg-[#244855] transition-colors"
      >
        Add Company
      </Button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div
            key={company._id}
            className="border border-[#90AEAD] rounded-lg p-4 bg-white shadow-sm"
          >
            <h2 className="text-lg font-bold text-[#244855]">{company.name}</h2>
            <p className="text-sm text-gray-600">{company.description}</p>
            <p className="text-sm font-medium text-[#874F41]">
              Location: {company.location}
            </p>
            <p className="text-sm font-medium text-[#874F41]">
              Salary: ₹{company.salary} LPA
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
