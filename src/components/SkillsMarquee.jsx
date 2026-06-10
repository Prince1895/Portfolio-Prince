import React from 'react';
import {
  FaJava, FaJsSquare, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGit, FaPython,
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiPostman, SiFigma, SiMysql,
} from 'react-icons/si';
import { AuroraText } from './magicui/aurora-text';

const skillsByCategory = [
  {
    category: 'Frontend',
    skills: [
      { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
      { name: 'React', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Express.js', icon: <SiExpress className="text-white" /> },
      { name: 'Java', icon: <FaJava className="text-[#f89820]" /> },
      { name: 'Python', icon: <FaPython className="text-yellow-300" /> },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: <FaGit className="text-orange-600" /> },
      { name: 'REST APIs', icon: <span className="text-zinc-300 font-bold text-sm">API</span> },
      { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
      { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
    ],
  },
];

const SkillsGrid = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
        <AuroraText>My Tech Stack</AuroraText>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsByCategory.map((category) => (
          <div
            key={category.category}
            className="bg-zinc-950/40 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.03)]"
          >
            <h3 className="text-lg font-semibold text-zinc-200 mb-4 border-b border-white/10 pb-2">
              {category.category}
            </h3>
            <ul className="space-y-4">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-sm font-medium text-zinc-400">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;