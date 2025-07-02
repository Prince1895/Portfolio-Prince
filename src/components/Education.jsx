'use client';

import React from 'react';
import { MagicCard } from './magicui/magic-card';
import { AuroraText } from './magicui/aurora-text';
import Abeslogo from '@/assets/ABESlogo.png';
import asianschoollogo from '@/assets/asianschool.png'; // Assuming you have the logo for The Asian School

const educationData = [
  {
    course_title: 'Bachelor of Technology - Computer Science (Data Science)',
    institute_name: 'ABES Engineering College',
    institute_logo: Abeslogo,
    institute_link: 'https://www.abes.ac.in/',
    ending_date: '2027 (Expected)',
    starting_date: '2023',
    description: 'Focused on software engineering, algorithms, databases, full-stack web development, and specialization in Data Science.',
    grade:"8.5/10 (till 3rd Semester)"
 
    
  },
  {
    course_title: 'Higher Secondary Education (12th Grade)',
    course_title1: 'Secondary Education (10th Grade)',
    institute_name: 'The Asian School',
    institute_logo: asianschoollogo,
    institute_link: 'https://www.apsshikohabad.in/',
    ending_date: '2022',
    starting_date: '2019',
  }
];


const Education = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-10 mt-24 flex flex-col items-center justify-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4">
        <AuroraText> Education </AuroraText>
      </h2>

      <div className="w-full max-w-3xl space-y-6">
        {educationData.map((edu, idx) => (
          <MagicCard
            key={idx}
            className="cursor-pointer shadow-md bg-white border border-gray-200 transition-all rounded-xl w-full"
            gradientColor="rgba(197, 241, 241, 0.4)"
          >
            <div className="flex flex-col sm:flex-row w-full gap-4 px-6 py-5 sm:px-6 sm:py-5 items-start">


              <div className="shrink-0 rounded-full overflow-hidden inline-block hover:scale-115 transition-transform duration-300 ease-in-out">
                <a href={edu.institute_link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={edu.institute_logo}
                    alt="institute-logo"
                    className="h-auto max-h-14 w-auto max-w-14 object-contain"
                  />
                </a>
              </div>

              <div className="w-full">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">

                  <h1 className="text-lg sm:text-xl font-semibold mb-1 bricolage-font">
                    {edu.institute_name}
                  </h1>

                  <span className="text-sm text-gray-500 sm:text-right">
                    {edu.starting_date} – {edu.ending_date}
                  </span>
                </div>

                <h2 className="text-sm text-gray-700 inter-font font-medium mt-1">
                  {edu.course_title}
                </h2>
                 <h2 className="text-sm text-gray-700 inter-font font-medium mt-1">
                  {edu.course_title1}
                </h2>

                {edu.grade && (
                  <p className="text-sm text-gray-600 inter-font mt-1">
                    <strong>Grade:</strong> {edu.grade}
                  </p>
                )}

                <p className="mt-2 text-sm text-gray-600 inter-font">
                  {edu.description}
                </p>
              </div>
            </div>
          </MagicCard>
        ))}
      </div>
    </div>
  );
};

export default Education;
