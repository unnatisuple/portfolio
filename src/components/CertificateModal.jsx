import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, Calendar, Building2, Award } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-200"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-slate-50/80">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center text-brand-coral">
                <Award className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 line-clamp-1">
                  {certificate.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {certificate.issuer}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Certificate Image or Fallback */}
          <div className="p-4 sm:p-6 bg-slate-100/60 flex items-center justify-center max-h-[65vh] overflow-auto">
            {certificate.image ? (
              <img
                src={certificate.image}
                alt={certificate.title}
                className="max-h-[55vh] w-auto object-contain rounded-xl shadow-lg border border-white"
              />
            ) : (
              <div className="py-16 px-8 text-center bg-white rounded-2xl border border-slate-200 shadow-sm max-w-md">
                <Award className="w-12 h-12 text-brand-coral mx-auto mb-3 opacity-80" />
                <h4 className="text-base font-bold text-slate-800 mb-1">{certificate.title}</h4>
                <p className="text-xs text-slate-500">{certificate.issuer}</p>
                <p className="text-xs text-slate-600 mt-4 leading-relaxed">{certificate.description}</p>
              </div>
            )}
          </div>

          {/* Details & Actions Footer */}
          <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs text-slate-600">
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-3.5 h-3.5 text-brand-coral" />
                <span>{certificate.date}</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Building2 className="w-3.5 h-3.5 text-brand-sky" />
                <span className="truncate max-w-[200px]">{certificate.issuer}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              {certificate.image && (
                <a
                  href={certificate.image}
                  download={certificate.image ? certificate.image.split('/').pop() : `${certificate.id}.jpg`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Image</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
