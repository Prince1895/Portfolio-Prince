import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';
import { AuroraText } from './magicui/aurora-text';
import { MagicCard } from './magicui/magic-card';
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx';
import { PiXLogo } from 'react-icons/pi';
import LinearProgress from '@mui/material/LinearProgress';
import { SiTailwindcss, SiDocker, SiGit, SiAmazonwebservices, SiLeetcode, SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { getPortfolioData } from '../utils/portfolioData';
import { Code, Trophy, Cpu, GraduationCap, Calendar, Compass } from 'lucide-react';

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const num = parseFloat(value) || 0;
  const isFloat = value.toString().includes('.');

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 25,
    stiffness: 80,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(num);
    }
  }, [inView, num, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = isFloat
          ? latest.toFixed(1) + suffix
          : Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix, isFloat]);

  return <span ref={ref} className="font-extrabold text-3xl sm:text-4xl text-white">0{suffix}</span>;
};

const BentoGrid = () => {
  const [bentoData, setBentoData] = useState(() => getPortfolioData().bento);
  const [githubContributions, setGithubContributions] = useState(1050);

  useEffect(() => {
    const handleUpdate = () => {
      setBentoData(getPortfolioData().bento);
    };
    window.addEventListener('portfolio-data-updated', handleUpdate);
    return () => window.removeEventListener('portfolio-data-updated', handleUpdate);
  }, []);

  const stats = [
    {
      label: 'LeetCode Solved',
      value: 700,
      suffix: '+',
      icon: <Trophy className="w-5 h-5 text-amber-500" />,
      color: "rgba(245, 158, 11, 0.15)"
    },
    {
      label: 'Projects Built',
      value: 8,
      suffix: '+',
      icon: <Code className="w-5 h-5 text-purple-500" />,
      color: "rgba(168, 85, 247, 0.15)"
    },
    {
      label: 'Years Coding',
      value: 2,
      suffix: '+',
      icon: <Calendar className="w-5 h-5 text-blue-500" />,
      color: "rgba(59, 130, 246, 0.15)"
    },
    {
      label: 'B.Tech CGPA',
      value: 8.315,
      suffix: '',
      icon: <GraduationCap className="w-5 h-5 text-pink-500" />,
      color: "rgba(236, 72, 153, 0.15)"
    },
    {
      label: 'GitHub Commits',
      value: githubContributions,
      suffix: '+',
      icon: <Cpu className="w-5 h-5 text-green-500" />,
      color: "rgba(34, 197, 94, 0.15)"
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-24 px-6" id="stats">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-16">
        Metrics & <AuroraText>Statistics</AuroraText>
      </h2>

      {/* Premium Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {stats.map((s, idx) => (
          <MagicCard
            key={idx}
            className="!bg-zinc-950/40 border border-white/5 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 min-h-[140px]"
            gradientColor={s.color}
            gradientSize={150}
            gradientOpacity={0.2}
          >
            <div className="flex justify-between items-start">
              <span className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                {s.icon}
              </span>
            </div>
            <div className="mt-4">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mt-1">
                {s.label}
              </span>
            </div>
          </MagicCard>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1: Minimal Profile Card */}
        <MagicCard
          className="!bg-zinc-950/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 min-h-[220px]"
          gradientColor="rgba(168, 85, 247, 0.15)"
          gradientSize={200}
          gradientOpacity={0.25}
        >
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-3xl font-extrabold text-white tracking-tight uppercase leading-none mb-2">
              {bentoData.nameLine1}<br />{bentoData.nameLine2}
            </h3>
            <span className="text-zinc-500 font-bold text-xs uppercase tracking-wider">{bentoData.role}</span>
          </div>
          <div className="flex gap-4 items-center text-zinc-400 text-sm border-t border-white/5 pt-4">
            <a href="https://github.com/Prince1895" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <RxGithubLogo className="text-lg" />
            </a>
            <a href="https://linkedin.com/in/prince1184/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <RxLinkedinLogo className="text-lg" />
            </a>
            <a href="https://x.com/Chauhan18Prince" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <PiXLogo className="text-base" />
            </a>
          </div>
        </MagicCard>

        {/* Card 2: Mindset Card (LeetCode rating & DSA) */}
        <MagicCard
          className="!bg-zinc-950/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300"
          gradientColor="rgba(236, 72, 153, 0.15)"
          gradientSize={200}
          gradientOpacity={0.25}
        >
          <div>
            <h4 className="text-[10px] font-bold text-pink-500 uppercase tracking-widest mb-3">Mindset</h4>
            <p className="text-zinc-400 text-xs leading-relaxed mb-4">
              {bentoData.mindsetDescription}
            </p>

            {/* Embedded LeetCode progress mockup widget */}
            <div className="bg-zinc-950/80 border border-white/5 rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SiLeetcode className="text-amber-500 text-lg" />
                <div>
                  <h5 className="text-[11px] font-bold text-white leading-none">LeetCode stats</h5>
                  <span className="text-[9px] text-zinc-500">Rating: 1767</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-white block">
                  700+
                </span>
                <span className="text-[9px] text-zinc-500">Solved</span>
              </div>
            </div>
          </div>
          <span className="text-[9px] text-zinc-500 uppercase mt-4 block">Continuous learning is the key to mastery</span>
        </MagicCard>

        {/* Card 3: Craft Card */}
        <MagicCard
          className="!bg-zinc-950/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300"
          gradientColor="rgba(59, 130, 246, 0.15)"
          gradientSize={200}
          gradientOpacity={0.25}
        >
          <div>
            <h4 className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-3">techStack</h4>
            <p className="text-zinc-400 text-xs leading-relaxed mb-4">
              {bentoData.craftDescription}
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-1.5 text-[9px] font-semibold text-zinc-300 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                <SiReact className="text-sky-400 text-xs" /> React
              </span>
              <span className="flex items-center gap-1.5 text-[9px] font-semibold text-zinc-300 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                <SiNodedotjs className="text-green-500 text-xs" /> Node
              </span>
              <span className="flex items-center gap-1.5 text-[9px] font-semibold text-zinc-300 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                <SiDocker className="text-blue-400 text-xs" /> Docker
              </span>
              <span className="flex items-center gap-1.5 text-[9px] font-semibold text-zinc-300 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                <SiAmazonwebservices className="text-yellow-500 text-xs" /> AWS
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 mt-4 text-[10px] text-zinc-500 uppercase">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span>Open to collaborate</span>
          </div>
        </MagicCard>

        {/* Card 4: Location / Coordinate Card (ABES College) - Span: 2 */}
        <MagicCard
          className="md:col-span-2 !bg-zinc-950/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden min-h-[220px]"
          gradientColor="rgba(168, 85, 247, 0.15)"
          gradientSize={240}
          gradientOpacity={0.25}
        >
          {/* Subtle map coordinate design layout */}
          <div className="flex flex-col sm:flex-row justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-3">
                <Compass className="w-3.5 h-3.5" />
                <span>University</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{bentoData.universityName}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
                {bentoData.universityDescription}
              </p>
            </div>
            <div className="shrink-0 text-left sm:text-right border-l sm:border-l-0 sm:border-r border-white/5 pl-4 sm:pl-0 sm:pr-4 flex flex-col justify-center">
              <span className="text-xs font-bold text-white">{bentoData.locationText}</span>
              <span className="text-[10px] text-zinc-500 block mt-1">{bentoData.coordinatesText}</span>
              <span className="text-[10px] text-zinc-500 block">{bentoData.timezoneText}</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-[9px] text-zinc-555 uppercase tracking-wider border-t border-white/5 pt-4 mt-6 z-10">
            <span>{bentoData.graduationText}</span>
            <span>{bentoData.gradeText}</span>
          </div>
        </MagicCard>

        {/* Card 5: LeetCode Redirect - Span: 1 */}
        <MagicCard
          className="md:col-span-1 !bg-zinc-950/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 min-h-[220px]"
          gradientColor="rgba(245, 158, 11, 0.15)"
          gradientSize={200}
          gradientOpacity={0.25}
        >
          <div>
            <h4 className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-3 font-mono">LeetCode Profile</h4>
            <h3 className="text-xl font-bold text-white mb-2 leading-tight">700+ Problems solved with 1767 highest leetcode rating</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Practicing Algorithms and Data Structures on LeetCode. Explore my solved problems, contests, and achievements.
            </p>
          </div>
          <a
            href="https://leetcode.com/Prince_1184/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center mt-4 py-2.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 text-xs font-bold rounded-xl border border-amber-500/10 hover:border-amber-500/20 transition-all block"
          >
            View LeetCode Profile →
          </a>
        </MagicCard>

      </div>
    </div>
  );
};

export default BentoGrid;
