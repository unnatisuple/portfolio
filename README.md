# Unnati Suple - Portfolio

🚀 **Live Portfolio:**  
[View My Portfolio](https://portfolio-three-rho-8knycly00s.vercel.app/)

## About
Personal portfolio website showcasing my skills, projects, experience, and achievements.
# Unnati Suple — Personal Portfolio Website 🚀

A bright-themed, animation-rich, responsive personal portfolio website for **Unnati Shailendra Suple**, B.Tech CSBS student (9.52 CGPA) specializing in AI/ML & Computer Vision.

Built with **React (Vite)**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

---

## 🎨 Visual Features & Architecture

- **Color Palette**: Sophisticated light theme featuring Slate White (`#f8fafc`), Coral Orange (`#f97316`), Sky Blue (`#0284c7`), and Deep Navy (`#0f172a`).
- **Dynamic Mesh & Parallax**: Ambient drifting background gradient spheres and subtle rotating geometric frames.
- **Micro-Interactions**: Typewriter heading, floating gradient ring around portrait, staggered skill tags, vertical timeline milestones, project hover lift/tilt, and interactive certificate lightbox modal.
- **Real Working Links**: Direct connectivity to `mailto:unnatisuple@gmail.com`, WhatsApp (`wa.me/919371338751`), phone, LinkedIn, and GitHub.
- **Embedded Resume Viewer**: In-browser PDF reader with download and full-window viewing options.

---

## 📂 Project Structure

```
unnati-portfolio/
├── public/
│   └── assets/
│       ├── profile.jpg                        <-- Unnati's portrait photo (already active!)
│       ├── Unnati_Suple_Resume.pdf            <-- Resume PDF for inline reader & download
│       ├── certificates/                      <-- 7 High-res extracted certificate scans
│       │   ├── the-sandbox-hackathon-2nd-place.png
│       │   ├── edunet-aicte-ai-ml-internship.png
│       │   ├── ibm-skillsbuild-ai-fundamentals.png
│       │   ├── edunet-shell-green-skills-ai.png
│       │   ├── krutiverse-tech-kruti-2k25.png
│       │   ├── technex-hackathon-svpcet.png
│       │   └── enspire-documentation-head.png
│       └── projects/                          <-- Project mockup preview covers
│           ├── neuroassist-cover.jpg
│           ├── smart-campus-cover.jpg
│           ├── legislate-ai-cover.jpg
│           └── ecohabit-cover.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                         <-- Glassmorphic navbar with scroll spy
│   │   ├── BackgroundBlobs.jsx                <-- Floating ambient gradient blobs
│   │   ├── Hero.jsx                           <-- Typewriter, profile halo, badges, CTA
│   │   ├── About.jsx                          <-- Professional summary & metrics matrix
│   │   ├── Skills.jsx                         <-- 7 categories of animated skill chips
│   │   ├── Education.jsx                      <-- Vertical timeline with pulsing nodes
│   │   ├── Experience.jsx                     <-- 5 industry internships with exact dates
│   │   ├── Projects.jsx                       <-- Featured projects with live demo & repo links
│   │   ├── Certifications.jsx                 <-- Category filterable grid with modal
│   │   ├── CertificateModal.jsx               <-- High-res certificate lightbox modal
│   │   ├── Mindset.jsx                        <-- Growth values & philosophy cards
│   │   ├── ResumeViewer.jsx                   <-- Inline PDF reader & download trigger
│   │   ├── Contact.jsx                        <-- Real mailto, WhatsApp, tel, & form
│   │   └── Footer.jsx                         <-- Copyright & quick links
│   ├── data/
│   │   └── portfolioData.js                   <-- Central source of truth for all content
│   ├── App.jsx                                <-- Main assembly
│   ├── index.css                              <-- Custom Tailwind styles & glassmorphism
│   └── main.jsx
├── package.json
└── vite.config.js
```

---

## ⚡ Quickstart: Running Locally

```bash
# 1. Enter the project folder
cd unnati-portfolio

# 2. Install dependencies (if not already installed)
npm install

# 3. Start local development server
npm run dev
```

Visit `http://localhost:3000` (or the port indicated in your console) to view your site live!

---

## 🛠️ How to Customize Your Links & Assets

All content is centralized in `src/data/portfolioData.js` with clear `// REPLACE` tags:

### 1. Update Project Live Demo & GitHub URLs
Open `src/data/portfolioData.js` and update the `liveDemo` and `github` fields for each project:
```javascript
{
  id: "neuroassist-ai",
  title: "NeuroAssist AI – Explainable Alzheimer's Detection System",
  liveDemo: "https://your-live-demo-link.com",      // REPLACE
  github: "https://github.com/unnatisuple/your-repo" // REPLACE
}
```

### 2. Update Project Cover Screenshots
To swap the cover image with an actual screenshot of your project:
1. Save your screenshot as a JPG or PNG into `public/assets/projects/` (e.g., `neuroassist-cover.jpg`).
2. The site will immediately reflect the new image!

### 3. Update Your Resume PDF
To replace the resume with a newer edition:
1. Save your updated resume PDF to:
   ```
   public/assets/Unnati_Suple_Resume.pdf
   ```
2. The inline viewer and download buttons will immediately serve your updated resume.

---

## 🚀 One-Click Deployment Guide

### Deploy to Vercel (Recommended)
1. Push your repository to your GitHub account (`https://github.com/unnatisuple/portfolio`).
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **Add New Project**, select your portfolio repository.
4. Framework Preset: **Vite**.
5. Click **Deploy**. Your portfolio will be live on a custom `*.vercel.app` URL with automatic HTTPS in under 60 seconds!

### Deploy to Netlify
1. Log in to [netlify.com](https://netlify.com).
2. Choose **Import from Git** and select your repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy Site**.
