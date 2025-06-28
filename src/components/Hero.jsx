import React from 'react'
import{motion} from 'framer-motion'
import {avtar} from '../assets/avtarpng.png'

const Hero = () => {
  return (
  <>
  <section className="w-full h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
  <motion.a
  href="https://twitter.com/intent/follow?screen_name=Chauhan18Prince"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
>
  <img
    src={avtar}
    alt="Follow on Twitter"
    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-black dark:border-white hover:scale-105 transition-transform duration-300 cursor-pointer"
    title="Follow me on Twitter"
  />
</motion.a>
</div>
</section>
  </>
  )
}

export default Hero