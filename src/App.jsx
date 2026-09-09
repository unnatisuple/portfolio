import React from 'react';
import Navbar from './components/Navbar';
import BackgroundBlobs from './components/BackgroundBlobs';
import DoodleAccents from './components/DoodleAccents';
import CursorTrailer from './components/CursorTrailer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import GitHubActivity from './components/GitHubActivity';
import Certifications from './components/Certifications';
import Mindset from './components/Mindset';
import ResumeViewer from './components/ResumeViewer';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-800 bg-[#FAF7EE] font-sans selection:bg-orange-500 selection:text-white">
      {/* Interactive Cursor Trailer (Desktop only) */}
      <CursorTrailer />

      {/* Dynamic Animated Mesh & Blobs */}
      <BackgroundBlobs />

      {/* Playful Hand-Drawn Doodle SVGs & Floating Accents */}
      <DoodleAccents />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Global Page Content */}
      <main className="relative z-10 flex flex-col space-y-4 sm:space-y-8">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <GitHubActivity />
        <Certifications />
        <Mindset />
        <ResumeViewer />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
