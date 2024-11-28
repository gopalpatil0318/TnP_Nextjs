'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { AddTpcForm } from "@/components/tpo/AddTpcForm"
import { TpcList } from "@/components/tpo/TpcList"

export default function ManageTpcPage() {
  const [showAddForm, setShowAddForm] = useState(false)

  return (
    <div className="container mx-auto p-8 ">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#244855]">Manage TPCs</h1>
      <div className="mb-8">
        <Button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="w-full md:w-auto bg-[#E64833] text-white hover:bg-[#244855] transition-colors"
        >
          {showAddForm ? 'Close Form' : 'Add TPC'}
        </Button>
      </div>
      {showAddForm && <AddTpcForm onClose={() => setShowAddForm(false)} />}
      <TpcList />
    </div>
  )
}

