'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AddQuestionForm } from '@/components/student/AddQuestionForm'
import { QuestionCard } from '@/components/student/QuestionCard'

interface Question {
  company: string
  questions: string[]
  studentName: string
  review: string
}

export default function Page() {
  const [showForm, setShowForm] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([])
  const [filter, setFilter] = useState('')

  const addQuestion = (newQuestion: Question) => {
    setQuestions([...questions, newQuestion])
    setShowForm(false)
  }

  const filteredQuestions = questions.filter(q => 
    q.company.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4  min-h-screen  mb-10 ">
          <section className="relative py-10  ">
        <div className="mb-4 mt-2">
          <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-[#244855]">
            Company Questions
          </h4>
          <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-[#90AEAD] text-center font-normal">
            Search company specific questions faced by students during interviews.
          </p>
        </div>
      </section>
      <div className="flex justify-between items-center mb-6">
      <div className="relative mb-6">
        <Input
          className="pl-10 pr-4 py-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg shadow-sm"
          placeholder="Filter by company name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
        <Button onClick={() => setShowForm(true)} className="bg-blue-600 hover:bg-blue-700">
          Add Questions
        </Button>
      </div>

     

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {filteredQuestions.map((q, index) => (
          <QuestionCard key={index} question={q} />
        ))}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
            <AddQuestionForm onSubmit={addQuestion} onClose={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </div>
  )
}