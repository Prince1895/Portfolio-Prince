import React from 'react'
import { motion } from 'framer-motion'
import avtar from '../assets/avtarpng.png'
import { TypeAnimation } from 'react-type-animation'
import { RainbowButton } from './magicui/rainbow-button'
import { Link as ScrollLink } from 'react-scroll'


const Hero = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        <motion.a
          href="https://twitter.com/intent/follow?screen_name=Chauhan18Prince"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94], 
            type: "spring",
            stiffness: 80,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.96 }}
        >
          <motion.img
            src={avtar}
            alt="Follow on Twitter"
            className="w-20 h-20 sm:w-28 sm:h-28 rounded-full hover:shadow-110 transition-all duration-30 ease-in-out"
            title="Follow me on Twitter"
            layout
          />
        </motion.a>

        <h1
            className="text-[4rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] mt-4 text-center font-bold tracking-tight"
  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          <TypeAnimation
            sequence={[
              "Hi, I'm Prince Kumar 👋",
            ]}
            wrapper="span"
            speed={30}
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              display: 'inline-block'
            }}
            repeat={0}
          />
        </h1>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="mt-2 max-sm:mt-5 max-sm:px-3 text-base max-sm:text-sm text-center font-normal tracking-normal leading-6 inter"
          >
            19, I build fast, break limits, and ship without fear. Obsessed with clean logic, real-world systems, and relentless learning. Code is my playground, curiosity my fuel. If you're building with purpose, I'm in
          </motion.p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center justify-center">
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2.5, duration: 0.8 }}
  >
    <a
      href="https://www.linkedin.com/in/prince1184/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <RainbowButton>Let's Connect</RainbowButton>
    </a>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2.5, duration: 0.8 }}
  >
    <RainbowButton>
      <ScrollLink
        to="contact-section"
        activeClass="active"
        smooth={true}
        offset={-120}
        duration={1100}
      >
        Get in touch
      </ScrollLink>
    </RainbowButton>
  </motion.div>
</div>



      </div>
    </div>
  )
}

export default Hero
