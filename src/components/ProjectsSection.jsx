"use client";
import React from "react";
import { MagicCard } from "@/components/magicui/magic-card";
import { AuroraText } from "@/components/magicui/aurora-text";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import portfolioprojectimage from "@/assets/portfolioproject.png";
import DomikoProjectImage from "@/assets/DomikoProjectImage.png";
import MathVenture from "@/assets/MathVenture.png";
import { ShimmerButton } from "./magicui/shimmer-button";

const projects = [
  {
    title: "Portfolio - Prince Kumar",
    description:
      "A personal portfolio built with React, Tailwind CSS, and animations.",
    image: portfolioprojectimage,
    skills: ["React", "Tailwind CSS", "Framer Motion","Magic Ui", "Shadcn UI"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
  },
  {
    title: "Domiko - Where Ideas Click",
    description:
      "A full-stack Blogging Platform with JWT auth and RESTful API.",
    image: DomikoProjectImage,
    github: "https://github.com/Prince1895/Domiko",
    live: "https://domiko-client.vercel.app/",
    skills: ["MongoDB", "Express", "React", "Node.js", "JWT","imagekit.io"],
  },
  {
    title: "MathVenture - Math Learning App for (3-8) Year Olds",
    description:
      "MathVenture is a web-based math game that teaches kids basic operations (add, subtract, multiply, divide).",
    image: MathVenture,
    github: "https://github.com/Prince1895/MathVenture",
    live: "https://mathventure-math-game.netlify.app/",
    skills: ["React","Tailwind CSS" , "JavaScript", "Netlify"],
  },
];

const ProjectsSection = () => {
  return (
    <div className="w-full px-4 mt-16 sm:px-10 py-16 bg-white" id="projects">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
        <AuroraText>Projects</AuroraText>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <MagicCard
            key={index}
            gradientColor="#ADD8E6"
            
            gradientOpacity={0.4}
            gradientSize={200}
            className="w-full h-full !bg-white shadow-xl rounded-xl p-5 flex flex-col"
          >
            {/* Image with bottom fade */}
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg group">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-105"
              />
              {/* Bottom fade overlay */}
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-[#1a1a1a] to-transparent pointer-events-none" />
            </div>

            {/* Title & Description */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full border border-blue-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <ShimmerButton className="px-3 py-1 text-sm">
                  <span className="flex items-center gap-2">
                    <FaGithub /> Source
                  </span>
                </ShimmerButton>
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ShimmerButton className="px-3 py-1 text-sm">
                  <span className="flex items-center gap-2">
                    <FaExternalLinkAlt /> Website
                  </span>
                </ShimmerButton>
              </a>
            </div>
          </MagicCard>

        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
