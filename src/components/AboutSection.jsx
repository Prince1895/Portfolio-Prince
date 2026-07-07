import React from 'react';
import { motion } from 'framer-motion';
import { AuroraText } from './magicui/aurora-text';
import { BookOpen, Target, Sparkles, Code2, Award, Heart } from 'lucide-react';
import Abeslogo from '@/assets/ABESlogo.png';
import asianschoollogo from '@/assets/asianschool.png';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="w-full py-24 px-6 md:px-12 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-16">
          Engineering <AuroraText>Profile</AuroraText>
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Card 1: The Story (Span 7) */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-7 p-8 rounded-3xl border border-white/5 bg-zinc-950/40 backdrop-blur-md flex flex-col justify-between hover:border-white/10 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 text-purple-400">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest">ABOUT</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Building Software That Solves Real Problems.
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                I'm a Computer Science undergraduate focused on building production-ready software with modern engineering practices.

                My work spans full-stack development, backend engineering, AI-powered applications, and cloud-native infrastructure. I enjoy designing scalable systems, developing reliable APIs, and shipping software that is maintainable, performant, and user-focused.
              </p>

            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-zinc-500 font-bold uppercase tracking-wider">
              <Heart className="w-4 h-4 text-red-500" /> Building Reliable & Scalable Software
            </div>
          </motion.div>

          {/* Card 2: What I Enjoy Building (Span 5) */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-5 p-8 rounded-3xl border border-white/5 bg-zinc-950/40 backdrop-blur-md hover:border-white/10 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          >
            <div className="flex items-center gap-2 mb-4 text-blue-400">
              <Code2 className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest font-mono">EXPERTISE</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">What I build</h3>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">01</span>
                <div>
                  <strong className="text-zinc-200 block">AI-Powered Applications</strong>
                  Integrating AI models, intelligent workflows, and modern web technologies into real-world products.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">02</span>
                <div>
                  <strong className="text-zinc-200 block">Full-Stack Applications</strong>
                  Developing scalable applications using React, Node.js, Express, and modern frontend architectures.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-400 font-bold">03</span>
                <div>
                  <strong className="text-zinc-200 block">Backend & Devops tools</strong>
                  Designing REST APIs, authentication, databases, Docker-based deployments, and cloud-native services.
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Card 3: Current Focus & Goals (Span 5) */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-5 p-8 rounded-3xl border border-white/5 bg-zinc-950/40 backdrop-blur-md hover:border-white/10 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          >
            <div className="flex items-center gap-2 mb-4 text-amber-500">
              <Target className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest font-mono">Current Focus</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Engineering Growth</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              <strong></strong> • AI Application Development

              • Scalable Backend Systems

              • Cloud Infrastructure (AWS)

              • Docker & DevOps Workflows

              • System Design & Distributed Systems

              • Performance Optimization
            </p>
          </motion.div>

          {/* Card 4: Education & Credentials (Span 7) */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-7 p-8 rounded-3xl border border-white/5 bg-zinc-950/40 backdrop-blur-md hover:border-white/10 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          >
            <div className="flex items-center gap-2 mb-6 text-pink-500">
              <BookOpen className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest font-mono">Education</span>
            </div>

            <div className="space-y-6">
              {/* Institution 1 */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 p-1 flex items-center justify-center shrink-0">
                  <img src={Abeslogo} alt="ABES Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h4 className="font-bold text-zinc-100 text-sm sm:text-base">ABES Engineering College</h4>
                    <span className="text-[10px] bg-white/5 border border-white/5 px-2.5 py-0.5 rounded-full text-zinc-400 font-semibold">2023 - 2027</span>
                  </div>
                  <p className="text-zinc-300 text-xs sm:text-sm font-medium mt-1">Bachelor of Technology — Computer Science (Data Science)</p>
                  <p className="text-zinc-500 text-xs mt-1">Grade: 8.315/10 CGPA (till 3rd year)</p>
                </div>
              </div>

              {/* Institution 2 */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 p-1 flex items-center justify-center shrink-0">
                  <img src={asianschoollogo} alt="The Asian School Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h4 className="font-bold text-zinc-100 text-sm sm:text-base">The Asian School</h4>
                    <span className="text-[10px] bg-white/5 border border-white/5 px-2.5 py-0.5 rounded-full text-zinc-400 font-semibold">2019 - 2022</span>
                  </div>
                  <p className="text-zinc-300 text-xs sm:text-sm font-medium mt-1">Higher Secondary & Secondary Education</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
