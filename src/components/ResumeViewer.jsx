import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileDown, ExternalLink, Eye, AlertCircle, FileText, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeViewer() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-100/90 border border-sky-300/80 shadow-xs mb-3">
            <span>📄</span>
            <span>RESUME VIEWER</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Curriculum Vitae & Credentials
          </h2>
          <p className="font-handwriting text-xl text-sky-700 font-semibold mt-1">
            "Curriculum Vitae & Technical Credentials"
          </p>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Review my complete academic transcript, technical internships, projects, and credentials inline.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Action Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-6 sm:p-8 shadow-glass mb-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-md shadow-orange-500/25 flex-shrink-0">
              <FileText className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Unnati Shailendra Suple — Official Resume
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                PDF Document • B.Tech CSBS • AI/ML & Computer Vision
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-center">
            {/* Download Button */}
            <a
              href={personalInfo.resumePdf}
              download="Unnati_Suple_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 hover:-translate-y-0.5 transition-all"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>

            {/* Open in New Tab Button */}
            <a
              href={personalInfo.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs hover:shadow-md transition-all"
            >
              <ExternalLink className="w-4 h-4 text-brand-sky" />
              <span>Open in New Tab</span>
            </a>
          </div>
        </motion.div>

        {/* Inline PDF Viewer Embed Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel rounded-3xl p-3 sm:p-5 shadow-2xl border border-slate-200 overflow-hidden relative"
        >
          {/* Top Browser Style Window Bar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200 mb-3 bg-slate-50 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono text-slate-500 ml-2">Unnati_Suple_Resume.pdf</span>
            </div>
            <span className="text-xs text-slate-400 font-semibold hidden sm:inline">Inline Reader Mode</span>
          </div>

          {/* Embedded Viewer (iframe with PDF) */}
          <div className="w-full h-[650px] sm:h-[800px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 relative">
            <iframe
              src={`${personalInfo.resumePdf}#toolbar=1&navpanes=0&scrollbar=1`}
              title="Unnati Suple Resume PDF"
              className="w-full h-full border-0"
              onLoad={() => setIframeLoaded(true)}
            />

            {/* Fallback & Helper Overlay */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 shadow-md border border-slate-200 flex items-center gap-2">
              <Eye className="w-4 h-4 text-brand-coral" />
              <span>Scroll to navigate pages</span>
            </div>
          </div>

          {/* Note for updating */}
          <div className="mt-4 px-2 flex items-center justify-between flex-wrap gap-2 text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>Resume location: <code className="text-slate-700 font-mono">public/assets/Unnati_Suple_Resume.pdf</code></span>
            </span>
            <span>Replace file in public/assets to update instantly.</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
