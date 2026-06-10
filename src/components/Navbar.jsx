import React from 'react';
import { motion } from 'framer-motion';
import { FileIcon, Folders, HomeIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { IoPerson } from 'react-icons/io5';
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx';
import { PiXLogo } from 'react-icons/pi';
import { RiLinksLine } from 'react-icons/ri';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const getIconClass = (path) => {
    const isActive = pathname === path;
    return `w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] transition-colors duration-300 ${
      isActive ? 'text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]' : 'text-zinc-400 group-hover:text-zinc-100'
    }`;
  };

  const tooltipStyle = {
    backgroundColor: '#09090b',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#f4f4f5',
    fontSize: '11px',
    padding: '4px 10px',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.5)',
    zIndex: 9999,
  };

  return (
    <nav className="w-full py-6 flex justify-center fixed top-0 z-50 px-4">
      <div className="rounded-2xl w-full max-w-[650px] px-3 py-1 bg-zinc-950/30 backdrop-blur-xl border border-white/5 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <div className="flex justify-center px-2 items-center gap-6 sm:gap-8 transition-all">

          {/* Home */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group p-2.5 hover:bg-white/5 rounded-full transition-all duration-300"
              data-tooltip-id="home-tooltip"
              data-tooltip-content="Home"
            >
              <Tooltip id="home-tooltip" style={tooltipStyle} />
              <HomeIcon className={getIconClass('/')} />
            </motion.div>
          </Link>

          {/* Projects */}
          <Link to="/projects">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group p-2.5 hover:bg-white/5 rounded-full transition-all duration-300"
              data-tooltip-id="projects-tooltip"
              data-tooltip-content="Projects"
            >
              <Tooltip id="projects-tooltip" style={tooltipStyle} />
              <Folders className={getIconClass('/projects')} />
            </motion.div>
          </Link>


          <div className="h-6 w-px bg-white/10" />

          {/* Resume */}
          <a href="https://drive.google.com/file/d/16VAYIjaeAnD1UditSsEg-iK2q7RsY_06/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group p-2.5 hover:bg-white/5 rounded-full transition-all duration-300"
              data-tooltip-id="resume-tooltip"
              data-tooltip-content="Resume"
            >
              <Tooltip id="resume-tooltip" style={tooltipStyle} />
              <FileIcon className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-zinc-400 group-hover:text-zinc-100 transition-colors" />
            </motion.div>
          </a>

          {/* Github */}
          <a href="https://github.com/Prince1895" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group p-2.5 hover:bg-white/5 rounded-full transition-all duration-300"
              data-tooltip-id="github-tooltip"
              data-tooltip-content="Github"
            >
              <Tooltip id="github-tooltip" style={tooltipStyle} />
              <RxGithubLogo className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-zinc-400 group-hover:text-zinc-100 transition-colors" />
            </motion.div>
          </a>

          {/* X */}
          <a href="https://x.com/Chauhan18Prince" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group p-2.5 hover:bg-white/5 rounded-full transition-all duration-300"
              data-tooltip-id="x-tooltip"
              data-tooltip-content="X"
            >
              <Tooltip id="x-tooltip" style={tooltipStyle} />
              <PiXLogo className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-zinc-400 group-hover:text-zinc-100 transition-colors" />
            </motion.div>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/prince1184/" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group p-2.5 hover:bg-white/5 rounded-full transition-all duration-300"
              data-tooltip-id="linkedin-tooltip"
              data-tooltip-content="LinkedIn"
            >
              <Tooltip id="linkedin-tooltip" style={tooltipStyle} />
              <RxLinkedinLogo className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-zinc-400 group-hover:text-zinc-100 transition-colors" />
            </motion.div>
          </a>

          {/* LinkTree */}
          <a href="https://linktr.ee/prince1184" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group p-2.5 hover:bg-white/5 rounded-full transition-all duration-300"
              data-tooltip-id="linktree-tooltip"
              data-tooltip-content="LinkTree"
            >
              <Tooltip id="linktree-tooltip" style={tooltipStyle} />
              <RiLinksLine className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-zinc-400 group-hover:text-zinc-100 transition-colors" />
            </motion.div>
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
