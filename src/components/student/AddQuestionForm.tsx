import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Plus } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"

interface AddQuestionFormProps {
  onSubmit: (question: { company: string; questions: string[]; studentName: string; review: string; dateAdded: string }) => void
  onClose: () => void
}

export function AddQuestionForm({ onSubmit, onClose }: AddQuestionFormProps) {
  const [company, setCompany] = useState('')
  const [questions, setQuestions] = useState([''])
  const [studentName] = useState('John Doe') // This can be dynamic in a real-world app
  const [review, setReview] = useState('')

  const handleAddQuestion = () => {
    setQuestions([...questions, ''])
  }

  const handleRemoveQuestion = (index: number) => {
    const newQuestions = questions.filter((_, i) => i !== index)
    setQuestions(newQuestions)
  }

  const handleQuestionChange = (index: number, value: string) => {
    const newQuestions = [...questions]
    newQuestions[index] = value
    setQuestions(newQuestions)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const currentDate = new Date().toLocaleDateString()

    onSubmit({
      company,
      questions: questions.filter(q => q.trim() !== ''),
      studentName,
      review,
      dateAdded: currentDate, 
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-[#244855]">Add Questions</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5 text-gray-500" />
        </Button>
      </div>

      <Input value={studentName} disabled className="bg-gray-100 text-gray-500" />

      <Select onValueChange={setCompany} required>
        <SelectTrigger className="border-gray-300 focus:ring-[#244855] focus:border-[#244855]">
          <SelectValue placeholder="Select company" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="company1">Company 1</SelectItem>
          <SelectItem value="company2">Company 2</SelectItem>
          <SelectItem value="company3">Company 3</SelectItem>
        </SelectContent>
      </Select>

      <ScrollArea className="h-[200px] pr-4">
        {questions.map((question, index) => (
          <div key={index} className="flex items-center space-x-2 mb-4">
            <Textarea
              placeholder={`Question ${index + 1}`}
              value={question}
              onChange={(e) => handleQuestionChange(index, e.target.value)}
              required
              className="flex-grow"
            />
            {index > 0 && (
              <Button type="button" onClick={() => handleRemoveQuestion(index)} variant="destructive" size="icon">
                <X className="h-4 w-4 text-black" />
              </Button>
            )}
          </div>
        ))}
      </ScrollArea>

      <Button type="button" onClick={handleAddQuestion} variant="outline" className="w-full border-[#244855] text-[#244855] hover:bg-[#FBE9D0]">
        <Plus className="h-4 w-4 mr-2" /> Add Another Question
      </Button>

      <Textarea
        placeholder="Review (optional)"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="mt-4"
      />

      <Button type="submit" className="w-full bg-[#E64833] hover:bg-[#C93C2B] text-white">
        Submit
      </Button>
    </form>
  )
}
