import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AuroraText } from './magicui/aurora-text';
import { MagicCard } from './magicui/magic-card';
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx';
import { PiXLogo } from 'react-icons/pi';
import LinearProgress from '@mui/material/LinearProgress';
import { SiTailwindcss, SiDocker, SiGit, SiAmazonwebservices, SiLeetcode } from 'react-icons/si';
import { getPortfolioData } from '../utils/portfolioData';

const BentoGrid = () => {
  const [bentoData, setBentoData] = useState(() => getPortfolioData().bento);
  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [loadingLeetcode, setLoadingLeetcode] = useState(true);

  useEffect(() => {
    const handleUpdate = () => {
      setBentoData(getPortfolioData().bento);
    };
    window.addEventListener('portfolio-data-updated', handleUpdate);
    return () => window.removeEventListener('portfolio-data-updated', handleUpdate);
  }, []);

  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/Prince_1184')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch Leetcode stats');
        return res.json();
      })
      .then((data) => {
        setLeetcodeStats(data);
        setLoadingLeetcode(false);
      })
      .catch((err) => {
        console.error(err);
        setLoadingLeetcode(false);
      });
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-4" id="about">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
        <AuroraText>Dashboard & Stats</AuroraText>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Minimal Profile Card */}
        <MagicCard
          className="!bg-zinc-950/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 min-h-[200px]"
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
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
              {bentoData.mindsetDescription}
            </p>
            
            {/* Embedded LeetCode progress mockup widget */}
            <div className="bg-zinc-950/80 border border-white/5 rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SiLeetcode className="text-amber-500 text-lg" />
                <div>
                  <h5 className="text-[11px] font-bold text-white leading-none">LeetCode stats</h5>
                  <span className="text-[9px] text-zinc-500">Rating: 1720+</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-white block">
                  {loadingLeetcode ? '...' : leetcodeStats ? leetcodeStats.totalSolved : '350+'}
                </span>
                <span className="text-[9px] text-zinc-500">Solved</span>
              </div>
            </div>
          </div>
          <span className="text-[10px] text-zinc-500 uppercase mt-4 block">Mastering body and mind is my path to excellence</span>
        </MagicCard>

        {/* Card 3: Craft Card */}
        <MagicCard
          className="!bg-zinc-950/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300"
          gradientColor="rgba(59, 130, 246, 0.15)"
          gradientSize={200}
          gradientOpacity={0.25}
        >
          <div>
            <h4 className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-3">Craft</h4>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
              {bentoData.craftDescription}
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-1 text-[10px] font-semibold text-zinc-300 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                <SiTailwindcss className="text-sky-400 text-xs" /> Tailwind
              </span>
              <span className="flex items-center gap-1 text-[10px] font-semibold text-zinc-300 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                <SiDocker className="text-blue-400 text-xs" /> Docker
              </span>
              <span className="flex items-center gap-1 text-[10px] font-semibold text-zinc-300 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                <SiGit className="text-orange-500 text-xs" /> Git
              </span>
              <span className="flex items-center gap-1 text-[10px] font-semibold text-zinc-300 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
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
              <h4 className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-3">University</h4>
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

          <div className="flex justify-between items-center text-[10px] text-zinc-500 uppercase tracking-wide border-t border-white/5 pt-4 mt-6 z-10">
            <span>{bentoData.graduationText}</span>
            <span>{bentoData.gradeText}</span>
          </div>
        </MagicCard>

        {/* Card 5: LeetCode Graph / stats panel - Span: 1 */}
        <MagicCard
          className="md:col-span-1 !bg-zinc-950/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300"
          gradientColor="rgba(236, 72, 153, 0.15)"
          gradientSize={200}
          gradientOpacity={0.25}
        >
          <div>
            <h4 className="text-[10px] font-bold text-pink-500 uppercase tracking-widest mb-3">LeetCode breakdown</h4>
            {loadingLeetcode ? (
              <div className="space-y-2 py-4">
                <LinearProgress color="inherit" className="text-zinc-800" />
                <p className="text-[10px] text-zinc-500">Loading ranking details...</p>
              </div>
            ) : leetcodeStats ? (
              <div className="space-y-2 text-xs">
                <div className="flex justify-between pb-1 border-b border-white/5">
                  <span className="text-zinc-500">Ranking</span>
                  <span className="text-zinc-200 font-semibold">#{leetcodeStats.ranking}</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-green-400">Easy</span>
                  <span className="text-zinc-300">{leetcodeStats.easySolved}</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-amber-400">Medium</span>
                  <span className="text-zinc-300">{leetcodeStats.mediumSolved}</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-red-400">Hard</span>
                  <span className="text-zinc-300">{leetcodeStats.hardSolved}</span>
                </div>
              </div>
            ) : (
              <p className="text-[10px] text-red-500">Stats offline</p>
            )}
          </div>
          <a
            href="https://leetcode.com/Prince_1184/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center mt-4 py-2 bg-purple-600/10 hover:bg-purple-600/20 text-purple-400 text-xs font-semibold rounded-xl border border-purple-500/10 hover:border-purple-500/20 transition-all block"
          >
            Explore LeetCode →
          </a>
        </MagicCard>

        {/* Card 6: GitHub Readme Stats - Span: 3 */}
        <MagicCard
          className="md:col-span-3 !bg-zinc-950/40 border border-white/5 rounded-3xl p-6 flex flex-col md:flex-row gap-6 justify-around items-center transition-all duration-300"
          gradientColor="rgba(168, 85, 247, 0.12)"
          gradientSize={300}
          gradientOpacity={0.2}
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=Prince1895&show_icons=true&theme=transparent&text_color=a1a1aa&bg_color=00000000&title_color=ffffff&icon_color=a855f7&hide_border=true"
            alt="GitHub Stats"
            className="w-full max-w-[280px]"
          />
          <div className="h-px md:h-32 w-full md:w-px bg-white/10" />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Prince1895&layout=compact&theme=transparent&text_color=a1a1aa&bg_color=00000000&title_color=ffffff&icon_color=a855f7&hide_border=true"
            alt="Top Languages"
            className="w-full max-w-[280px]"
          />
        </MagicCard>

        {/* Card 7: GitHub Heatmap - Span: 3 */}
        <MagicCard
          className="md:col-span-3 !bg-zinc-950/40 border border-white/5 rounded-3xl p-6 transition-all duration-300"
          gradientColor="rgba(168, 85, 247, 0.12)"
          gradientSize={300}
          gradientOpacity={0.2}
        >
          <div className="w-full flex justify-between items-center mb-4 text-xs sm:text-sm text-zinc-400">
            <span className="font-semibold text-zinc-300">GitHub Contributions Calendar</span>
            <span>@Prince1895</span>
          </div>
          <div className="w-full overflow-x-auto py-2">
            <img
              src="https://ghchart.rshah.org/a855f7/Prince1895"
              alt="GitHub Contributions Heatmap"
              className="min-w-[620px] w-full max-w-2xl rounded-lg filter brightness-110 contrast-125 mx-auto"
            />
          </div>
        </MagicCard>

      </div>
    </div>
  );
};

export default BentoGrid;
