import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Trophy, 
  Eye, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  Medal, 
  BarChart2, 
  Globe, 
  Sparkles 
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

const categories = [
  { label: 'All Credentials', value: 'All' },
  { label: 'Certifications', value: 'Certifications' },
  { label: 'Hackathons & Competitions', value: 'Hackathons & Competitions' },
  { label: 'Leadership & Activities', value: 'Leadership & Activities' },
];

const badgeIconMap = {
  Medal: Medal,
  Award: Award,
  CheckCircle: CheckCircle2,
  BarChart: BarChart2,
  Trophy: Trophy,
  Globe: Globe,
};

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalCert, setActiveModalCert] = useState(null);

  const filteredCerts = selectedCategory === 'All'
    ? certificationsData
    : certificationsData.filter((c) => c.category === selectedCategory);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/90 border border-amber-300/80 shadow-xs mb-3">
            <span>📜</span>
            <span>CERTIFICATIONS & ACHIEVEMENTS</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Verified Credentials & Milestones
          </h2>
          <p className="font-handwriting text-xl text-amber-700 font-semibold mt-1">
            "Verified Milestones & Honors"
          </p>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Verified credentials from IBM, AWS, Shell, AICTE, NPTEL, and competitive hackathon rankings.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat.value
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white/80 text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, idx) => {
            // Case A / Has Real Certificate Image -> Visual Thumbnail Card with Lightbox Inspect
            if (cert.hasImage) {
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setActiveModalCert(cert)}
                  className="glass-panel rounded-3xl overflow-hidden shadow-glass hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group border border-slate-200/90 hover:border-amber-300 border-t-4 border-t-amber-400"
                >
                  <div>
                    {/* Real Certificate Image Thumbnail */}
                    <div className="relative h-48 bg-slate-100 overflow-hidden flex items-center justify-center">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-bold backdrop-blur-2xs">
                        <Eye className="w-4 h-4" />
                        <span>Click to Inspect Scan</span>
                      </div>

                      {/* Top Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-slate-800 shadow-xs backdrop-blur-md">
                          {cert.badgeText || "📜 Verified Credential"}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 space-y-2">
                      <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-brand-coral transition-colors line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                        <Building2 className="w-3.5 h-3.5 text-brand-sky flex-shrink-0" />
                        <span className="line-clamp-1">{cert.issuer}</span>
                      </p>
                    </div>
                  </div>

                  {/* Card Footer with Inspect Trigger */}
                  <div className="px-5 pb-5 pt-3 border-t border-slate-100/80 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3 h-3 text-brand-coral" />
                      <span>{cert.date}</span>
                    </span>

                    <span className="text-brand-coral font-bold flex items-center gap-1 group-hover:underline">
                      <span>Inspect</span>
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              );
            }

            // Case B / No Certificate Image -> Clean Badge Card (NO image area at all, NO Inspect button)
            const BadgeIcon = badgeIconMap[cert.iconType] || Sparkles;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass-panel rounded-3xl p-6 sm:p-7 shadow-glass hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border border-slate-200/90 hover:border-amber-400 border-t-4 border-t-brand-coral relative overflow-hidden"
              >
                {/* Subtle shine sweep on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

                <div>
                  {/* Top Bar: Icon + Stat Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${cert.accentColor || 'from-amber-500 to-orange-500'} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                      <BadgeIcon className="w-6 h-6" />
                    </div>

                    <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border shadow-2xs ${cert.badgeBg || 'bg-amber-100 text-amber-800 border-amber-200'}`}>
                      {cert.statBadge}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="font-extrabold text-slate-900 text-lg leading-snug group-hover:text-amber-600 transition-colors mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-500 flex items-center gap-1.5 font-medium mb-3">
                    <Building2 className="w-3.5 h-3.5 text-brand-sky flex-shrink-0" />
                    <span>{cert.issuer}</span>
                  </p>

                  {/* Description */}
                  {cert.description && (
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {cert.description}
                    </p>
                  )}
                </div>

                {/* Bottom Bar (Date & Milestone status, NO Inspect button) */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 font-medium">
                    <Calendar className="w-3 h-3 text-brand-coral" />
                    <span>{cert.date}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 font-semibold text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <CertificateModal
        certificate={activeModalCert}
        onClose={() => setActiveModalCert(null)}
      />
    </section>
  );
}
