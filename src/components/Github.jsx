import React from 'react';
import { AuroraText } from './magicui/aurora-text';

const Github = () => {
  return (
    <div className="relative w-full mt-24 px-4 sm:px-8 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
        <AuroraText>GitHub Activity</AuroraText>
      </h2>

      {/* Grid of Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* Profile Stats Card */}
        <div className="p-4 bg-zinc-950/40 backdrop-blur-md rounded-2xl border border-white/5 shadow-2xl flex items-center justify-center min-h-[220px]">
          <img
            src="https://github-readme-stats.vercel.app/api?username=Prince1895&show_icons=true&theme=transparent&text_color=a1a1aa&bg_color=00000000&title_color=ffffff&icon_color=3b82f6&hide_border=true"
            alt="GitHub Stats"
            className="w-full max-w-sm"
          />
        </div>

        {/* Top Languages Card */}
        <div className="p-4 bg-zinc-950/40 backdrop-blur-md rounded-2xl border border-white/5 shadow-2xl flex items-center justify-center min-h-[220px]">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Prince1895&layout=compact&theme=transparent&text_color=a1a1aa&bg_color=00000000&title_color=ffffff&icon_color=3b82f6&hide_border=true"
            alt="Top Languages"
            className="w-full max-w-sm"
          />
        </div>

      </div>

      {/* Heatmap Card */}
      <div className="p-6 bg-zinc-950/40 backdrop-blur-md rounded-2xl border border-white/5 shadow-2xl mb-8 flex flex-col items-center">
        <div className="w-full flex justify-between items-center mb-4 text-xs sm:text-sm text-zinc-400">
          <span className="font-medium">Contribution Calendar</span>
          <span>@Prince1895</span>
        </div>
        <div className="w-full overflow-x-auto py-2">
          <img
            src="https://ghchart.rshah.org/3b82f6/Prince1895"
            alt="GitHub Contributions Heatmap"
            className="min-w-[600px] w-full max-w-2xl rounded-lg filter brightness-110 contrast-125 mx-auto"
          />
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mb-6">
        <a
          href="https://github.com/Prince1895"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 bg-white text-black font-semibold text-sm rounded-xl hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-105"
        >
          View Full Profile on GitHub
        </a>
      </div>
    </div>
  );
};

export default Github;
