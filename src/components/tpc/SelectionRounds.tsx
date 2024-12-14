import { useState, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { debounce } from 'lodash'
import Link from 'next/link'
import { User, FileDown } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { generatePDF } from '@/components/tpc/PDFGenrator'

interface Student {
  _id: string
  firstName: string
  lastName: string
  email: string
  department: string
  username: string
  twelfthDiploma: string
  overallCGPA: number
  tenthMarks: number
  twelfthDiplomaPercentage: number
  placed?: boolean
  package?: number
}

interface Round {
  roundNumber: number
  roundName: string
  selectedStudents: Student[]
}

interface SelectionRoundsProps {
  rounds: Round[]
  onDelete: (roundNumber: number, selectedStudents: string[]) => void
  onSave: (roundNumber: number, selectedStudents: Student[]) => void
  onSearchStudents: (query: string, passoutYear: number) => Promise<SearchResult[]>
  passoutYear: number
  onUpdateRound: (updatedRound: Round) => void
  onAddToNextRound: (currentRoundNumber: number, selectedStudents: Student[]) => void
  onUpdatePlacementStatus: (studentId: string, placed: boolean, packageOffer?: number) => Promise<void>
  companyId: string
  companyName: string
  companyLocation: string
  companyPackage: number
  companyBond: string
}

interface SearchResult {
  _id: string
  firstName: string
  lastName: string
  department: string
  username: string
}

export function SelectionRounds({ 
  rounds, 
  onDelete, 
  onSave, 
  onSearchStudents, 
  passoutYear, 
  onUpdateRound, 
  onAddToNextRound,
  onUpdatePlacementStatus,
  companyId,
  companyName,
  companyLocation,
  companyPackage,
  companyBond
}: SelectionRoundsProps) {
  const [selectedStudents, setSelectedStudents] = useState<{ [key: number]: Set<string> }>({})
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [placementDialogOpen, setPlacementDialogOpen] = useState(false)
  const [currentStudent, setCurrentStudent] = useState<Student | null>(null)
  const [packageOffer, setPackageOffer] = useState<number>(0)

  const handleCheckboxChange = (roundNumber: number, studentId: string) => {
    setSelectedStudents(prev => {
      const newSelected = { ...prev }
      if (!newSelected[roundNumber]) {
        newSelected[roundNumber] = new Set()
      }
      if (newSelected[roundNumber].has(studentId)) {
        newSelected[roundNumber].delete(studentId)
      } else {
        newSelected[roundNumber].add(studentId)
      }
      return newSelected
    })
  }

  const handleSelectAll = (roundNumber: number, checked: boolean) => {
    setSelectedStudents(prev => {
      const newSelected = { ...prev }
      if (checked) {
        newSelected[roundNumber] = new Set(rounds.find(r => r.roundNumber === roundNumber)?.selectedStudents.map(s => s._id) || [])
      } else {
        newSelected[roundNumber] = new Set()
      }
      return newSelected
    })
  }

  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      if (query.length > 2) {
        const results = await onSearchStudents(query, passoutYear)
        setSearchResults(results)
      } else {
        setSearchResults([])
      }
    }, 300),
    [onSearchStudents, passoutYear]
  )

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    debouncedSearch(query)
  }

  const handleAddStudent = (roundNumber: number, student: SearchResult) => {
    const round = rounds.find(r => r.roundNumber === roundNumber)
    if (round && !round.selectedStudents.some(s => s._id === student._id)) {
      const updatedRound = {
        ...round,
        selectedStudents: [...round.selectedStudents, student as Student]
      }
      onUpdateRound(updatedRound)
    }
  }

  const handleAddToNextRound = (currentRound: Round) => {
    const selectedStudentIds = selectedStudents[currentRound.roundNumber] || new Set()
    const studentsToMove = currentRound.selectedStudents.filter(student => selectedStudentIds.has(student._id))
    onAddToNextRound(currentRound.roundNumber, studentsToMove)
    setSelectedStudents(prev => ({ ...prev, [currentRound.roundNumber]: new Set() }))
  }

  const handlePlacementToggle = (student: Student) => {
    setCurrentStudent(student)
    setPackageOffer(student.package || companyPackage)
    setPlacementDialogOpen(true)
  }

  const handleConfirmPlacement = async () => {
    if (currentStudent) {
      await onUpdatePlacementStatus(currentStudent._id, !currentStudent.placed, packageOffer)
      setPlacementDialogOpen(false)
      const updatedRounds = rounds.map(round => ({
        ...round,
        selectedStudents: round.selectedStudents.map(s => 
          s._id === currentStudent._id ? { ...s, placed: !s.placed, package: packageOffer } : s
        )
      }))
      onUpdateRound(updatedRounds[0])
    }
  }

  const handleDownloadPDF = (currentRound: Round) => {
    generatePDF({
      name: companyName,
      location: companyLocation,
      salary: companyPackage,
      bond: companyBond,
      currentRound
    })
  }

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader className="border-b border-gray-200">
        <CardTitle className="text-2xl font-bold text-[#244855]">Selection Rounds</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs defaultValue={rounds[0]?.roundNumber.toString()}>
          <TabsList className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-6">
            {rounds.map((round) => (
              <TabsTrigger
                key={round.roundNumber}
                value={round.roundNumber.toString()}
                className="data-[state=active]:bg-[#244855] data-[state=active]:text-white"
              >
                Round {round.roundNumber}
              </TabsTrigger>
            ))}
          </TabsList>
          {rounds.map((round) => (
            <TabsContent key={round.roundNumber} value={round.roundNumber.toString()}>
              <h3 className="mt-20 text-xl font-semibold text-[#244855] mb-4">{round.roundName}</h3>
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Search students..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                {searchResults.length > 0 && (
                  <div className="mt-2 border rounded-md p-2">
                    {searchResults.map(student => (
                      <div key={student._id} className="flex justify-between items-center py-2">
                        <div>
                          <span className="font-medium">{student.firstName} {student.lastName}</span>
                          <span className="text-sm text-gray-500 ml-2">({student.department})</span>
                          <span className="text-sm text-gray-500 ml-2">PRN: {student.username}</span>
                        </div>
                        <Button
                          onClick={() => handleAddStudent(round.roundNumber, student)}
                          disabled={round.selectedStudents.some(s => s._id === student._id)}
                        >
                          {round.selectedStudents.some(s => s._id === student._id) ? 'Added' : 'Add'}
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="rounded-md border mb-4 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">
                        <Checkbox className='ml-2'
                          checked={selectedStudents[round.roundNumber]?.size === round.selectedStudents.length}
                          onCheckedChange={(checked) => handleSelectAll(round.roundNumber, checked as boolean)}
                        />
                      </TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>PRN Number</TableHead>
                      <TableHead>CGPA</TableHead>
                      <TableHead>10th</TableHead>
                      <TableHead>12th/Diploma</TableHead>
                      <TableHead>12th/Diploma %</TableHead>
                      <TableHead>Profile</TableHead>
                      <TableHead>Placed</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {round.selectedStudents.map((student) => (
                      <TableRow key={student._id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedStudents[round.roundNumber]?.has(student._id)}
                            onCheckedChange={() => handleCheckboxChange(round.roundNumber, student._id)}
                          />
                        </TableCell>
                        <TableCell className="font-medium">{student.firstName} {student.lastName}</TableCell>
                        <TableCell>{student.email}</TableCell>
                        <TableCell>{student.department}</TableCell>
                        <TableCell>{student.username}</TableCell>
                        <TableCell>{student.overallCGPA}</TableCell>
                        <TableCell>{student.tenthMarks}</TableCell>
                        <TableCell>{student.twelfthDiploma}</TableCell>
                        <TableCell>{student.twelfthDiplomaPercentage}</TableCell>
                        <TableCell>
                          <Link href={`/student/${student._id}`}>
                            <User className="h-5 w-5 text-[#244855] hover:text-[#E64833]" />
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Switch
                            checked={student.placed}
                            onCheckedChange={() => handlePlacementToggle(student)}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="flex justify-end space-x-4">
                <Button
                  variant="outline"
                  onClick={() => handleDownloadPDF(round)}
                >
                  <FileDown className="mr-2 h-4 w-4" /> Download PDF
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    const updatedStudents = round.selectedStudents.filter(
                      student => !selectedStudents[round.roundNumber]?.has(student._id)
                    )
                    onUpdateRound({ ...round, selectedStudents: updatedStudents })
                    setSelectedStudents(prev => ({ ...prev, [round.roundNumber]: new Set() }))
                  }}
                  disabled={!selectedStudents[round.roundNumber] || selectedStudents[round.roundNumber].size === 0}
                >
                  Delete Selected
                </Button>
                <Button
                  variant="default"
                  onClick={() => onSave(round.roundNumber, round.selectedStudents)}
                >
                  Save Changes
                </Button>
                {round.roundNumber < rounds.length && (
                  <Button
                    variant="outline"
                    onClick={() => handleAddToNextRound(round)}
                    disabled={!selectedStudents[round.roundNumber] || selectedStudents[round.roundNumber].size === 0}
                  >
                    Add to Next Round
                  </Button>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
      <Dialog open={placementDialogOpen} onOpenChange={setPlacementDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Placement Status</DialogTitle>
            <DialogDescription>
              {currentStudent?.placed
                ? "Are you sure you want to mark this student as not placed?"
                : "Are you sure you want to mark this student as placed?"}
            </DialogDescription>
          </DialogHeader>
          {!currentStudent?.placed && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="package" className="text-right">
                  Package Offer (LPA)
                </Label>
                <Input
                  id="package"
                  type="number"
                  value={packageOffer}
                  onChange={(e) => setPackageOffer(Number(e.target.value))}
                  className="col-span-3"
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setPlacementDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleConfirmPlacement}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

