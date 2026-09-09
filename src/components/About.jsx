import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Briefcase, Code, CheckCircle2, HeartHandshake } from 'lucide-react';
import { aboutContent, personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-slate-800 bg-amber-200/80 border border-amber-300 shadow-2xs mb-3">
            <span className="text-base">💡</span>
            <span>ABOUT ME</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineering Tomorrow with Intelligent & Explainable AI
          </h2>
          <p className="font-handwriting text-brand-coral text-xl sm:text-2xl mt-1">
            "Turning Data into Actionable Intelligence"
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Portrait & Quick Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-glass relative overflow-hidden">
              {/* Background gradient decorative glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-200/40 to-amber-100/30 rounded-full blur-2xl -z-10" />

              <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-white shadow-md flex-shrink-0">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{personalInfo.shortName}</h3>
                  <p className="text-sm font-semibold text-brand-coral">AI/ML & Computer Vision Specialist</p>
                  <p className="text-xs text-slate-500 mt-1">{personalInfo.college}</p>
                </div>
              </div>

              {/* Core Strengths Checklist */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700">
                    <strong className="font-semibold text-slate-900">Medical Computer Vision:</strong> Early detection models with Grad-CAM visualization for Alzheimer's MRI scans.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700">
                    <strong className="font-semibold text-slate-900">End-to-End Delivery:</strong> Experience spanning full-stack MERN engineering to production Power BI dashboards.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700">
                    <strong className="font-semibold text-slate-900">Academic & Hackathon Excellence:</strong> 9.52 CGPA and 2nd Place Winner at The Sandbox Hackathon.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Professional Summary & Stats Matrix */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Animated Text Block */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-glass">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-brand-coral" />
                <span>Professional Summary</span>
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                {aboutContent.summary}
              </p>
              
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                  <Code className="w-3.5 h-3.5 text-slate-500" />
                  <span>Python & PyTorch</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                  <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                  <span>React.js & MERN</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                  <Award className="w-3.5 h-3.5 text-slate-500" />
                  <span>Explainable AI (XAI)</span>
                </span>
              </div>
            </div>

            {/* Metric Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {aboutContent.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="glass-panel rounded-2xl p-4 text-center hover:border-orange-300 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-800 mt-1">{stat.label}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{stat.sub}</div>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
