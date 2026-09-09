import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Soft background tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-sky-50/40 to-orange-50/30" />

      {/* Top right coral blob */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-orange-300/25 to-amber-200/20 blur-3xl"
      />

      {/* Top left sky blue blob */}
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.94, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 -left-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-sky-300/25 to-cyan-200/20 blur-3xl"
      />

      {/* Center indigo/blue blob */}
      <motion.div
        animate={{
          x: [0, 50, -40, 0],
          y: [0, 40, -50, 0],
          scale: [1, 1.12, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-2/3 right-1/4 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-indigo-200/20 to-blue-200/20 blur-3xl"
      />

      {/* Floating subtle geometric shapes for visual richness */}
      <motion.div
        animate={{ rotate: 360, y: [0, -15, 0] }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute top-48 right-16 w-16 h-16 border border-orange-300/30 rounded-2xl rotate-12"
      />
      
      <motion.div
        animate={{ rotate: -360, y: [0, 20, 0] }}
        transition={{
          rotate: { duration: 35, repeat: Infinity, ease: 'linear' },
          y: { duration: 7, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute top-1/2 left-12 w-20 h-20 border border-sky-300/30 rounded-full"
      />

      <motion.div
        animate={{ rotate: 180, x: [0, 15, 0] }}
        transition={{
          rotate: { duration: 45, repeat: Infinity, ease: 'linear' },
          x: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute bottom-32 left-1/3 w-12 h-12 border border-amber-300/30 rotate-45"
      />
    </div>
  );
}
