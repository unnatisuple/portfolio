import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Eye, 
  BarChart3, 
  Code2, 
  Layout, 
  Database, 
  Wrench,
  Sparkles
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Brain: Brain,
  Eye: Eye,
  BarChart3: BarChart3,
  Code2: Code2,
  Layout: Layout,
  Database: Database,
  Wrench: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-slate-800 bg-sky-200/80 border border-sky-300 shadow-2xs mb-3">
            <span className="text-base">💻</span>
            <span>SKILLS & TOOLS</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical Stack & Frameworks
          </h2>
          <p className="font-handwriting text-brand-coral text-xl sm:text-2xl mt-1">
            "Code that Speaks Clear Truth"
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, groupIdx) => {
            const IconComponent = iconMap[group.icon] || Sparkles;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
                className={`glass-panel rounded-3xl p-6 shadow-glass hover:shadow-glass-hover transition-all duration-300 relative group overflow-hidden ${
                  group.category === 'AI & Machine Learning' || group.category === 'Computer Vision'
                    ? 'md:col-span-1 lg:col-span-1 border-orange-200/90'
                    : ''
                }`}
              >
                {/* Decorative Top Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${group.accent}`} />

                {/* Card Header */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className={`w-11 h-11 rounded-2xl bg-gradient-to-r ${group.accent} flex items-center justify-center text-white shadow-md shadow-slate-200 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg group-hover:text-brand-coral transition-colors">
                      {group.category}
                    </h3>
                    <span className="text-[11px] font-medium text-slate-400">
                      {group.skills.length} competencies
                    </span>
                  </div>
                </div>

                {/* Animated Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08, y: -2 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/90 text-slate-700 border border-slate-200/90 shadow-2xs hover:border-brand-coral hover:text-brand-coral hover:bg-orange-50/70 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
