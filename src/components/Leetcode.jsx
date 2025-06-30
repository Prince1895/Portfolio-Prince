import { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { AuroraText } from './magicui/aurora-text';
import { ShinyButton } from './magicui/shiny-button';

const Leetcode = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
   fetch("https://leetcard.jacoblin.cool/Prince_1184?theme=catppuccinMocha&font=Belgrano&ext=heatmap")

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
      <div className="w-full px-4 sm:px-8 mt-6 mb-10">
        <LinearProgress color="inherit" />
        <p className="text-center text-sm mt-2 text-gray-600 dark:text-gray-300">
          Fetching LeetCode stats...
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full mt-24 px-4 sm:px-8 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl sm:text-3xl font-bold mb-8">
        <AuroraText>LeetCode</AuroraText>
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <div className="bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-400 dark:border-yellow-600 text-yellow-800 dark:text-yellow-300 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-yellow-200 dark:hover:bg-yellow-800/40">
          Total Solved: <span className="font-semibold">{stats.totalSolved}</span>
        </div>
        <div className="bg-green-100 dark:bg-green-900/20 border border-green-400 dark:border-green-600 text-green-800 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-green-200 dark:hover:bg-green-800/40">
          Easy: <span className="font-semibold">{stats.easySolved}</span>
        </div>
        <div className="bg-orange-100 dark:bg-orange-900/20 border border-orange-400 dark:border-orange-600 text-orange-800 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-orange-200 dark:hover:bg-orange-800/40">
          Medium: <span className="font-semibold">{stats.mediumSolved}</span>
        </div>
        <div className="bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-600 text-red-800 dark:text-red-300 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-red-200 dark:hover:bg-red-800/40">
          Hard: <span className="font-semibold">{stats.hardSolved}</span>
        </div>
        {stats.ranking && (
          <div className="bg-purple-100 dark:bg-purple-900/20 border border-purple-400 dark:border-purple-600 text-purple-800 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium shadow transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-purple-200 dark:hover:bg-purple-800/40">
            Ranking: <span className="font-semibold">{stats.ranking}</span>
          </div>
        )}
      </div>


      
      <img
        src="https://leetcard.jacoblin.cool/Prince_1184?theme=dark&ext=heatmap"
        alt="LeetCode Heatmap Graph"
        className="w-full max-w-2xl rounded-lg shadow-md mx-auto mb-6"
      />

      <a
        href="https://leetcode.com/Prince_1184/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center mb-6"
      >
        <ShinyButton>View Full Profile on LeetCode</ShinyButton>
      </a>
    </div>
  );
};

export default Leetcode;
