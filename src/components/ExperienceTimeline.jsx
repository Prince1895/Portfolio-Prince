import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { AuroraText } from './magicui/aurora-text';
import { MagicCard } from './magicui/magic-card';
import {
  GraduationCap, Trophy, Code2, Globe, Flame, Award, BookOpen, Rocket, Layers
} from 'lucide-react';

const timelineData = [
  {
    type: "focus",
    date: "2025 – Present",
    title: "Building AI & Cloud-Native Systems",
    subtitle: "Backend • AI • Distributed Systems",
    description:
      "Building production-ready backend systems, AI-powered applications, and cloud-native platforms using Docker, AWS, Redis, PostgreSQL, and modern software engineering practices. Currently exploring distributed systems, system design, and scalable architectures.",
    icon: <Flame className="w-5 h-5 text-red-500" />,
    color: "rgba(239, 68, 68, 0.15)",
  },

  {
    type: "project",
    date: "2025",
    title: "Production-Scale Engineering Projects",
    subtitle: "Cloud • Distributed Systems • Blockchain",
    description:
      "Built Flux (AWS Cloud Cost Optimization Engine), a Distributed API Gateway with AI-powered threat detection, and a Blockchain-based Carbon Credit Verification System, focusing on scalability, security, and high-performance backend engineering.",
    icon: <Rocket className="w-5 h-5 text-orange-500" />,
    color: "rgba(249, 115, 22, 0.15)",
  },

  {
    type: "certification",
    date: "2025",
    title: "Cloud & DevOps Certifications",
    subtitle: "AWS • Docker • DevOps",
    description:
      "Completed cloud and DevOps certifications while gaining hands-on experience with AWS services, Docker containerization, CI/CD workflows, and cloud deployment strategies.",
    icon: <Award className="w-5 h-5 text-amber-500" />,
    color: "rgba(245, 158, 11, 0.15)",
  },

  {
    type: "problemSolving",
    date: "2024 – Present",
    title: "Competitive Programming",
    subtitle: "700+ LeetCode Problems • 1767 Rating",
    description:
      "Strengthened algorithmic thinking and problem-solving by solving over 700 LeetCode problems, improving data structures, algorithms, and coding interview skills.",
    icon: <Code2 className="w-5 h-5 text-green-500" />,
    color: "rgba(34, 197, 94, 0.15)",
  },

  {
    type: "learning",
    date: "2024",
    title: "Modern Full-Stack Development",
    subtitle: "React • Node.js • Databases",
    description:
      "Built full-stack applications with React, Node.js, Express, MongoDB, PostgreSQL, authentication systems, payment integration, and RESTful APIs while adopting scalable software design principles.",
    icon: <Layers className="w-5 h-5 text-blue-500" />,
    color: "rgba(59, 130, 246, 0.15)",
  },

  {
    type: "education",
    date: "2023 – 2027",
    title: "B.Tech in Computer Science",
    subtitle: "ABES Engineering College",
    description:
      "Pursuing a Bachelor's degree with a focus on software engineering, data structures, operating systems, databases, computer networks, and cloud computing while applying concepts through real-world projects.",
    icon: <GraduationCap className="w-5 h-5 text-pink-500" />,
    color: "rgba(236, 72, 153, 0.15)",
  },
];
const ExperienceTimeline = () => {
  const containerRef = useRef(null);

  // Hook to calculate scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heightTransform = useTransform(scaleY, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={containerRef} className="w-full py-24 px-6 md:px-12 bg-transparent relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-16">
          Experience & <AuroraText>Timeline</AuroraText>
        </h2>

        <div className="relative w-full">
          {/* Vertical central timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-2 bottom-2 w-[2px] bg-white/5" />

          {/* Animated line matching scroll */}
          <motion.div
            style={{ height: heightTransform }}
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-2 w-[2px] bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 origin-top"
          />

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`flex flex-col md:flex-row items-start relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center z-10 shadow-lg">
                    {item.icon}
                  </div>

                  {/* Card Side */}
                  <div className="w-full md:w-[45%] pl-10 md:pl-0">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <MagicCard
                        className="!bg-zinc-950/40 border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-white/10"
                        gradientColor={item.color}
                        gradientSize={200}
                        gradientOpacity={0.2}
                      >
                        <div className="flex justify-between items-start gap-4 flex-wrap mb-3">
                          <span className="text-[10px] font-bold text-zinc-500 tracking-wider font-mono uppercase bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                            {item.date}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white leading-tight mb-1">
                          {item.title}
                        </h3>
                        <h4 className="text-xs font-semibold text-purple-400 mb-3 font-sans">
                          {item.subtitle}
                        </h4>
                        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </MagicCard>
                    </motion.div>
                  </div>

                  {/* Empty side spacer for desktop */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
