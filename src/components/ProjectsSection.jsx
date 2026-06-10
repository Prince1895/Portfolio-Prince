"use client";
import React, { useState, useEffect } from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { FaExternalLinkAlt, FaStar } from "react-icons/fa";
import portfolioprojectimage from "@/assets/portfolioproject.png";
import DomikoProjectImage from "@/assets/DomikoProjectImage.png";
import MathVenture from "@/assets/MathVenture.png";
import LevelUp from "@/assets/Levelup.png";
import { getPortfolioData } from "../utils/portfolioData";

// Helper map to associate image names to their asset variables
const imageMap = {
  "01": portfolioprojectimage,
  "02": DomikoProjectImage,
  "03": MathVenture,
  "04": LevelUp,
};

const ProjectsSection = () => {
  const [projectList, setProjectList] = useState(() => getPortfolioData().projects);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const handleUpdate = () => {
      setProjectList(getPortfolioData().projects);
    };
    window.addEventListener('portfolio-data-updated', handleUpdate);
    return () => window.removeEventListener('portfolio-data-updated', handleUpdate);
  }, []);

  return (
    <div className="w-full px-4 sm:px-10 py-20 bg-transparent" id="projects">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">
        Featured <AuroraText>Projects</AuroraText>
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
        {projectList.slice(0, visibleCount).map((project, index) => (
          <div key={index} className="flex flex-col">
            
            {/* Header row: Number + Category on Left, Star Button on Right */}
            <div className="flex justify-between items-center mb-2">
              <div className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <span>{project.num}</span>
                <span className="w-1 h-1 rounded-full bg-zinc-700" />
                <span>{project.type}</span>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full bg-purple-600/10 border border-purple-500/20 text-purple-400 hover:text-white hover:bg-purple-600 hover:border-purple-500 text-[10px] sm:text-xs font-bold transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.05)]"
              >
                <FaStar className="text-[10px] sm:text-xs" /> Star
              </a>
            </div>

            {/* Project Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              {project.title}
            </h3>

            {/* Main Project Card (Mockup image at bottom) */}
            <div className={`w-full rounded-3xl border border-white/5 bg-gradient-to-b ${project.gradient || 'from-purple-600/25 via-indigo-800/10 to-transparent'} backdrop-blur-md overflow-hidden flex flex-col justify-between p-6 sm:p-8 min-h-[360px] sm:min-h-[420px] transition-all duration-300 hover:border-white/10 group`}>
              {/* Description (Top) */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Mockup Image (Bottom) */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/5 mt-auto shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={imageMap[project.num] || portfolioprojectimage}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Tech Badges & External Link (Outside the card) */}
            <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
              <div className="flex flex-wrap gap-1.5">
                {project.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-white/5 text-zinc-400 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white font-bold text-xs flex items-center gap-1 transition-colors self-end"
                >
                  Live <FaExternalLinkAlt className="text-[10px]" />
                </a>
              )}
            </div>

          </div>
        ))}
      </div>

      {/* Dynamic Show More Toggle */}
      {projectList.length > 4 && (
        <div className="flex justify-center mt-16">
          <button
            onClick={() => setVisibleCount(prev => prev === 4 ? projectList.length : 4)}
            className="px-6 py-3 rounded-full bg-zinc-950 border border-white/5 text-zinc-400 hover:text-white hover:border-white/10 hover:bg-zinc-900 text-xs font-bold transition-all tracking-wide shadow-lg hover:scale-105"
          >
            {visibleCount === 4 ? `Show More Projects (${projectList.length - 4})` : "Show Less"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
