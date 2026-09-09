import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CursorTrailer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics for fluid trailing
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouchDevice || prefersReducedMotion) {
      return;
    }

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Detect clickable elements for expanding trailer
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHoveringClickable(true);
      } else {
        setIsHoveringClickable(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer glowing spring trailer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-multiply"
        style={{
          x: smoothX,
          y: smoothY,
          width: isHoveringClickable ? 46 : 28,
          height: isHoveringClickable ? 46 : 28,
          backgroundColor: isHoveringClickable ? 'rgba(249, 115, 22, 0.18)' : 'rgba(249, 115, 22, 0.12)',
          border: isHoveringClickable ? '1.5px solid rgba(249, 115, 22, 0.7)' : '1px solid rgba(249, 115, 22, 0.4)',
          boxShadow: isHoveringClickable ? '0 0 16px rgba(249, 115, 22, 0.25)' : 'none',
          transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease, border 0.2s ease',
        }}
      />

      {/* Center sharp tiny dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-coral shadow-xs"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHoveringClickable ? 1.4 : 1,
          transition: 'scale 0.15s ease',
        }}
      />
    </>
  );
}
