import React from 'react';
import { motion } from 'framer-motion';
import { Compass, TrendingUp, Brain, Lightbulb, Sparkles, Quote } from 'lucide-react';
import { mindsetCards } from '../data/portfolioData';

const iconMap = {
  Compass: Compass,
  TrendingUp: TrendingUp,
  Brain: Brain,
  Lightbulb: Lightbulb,
};

export default function Mindset() {
  return (
    <section id="mindset" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-orange-50/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-orange-800 bg-orange-100/90 border border-orange-300/80 shadow-xs mb-3">
            <span>🌱</span>
            <span>MINDSET & PHILOSOPHY</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineering Mindset & Growth
          </h2>
          <p className="font-handwriting text-xl text-orange-600 font-semibold mt-1">
            "The Principles that Drive My Growth"
          </p>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            The core engineering values that guide how I solve problems, tackle ambiguity, and design responsible AI.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Growth Connecting Timeline Track (Desktop) */}
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 border-t-2 border-dashed border-orange-300 -translate-y-1/2 -z-10" />

          {/* Mindset Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mindsetCards.map((card, idx) => {
              const IconComp = iconMap[card.icon] || Sparkles;

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30, rotateY: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`glass-panel rounded-3xl p-6 sm:p-7 shadow-glass hover:shadow-xl transition-all duration-300 flex flex-col justify-between border ${card.border} ${card.bgHover} group`}
                >
                  {/* Top Step Pill & Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${card.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                        <IconComp className="w-6 h-6" />
                      </div>

                      <span className="text-xs font-black text-slate-300 group-hover:text-brand-coral transition-colors font-mono">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-coral transition-colors">
                      {card.title}
                    </h3>

                    {/* Quote Box */}
                    <div className="relative pl-4 mb-4 border-l-2 border-orange-300">
                      <Quote className="w-4 h-4 text-brand-coral/40 absolute -top-1 -left-2 rotate-180" />
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 italic leading-snug">
                        "{card.quote}"
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom indicator badge */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-coral animate-pulse" />
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Continuous Principle
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
