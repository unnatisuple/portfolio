import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  ArrowDown, 
  FileDown, 
  Linkedin, 
  Github, 
  Mail, 
  Phone,
  Sparkles,
  Award,
  ChevronDown
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = personalInfo.roleTitles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.roleTitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Call-to-Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-slate-800 bg-amber-200/80 border border-amber-300 shadow-2xs">
                <span className="text-sm">🌟</span>
                <span>9.52 CGPA • CSBS</span>
              </span>
              
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-100 text-sky-800 border border-sky-200 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-brand-sky" />
                <span>{personalInfo.location}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Available for Internship</span>
              </span>
            </div>

            {/* Handwritten playful motto */}
            <div className="flex items-center gap-2 -mb-2">
              <span className="font-handwriting text-brand-coral text-2xl sm:text-3xl rotate-[-2deg] font-bold">
                "Dream • Build • Grow" ✨
              </span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-sky-600">
                Unnati Suple
              </span>
            </h1>

            {/* Animated Typewriter Subtitle */}
            <div className="min-h-[2.5rem] flex items-center justify-center lg:justify-start">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700">
                I am an{' '}
                <span className="text-brand-coral border-b-2 border-brand-coral pb-0.5 inline-block">
                  {displayText}
                </span>
                <span className="animate-pulse text-brand-coral font-bold ml-0.5">|</span>
              </span>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              {personalInfo.tagline} Focused on deep learning, MRI image classification, Grad-CAM interpretability, and business-focused predictive modeling.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-md shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 hover:-translate-y-0.5 transition-all"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePdf}
                download="Unnati_Suple_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-xs text-slate-700 bg-white hover:bg-amber-50/50 border border-slate-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <FileDown className="w-4 h-4 text-brand-coral" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-semibold text-xs text-slate-600 hover:text-slate-900 bg-amber-100/60 hover:bg-amber-200/60 transition-all"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Reference-Inspired Unified Pill Contact Bar */}
            <div className="pt-2 w-full max-w-xl">
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 px-4 py-2.5 rounded-2xl bg-white/90 border border-amber-200/90 shadow-sm backdrop-blur-md">
                
                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-semibold text-slate-700 hover:text-brand-coral hover:bg-orange-50 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-coral" />
                  <span>+91 93713 38751</span>
                </a>

                <span className="text-slate-300 hidden sm:inline">•</span>

                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-semibold text-slate-700 hover:text-brand-coral hover:bg-orange-50 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-coral" />
                  <span>{personalInfo.email}</span>
                </a>

                <span className="text-slate-300 hidden sm:inline">•</span>

                {/* Social links */}
                <div className="flex items-center gap-1.5">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  <a
                    href={personalInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: New Portrait Photo with Warm Halo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Outer Rotating Warm Halo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full p-1.5 bg-gradient-to-tr from-amber-400 via-orange-400 via-yellow-300 to-sky-400 opacity-90 shadow-2xl shadow-orange-500/20"
              >
                <div className="w-full h-full rounded-full bg-[#FAF7EE]" />
              </motion.div>

              {/* Pulsing Warm Glow */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-amber-300/30 to-orange-400/25 blur-xl animate-pulse" />

              {/* Inner Circle with New Headshot (Well centered) */}
              <div className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-84 md:h-84 rounded-full overflow-hidden border-4 border-white shadow-xl bg-amber-50">
                <img
                  src={personalInfo.profileImage}
                  alt="Unnati Shailendra Suple"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Achievement Badge 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -left-4 sm:left-0 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-md border border-amber-200 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">2nd Place Winner</div>
                  <div className="text-[10px] font-semibold text-slate-500">The Sandbox Hackathon</div>
                </div>
              </motion.div>

              {/* Floating Stat Badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-3 -right-2 sm:right-2 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-md border border-sky-200 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center text-brand-sky">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">9.52 CGPA</div>
                  <div className="text-[10px] text-slate-500 font-bold">Top Department Rank</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-16 flex justify-center">
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center text-slate-400 hover:text-brand-coral transition-colors"
          >
            <span className="font-handwriting text-brand-coral text-sm mb-1">explore my work</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </div>

      </div>
    </section>
  );
}
