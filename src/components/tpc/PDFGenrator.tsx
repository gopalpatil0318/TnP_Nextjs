import { jsPDF } from "jspdf"
import autoTable from 'jspdf-autotable'

interface Student {
  firstName: string
  lastName: string
  email: string
  department: string
  username: string
  overallCGPA: number
  tenthMarks: number
  twelfthDiploma: string
  twelfthDiplomaPercentage: number
}

interface Round {
  roundName: string
  selectedStudents: Student[]
}

interface PDFGeneratorProps {
  name: string
  location: string
  salary: number
  bond: string
  currentRound: Round
}

export const generatePDF = ({
  name,
  location,
  salary,
  bond,
  currentRound
}: PDFGeneratorProps) => {
  const doc = new jsPDF()

  
  doc.setFontSize(18)
  doc.text(`Company Name: ${name}`, 14, 15)
  doc.setFontSize(12)
  doc.text(`Location: ${location}`, 14, 25)
  doc.text(`Package: ${salary} LPA`, 14, 32)
  doc.text(`Bond: ${bond}`, 14, 39)

  
  const downloadDate = new Date().toLocaleDateString()
  doc.text(`Date: ${downloadDate}`, 14, 46)

  let yOffset = 55

 
  doc.setFontSize(14)
  doc.text(`Selected for ${currentRound.roundName}`, 14, yOffset)
  yOffset += 10

 
  const tableColumns = ["Name", "Email", "Department", "PRN", "CGPA", "10th", "12th/Diploma", "12th/Diploma %"]
  const tableRows = currentRound.selectedStudents.map(student => [
    `${student.firstName} ${student.lastName}`,
    student.email,
    student.department,
    student.username,
    student.overallCGPA.toString(),
    student.tenthMarks.toString(),
    student.twelfthDiploma,
    student.twelfthDiplomaPercentage.toString()
  ])

  autoTable(doc, {
    head: [tableColumns],
    body: tableRows,
    startY: yOffset,
    styles: { fontSize: 8 },
    headStyles: { fillColor: [36, 72, 85] },
  })

 
  doc.save(`${name}_${currentRound.roundName}_Selection.pdf`)
}

