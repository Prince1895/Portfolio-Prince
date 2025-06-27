import React from 'react';
import { motion } from 'framer-motion';
import { FileIcon, Folders, HomeIcon, SeparatorVertical } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { IoPerson } from 'react-icons/io5';
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx';
import { PiXLogo } from 'react-icons/pi';

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="w-full py-6 flex justify-center fixed top-0 z-50">
      <div className="w-[750px] max-lg:w-[650px] max-sm:w-[400px] max-[400px]:w-[350px] px-2 py-1 bg-white bg-opacity-10 backdrop-blur-lg border border-black/10 flex items-center justify-center rounded-full shadow">
        <div className="flex justify-center px-2 items-center gap-12 max-sm:gap-6 max-[400px]:gap-3 transition-all">

          {/* Home */}
          <Link to="/">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
              className="hover:px-3 py-2.5 hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
              <HomeIcon className={`w-[19px] h-[19px] text-black ${pathname === '/' ? 'text-[#cc9e2b]' : ''}`} />
            </motion.div>
          </Link>

          {/* Projects */}
          <Link to="/projects">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
              className="hover:px-3 py-2.5 hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
              <Folders className={`w-[19px] h-[19px] text-black ${pathname === '/projects' ? 'text-[#cc9e2b]' : ''}`} />
            </motion.div>
          </Link>

          {/* About */}
          <Link to="/about">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
              className="hover:px-3 py-2.5 hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
              <IoPerson className={`w-[19px] h-[19px] text-black ${pathname === '/about' ? 'text-[#cc9e2b]' : ''}`} />
            </motion.div>
          </Link>

       
          {/* Resume */}
          <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
              className="hover:px-3 py-2.5 hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
              <FileIcon className="w-[19px] h-[19px] text-black" />
            </motion.div>
          </a>

          {/* GitHub */}
          <a href="https://github.com/Prince1895" target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
              className="hover:px-3 py-2.5 hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
              <RxGithubLogo className="w-[19px] h-[19px] text-black" />
            </motion.div>
          </a>

          {/* X (Twitter) */}
          <a href="https://x.com/Chauhan18Prince" target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
              className="hover:px-3 py-2.5 hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
              <PiXLogo className="w-[19px] h-[19px] text-black" />
            </motion.div>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/prince1184/" target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
              className="hover:px-3 py-2.5 hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
              <RxLinkedinLogo className="w-[19px] h-[19px] text-black" />
            </motion.div>
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
