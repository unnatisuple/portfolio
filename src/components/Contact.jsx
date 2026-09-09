import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Sparkles, 
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct prefilled mailto link
    const subject = encodeURIComponent(formState.subject || `Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 relative">
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
            <span>📬</span>
            <span>GET IN TOUCH</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Collaborate & Build Together
          </h2>
          <p className="font-handwriting text-xl text-orange-600 font-semibold mt-1">
            "Let's Build Something Meaningful Together"
          </p>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            I'm currently seeking AI/ML and Computer Vision Internship opportunities. Reach out directly via email, WhatsApp, or phone!
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Floating Social Docks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Details Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-glass space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Direct Contact Channels</h3>

              <div className="space-y-4">
                {/* Email (Real Link) */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white hover:bg-orange-50 border border-slate-200 hover:border-orange-300 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-brand-coral group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase">Email</span>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-brand-coral transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                {/* WhatsApp (Real Link) */}
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase">WhatsApp (Instant Chat)</span>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      +91 93713 38751
                    </p>
                  </div>
                </a>

                {/* Phone Call (Real Link) */}
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-brand-sky group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase">Phone</span>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-brand-sky transition-colors">
                      +91 93713 38751
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase">Location</span>
                    <p className="text-sm font-bold text-slate-900">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Profiles Dock */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Professional Networks
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white border border-blue-200 font-bold text-xs transition-all shadow-xs hover:shadow-md"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-900 hover:text-white border border-slate-200 font-bold text-xs transition-all shadow-xs hover:shadow-md"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-glass">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Send a Message</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill out the form below to initiate an email draft to <strong className="text-slate-800">{personalInfo.email}</strong>.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-brand-coral focus:ring-2 focus:ring-orange-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. jane@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-brand-coral focus:ring-2 focus:ring-orange-500/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. AI/ML Internship Opportunity / Project Collaboration"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-brand-coral focus:ring-2 focus:ring-orange-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your inquiry, internship requirements, or project details..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-brand-coral focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-md shadow-orange-500/30 hover:shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message (via Email)</span>
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Email client opened with prefilled message details!</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
