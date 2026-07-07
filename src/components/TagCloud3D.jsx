import React, { useEffect, useRef, useState } from 'react';
import { AuroraText } from './magicui/aurora-text';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaJava, FaJsSquare, FaReact, FaNodeJs, FaGit, FaPython,
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiPostman, SiFigma, SiMysql, SiDocker, SiAmazonwebservices, SiLinux
} from 'react-icons/si';
import { Briefcase, Code, Star } from 'lucide-react';

const categories = ['All', 'Frontend', 'Backend', 'Databases', 'DevOps', 'Cloud', 'Languages'];

const skillsData = [
  { name: 'JavaScript', category: 'Languages', icon: <FaJsSquare className="text-yellow-400" />, experience: '2+ Years', projects: 12, rating: 85, tooltip: 'High-level, interpreted scripting language' },
  { name: 'React', category: 'Frontend', icon: <FaReact className="text-cyan-400" />, experience: '2+ Years', projects: 9, rating: 80, tooltip: 'Client-side component rendering engine' },
  { name: 'Redux', category: 'Frontend', icon: <SiRedux className="text-purple-500" />, experience: '1+ Year', projects: 4, rating: 70, tooltip: 'Predictable state container for JS apps' },
  { name: 'Node.js', category: 'Backend', icon: <FaNodeJs className="text-green-600" />, experience: '2+ Years', projects: 8, rating: 75, tooltip: 'Asynchronous event-driven JS runtime' },
  { name: 'Express.js', category: 'Backend', icon: <SiExpress className="text-white" />, experience: '2+ Years', projects: 7, rating: 75, tooltip: 'Minimalist web application framework for Node' },
  { name: 'MongoDB', category: 'Databases', icon: <SiMongodb className="text-green-500" />, experience: '1.5+ Years', projects: 6, rating: 75, tooltip: 'Document-based distributed database' },
  { name: 'Java', category: 'Languages', icon: <FaJava className="text-[#f89820]" />, experience: '2+ Years', projects: 5, rating: 80, tooltip: 'Class-based, object-oriented programming language' },
  { name: 'Python', category: 'Languages', icon: <FaPython className="text-yellow-300" />, experience: '1.5+ Years', projects: 4, rating: 70, tooltip: 'Interpreted high-level programming language' },
  { name: 'MySQL', category: 'Databases', icon: <SiMysql className="text-blue-500" />, experience: '1.5+ Years', projects: 5, rating: 70, tooltip: 'Relational database management system' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: <SiTailwindcss className="text-sky-400" />, experience: '2+ Years', projects: 15, rating: 90, tooltip: 'Utility-first CSS framework' },
  { name: 'Git', category: 'DevOps', icon: <FaGit className="text-orange-600" />, experience: '2+ Years', projects: 20, rating: 85, tooltip: 'Distributed version control system' },
  { name: 'Docker', category: 'DevOps', icon: <SiDocker className="text-blue-400" />, experience: '1+ Year', projects: 5, rating: 75, tooltip: 'OS-level virtualization tool' },
  { name: 'AWS', category: 'Cloud', icon: <SiAmazonwebservices className="text-[#ff9900]" />, experience: '1+ Year', projects: 3, rating: 65, tooltip: 'On-demand cloud computing platform' },
  { name: 'Linux', category: 'DevOps', icon: <SiLinux className="text-white" />, experience: '1.5+ Years', projects: 6, rating: 70, tooltip: 'Open-source Unix-like operating system' },
];

const TagCloud3D = () => {
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const elements = container.children;
    const count = skillsData.length;

    // Dimensions
    const width = container.clientWidth;
    const height = container.clientHeight;
    const radius = Math.min(width, height) * 0.4;
    const D = radius * 1.5;

    // Setup initial 3D positions distributed evenly on sphere
    const tags = skillsData.map((_, idx) => {
      const phi = Math.acos(-1 + (2 * idx) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      return {
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
      };
    });

    let angleX = 0.003;
    let angleY = 0.003;

    // Update speeds based on cursor location
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      angleY = x * 0.000015;
      angleX = -y * 0.000015;
    };

    const handleMouseLeave = () => {
      angleX = 0.0025;
      angleY = 0.0025;
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    const rotateX = (tag, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const y = tag.y * cos - tag.z * sin;
      const z = tag.y * sin + tag.z * cos;
      tag.y = y;
      tag.z = z;
    };

    const rotateY = (tag, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const x = tag.x * cos - tag.z * sin;
      const z = tag.x * sin + tag.z * cos;
      tag.x = x;
      tag.z = z;
    };

    let animationId;
    const update = () => {
      tags.forEach((tag, idx) => {
        rotateX(tag, angleX);
        rotateY(tag, angleY);

        const scale = D / (D - tag.z);
        const x2d = tag.x * scale;
        const y2d = tag.y * scale;
        const opacity = (tag.z + radius) / (2 * radius) * 0.65 + 0.35;
        const zIndex = Math.round((tag.z + radius) * 10);

        const el = elements[idx];
        if (el) {
          el.style.transform = `translate3d(${x2d}px, ${y2d}px, 0) scale(${scale})`;
          el.style.opacity = opacity;
          el.style.zIndex = zIndex;
        }
      });

      animationId = requestAnimationFrame(update);
    };

    update();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (container) {
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationId);
    };
  }, []);

  const filteredSkills = selectedCategory === 'All' 
    ? skillsData 
    : skillsData.filter(s => s.category === selectedCategory || (selectedCategory === 'Languages' && s.category === 'Languages'));

  return (
    <div className="w-full py-24 px-6 md:px-12 flex flex-col items-center justify-center bg-transparent" id="skills">
      <div className="max-w-6xl w-full flex flex-col items-center">
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-6">
          Skills & <AuroraText>Technologies</AuroraText>
        </h2>
        
        <p className="text-center text-zinc-400 text-sm sm:text-base max-w-xl mb-12 leading-relaxed">
          Hover over the interactive cloud to rotate the sphere. Filter categories to highlight specific stacks and view details below.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide border transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-purple-600 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                  : 'bg-zinc-950/40 border-white/5 text-zinc-450 hover:text-white hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center justify-center">
          
          {/* Left Column: 3D Sphere (6 cols) */}
          <div className="lg:col-span-6 flex justify-center items-center relative h-[360px] sm:h-[450px]">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-radial-gradient from-purple-500/5 to-transparent blur-3xl pointer-events-none" />

            <div 
              ref={containerRef} 
              className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] flex items-center justify-center rounded-full border border-white/5 bg-zinc-950/[0.02] backdrop-blur-xs select-none"
            >
              {skillsData.map((tag, idx) => {
                const isHighlighted = selectedCategory === 'All' || tag.category === selectedCategory || (selectedCategory === 'Languages' && tag.category === 'Languages');
                
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredSkill(tag)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full border backdrop-blur-sm text-[10px] sm:text-xs font-semibold cursor-pointer transition-all duration-300 select-none whitespace-nowrap shadow-md ${
                      isHighlighted 
                        ? 'bg-zinc-950/80 border-white/10 text-white hover:border-purple-500/50 hover:bg-purple-950/40' 
                        : 'bg-zinc-950/10 border-white/[0.02] text-zinc-600 pointer-events-none opacity-10'
                    }`}
                  >
                    <span className="text-sm flex items-center justify-center">{tag.icon}</span>
                    <span>{tag.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Skill Cards Grid (6 cols) */}
          <div className="lg:col-span-6 w-full">
            <h3 className="text-xl font-bold text-zinc-300 mb-6 font-sans">
              {selectedCategory} Stack Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[420px] overflow-y-auto pr-2 scrollbar-thin">
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill) => (
                  <motion.div
                    layout
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 rounded-2xl bg-zinc-950/40 border border-white/5 flex flex-col justify-between hover:border-white/10 hover:bg-zinc-900/20 transition-all duration-300 group cursor-default relative overflow-hidden"
                  >
                    {/* Background glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/0 via-purple-500/[0.01] to-purple-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{skill.icon}</span>
                          <span className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">{skill.name}</span>
                        </div>
                        <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest bg-white/[0.03] px-2 py-0.5 rounded-md border border-white/5">
                          {skill.category}
                        </span>
                      </div>
                      
                      <p className="text-[11px] text-zinc-400 leading-relaxed min-h-[32px] mb-4">
                        {skill.tooltip}
                      </p>
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-white/5 relative z-10 text-[10px] text-zinc-550">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3 text-purple-400" />
                        <span>{skill.experience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Code className="w-3 h-3 text-blue-400" />
                        <span>{skill.projects} Projects</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TagCloud3D;
