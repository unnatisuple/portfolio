import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function DoodleAccents() {
  const { scrollY } = useScroll();
  
  // Parallax transforms for decorative layers
  const yLayer1 = useTransform(scrollY, [0, 3000], [0, -180]);
  const yLayer2 = useTransform(scrollY, [0, 3000], [0, -90]);
  const yLayer3 = useTransform(scrollY, [0, 3000], [0, -260]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Warm cream/off-white base */}
      <div className="absolute inset-0 bg-[#FAF7EE]" />

      {/* Layer 1: Soft Pastel Ambient Blobs */}
      <motion.div style={{ y: yLayer2 }} className="absolute inset-0">
        {/* Soft Warm Yellow glow (top-right) */}
        <div className="absolute -top-20 -right-20 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-amber-200/35 via-yellow-100/30 to-transparent blur-3xl" />
        
        {/* Soft Pastel Sky Blue glow (mid-left) */}
        <div className="absolute top-[28%] -left-28 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-sky-200/30 via-cyan-100/20 to-transparent blur-3xl" />

        {/* Soft Coral/Peach glow (mid-right) */}
        <div className="absolute top-[55%] -right-24 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-orange-200/25 via-amber-100/20 to-transparent blur-3xl" />

        {/* Soft Mint/Cream glow (bottom-left) */}
        <div className="absolute top-[80%] left-1/4 w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-emerald-100/25 via-teal-50/20 to-transparent blur-3xl" />
      </motion.div>

      {/* Layer 2: Illustrated Hand-drawn Doodles (Subtle Parallax) */}
      <motion.div style={{ y: yLayer1 }} className="absolute inset-0">
        
        {/* Doodle Sun with Rays (Top Left Hero) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
          className="absolute top-28 left-8 sm:left-16 w-14 h-14 opacity-55 text-amber-500"
        >
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="32" cy="32" r="13" fill="rgba(254, 240, 138, 0.5)" />
            <line x1="32" y1="6" x2="32" y2="12" />
            <line x1="32" y1="52" x2="32" y2="58" />
            <line x1="6" y1="32" x2="12" y2="32" />
            <line x1="52" y1="32" x2="58" y2="32" />
            <line x1="14" y1="14" x2="18" y2="18" />
            <line x1="46" y1="46" x2="50" y2="50" />
            <line x1="14" y1="50" x2="18" y2="46" />
            <line x1="46" y1="18" x2="50" y2="14" />
          </svg>
        </motion.div>

        {/* Doodle Sparkle Star 1 (Hero Right) */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-44 right-12 sm:right-28 w-10 h-10 opacity-60 text-brand-coral"
        >
          <svg viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 0 C20 12, 12 20, 0 20 C12 20, 20 28, 20 40 C20 28, 28 20, 40 20 C28 20, 20 12, 20 0 Z" />
          </svg>
        </motion.div>

        {/* Doodle Squiggle (Near About Section) */}
        <motion.div
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[22%] right-10 w-24 h-8 opacity-45 text-sky-500"
        >
          <svg viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M5,15 Q25,0 45,15 T85,15" />
          </svg>
        </motion.div>

        {/* Doodle Dashed Curved Arrow (Near Skills) */}
        <motion.div
          animate={{ rotate: [-2, 4, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[36%] left-6 sm:left-14 w-16 h-16 opacity-45 text-amber-600"
        >
          <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round">
            <path d="M10,15 C30,10 50,25 45,50" />
            <polyline points="38,45 45,52 52,43" strokeDasharray="none" />
          </svg>
        </motion.div>

        {/* Doodle Speech Bubble Sticker (Near Projects) */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[52%] left-10 sm:left-20 w-16 h-14 opacity-50 text-brand-coral"
        >
          <svg viewBox="0 0 70 60" fill="rgba(255, 237, 213, 0.7)" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="5" width="58" height="40" rx="14" />
            <polygon points="20,45 28,45 16,56" fill="rgba(255, 237, 213, 0.7)" />
            <circle cx="24" cy="25" r="3" fill="currentColor" />
            <circle cx="34" cy="25" r="3" fill="currentColor" />
            <circle cx="44" cy="25" r="3" fill="currentColor" />
          </svg>
        </motion.div>

        {/* Doodle Starburst 2 (Near Certifications) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[68%] right-14 w-12 h-12 opacity-50 text-amber-500"
        >
          <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="25" y1="5" x2="25" y2="45" />
            <line x1="5" y1="25" x2="45" y2="25" />
            <line x1="11" y1="11" x2="39" y2="39" />
            <line x1="11" y1="39" x2="39" y2="11" />
          </svg>
        </motion.div>

        {/* Doodle Zigzag (Near Resume / Contact) */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[86%] right-12 w-20 h-10 opacity-40 text-sky-500"
        >
          <svg viewBox="0 0 80 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="5,20 20,8 35,22 50,8 65,22 75,12" />
          </svg>
        </motion.div>

        {/* Hand-drawn double ring (Bottom left) */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[92%] left-12 w-16 h-16 opacity-40 text-amber-600"
        >
          <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="30" cy="30" r="22" strokeDasharray="3 3" />
            <circle cx="30" cy="30" r="14" />
          </svg>
        </motion.div>

      </motion.div>
    </div>
  );
}
