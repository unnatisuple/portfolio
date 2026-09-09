import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-slate-800 bg-purple-200/80 border border-purple-300 shadow-2xs mb-3">
            <span className="text-base">🎓</span>
            <span>EDUCATION</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education & Academic Honors
          </h2>
          <p className="font-handwriting text-brand-coral text-xl sm:text-2xl mt-1">
            "Knowledge Builds the Vision"
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Animated Vertical Timeline */}
        <div className="relative border-l-2 border-dashed border-purple-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Pulsing Dot Marker */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-purple-500 shadow-md flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
              </div>

              {/* Education Card */}
              <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-glass hover:shadow-glass-hover transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-extrabold px-3 py-1 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                    <Award className="w-3.5 h-3.5 text-brand-coral" />
                    <span>{edu.grade}</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1 group-hover:text-purple-700 transition-colors">
                  {edu.degree}
                </h3>
                
                <h4 className="text-sm sm:text-base font-semibold text-slate-600 mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-purple-600" />
                  <span>{edu.institution}</span>
                </h4>

                <div className="space-y-2 pt-3 border-t border-slate-100">
                  {edu.highlights.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
