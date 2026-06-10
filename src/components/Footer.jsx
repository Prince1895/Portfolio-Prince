import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import { PiXLogo } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { LuLock } from 'react-icons/lu';

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 sm:px-8 mt-16 border-t border-white/5 text-center text-sm text-zinc-500">
      <div className="mb-3 flex items-center justify-center gap-1.5">
        <span>© 2025 Prince Kumar. Built with React + Tailwind CSS.</span>
        <Link to="/dashboard" className="text-zinc-700 hover:text-purple-400 transition-all duration-300" title="Admin Portal">
          <LuLock className="w-3.5 h-3.5" />
        </Link>
      </div>
      <div className="flex justify-center gap-6 mt-3 text-xl">
        <a 
          href="https://github.com/Prince1895" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-zinc-500 hover:text-white transition-all duration-300 hover:scale-110"
        >
          <FaGithub />
        </a>
        <a 
          href="https://linkedin.com/in/prince1184/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-zinc-500 hover:text-white transition-all duration-300 hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a 
          href="mailto:chauhanprince21153366@gmail.com" 
          className="text-zinc-500 hover:text-white transition-all duration-300 hover:scale-110"
        >
          <MdEmail />
        </a>
        <a 
          href="https://twitter.com/intent/follow?screen_name=Chauhan18Prince" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-zinc-500 hover:text-white transition-all duration-300 hover:scale-110"
        >
          <PiXLogo />
        </a>
      </div>
    </footer>
  )
}

export default Footer