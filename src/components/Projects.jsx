import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Trophy, Calendar, Sparkles, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-slate-800 bg-emerald-200/80 border border-emerald-300 shadow-2xs mb-3">
            <span className="text-base">📂</span>
            <span>FEATURED PROJECTS</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Projects & Research Implementations
          </h2>
          <p className="font-handwriting text-brand-coral text-xl sm:text-2xl mt-1">
            "Dream • Build • Deliver"
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -8 }}
              className="glass-panel rounded-3xl overflow-hidden shadow-glass hover:shadow-xl transition-all duration-300 flex flex-col group border border-amber-200/80 hover:border-brand-coral relative"
            >
              {/* Reference-Inspired Circular Numbered Badge (01, 02, 03, 04...) */}
              <div className="absolute -top-3 -right-3 z-20 w-11 h-11 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 text-white font-black text-sm flex items-center justify-center shadow-lg border-2 border-white group-hover:scale-110 transition-transform">
                0{idx + 1}
              </div>

              {/* Project Cover Image with Badge */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                {/* Note for Unnati: Replace this image path with your screenshot */}
                {/* // REPLACE: project cover image */}
                <img
                  src={project.coverImage}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-14 flex justify-between items-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 backdrop-blur-md shadow-md">
                    {project.award ? <Trophy className="w-3.5 h-3.5 text-amber-500" /> : <Sparkles className="w-3.5 h-3.5 text-brand-coral" />}
                    <span>{project.badge}</span>
                  </span>

                  <span className="text-[11px] font-semibold text-white/90 bg-slate-900/70 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {project.period}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-brand-coral transition-colors">
                    {project.title}
                  </h3>

                  {project.award && (
                    <div className="mb-3 p-2.5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-semibold flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>{project.award}</span>
                    </div>
                  )}

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-1.5 mb-4">
                    {project.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-100 text-slate-700 hover:bg-orange-50 hover:text-brand-coral transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  {/* Live Demo Button - // REPLACE */}
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  {/* View on GitHub Button - // REPLACE */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs hover:shadow-md transition-all"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Note Banner for Easy Swapping */}
        <div className="mt-12 p-4 rounded-2xl bg-orange-50/70 border border-orange-200/80 flex items-center justify-between flex-wrap gap-3 text-xs text-orange-900">
          <div className="flex items-center gap-2">
            <span className="text-base">💡</span>
            <span>
              <strong>Note:</strong> Live demo links, GitHub repositories, and preview covers are clearly marked with <code className="bg-white px-1.5 py-0.5 rounded text-orange-800 border border-orange-200 font-mono text-[11px]">// REPLACE</code> comments in <code className="bg-white px-1.5 py-0.5 rounded text-orange-800 border border-orange-200 font-mono text-[11px]">src/data/portfolioData.js</code> for instant personalization.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
