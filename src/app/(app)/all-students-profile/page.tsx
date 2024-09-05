'use client';
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import SideBar from "@/components/SideBar";
import { useSession } from "next-auth/react";
import { StudentsCards } from "@/components/StudentsCards";
import FilterSection from "@/components/FilterSection";
import axios from "axios";

const Page: React.FC = () => {
  const { data: session } = useSession();

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <SideBar />
      <div className="flex-1">
        <Dashboard />
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  interface Student {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    department: string;
    passoutYear: number;
    areaOfInterest: string;
    linkedinLink: string;
    githubLink: string;
    leetcodeLink: string;
  }

  interface Filters {
    departments: string[];
    areasOfInterest: string[];
  }

  const [studentsData, setStudentsData] = useState<Student[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filters, setFilters] = useState<Filters>({
    departments: [],
    areasOfInterest: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get('/api/fetch-all-students');
        console.log("Fetched students:", response.data.users);
        setStudentsData(response.data.users || []);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Axios error:", error.response?.data);
          setError(error.response?.data.message || "An error occurred while fetching data");
        } else {
          console.error("Unknown error:", error);
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const filteredStudents = studentsData.filter(
    (student) =>
      `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filters.departments.length === 0 || filters.departments.includes(student.department)) &&
      (filters.areasOfInterest.length === 0 || filters.areasOfInterest.includes(student.areaOfInterest))
  );

  console.log("Filtered students:", filteredStudents);

  return (
    <div className="flex flex-1 flex-col md:flex-row h-full">
      <div className="p-2 md:p-3 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-black flex flex-col gap-3 w-full h-full">
        <div className="flex gap-2">
          <div
            key={"first"}
            className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center"
          >
            <h1 className="text-4xl font-normal text-neutral-600 dark:text-neutral-400">Students</h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 flex-1">
          <div className="md:w-1/5">
            <FilterSection
              filters={filters}
              onFilterChange={setFilters}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
          <div className="md:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
            {loading ? (
              <div className="col-span-4 flex justify-center items-center">
                <p className="text-xl text-neutral-600 dark:text-neutral-400">Loading...</p>
              </div>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              filteredStudents.map((student) => (
                <StudentsCards key={student.id} student={student} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
