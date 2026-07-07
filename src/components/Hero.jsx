import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import avtar from '../assets/profile_img.png';
import { ArrowRight, MapPin, Briefcase, Users, Code, Award, FileText, Send } from 'lucide-react';
import { getPortfolioData } from '../utils/portfolioData';
import {
  SiReact, SiNodedotjs, SiDocker, SiAmazonwebservices, SiPython, SiMongodb
} from 'react-icons/si';

const Hero = () => {
  const [heroData, setHeroData] = useState(() => getPortfolioData().hero);
  const [leetcodeSolved, setLeetcodeSolved] = useState('700+');
  const [githubFollowers, setGithubFollowers] = useState('100+');

  useEffect(() => {
    const handleUpdate = () => {
      setHeroData(getPortfolioData().hero);
    };
    window.addEventListener('portfolio-data-updated', handleUpdate);
    return () => window.removeEventListener('portfolio-data-updated', handleUpdate);
  }, []);



  // Fetch GitHub followers count
  useEffect(() => {
    fetch('https://api.github.com/users/Prince1895')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.followers) {
          setGithubFollowers(data.followers);
        }
      })
      .catch((err) => console.error('Error fetching GitHub followers:', err));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const floatingBadges = [
    { icon: <SiReact className="text-[#61DAFB] text-xl" />, label: 'React', x: '-15%', y: '10%' },
    { icon: <SiNodedotjs className="text-[#339933] text-xl" />, label: 'Node', x: '110%', y: '20%' },
    { icon: <SiDocker className="text-[#2496ED] text-xl" />, label: 'Docker', x: '-25%', y: '65%' },
    { icon: <SiAmazonwebservices className="text-[#FF9900] text-xl" />, label: 'AWS', x: '105%', y: '75%' },
    { icon: <SiPython className="text-[#3776AB] text-xl" />, label: 'Python', x: '10%', y: '105%' },
    { icon: <SiMongodb className="text-[#47A248] text-xl" />, label: 'MongoDB', x: '80%', y: '-10%' },
  ];

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex items-center justify-center px-6 md:px-12 relative overflow-hidden pt-28 pb-16"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Side: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md w-fit mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-zinc-300 uppercase tracking-widest">
              Open to Internships & Freelance
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-white"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Hi, I'm <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
              Prince Kumar
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl mt-4 font-bold text-zinc-200 tracking-tight"
          >
            Full Stack Engineer

          </motion.h2>

          {/* Intro description */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl"
          >
            Building AI-powered applications, scalable backend systems, and cloud-native software with modern full-stack technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-4 items-center"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-xs hover:bg-zinc-250 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:scale-105"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white font-bold text-xs hover:bg-zinc-800 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              Hire Me <Send className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://drive.google.com/file/d/1KKEPoSi_2H_QYdSgHtQZmlwlb50Igra2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-transparent border border-purple-500/30 hover:border-purple-500/50 text-purple-400 font-bold text-xs hover:bg-purple-500/5 transition-all duration-300 hover:scale-105"
            >
              Resume <FileText className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Info Details Section */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-purple-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">Location</span>
                <span className="text-xs font-semibold text-zinc-300">Delhi NCR, India</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-blue-400">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">GitHub</span>
                <span className="text-xs font-semibold text-zinc-300">{githubFollowers} Followers</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-yellow-500">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">LeetCode</span>
                <span className="text-xs font-semibold text-zinc-300">{leetcodeSolved} Solved</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-green-400">
                <Code className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">Experience</span>
                <span className="text-xs font-semibold text-zinc-300">2+ Years Coding</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-pink-400">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">Availability</span>
                <span className="text-xs font-semibold text-zinc-300">Freelance /Fulltime</span>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Right Side: Image with floating badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative mt-12 lg:mt-0"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 select-none">
            {/* Pulsing Backglows */}
            <div className="absolute inset-[-10px] rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 blur-2xl opacity-30 animate-pulse duration-4000" />

            {/* Floating Image Container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500 overflow-visible shadow-2xl"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-zinc-950 border border-white/10 relative">
                <img
                  src={avtar}
                  alt="Prince Kumar"
                  className="w-full h-full object-cover relative z-10 filter hover:brightness-110 transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Floating Tech Badges */}
            {floatingBadges.map((badge, idx) => (
              <motion.div
                key={idx}
                style={{ left: badge.x, top: badge.y }}
                animate={{ y: [0, idx % 2 === 0 ? -8 : 8, 0] }}
                transition={{
                  duration: 4 + idx,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.2
                }}
                className="absolute w-12 h-12 rounded-xl bg-zinc-950/80 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-xl cursor-pointer hover:border-purple-500/50 hover:bg-zinc-900 transition-colors z-20 group"
                title={badge.label}
              >
                {badge.icon}
                <div className="absolute bottom-full mb-2 hidden group-hover:block bg-zinc-900 border border-white/10 text-white text-[9px] px-2 py-0.5 rounded-md whitespace-nowrap shadow-md">
                  {badge.label}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
