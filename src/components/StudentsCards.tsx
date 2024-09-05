import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

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

interface StudentsCardsProps {
  student: Student;
}

export function StudentsCards({ student }: StudentsCardsProps) {
  return (
    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 shadow-md transform transition-all hover:scale-105 flex flex-col items-center gap-3 h-96">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#0057e7]">
        <Image
          src={student.image || "/image.png"}
          alt={`${student.firstName} ${student.lastName}'s profile`}
          width={96}
          height={96}
          className="rounded-full object-cover "
        />
      </div>

      <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
        {student.firstName} {student.lastName}
      </h2>

      <p className="text-sm font-medium text-[#008744] dark:text-[#ffa700]">
        {student.department}
      </p>

      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Pass out: <span className="font-semibold">{student.passoutYear}</span>
      </p>

      <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
        {student.areaOfInterest}
      </p>

      <div className="flex space-x-3 mt-2">
        {student.linkedinLink && (
          <a href={student.linkedinLink} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 text-xl" />
          </a>
        )}
        {student.githubLink && (
          <a href={student.githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-800 dark:text-white text-xl" />
          </a>
        )}
        {student.leetcodeLink && (
          <a href={student.leetcodeLink} target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="text-yellow-600 text-xl" />
          </a>
        )}
      </div>

      <button className="mt-2 px-4 py-2 bg-[#d62d20] text-white rounded-full font-semibold text-sm hover:bg-[#ffa700] transition">
        Visit Profile
      </button>
    </div>
  );
}
