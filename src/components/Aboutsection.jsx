import React from "react";
import { motion } from "framer-motion";
import { MagicCard } from "@/components/magicui/magic-card";
import { AuroraText } from "./magicui/aurora-text";

const timelineData = [
  { year: "🧪 2025", description: "Deepening my expertise in the Full stack and Web3, solving 300+ LeetCode problems (rated 1721), and building multiple hands-on projects focused on backend development, authentication, and real-world use cases." },
  { year: "⚡ 2024", description: "Kickstarted my DSA journey on LeetCode, honed my frontend skills in JavaScript and CSS, faced challenges, and stayed consistent through the learning curve." },
  { year: "🚀 2023", description: "Began my B.Tech degree. Invested in a gaming laptop, explored the world of e-gaming, and simultaneously learned Java and foundational web development." },
  { year: "📚 2022", description: "Completed 12th grade. Started learning SQL and relational databases, laying the groundwork for backend development." },
  { year: "😷 2021", description: "Focused on JEE preparation, but my curiosity for technology continued to grow stronger, drawing me into the world of programming." },
  { year: "🧠 2020", description: "After completing 10th grade, I began exploring HTML, CSS, and Python. Built my first static websites and started understanding the fundamentals of coding." },
  { year: "💻 2016", description: "Got my first laptop, which opened up a world of exploration and self-learning in tech — the starting point of my coding journey." },
  { year: "👶🏼 2005", description: "Born — the first future software engineer in my family. The beginning of a passionate journey in technology." },
];

const Aboutsection = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-16">
        <AuroraText>The Evolution: From Curiosity to Code</AuroraText>
      </h2>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* vertical timeline line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-500 shadow-lg blur-[1px]"
        />

        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className={`mb-20 flex items-center w-full justify-${isLeft ? "start" : "end"} relative`}
              initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <MagicCard
                className={`relative p-6 rounded-md max-w-xs w-full z-10 border border-gray-200 bg-white ${
                  isLeft ? "mr-auto ml-12 text-left" : "ml-auto mr-12 text-right"
                }`}
                gradientColor="#60A5FA"
                gradientSize={250}
                gradientOpacity={0.35}
              >
                <h3 className="text-xl font-semibold">{item.year}</h3>
                <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
              </MagicCard>

              {/* Blue Dot in center — hidden on small screens */}
              <div className="hidden sm:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-blue-600 rounded-full z-20 border-4 border-white shadow-md" />

              {/* Horizontal connecting bar — hidden on small screens */}
              <div
                className={`hidden sm:block absolute top-1/2 w-10 h-1 bg-blue-400 ${
                  isLeft ? "left-1/2 ml-2" : "right-1/2 mr-2"
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
