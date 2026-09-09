import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { workExperiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-slate-800 bg-orange-200/80 border border-orange-300 shadow-2xs mb-3">
            <span className="text-base">🎒</span>
            <span>EXPERIENCE</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Work Experience & Internships
          </h2>
          <p className="font-handwriting text-brand-coral text-xl sm:text-2xl mt-1">
            "Hands-on Engineering from Day One"
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Animated Vertical Timeline */}
        <div className="relative border-l-2 border-orange-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          
          {workExperiences.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${idx}`}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Marker Dot with Pulse */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-2 w-6 h-6 rounded-full bg-white border-4 border-orange-500 shadow-md flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-orange-600 group-hover:scale-125 transition-transform" />
              </div>

              {/* Experience Card */}
              <div className="glass-panel rounded-3xl p-6 sm:p-7 shadow-glass hover:shadow-glass-hover transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-brand-coral" />
                    <span>{exp.period}</span>
                  </span>

                  <span className={`inline-flex items-center text-xs font-bold px-3 py-1 rounded-full border ${exp.badgeColor}`}>
                    {exp.type}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1 group-hover:text-brand-coral transition-colors">
                  {exp.role}
                </h3>

                <h4 className="text-sm sm:text-base font-semibold text-slate-600 mb-3 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-brand-sky" />
                  <span>{exp.company}</span>
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed font-normal pt-2 border-t border-slate-100">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
