import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import { PiXLogo } from 'react-icons/pi';



const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 sm:px-8 mt-16 border-t border-gray-300 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
  <div className="mb-2">
    © 2025 Prince Kumar. Built with React + Tailwind CSS.
  </div>
  <div className="flex justify-center gap-4 mt-2 text-xl">
    <a href="https://github.com/Prince1895" target="_blank"><FaGithub /></a>
    <a href="https://linkedin.com/in/prince1184/" target="_blank"><FaLinkedin /></a>
    <a href="mailto:chauhanprince21153366@email.com"><MdEmail /></a>
    <a href="https://twitter.com/intent/follow?screen_name=Chauhan18Prince" target="_blank"><PiXLogo/></a>
  </div>
</footer>

  )
}

export default Footer