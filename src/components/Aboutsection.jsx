import React from "react";
import { motion } from "framer-motion";
import { MagicCard } from "@/components/magicui/magic-card";
import { AuroraText } from "./magicui/aurora-text";

const timelineData = [
  { year: "🧪 2025", description: "Deepening my expertise in the Full stack and Web3, solving 700+ LeetCode problems (rated 1721), and building multiple hands-on projects focused on backend development, authentication, and real-world use cases." },
  { year: "⚡ 2024", description: "Kickstarted my DSA journey on LeetCode, honed my frontend skills in JavaScript and CSS, faced challenges, and stayed consistent through the learning curve." },
  { year: "🚀 2023", description: "Began my B.Tech degree. Invested in a gaming laptop, explored the world of e-gaming, and simultaneously learned Java and foundational web development." },
  { year: "📚 2022", description: "Completed 12th grade. Started learning SQL and relational databases, laying the groundwork for backend development." },
  { year: "📚 2021", description: "Focused on JEE preparation, but my curiosity for technology continued to grow stronger, drawing me into the world of programming." },
  { year: "🧠 2020", description: "After completing 10th grade, I began exploring HTML, CSS, and Python. Built my first static websites and started understanding the fundamentals of coding." },
  { year: "💻 2016", description: "Got my first laptop, which opened up a world of exploration and self-learning in tech — the starting point of my coding journey." },
  { year: "👶🏼 2005", description: "Born — the first future software engineer in my family. The beginning of a passionate journey in technology." },
];

const Aboutsection = () => {
  return (
    <div className="w-full bg-transparent py-20 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-20">
        <AuroraText>The Evolution: From Curiosity to Code</AuroraText>
      </h2>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* vertical timeline line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500/20 via-indigo-500/50 to-purple-500/20"
        />

        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className={`mb-16 flex items-center w-full justify-${isLeft ? "start" : "end"} relative`}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <MagicCard
                className={`relative p-6 rounded-2xl max-w-xs w-full z-10 border border-white/5 !bg-zinc-950/40 backdrop-blur-md transition-all duration-300 ${isLeft ? "mr-auto ml-12 text-left" : "ml-auto mr-12 text-right"
                  }`}
                gradientColor="rgba(59, 130, 246, 0.25)"
                gradientSize={220}
                gradientOpacity={0.3}
              >
                <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white transition-colors">{item.year}</h3>
                <p className="text-zinc-400 mt-2 text-sm leading-relaxed">{item.description}</p>
              </MagicCard>

              {/* Glowing Indicator Dot in center — hidden on small screens */}
              <div className="hidden sm:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full z-20 border-4 border-zinc-950 shadow-[0_0_10px_rgba(59,130,246,0.6)]" />

              {/* Horizontal connecting bar — hidden on small screens */}
              <div
                className={`hidden sm:block absolute top-1/2 w-10 h-px bg-white/10 ${isLeft ? "left-1/2 ml-2" : "right-1/2 mr-2"
                  }`}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Aboutsection;
