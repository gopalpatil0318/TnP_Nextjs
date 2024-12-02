'use client'

import { useState } from 'react'
import { useForm, useFieldArray, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Loader2, Plus, Trash2 } from 'lucide-react'
import axios from 'axios'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from '@/components/ui/use-toast'
import { companySchema, CompanyFormData } from '@/schemas/companySchema'

const SKILLS = ['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'C++', 'SQL', 'Machine Learning', 'Data Analysis', 'Cloud Computing'];
const DEPARTMENTS = ['CS', 'IT', 'EXTC', 'MECH', 'CIVIL'];

export default function AddCompanyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const form = useForm<CompanyFormData>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: '',
      description: '',
      salary: 0,
      location: '',
      bond: '',
      criteria: {
        cgpa: 0,
        gender: [],
        passoutYear: new Date().getFullYear(),
        liveKT: '',
        educationGap: '',
        department: [],
        tenthPercentage: 0,
        twelfthPercentage: 0,
        diplomaPercentage: 0,
        skills: [],
      },
      rounds: [{ roundNumber: 1, roundName: '' }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "rounds"
  });

  const onSubmit = async (data: CompanyFormData) => {
    setIsSubmitting(true)

    try {
      console.log(data);
      await axios.post('/api/companies', data)
      toast({
        title: 'Company Added',
        description: 'The company has been successfully added.',
      })
      router.push('/companies') // Redirect to companies page
    } catch (error) {
      console.error('Error adding company:', error)
      toast({
        title: 'Error',
        description: 'Failed to add the company. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className=" p-8 rounded-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary1">
        Add New Company
      </h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-primary1">
              Company Name
            </label>
            <Input
              id="name"
              placeholder="Company Name"
              {...form.register('name')}
              className="w-full"
            />
            {form.formState.errors.name && (
              <p className="text-sm text-destructive">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="salary" className="text-sm font-medium text-primary1">
              Salary (LPA)
            </label>
            <Input
              id="salary"
              type="number"
              placeholder="Salary"
              {...form.register('salary', { valueAsNumber: true })}
              className="w-full"
            />
            {form.formState.errors.salary && (
              <p className="text-sm text-destructive">
                {form.formState.errors.salary.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="location" className="text-sm font-medium text-primary1">
              Location
            </label>
            <Input
              id="location"
              placeholder="Location"
              {...form.register('location')}
              className="w-full"
            />
            {form.formState.errors.location && (
              <p className="text-sm text-destructive">
                {form.formState.errors.location.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="bond" className="text-sm font-medium text-primary1">
              Bond
            </label>
            <Input
              id="bond"
              placeholder="Bond details"
              {...form.register('bond')}
              className="w-full"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label htmlFor="description" className="text-sm font-medium text-primary1">
              Description
            </label>
            <Textarea
              id="description"
              placeholder="Brief Description"
              {...form.register('description')}
              className="w-full"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-primary1 border-b border-accent1-1 pb-2 mb-4">Criteria</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label htmlFor="cgpa" className="text-sm font-medium text-primary1">
                CGPA
              </label>
              <Input
                id="cgpa"
                type="number"
                step="0.01"
                placeholder="CGPA"
                {...form.register('criteria.cgpa', { valueAsNumber: true })}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary1">Gender</label>
              <div className="flex flex-wrap gap-2">
                <Controller
                  name="criteria.gender"
                  control={form.control}
                  render={({ field }) => (
                    <>
                      {['Male', 'Female', 'Other'].map((gender) => (
                        <div key={gender} className="flex items-center space-x-2">
                          <Checkbox
                            id={`gender-${gender}`}
                            checked={field.value.includes(gender)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, gender])
                                : field.onChange(field.value.filter((value) => value !== gender))
                            }}
                          />
                          <label htmlFor={`gender-${gender}`}>{gender}</label>
                        </div>
                      ))}
                    </>
                  )}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="passoutYear" className="text-sm font-medium text-primary1">
                Passout Year
              </label>
              <Input
                id="passoutYear"
                type="number"
                placeholder="Passout Year"
                {...form.register('criteria.passoutYear', { valueAsNumber: true })}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="liveKT" className="text-sm font-medium text-primary1">
                Live KT
              </label>
              <Select onValueChange={(value) => form.setValue('criteria.liveKT', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="educationGap" className="text-sm font-medium text-primary1">
                Education Gap
              </label>
              <Select onValueChange={(value) => form.setValue('criteria.educationGap', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary1">Department</label>
              <div className="flex flex-wrap gap-2">
                <Controller
                  name="criteria.department"
                  control={form.control}
                  render={({ field }) => (
                    <>
                      {DEPARTMENTS.map((dept) => (
                        <div key={dept} className="flex items-center space-x-2">
                          <Checkbox
                            id={`dept-${dept}`}
                            checked={field.value.includes(dept)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, dept])
                                : field.onChange(field.value.filter((value) => value !== dept))
                            }}
                          />
                          <label htmlFor={`dept-${dept}`}>{dept}</label>
                        </div>
                      ))}
                    </>
                  )}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="tenthPercentage" className="text-sm font-medium text-primary1">
                10th Percentage
              </label>
              <Input
                id="tenthPercentage"
                type="number"
                step="0.01"
                placeholder="10th Percentage"
                {...form.register('criteria.tenthPercentage', { valueAsNumber: true })}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="twelfthPercentage" className="text-sm font-medium text-primary1">
                12th Percentage
              </label>
              <Input
                id="twelfthPercentage"
                type="number"
                step="0.01"
                placeholder="12th Percentage"
                {...form.register('criteria.twelfthPercentage', { valueAsNumber: true })}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="diplomaPercentage" className="text-sm font-medium text-primary1">
                Diploma Percentage
              </label>
              <Input
                id="diplomaPercentage"
                type="number"
                step="0.01"
                placeholder="Diploma Percentage"
                {...form.register('criteria.diplomaPercentage', { valueAsNumber: true })}
                className="w-full"
              />
            </div>
          </div>
          <div className="space-y-2 col-span-full">
            <label className="text-sm font-medium text-primary1">Skills</label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              <Controller
                name="criteria.skills"
                control={form.control}
                render={({ field }) => (
                  <>
                    {SKILLS.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={`skill-${skill}`}
                          checked={field.value.includes(skill)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, skill])
                              : field.onChange(field.value.filter((value) => value !== skill))
                          }}
                        />
                        <label htmlFor={`skill-${skill}`} className="text-sm">{skill}</label>
                      </div>
                    ))}
                  </>
                )}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-primary1 border-b border-accent1-1 pb-2 mb-4">Rounds</h3>
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-end space-x-4">
              <div className="flex-grow space-y-2">
                <label htmlFor={`roundNumber-${index}`} className="text-sm font-medium text-primary1">
                  Round Number
                </label>
                <Input
                  id={`roundNumber-${index}`}
                  type="number"
                  {...form.register(`rounds.${index}.roundNumber` as const, { valueAsNumber: true })}
                  className="w-full"
                />
              </div>
              <div className="flex-grow space-y-2">
                <label htmlFor={`roundName-${index}`} className="text-sm font-medium text-primary1">
                  Round Name
                </label>
                <Input
                  id={`roundName-${index}`}
                  {...form.register(`rounds.${index}.roundName` as const)}
                  className="w-full"
                />
              </div>
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={() => remove(index)}
                disabled={index === 0}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => append({ roundNumber: fields.length + 1, roundName: '' })}
            className="bg-accent1-2 hover:bg-accent1-2/90 text-primary1"
          >
            <Plus className="h-4 w-4 mr-2" /> Add Round
          </Button>
        </div>

        <Button
          type="submit"
          className="w-full bg-[#E64833] text-white hover:bg-[#244855] transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </>
          ) : (
            'Add Company'
          )}
        </Button>
      </form>
    </div>
  )
}

