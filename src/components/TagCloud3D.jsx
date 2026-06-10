import React, { useEffect, useRef } from 'react';
import { AuroraText } from './magicui/aurora-text';
import {
  FaJava, FaJsSquare, FaReact, FaNodeJs, FaGit, FaPython,
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiPostman, SiFigma, SiMysql, SiDocker, SiAmazonwebservices, SiLinux
} from 'react-icons/si';

const tagsData = [
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Express.js', icon: <SiExpress className="text-white" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'Java', icon: <FaJava className="text-[#f89820]" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-300" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'Git', icon: <FaGit className="text-orange-600" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
  { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
  { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },
  { name: 'AWS', icon: <SiAmazonwebservices className="text-[#ff9900]" /> },
  { name: 'Linux', icon: <SiLinux className="text-white" /> },
];

const TagCloud3D = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const elements = container.children;
    const count = tagsData.length;

    // Dimensions
    const width = container.clientWidth;
    const height = container.clientHeight;
    const radius = Math.min(width, height) * 0.4;
    const D = radius * 1.5; // Camera perspective distance

    // Setup initial 3D positions distributed evenly on sphere
    const tags = tagsData.map((data, idx) => {
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
      angleY = x * 0.00002;
      angleX = -y * 0.00002;
    };

    const handleMouseLeave = () => {
      angleX = 0.002;
      angleY = 0.002;
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
        const opacity = (tag.z + radius) / (2 * radius) * 0.7 + 0.3;
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

  return (
    <div className="w-full py-16 px-4 flex flex-col items-center justify-center bg-transparent" id="skills">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6">
        <AuroraText>Interactive Skills Sphere</AuroraText>
      </h2>
      <p className="text-center text-zinc-400 text-sm sm:text-base max-w-md mb-12 leading-relaxed">
        Hover over the cloud to rotate and explore the technologies I build with.
      </p>
      
      {/* 3D Sphere Container */}
      <div 
        ref={containerRef} 
        className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] flex items-center justify-center rounded-full border border-white/5 bg-zinc-950/10 backdrop-blur-xs shadow-[0_0_50px_rgba(168,85,247,0.02)]"
      >
        {/* Glow center */}
        <div className="absolute inset-0 rounded-full bg-radial-gradient from-purple-500/5 to-transparent blur-2xl pointer-events-none" />

        {tagsData.map((tag, idx) => (
          <div
            key={idx}
            className="absolute flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950/80 border border-white/5 backdrop-blur-sm text-xs font-semibold text-zinc-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-950/40 transition-colors duration-200 cursor-pointer select-none whitespace-nowrap shadow-md"
          >
            <span className="text-base flex items-center justify-center">{tag.icon}</span>
            <span>{tag.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagCloud3D;
