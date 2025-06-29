import React from 'react'
import { Marquee } from './magicui/marquee'
import {
  FaJava, FaJsSquare, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGit, FaPython,
} from 'react-icons/fa'
import {
  SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiPostman, SiFigma, SiMysql,
} from 'react-icons/si';
import { AuroraText } from './magicui/aurora-text';

const SkillsMarquee = () => {
  const skills = [
    { name: 'Java', icon: <FaJava className="text-[#f89820]" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Express', icon: <SiExpress className="text-gray-600" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
    { name: 'Git', icon: <FaGit className="text-orange-600" /> },
    { name: 'Python', icon: <FaPython className="text-yellow-300" /> },
    { name: 'SQL', icon: <SiMysql className="text-blue-600" /> },
    { name: 'REST APIs', icon: <span className="text-gray-600">🔗</span> },
    { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
    { name: 'Figma', icon: <SiFigma className="text-pink-600" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
  ]

  return (
    <div className="relative w-full mt-2 px-4 sm:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
         <AuroraText>Skills</AuroraText>
      </h2>

      <div className="pointer-events-none absolute top-0 left-0 h-full w-12 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-12 z-10 bg-gradient-to-l from-white to-transparent" />


      <Marquee speed={40} gradient={false} className="py-6 bg-white rounded-xl shadow-inner mb-4">
        {skills.map((skill, index) => (
          <div
            key={`forward-${index}`}
            className="flex items-center gap-2 mx-3 px-4 py-2 bg-[#f3f3f3] text-black text-sm sm:text-base font-medium rounded-full shadow hover:scale-115 transition-transform duration-300 cursor-default"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </Marquee>

      <Marquee speed={40} gradient={false} reverse className="py-6 bg-white rounded-xl shadow-inner">
        {skills.map((skill, index) => (
          <div
            key={`reverse-${index}`}
            className="flex items-center gap-2 mx-3 px-4 py-2 bg-[#f3f3f3] text-black text-sm sm:text-base font-medium rounded-full shadow hover:scale-115 transition-transform duration-300 cursor-default"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default SkillsMarquee
