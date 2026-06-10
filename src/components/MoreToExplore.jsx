import React from 'react';
import { motion } from 'framer-motion';
import { MagicCard } from './magicui/magic-card';
import { AuroraText } from './magicui/aurora-text';
import { BiBookOpen, BiTrophy, BiLink } from 'react-icons/bi';

const exploreItems = [
  {
    title: 'Guestbook',
    description: 'Leave your mark and see what others have to say',
    icon: <BiBookOpen className="text-3xl text-purple-400" />,
    iconBg: 'bg-purple-950/30 border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.15)]',
    gradientColor: 'rgba(168, 85, 247, 0.15)',
    textColor: 'text-purple-400',
    link: '#contact'
  },
  {
    title: 'Achievements',
    description: 'Milestones, certifications, and accomplishments',
    icon: <BiTrophy className="text-3xl text-amber-500" />,
    iconBg: 'bg-amber-950/30 border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.15)]',
    gradientColor: 'rgba(245, 158, 11, 0.15)',
    textColor: 'text-amber-500',
    link: '#about'
  },
  {
    title: 'My Links',
    description: 'Find me across the web and social platforms',
    icon: <BiLink className="text-3xl text-blue-500" />,
    iconBg: 'bg-blue-950/30 border-blue-500/20 shadow-[0_0_20px_rgba(59, 130, 246, 0.15)]',
    gradientColor: 'rgba(59, 130, 246, 0.15)',
    textColor: 'text-blue-500',
    link: 'https://linktr.ee/prince1184'
  }
];

const MoreToExplore = () => {
  return (
    <div className="w-full py-20 px-4 bg-transparent" id="other">
      <div className="max-w-5xl mx-auto text-center">
        
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          More to <AuroraText>Explore</AuroraText>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mb-12">
          Check out these additional resources and connect with me
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exploreItems.map((item, idx) => (
            <MagicCard
              key={idx}
              className="!bg-zinc-950/40 border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-between text-center transition-all duration-300 hover:border-white/10 group cursor-pointer"
              gradientColor={item.gradientColor}
              gradientSize={240}
              gradientOpacity={0.25}
            >
              {/* Animated Icon Container */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center border ${item.iconBg} mb-6`}
              >
                {item.icon}
              </motion.div>

              {/* Title & Description */}
              <div className="flex-1 flex flex-col justify-center mb-6">
                <h3 className={`text-xl font-bold ${item.textColor} mb-2`}>
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-[200px] mx-auto">
                  {item.description}
                </p>
              </div>

              {/* Action Link */}
              <a
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="text-zinc-300 group-hover:text-white font-semibold text-sm transition-colors flex items-center gap-1.5"
              >
                Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </MagicCard>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MoreToExplore;
