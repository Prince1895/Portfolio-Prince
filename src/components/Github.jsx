import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { AuroraText } from './magicui/aurora-text';
import { MagicCard } from './magicui/magic-card';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaFolder, FaCircle } from 'react-icons/fa';
import {
  SiReact, SiNodedotjs, SiDocker, SiAmazonwebservices, SiRedis, SiPostgresql, SiTailwindcss, SiEthereum, SiOpenai
} from 'react-icons/si';
import {
  Cpu, Sparkles, Brain, Database, Cloud, Layers, Globe, Coins, Shield, Zap, Flame, Award, Users
} from 'lucide-react';

const featuredRepos = [
  {
    id: "proj-1",
    name: "Flux — Cloud Cost Optimization Engine",
    category: "Cloud Platform",
    description: "A multi-tenant SaaS platform that detects idle AWS resources, estimates cloud cost savings, and automates infrastructure optimization across multiple AWS regions.",
    highlightBadges: ["AWS", "Docker", "PostgreSQL", "Redis", "SaaS"],
    github: "https://github.com/Prince1895/Flux",
    live: "https://flux-web-azure.vercel.app/",
    isFeatured: true,
    gradient: "from-orange-500/20 via-amber-600/5 to-transparent",
    borderColor: "rgba(249, 115, 22, 0.25)"
  },
  {
    id: "proj-2",
    name: "Distributed API Gateway & Log Analytics",
    category: "Distributed Systems",
    description: "A distributed API Gateway featuring Redis-powered rate limiting, JWT identity tracking, ClickHouse log analytics, WebSockets, Worker Threads, and AI-powered anomaly detection using Ollama.",
    highlightBadges: ["Redis", "ClickHouse", "Docker", "WebSockets", "AI"],
    github: "https://github.com/Prince1895/ai-security-cluster",
    live: null,
    isFeatured: false,
    gradient: "from-red-500/20 via-orange-600/5 to-transparent",
    borderColor: "rgba(239, 68, 68, 0.15)"
  },
  {
    id: "proj-3",
    name: "Carbon Credit Verification System",
    category: "Blockchain",
    description: "A decentralized blockchain platform that verifies carbon credits using Ethereum smart contracts and secure backend APIs.",
    highlightBadges: ["Solidity", "Ethereum", "PostgreSQL", "Prisma"],
    github: "https://github.com/Prince1895/SIH25038-poject-Blockchain--Based-Blue-Carbon-Registry-and-MRV-System",
    live: null,
    isFeatured: false,
    gradient: "from-emerald-500/20 via-green-600/5 to-transparent",
    borderColor: "rgba(16, 185, 129, 0.15)"
  },
  {
    id: "proj-4",
    name: "LevelUp – Scalable E-Learning Platform",
    category: "EdTech Platform",
    description: "A scalable e-learning platform with RBAC authentication, REST APIs, Razorpay payments, WebSocket-based progress tracking, and cloud deployment.",
    highlightBadges: ["Node.js", "MongoDB", "AWS", "Razorpay"],
    github: "https://github.com/Prince1895/LevelUP",
    live: "https://levelup01.vercel.app/",
    isFeatured: false,
    gradient: "from-blue-500/20 via-sky-600/5 to-transparent",
    borderColor: "rgba(59, 130, 246, 0.15)"
  }
];

// Helper to count up animated numbers
const AnimatedValue = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const numericVal = parseFloat(value.toString().replace(/,/g, '')) || 0;
  const isFloat = value.toString().includes('.');
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { damping: 25, stiffness: 180 });

  useEffect(() => {
    if (inView) {
      motionVal.set(numericVal);
    }
  }, [inView, numericVal, motionVal]);

  useEffect(() => {
    return springVal.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = isFloat
          ? latest.toFixed(1) + suffix
          : Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springVal, suffix, isFloat]);

  return <span ref={ref} className="text-xl sm:text-2xl font-black text-white">0{suffix}</span>;
};

const Github = () => {
  const [statsError, setStatsError] = useState(false);
  const [streakError, setStreakError] = useState(false);

  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-transparent overflow-hidden" id="github">

      {/* Soft background glow accents */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Title & Subtitle */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
            Open Source & <AuroraText>GitHub Activity</AuroraText>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A snapshot of my open-source work, engineering projects, and development activity across GitHub.
          </p>
        </div>

        {/* Featured Repositories Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <FaFolder className="text-purple-400 text-lg" />
            <h3 className="text-lg font-bold text-zinc-200 font-mono tracking-wide">Featured Repositories</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredRepos.map((repo, idx) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className={`relative rounded-3xl border p-6 flex flex-col justify-between min-h-[220px] transition-all duration-300 backdrop-blur-md bg-zinc-950/40 hover:bg-zinc-900/10 shadow-lg group`}
                style={{ borderColor: repo.isFeatured ? 'rgba(168, 85, 247, 0.3)' : 'rgba(255,255,255,0.05)' }}
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider font-mono bg-purple-500/5 px-2.5 py-0.5 rounded-full border border-purple-500/10">
                      {repo.category}
                    </span>
                    {repo.isFeatured && (
                      <span className="flex items-center gap-1 text-[9px] font-bold text-yellow-400 uppercase tracking-widest bg-yellow-400/5 px-2.5 py-0.5 rounded-full border border-yellow-400/10">
                        <Sparkles className="w-2.5 h-2.5" /> Featured
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
                    {repo.name}
                  </h4>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                    {repo.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/5 mt-auto">
                  {/* Highlight Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {repo.highlightBadges.map((badge) => (
                      <span key={badge} className="text-[9px] font-semibold text-zinc-500 bg-white/5 px-2 py-0.5 rounded-md">
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={repo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white text-xs font-semibold transition-colors"
                    >
                      <FaGithub className="text-[11px]" /> GitHub
                    </a>
                    {repo.live && (
                      <a
                        href={repo.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-650/10 border border-purple-500/20 text-purple-400 hover:text-white hover:bg-purple-600 text-xs font-semibold transition-all"
                      >
                        Demo <FaExternalLinkAlt className="text-[9px]" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bento Grid: Metrics, Stack, Current focus */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

          {/* Column 1: Engineering Metrics */}
          <MagicCard
            className="!bg-zinc-950/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 min-h-[360px]"
            gradientColor="rgba(168, 85, 247, 0.15)"
            gradientSize={200}
            gradientOpacity={0.25}
          >
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-4">
                <Cpu className="w-3.5 h-3.5" />
                <span>Engineering Metrics</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900/30 border border-white/5 p-3 rounded-2xl flex flex-col justify-center">
                  <span className="text-[9px] text-zinc-550 block font-bold uppercase tracking-wide">Repositories</span>
                  <AnimatedValue value={10} suffix="+" />
                </div>
                {/* <div className="bg-zinc-900/30 border border-white/5 p-3 rounded-2xl flex flex-col justify-center">
                  <span className="text-[9px] text-zinc-550 block font-bold uppercase tracking-wide">Contributions</span>
                  <AnimatedValue value={1050} suffix="+" />
                </div> */}
                <div className="bg-zinc-900/30 border border-white/5 p-3 rounded-2xl flex flex-col justify-center">
                  <span className="text-[9px] text-zinc-550 block font-bold uppercase tracking-wide">Commits</span>
                  <AnimatedValue value={300} suffix="+" />
                </div>
                <div className="bg-zinc-900/30 border border-white/5 p-3 rounded-2xl flex flex-col justify-center">
                  <span className="text-[9px] text-zinc-550 block font-bold uppercase tracking-wide">Followers</span>
                  <AnimatedValue value={10} />
                </div>
                <div className="bg-zinc-900/30 border border-white/5 p-3 rounded-2xl flex flex-col justify-center col-span-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[9px] text-zinc-550 font-bold uppercase tracking-wide">Stars Received</span>
                    <span className="text-[10px] text-amber-500 font-bold flex items-center gap-1">
                      <FaStar className="text-[9px]" /> 10+
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-300">Languages: Java, JavaScript, TypeScript, Python, Solidity</span>
                </div>
              </div>
            </div>

            <div className="text-[9px] text-zinc-500 uppercase tracking-wide mt-4 border-t border-white/5 pt-3">
              Metrics calculated across active repositories
            </div>
          </MagicCard>

          {/* Column 2: Tech Stack Card */}
          <MagicCard
            className="!bg-zinc-950/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 min-h-[360px]"
            gradientColor="rgba(59, 130, 246, 0.15)"
            gradientSize={200}
            gradientOpacity={0.25}
          >
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-4">
                <Layers className="w-3.5 h-3.5" />
                <span>Engineering Stack</span>
              </div>

              <div className="space-y-3">
                {/* Backend */}
                <div>
                  <span className="text-[9px] text-zinc-550 font-bold uppercase tracking-wide block mb-1">Backend</span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-zinc-300 bg-white/5 px-2 py-0.5 rounded border border-white/5 hover:border-green-500/20 transition-all cursor-default">
                      <SiNodedotjs className="text-green-500" /> Node.js
                    </span>
                    <span className="text-[10px] font-semibold text-zinc-300 bg-white/5 px-2 py-0.5 rounded border border-white/5 hover:border-white/20 transition-all cursor-default">
                      Express
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-zinc-300 bg-white/5 px-2 py-0.5 rounded border border-white/5 hover:border-red-500/20 transition-all cursor-default">
                      <SiRedis className="text-red-500" /> Redis
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-zinc-300 bg-white/5 px-2 py-0.5 rounded border border-white/5 hover:border-sky-500/20 transition-all cursor-default">
                      <SiPostgresql className="text-sky-500" /> PostgreSQL
                    </span>
                  </div>
                </div>

                {/* Cloud & DevOps */}
                <div>
                  <span className="text-[9px] text-zinc-550 font-bold uppercase tracking-wide block mb-1">Cloud / DevOps</span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-zinc-300 bg-white/5 px-2 py-0.5 rounded border border-white/5 hover:border-amber-500/20 transition-all cursor-default">
                      <SiAmazonwebservices className="text-amber-500" /> AWS
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-zinc-300 bg-white/5 px-2 py-0.5 rounded border border-white/5 hover:border-blue-400/20 transition-all cursor-default">
                      <SiDocker className="text-blue-400" /> Docker
                    </span>
                  </div>
                </div>

                {/* AI */}
                <div>
                  <span className="text-[9px] text-zinc-550 font-bold uppercase tracking-wide block mb-1">Artificial Intelligence</span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-zinc-300 bg-white/5 px-2 py-0.5 rounded border border-white/5 hover:border-purple-400/20 transition-all cursor-default">
                      <Brain className="w-3 text-purple-400" /> Ollama
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-zinc-300 bg-white/5 px-2 py-0.5 rounded border border-white/5 hover:border-green-400/20 transition-all cursor-default">
                      <SiOpenai className="text-green-400" /> OpenAI
                    </span>
                  </div>
                </div>

                {/* Blockchain */}
                <div>
                  <span className="text-[9px] text-zinc-550 font-bold uppercase tracking-wide block mb-1">Blockchain</span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-zinc-300 bg-white/5 px-2 py-0.5 rounded border border-white/5 hover:border-indigo-400/20 transition-all cursor-default">
                      <SiEthereum className="text-indigo-400" /> Ethereum
                    </span>
                    <span className="text-[10px] font-semibold text-zinc-300 bg-white/5 px-2 py-0.5 rounded border border-white/5 hover:border-violet-500/20 transition-all cursor-default">
                      Solidity
                    </span>
                  </div>
                </div>

                {/* Frontend */}
                <div>
                  <span className="text-[9px] text-zinc-550 font-bold uppercase tracking-wide block mb-1">Frontend</span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-zinc-300 bg-white/5 px-2 py-0.5 rounded border border-white/5 hover:border-sky-400/20 transition-all cursor-default">
                      <SiReact className="text-sky-400" /> React
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-zinc-300 bg-white/5 px-2 py-0.5 rounded border border-white/5 hover:border-teal-400/20 transition-all cursor-default">
                      <SiTailwindcss className="text-teal-400" /> Tailwind CSS
                    </span>
                  </div>
                </div>

              </div>
            </div>

            <div className="text-[9px] text-zinc-500 uppercase tracking-wide mt-4 border-t border-white/5 pt-3">
              Full Stack Technologies & Frameworks
            </div>
          </MagicCard>

          {/* Column 3: Currently Building */}
          <MagicCard
            className="!bg-zinc-950/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 min-h-[360px]"
            gradientColor="rgba(245, 158, 11, 0.15)"
            gradientSize={200}
            gradientOpacity={0.25}
          >
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-4">
                <Flame className="w-3.5 h-3.5" />
                <span>Currently Building</span>
              </div>

              <div className="space-y-2.5">
                {[
                  { text: "Flux — Cloud Cost Optimization Engine", prefix: "☁️" },
                  { text: "Sentinel Gateway — Distributed Gateway", prefix: "🛡️" },
                  { text: "AI-Powered Applications & Workflows", prefix: "🤖" },
                  { text: "Kubernetes Orchestration & Helm", prefix: "☸️" },
                  { text: "Distributed Systems & System Design", prefix: "⚡" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 4, color: '#f59e0b' }}
                    className="p-2.5 rounded-xl bg-zinc-900/30 border border-white/5 flex items-center gap-2.5 text-xs text-zinc-300 transition-colors cursor-default"
                  >
                    <span className="shrink-0 text-base">{item.prefix}</span>
                    <span className="font-semibold leading-tight">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-[9px] text-zinc-500 uppercase tracking-wide mt-4 border-t border-white/5 pt-3">
              Active engineering focus areas
            </div>
          </MagicCard>

        </div>

        {/* Heatmap Card (Full Width Bottom) */}
        <div className="mt-8 p-6 bg-zinc-950/40 backdrop-blur-md rounded-3xl border border-white/5 shadow-2xl flex flex-col md:flex-row gap-6 justify-between items-center">

          {/* Heatmap graph visualizer wrapper */}
          <div className="w-full flex flex-col">
            <div className="flex justify-between items-center mb-4 text-xs text-zinc-400 font-mono">
              <span className="font-semibold text-zinc-300">GitHub Contributions Heatmap</span>
              <span>@Prince1895</span>
            </div>
            <div className="w-full overflow-x-auto py-2">
              <img
                src="https://ghchart.rshah.org/a855f7/Prince1895"
                alt="GitHub Contributions Heatmap"
                className="min-w-[620px] w-full rounded-lg filter brightness-110 contrast-125 mx-auto"
              />
            </div>
          </div>

          {/* Commits statistics breakdown columns */}

        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/Prince1895"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold text-xs rounded-xl hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:scale-105"
          >
            <FaGithub className="text-sm" /> Explore Profile on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Github;
