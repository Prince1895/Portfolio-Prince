import React from "react";
import { motion } from "framer-motion";
import { MagicCard } from "@/components/magicui/magic-card"; 
import { AuroraText } from "./magicui/aurora-text";

const timelineData = [
  { year: "👶🏼 2005", description: "Born — the first future software engineer in my family!" },
  { year: "💻 2016", description: "Bought my first laptop — an old second-hand machine that opened a world of exploration." },
  { year: "🧠 2020", description: "Completed 10th grade and started exploring HTML, CSS, and Python. Built some static pages." },
  { year: "😷 2021", description: "Tried to focus on JEE prep but tech curiosity pulled me back. 😅" },
  { year: "📚 2022", description: "Completed 12th grade and started learning SQL databases. 🧠💾" },
  { year: "🚀 2023", description: "Got into B.Tech, bought a gaming laptop, explored e-gaming, and learned Java + web dev. 🎮💻" },
  { year: "⚡ 2024", description: "Started DSA on LeetCode, dived into CSS/JS. Got stuck, but kept going. 🔍💻" },
  { year: "🧪 2025", description: "Learning MERN, solved 300+ LeetCode, rating 1721, building multiple hands-on projects. 💻✨" },
];

const Aboutsection = () => {
  return (
    <div className="w-full bg-white py-20 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-16">
        <AuroraText>The Evolution: From Curiosity to Code</AuroraText>
      </h2>

      <div className="relative w-full max-w-4xl mx-auto">
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
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-blue-600 rounded-full z-20 border-4 border-white shadow-md" />
              <div
                className={`absolute top-1/2 w-10 h-1 bg-blue-400 ${
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
