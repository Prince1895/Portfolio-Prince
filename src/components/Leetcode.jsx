import { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { AuroraText } from './magicui/aurora-text';

const Leetcode = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/Prince_1184')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch LeetCode stats');
        return res.json();
      })
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full px-4 sm:px-8 mt-6 mb-10 max-w-3xl mx-auto">
        <LinearProgress color="inherit" className="text-zinc-700" />
        <p className="text-center text-sm mt-3 text-zinc-400">
          Fetching LeetCode stats...
        </p>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="text-center text-red-500 mt-6 mb-10">
        Failed to load LeetCode data. Please try again later.
      </div>
    );
  }

  return (
    <div className="relative w-full mt-24 px-4 sm:px-8 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
        <AuroraText>LeetCode</AuroraText>
      </h2>

      {/* Stats Tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <div className="bg-zinc-950/40 border border-zinc-800 text-zinc-200 px-4 py-2 rounded-xl text-sm font-medium shadow-[0_0_15px_rgba(0,0,0,0.2)]">
          Total Solved: <span className="font-semibold text-white">{stats.totalSolved}</span>
        </div>
        <div className="bg-green-950/15 border border-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm font-medium shadow-[0_0_15px_rgba(34,197,94,0.05)]">
          Easy: <span className="font-semibold text-green-300">{stats.easySolved}</span>
        </div>
        <div className="bg-amber-950/15 border border-amber-500/20 text-amber-400 px-4 py-2 rounded-xl text-sm font-medium shadow-[0_0_15px_rgba(245,158,11,0.05)]">
          Medium: <span className="font-semibold text-amber-300">{stats.mediumSolved}</span>
        </div>
        <div className="bg-red-950/15 border border-red-500/20 text-red-400 px-4 py-2 rounded-xl text-sm font-medium shadow-[0_0_15px_rgba(239,68,68,0.05)]">
          Hard: <span className="font-semibold text-red-300">{stats.hardSolved}</span>
        </div>
        {stats.ranking && (
          <div className="bg-purple-950/15 border border-purple-500/20 text-purple-400 px-4 py-2 rounded-xl text-sm font-medium shadow-[0_0_15px_rgba(168,85,247,0.05)]">
            Ranking: <span className="font-semibold text-purple-300">#{stats.ranking}</span>
          </div>
        )}
      </div>

      {/* Heatmap Card */}
      <div className="p-4 bg-zinc-950/40 backdrop-blur-md rounded-2xl border border-white/5 shadow-2xl mb-8">
        <img
          src="https://leetcard.jacoblin.cool/Prince_1184?theme=dark&ext=heatmap"
          alt="LeetCode Heatmap Graph"
          className="w-full max-w-2xl rounded-xl mx-auto"
        />
      </div>

      <div className="flex justify-center mb-6">
        <a
          href="https://leetcode.com/Prince_1184/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 bg-white text-black font-semibold text-sm rounded-xl hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-105"
        >
          View Full Profile on LeetCode
        </a>
      </div>
    </div>
  );
};

export default Leetcode;
