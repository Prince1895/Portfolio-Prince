"use client";
import React, { useState, useEffect, useRef } from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { FaExternalLinkAlt, FaGithub, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Fluximage from "@/assets/Fluximage.png";
import DistributedApigatewayimage from "@/assets/DistributedApigatewayimage.png";
import bluecarbonregistryimage from "@/assets/bluecarbonregistryimage.png";
import LevelUp from "@/assets/Levelup.png";
import DomikoProjectImage from "@/assets/DomikoProjectImage.png";
import portfolioImage from "@/assets/portfolio image.png";
import MathVenture from "@/assets/MathVenture.png";
import { getPortfolioData } from "../utils/portfolioData";
import { Sparkles, CheckCircle2 } from "lucide-react";

// Helper map to associate image names to their asset variables
const imageMap = {
  "01": Fluximage,
  "02": DistributedApigatewayimage,
  "03": bluecarbonregistryimage,
  "04": LevelUp,
  "05": DomikoProjectImage,
  "06": portfolioImage,
  "07": MathVenture,
};

// Rich details map (Key Features, Impacts, and Case Studies) to attach to projects based on ID
const projectDetailsMap = {
  "proj-1": {
    features: ["AWS cost optimization tools", "Automated multi-region scans", "Idle resource optimization report", "Multi-tenant SaaS dashboard"],
    impact: ["Reduced AWS waste by ~30%", "Scanned 50+ regions", "Under 10s analysis time"],
    caseStudy: "#",
  },
  "proj-2": {
    features: ["Redis token-bucket rate limiters", "Asynchronous ClickHouse logging", "AI anomaly security (Ollama)", "Worker Threads multithreading"],
    impact: ["Transit speeds < 10ms", "Handles 10k+ req/sec", "Real-time threat blocking"],
    caseStudy: "#",
  },
  "proj-3": {
    features: ["Solidity Smart Contracts", "Decentralized blockchain state", "Prisma/PostgreSQL transactions", "Auditable MRV workflows"],
    impact: ["100% transparent audits", "Zero double-spend risk", "Secure API checkpoints"],
    caseStudy: "#",
  },
  "proj-4": {
    features: ["RBAC security guards", "Razorpay payments API integration", "WebSockets learning progress", "Scaling MERN architecture"],
    impact: ["99.9% checkout success", "Real-time updates", "Robust media pipelines"],
    caseStudy: "#",
  },
  "proj-5": {
    features: ["JWT authentication shields", "Sleek Markdown publishing editors", "ImageKit asset optimization", "MERN CMS workflows"],
    impact: ["Sub-second page loading", "Admin-level workspace", "Optimized media delivery"],
    caseStudy: "#",
  },
  "proj-6": {
    features: ["Rotating 3D skill sphere", "Spring physics Bento stats", "Framer Motion vertical timelines", "Floating AI Assistant"],
    impact: ["Fluid scroll experiences", "Fast device loading rates", "Responsive styling"],
    caseStudy: "#",
  },
  "proj-7": {
    features: ["Gamified basic arithmetic", "Adaptive quiz logic layouts", "Tailwind animations UI", "Netlify client delivery"],
    impact: ["High pupil-friendly contrast", "100% offline responsive", "Engaging game graphics"],
    caseStudy: "#",
  }
};

// Custom Tilt and Glow Card Wrapper
const TiltCard = ({ children, gradient }) => {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    // Calculate rotation: center of card is 0
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -6; // max 6 deg
    const rotY = ((x - centerX) / centerX) * 6; // max 6 deg
    setRotate({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full rounded-3xl border border-white/5 bg-gradient-to-b ${gradient || 'from-purple-600/20 via-indigo-800/5 to-transparent'} backdrop-blur-md overflow-hidden flex flex-col justify-between p-6 sm:p-8 min-h-[380px] sm:min-h-[440px] transition-all duration-500 hover:border-purple-500/20 shadow-2xl group`}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: isHovered ? 'transform 0.05s ease-out, border-color 0.3s' : 'transform 0.5s ease, border-color 0.3s'
      }}
    >
      {/* Spotlight overlay */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, rgba(168, 85, 247, 0.15), transparent 80%)`
          }}
        />
      )}
      {children}
    </div>
  );
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
    <div className="w-full px-6 sm:px-12 py-24 bg-transparent" id="projects">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-16">
        Featured <AuroraText>Projects</AuroraText>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projectList.slice(0, visibleCount).map((project, index) => {
          const detail = projectDetailsMap[project.id] || projectDetailsMap[`proj-${index + 1}`] || {
            features: ["Responsive layout", "Optimal database routes"],
            impact: ["Optimized rendering", "Responsive views"],
            caseStudy: "#"
          };

          return (
            <motion.div 
              key={index} 
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              
              {/* Header row: Number + Category on Left, Status Label on Right */}
              <div className="flex justify-between items-center mb-3">
                <div className="text-[10px] sm:text-xs font-bold text-zinc-555 uppercase tracking-widest flex items-center gap-2 font-mono">
                  <span>{project.num}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                  <span>{project.type}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[9px] font-bold text-green-400 uppercase tracking-widest bg-green-500/5 px-2.5 py-0.5 rounded-full border border-green-500/10">
                  <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" /> Active
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight tracking-tight hover:text-purple-400 transition-colors">
                {project.title}
              </h3>

              {/* Main Project Card (Mockup image at bottom) */}
              <TiltCard gradient={project.gradient}>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    {/* Description */}
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features list */}
                    <div className="mb-6">
                      <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block mb-2 font-mono">Key Features</span>
                      <div className="grid grid-cols-2 gap-2">
                        {detail.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-zinc-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                            <span className="truncate">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Impact metrics / badges */}
                    <div className="mb-6">
                      <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block mb-2 font-mono">Project Impact</span>
                      <div className="flex flex-wrap gap-1.5">
                        {detail.impact.map((imp, i) => (
                          <span key={i} className="text-[9px] font-bold text-zinc-300 bg-white/5 border border-white/5 px-2 py-0.5 rounded-md flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 text-yellow-500" /> {imp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mockup Image */}
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/5 shadow-2xl mt-auto transition-transform duration-500 group-hover:scale-[1.02]">
                    <img
                      src={imageMap[project.num] || portfolioImage}
                      alt={project.title}
                      className="object-cover w-full h-full filter brightness-95 group-hover:brightness-100 transition-all"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent pointer-events-none" />
                  </div>
                </div>
              </TiltCard>

              {/* Tech Badges & Dynamic Buttons (Outside the card) */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center mt-5">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 max-w-sm">
                  {project.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-white/5 text-zinc-400 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white text-xs font-semibold transition-colors"
                  >
                    <FaGithub /> GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-400 hover:text-white hover:bg-purple-600 transition-all text-xs font-semibold"
                    >
                      Demo <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  )}

                  <a
                    href={detail.caseStudy}
                    onClick={(e) => {
                      if (detail.caseStudy === '#') {
                        e.preventDefault();
                        alert("Case study in compilation.");
                      }
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white text-xs font-semibold transition-colors"
                  >
                    <FaFileAlt /> Case Study
                  </a>
                </div>
              </div>

            </motion.div>
          );
        })}
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
