'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from "@/components/ui/use-toast"
import { Loader2, Edit, Trash } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton" // Skeleton component

interface Tpc {
  _id: string
  name: string
  email: string
}

export function TpcList() {
  const [tpcs, setTpcs] = useState<Tpc[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTpcs()
  }, [])

  const fetchTpcs = async () => {
    try {
      const response = await axios.get('/api/tpo/get-tpcs', { headers: { 'Cache-Control': 'no-cache' } });
      setTpcs(response.data.data)
      console.log(response.data.data)
    } catch (error) {
      console.error('Error fetching TPCs:', error)
      toast({
        title: "Error",
        description: "Failed to load TPCs. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/tpo/delete-tpc/${id}`);
    
      fetchTpcs();
      toast({
        title: "Success",
        description: "TPC deleted successfully.",
      });
    } catch (error) {
      console.error('Error deleting TPC:', error);
      toast({
        title: "Error",
        description: "Failed to delete TPC. Please try again.",
        variant: "destructive",
      });
    }
  };
  

  if (loading) {
    return (
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#244855]">TPC List</h2>
        <Table className="border border-gray-300">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] bg-[#244855] text-white pl-4">Name</TableHead>
              <TableHead className="bg-[#244855] text-white pl-4">Email</TableHead>
              <TableHead className="bg-[#244855] text-white pl-4">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton className="w-[100px] h-[20px] rounded-full" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-[200px] h-[20px] rounded-full" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Skeleton className="w-[50px] h-[20px] rounded-full inline-block mr-2" />
                    <Skeleton className="w-[50px] h-[20px] rounded-full inline-block" />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    )
  }

  return (
    <div className="bg-white p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#244855]">TPC List</h2>
      {tpcs.length === 0 ? (
        <p className="text-center text-[#874F41]">No TPCs found.</p>
      ) : (
        <Table className="border border-gray-300">
          <TableCaption className="text-[#874F41]">A list of TPCs in the system</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px] bg-[#244855] text-white pl-4">Name</TableHead>
              <TableHead className="bg-[#244855] text-white pl-4">Email</TableHead>
              <TableHead className="text-center  bg-[#244855] text-white pl-4">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tpcs.map((tpc) => (
              <TableRow key={tpc._id}>
                <TableCell className="font-medium text-[#244855] pl-4">{tpc.name}</TableCell>
                <TableCell className="text-[#244855] pl-4">{tpc.email}</TableCell>
                <TableCell className="text-center space-x-2">
                  <button
                    className="p-2 border border-[#244855] text-[#244855] rounded hover:bg-[#244855] hover:text-white"
                    title="Edit"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    className="p-2 border border-[#E64833] text-[#E64833] rounded hover:bg-[#E64833] hover:text-white"
                    title="Delete"
                    onClick={() => handleDelete(tpc._id)}
                  >
                    <Trash className="h-4 w-4" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}