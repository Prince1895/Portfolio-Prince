import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Motion values for the raw cursor coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Trail springs for a smooth lagging ring effect
  const springConfig = { damping: 28, stiffness: 220, mass: 0.5 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if the device has touch capabilities
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Check if the user prefers reduced motion (accessibility option)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Disregard custom cursor under these conditions
    if (isTouchDevice || prefersReducedMotion) {
      return;
    }

    // Hide default cursor
    document.body.classList.add('no-cursor');

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      if (!isVisible) setIsVisible(true);

      // Interactive hover detection
      const target = e.target;
      if (target) {
        const isInteractive = target.closest(
          'a, button, input, textarea, select, [role="button"], .project-card, .card, .clickable, iframe, label, option'
        );
        setIsHovered(!!isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('no-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  // Avoid execution/rendering on server-side or if touch/reduced-motion is active
  if (typeof window === 'undefined') return null;
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isTouch || prefersReducedMotion) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Inner point: instantly follows cursor with difference color blending */}
          <motion.div
            className="custom-cursor-dot"
            style={{
              x: mouseX,
              y: mouseY,
              translateX: '-50%',
              translateY: '-50%',
            }}
            animate={{
              scale: isClicked ? 0.75 : isHovered ? 0 : 1,
            }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.12 }}
          />

          {/* Outer Ring: Trails behind with spring physics and grows on interactive hovers */}
          <motion.div
            className="custom-cursor-ring"
            style={{
              x: trailX,
              y: trailY,
              translateX: '-50%',
              translateY: '-50%',
            }}
            animate={{
              scale: isClicked ? 0.85 : isHovered ? 1.5 : 1,
              borderColor: isHovered ? 'rgba(139, 92, 246, 0.85)' : 'rgba(139, 92, 246, 0.45)',
              backgroundColor: isHovered ? 'rgba(139, 92, 246, 0.08)' : 'rgba(0, 0, 0, 0)',
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 150 }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default CustomCursor;
