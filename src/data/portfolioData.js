// Portfolio Data for Unnati Shailendra Suple

export const personalInfo = {
  name: "Unnati Shailendra Suple",
  shortName: "Unnati Suple",
  roleTitles: [
    "AI & Machine Learning Engineer",
    "Computer Vision Enthusiast",
    "Data Analyst & BI Specialist",
    "Full-Stack Explorer"
  ],
  tagline: "B.Tech CSBS student (9.52 CGPA) building explainable AI, computer vision, and data-driven solutions.",
  location: "Nagpur, Maharashtra, India",
  cgpa: "9.52 / 10",
  college: "St. Vincent Pallotti College of Engineering and Technology",
  degree: "B.Tech, Computer Science and Business Systems",
  duration: "Aug 2023 – Present",
  gate: "GATE 2025 – Appeared",
  
  // Real Working Contacts
  email: "unnatisuple@gmail.com",
  phone: "+919371338751",
  whatsapp: "https://wa.me/919371338751",
  linkedin: "https://linkedin.com/in/unnati-suple",
  github: "https://github.com/unnatisuple",
  
  // Single canonical reference for the resume PDF
  resumePdf: "/assets/Unnati_Suple_Resume.pdf",
  profileImage: "/assets/profile.jpg",
};

export const aboutContent = {
  summary: `B.Tech CSBS student with a 9.52/10 CGPA, specializing in AI/ML and Computer Vision. Hands-on experience in deep learning, image classification, explainable AI, data analytics, predictive modeling, and software development. Proficient in Python, ML, Computer Vision, SQL, and Power BI, with experience developing practical AI and data-driven solutions. Seeking an AI/ML or Computer Vision Internship to contribute to real-world intelligent solutions.`,
  stats: [
    { label: "CGPA", value: "9.52", sub: "Top Academic Rank" },
    { label: "Internships", value: "5+", sub: "Hands-on Industry Roles" },
    { label: "Featured Projects", value: "4+", sub: "AI & Full-Stack" },
    { label: "Certifications", value: "12+", sub: "IBM, AWS, Shell, Infosys" }
  ]
};

export const skillCategories = [
  {
    category: "AI & Machine Learning",
    icon: "Brain",
    accent: "from-blue-500 to-indigo-600",
    skills: ["Machine Learning", "Deep Learning", "CNN", "Computer Vision", "NLP", "LLMs", "Explainable AI (XAI)"]
  },
  {
    category: "Computer Vision",
    icon: "Eye",
    accent: "from-orange-500 to-amber-600",
    skills: ["Image Classification", "MRI Image Analysis", "CNN-based Applications", "Grad-CAM", "Model Interpretability"]
  },
  {
    category: "Data Analytics",
    icon: "BarChart3",
    accent: "from-sky-500 to-blue-600",
    skills: ["Data Cleaning", "EDA", "Data Visualization", "Statistical Analysis", "Predictive Modelling", "Power BI", "SQL", "Pandas", "NumPy"]
  },
  {
    category: "Programming",
    icon: "Code2",
    accent: "from-emerald-500 to-teal-600",
    skills: ["Python", "C", "C++"]
  },
  {
    category: "Frontend & Full Stack",
    icon: "Layout",
    accent: "from-pink-500 to-rose-600",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"]
  },
  {
    category: "Databases",
    icon: "Database",
    accent: "from-purple-500 to-indigo-600",
    skills: ["SQL", "MongoDB"]
  },
  {
    category: "Tools & Frameworks",
    icon: "Wrench",
    accent: "from-amber-500 to-orange-600",
    skills: ["Git", "GitHub", "Visual Studio Code", "Jupyter Notebook", "Power BI", "Tableau", "Prompt Engineering", "Microsoft Office Suite"]
  }
];

export const educationData = [
  {
    institution: "St. Vincent Pallotti College of Engineering and Technology, Nagpur",
    degree: "B.Tech in Computer Science and Business Systems (CSBS)",
    grade: "CGPA: 9.52 / 10",
    period: "Aug 2023 – Present",
    status: "Currently Pursuing",
    highlights: [
      "Consistent departmental top academic performer with 9.52/10 CGPA",
      "Specialization tracks in Artificial Intelligence, Computer Vision, and Enterprise Business Systems",
      "Active participant & organizer in departmental tech fests (Enspire 2.0 Registration & Documentation Head)"
    ]
  },
  {
    institution: "Graduate Aptitude Test in Engineering (GATE)",
    degree: "GATE 2025",
    grade: "Appeared",
    period: "Feb 2025",
    status: "Completed",
    highlights: [
      "Appeared for national examination in Data Science & Artificial Intelligence / Computer Science",
      "Rigorous preparation in algorithms, computer theory, and discrete mathematics"
    ]
  }
];

export const workExperiences = [
  {
    role: "Website Developer & Freelancer (Intern)",
    company: "Bismi Technology India Private Limited",
    period: "June 2026 – Present",
    type: "Internship",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    description: "Spearheaded end-to-end development of dynamic, client-centric web solutions using React.js and modern web technologies, independently managing full project lifecycles from requirement gathering to seamless deployment."
  },
  {
    role: "Intern",
    company: "Incubein Foundation, RTMNU",
    period: "June 2026 – Present",
    type: "Research & Incubation",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    description: "Contributed to high-impact academic research and technical projects in collaboration with faculty, gaining exposure to institutional-level workflows and professional research methodologies."
  },
  {
    role: "AI & Machine Learning Intern",
    company: "EDUNET AICTE",
    period: "January 2026",
    type: "AI/ML Internship",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
    description: "Engineered and evaluated robust ML models on real-world datasets through intensive hands-on training, mastering the complete AI/ML pipeline from data preprocessing to deployment-ready solutions."
  },
  {
    role: "Data Analytics & Power BI Intern",
    company: "Eduskill",
    period: "March 2026",
    type: "Analytics Internship",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    description: "Architected interactive Power BI dashboards and end-to-end reporting pipelines that transformed complex raw datasets into actionable business intelligence."
  },
  {
    role: "Machine Learning & Data Science Intern",
    company: "Eduskill",
    period: "April 2026",
    type: "Data Science Internship",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
    description: "Implemented advanced ML algorithms — regression, classification, clustering — applying feature engineering and performance optimization on structured datasets."
  }
];

export const projectsData = [
  {
    id: "neuroassist-ai",
    title: "NeuroAssist AI – Explainable Alzheimer's Detection System",
    period: "June 2026 – Present",
    badge: "Healthcare AI & Computer Vision",
    description: "Built a Computer Vision and Deep Learning-based MRI image classification system for early Alzheimer's detection, applying Grad-CAM Explainable AI to improve model interpretability and support clinical decision-making.",
    tags: ["Deep Learning", "CNN", "PyTorch", "Grad-CAM", "Explainable AI (XAI)", "MRI Analysis"],
    coverImage: "/assets/projects/neuroassist-cover.jpg",
    liveDemo: "https://REPLACE-WITH-LIVE-DEMO-LINK",
    github: "https://github.com/unnatisuple/neuroassist-ai-v2",
    highlights: [
      "Convolutional Neural Network for multi-class stage classification",
      "Grad-CAM activation heatmaps for doctor-interpretable attention maps",
      "High sensitivity for pre-symptomatic cognitive decline markers"
    ]
  },
  {
    id: "smart-campus-complaint",
    title: "Smart Campus Complaint System",
    period: "June 2026",
    badge: "🏆 2nd Place Winner – The Sandbox Hackathon",
    award: "2nd Place at The Sandbox Hackathon, GH Raisoni College (April 8, 2026), sponsored by InternsForge, powered by Softronix.",
    description: "Engineered a full-stack MERN platform with JWT authentication, real-time complaint tracking, centralized management, and an administrative dashboard.",
    tags: ["MERN Stack", "React.js", "Node.js", "Express", "MongoDB", "JWT Auth", "REST API"],
    coverImage: "/assets/projects/smart-campus-cover.jpg",
    liveDemo: "https://REPLACE-WITH-LIVE-DEMO-LINK",
    github: "https://github.com/unnatisuple/smart-campus-complaint-system",
    highlights: [
      "Role-based authentication & encrypted authorization with JWT",
      "Automated ticket routing and SLA escalation tracking",
      "Real-time status updates and department-wise grievance analytics"
    ]
  },
  {
    id: "legislate-ai",
    title: "Legislate AI",
    period: "Jan 2026",
    badge: "AI & Legal Tech",
    description: "Built an AI-powered legal information platform designed to simplify complex legislation and improve information accessibility for common users.",
    tags: ["NLP", "LLMs", "Python", "React", "Semantic Search", "Prompt Engineering"],
    coverImage: "/assets/projects/legislate-ai-cover.jpg",
    liveDemo: "https://REPLACE-WITH-LIVE-DEMO-LINK",
    github: "https://github.com/unnatisuple/Courage-Legal-AI",
    highlights: [
      "Plain-language summarization of statutory clauses and court precedents",
      "Vector-based semantic retrieval across legislative acts",
      "Interactive Q&A engine with citations and confidence metrics"
    ]
  },
  {
    id: "ecohabit-tracker",
    title: "EcoHabit Project",
    period: "Apr 2026",
    badge: "Sustainability & Gamification",
    description: "Developed a gamified sustainability tracker for monitoring and encouraging eco-friendly daily habits with gamification elements.",
    tags: ["React.js", "Tailwind CSS", "Data Visualization", "Gamification", "Local Storage API"],
    coverImage: "/assets/projects/ecohabit-cover.jpg",
    liveDemo: "https://REPLACE-WITH-LIVE-DEMO-LINK",
    github: "https://github.com/unnatisuple/EcoHabit",
    highlights: [
      "Dynamic carbon footprint calculator with instant visual progress bars",
      "Gamified badge and streak rewards to boost user retention",
      "Community leaderboard and eco-friendly tips generator"
    ]
  }
];

// Certifications & Achievements Data
// Real certificates (12 cards) with images and lightbox inspection
// Text-only credentials/hackathons (6 cards) styled cleanly as badge cards with no image area
export const certificationsData = [
  // 1. Sandbox Hackathon
  {
    id: "sandbox-hackathon",
    title: "2nd Place Winner – The Sandbox Hackathon",
    issuer: "GH Raisoni College of Engineering & Management (Sponsored by InternsForge, Softronix)",
    date: "April 08, 2026",
    category: "Hackathons & Competitions",
    image: "/assets/certificates/the-sandbox-hackathon-2nd-place.png",
    description: "Secured 2nd Place for project 'Smart Complaint System' in recognition of outstanding innovation, teamwork, and problem-solving skills.",
    hasImage: true,
    badgeText: "🏆 2nd Place Winner"
  },
  // 2. Edunet AICTE IBM
  {
    id: "edunet-aicte-internship",
    title: "Artificial Intelligence & Machine Learning — 6-Week Internship",
    issuer: "Edunet Foundation, in collaboration with AICTE (All India Council for Technical Education), implemented with IBM SkillsBuild",
    date: "15th Jan 2026 – 26th Feb 2026",
    category: "Certifications",
    image: "/assets/certificates/edunet-aicte-aiml-certificate.jpg",
    description: "Completed 6 week Internship on Artificial Intelligence & Machine Learning in collaboration with All India Council for Technical Education (AICTE), implemented by Edunet Foundation. Recipient: Unnati Shailendra Suple (STU ID: STU6503431d8fc971694712605).",
    hasImage: true,
    badgeText: "📜 Verified Internship"
  },
  // 3. IBM SkillsBuild AI Fundamentals
  {
    id: "ibm-ai-fundamentals",
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild (via Credly)",
    date: "Issued Jan 28, 2026",
    category: "Certifications",
    image: "/assets/certificates/ibm-skillsbuild-ai-fundamentals.png",
    description: "Verified credential in foundational AI principles, machine learning paradigms, neural networks, and ethical considerations in AI.",
    hasImage: true,
    badgeText: "📜 IBM Credly Badge"
  },
  // 4. Edunet Shell Green AI
  {
    id: "edunet-shell-green-ai",
    title: "Green Skills & Artificial Intelligence (Skills4Future)",
    issuer: "Edunet Foundation × AICTE × Shell India",
    date: "Feb 2026 – Apr 2026",
    category: "Certifications",
    image: "/assets/certificates/edunet-shell-green-skills-ai.png",
    description: "Advanced course in sustainable development, energy transition analytics, and application of AI to environmental challenges.",
    hasImage: true,
    badgeText: "📜 Advanced Course"
  },
  // 5. KRUTIVERSE TECH-KRUTI
  {
    id: "krutiverse-tech-kruti",
    title: "Certificate of Appreciation – KRUTIVERSE",
    issuer: "Tulsiramji Gaikwad-Patil College (TECH-KRUTI 2K25)",
    date: "March 28–29, 2025",
    category: "Hackathons & Competitions",
    image: "/assets/certificates/krutiverse-tech-kruti-2k25.png",
    description: "Honored for active participation across E-Sports, Project Expo, AI vs Human Debate, Meme Battle, and Ciphertext Treasure Hunt.",
    hasImage: true,
    badgeText: "⭐ Appreciation"
  },
  // 6. Technex SVPCET
  {
    id: "technex-svpcet",
    title: "Hackathon Participation – Technex",
    issuer: "St. Vincent Pallotti College of Engineering & Technology",
    date: "January 20–21, 2025",
    category: "Hackathons & Competitions",
    image: "/assets/certificates/technex-hackathon-svpcet.png",
    description: "Participated in the annual collegiate 24-hour hackathon, building collaborative solutions under time constraints.",
    hasImage: true,
    badgeText: "💻 24-Hour Hackathon"
  },
  // 7. Enspire 2.0
  {
    id: "enspire-doc-head",
    title: "Documentation & Registration Head – Enspire 2.0",
    issuer: "Dept. of CSBS, St. Vincent Pallotti College",
    date: "October 10, 2025",
    category: "Leadership & Activities",
    image: "/assets/certificates/enspire-documentation-head.png",
    description: "Spearheaded participant registration, official record management, and event documentation for the departmental tech fest Enspire 2.0.",
    hasImage: true,
    badgeText: "📋 Leadership Lead"
  },

  // 8. Software Engineering — Infosys Springboard (Real Image)
  {
    id: "infosys-software-engineering",
    title: "Software Engineering",
    issuer: "Infosys Springboard",
    date: "October 07, 2024",
    category: "Certifications",
    image: "/assets/certificates/infosys-software-engineering.jpg",
    description: "Course Completion Certificate awarded to Unnati Suple for successfully completing the Software Engineering course on Infosys Springboard.",
    hasImage: true,
    badgeText: "📜 Verified Certificate"
  },
  // 9. C# Data Structures and Algorithms — Infosys Springboard (Real Image)
  {
    id: "infosys-csharp-dsa",
    title: "C# Data Structures and Algorithms",
    issuer: "Infosys Springboard",
    date: "January 16, 2025",
    category: "Certifications",
    image: "/assets/certificates/infosys-csharp-dsa.jpg",
    description: "Course Completion Certificate awarded to Unnati Suple for successfully completing the C# Data Structures and Algorithms course on Infosys Springboard.",
    hasImage: true,
    badgeText: "📜 Verified Certificate"
  },
  // 10. AWS Solutions Architecture Job Simulation — Forage × AWS (Real Image)
  {
    id: "aws-solutions-architecture",
    title: "AWS Solutions Architecture Job Simulation",
    issuer: "Forage × Amazon Web Services (AWS)",
    date: "December 11, 2025",
    category: "Certifications",
    image: "/assets/certificates/aws-solutions-architecture.jpg",
    description: "Certificate of Completion awarded to Unnati Suple for practical tasks in designing simple, scalable, hosting architecture on AWS.",
    hasImage: true,
    badgeText: "☁️ AWS Cloud Simulation"
  },
  // 11. Industrial Automation Virtual Internship (10-week) — EduSkills (Real Image)
  {
    id: "eduskills-industrial-automation",
    title: "Industrial Automation Virtual Internship (10-week)",
    issuer: "EduSkills × AICTE × Ministry of Education",
    date: "October – December 2025",
    category: "Certifications",
    image: "/assets/certificates/eduskills-industrial-automation.jpg",
    description: "Certificate of Virtual Internship awarded to Unnati Shailendra Suple for completing the 10-week Industrial Automation Virtual Internship (Grade O: Outstanding).",
    hasImage: true,
    badgeText: "🌟 Grade: O (Outstanding)"
  },
  // 12. CPR Awareness Week Participation — MyBharat (Real Image)
  {
    id: "cpr-awareness-week",
    title: "CPR Awareness Week Participation",
    issuer: "MyBharat / Ministry of Youth Affairs & Sports",
    date: "October 26, 2025",
    category: "Leadership & Activities",
    image: "/assets/certificates/cpr-awareness-week.png",
    description: "Certificate of Participation awarded to Unnati Shailendra Suple for successfully participating in the Online Quiz on CPR Awareness Week conducted on MYBharat.",
    hasImage: true,
    badgeText: "🇮🇳 National Initiative"
  },

  // Case B: Clean Icon+Text Badge Cards (No image area, No placeholder, No Inspect button)
  {
    id: "nptel-silver",
    title: "4 Certified NPTEL Courses (Silver Medalist)",
    issuer: "NPTEL / SWAYAM (IITs & IISc)",
    date: "2024 – 2025",
    category: "Certifications",
    image: null,
    hasImage: false,
    iconType: "Medal",
    accentColor: "from-amber-500 to-orange-500",
    badgeBg: "bg-amber-100 text-amber-800 border-amber-200",
    statBadge: "🥈 Silver Medalist",
    description: "Passed 4 rigorous computer science & business systems certification exams with elite Silver Medal honors."
  },
  {
    id: "infosys-testing-ai-ml",
    title: "Software Testing, Artificial Intelligence and Machine Learning",
    issuer: "Infosys Springboard",
    date: "2024 – 2025",
    category: "Certifications",
    image: null,
    hasImage: false,
    iconType: "Award",
    accentColor: "from-blue-500 to-indigo-600",
    badgeBg: "bg-blue-100 text-blue-800 border-blue-200",
    statBadge: "📜 Course Series",
    description: "Certified course series covering test automation, quality assurance, and applied machine learning models."
  },
  {
    id: "skill-india-finance",
    title: "Finance For All",
    issuer: "Skill India Digital",
    date: "2024 – 2025",
    category: "Certifications",
    image: null,
    hasImage: false,
    iconType: "CheckCircle",
    accentColor: "from-emerald-500 to-teal-600",
    badgeBg: "bg-emerald-100 text-emerald-800 border-emerald-200",
    statBadge: "💼 Skill India",
    description: "Comprehensive certification covering financial literacy, corporate financial systems, and management accounting principles."
  },
  {
    id: "kaggle-competition",
    title: "Kaggle Competitive ML – Top 94.93% Score",
    issuer: "Kaggle Community Competition",
    date: "2026",
    category: "Hackathons & Competitions",
    image: null,
    hasImage: false,
    iconType: "BarChart",
    accentColor: "from-purple-500 to-pink-500",
    badgeBg: "bg-purple-100 text-purple-800 border-purple-200",
    statBadge: "📊 94.93% Score",
    description: "Achieved a 94.93% competitive score among 2,260 participants / 2,186 teams worldwide using gradient boosted trees."
  },
  {
    id: "sih-top20",
    title: "Top 20 Teams – Smart India Hackathon (SIH)",
    issuer: "Ministry of Education / AICTE SIH",
    date: "2025",
    category: "Hackathons & Competitions",
    image: null,
    hasImage: false,
    iconType: "Trophy",
    accentColor: "from-sky-500 to-blue-600",
    badgeBg: "bg-sky-100 text-sky-800 border-sky-200",
    statBadge: "🏅 Top 20 National",
    description: "Ranked among top 20 collegiate teams nationwide in the prestigious Smart India Hackathon internal evaluation."
  },
  {
    id: "iaeng-membership",
    title: "IAENG Professional Member",
    issuer: "International Association of Engineers",
    date: "2026 – Present",
    category: "Leadership & Activities",
    image: null,
    hasImage: false,
    iconType: "Globe",
    accentColor: "from-indigo-500 to-purple-600",
    badgeBg: "bg-indigo-100 text-indigo-800 border-indigo-200",
    statBadge: "🌐 Professional Member",
    description: "Active member of IAENG, collaborating with international engineering researchers, data scientists, and technology forums."
  }
];

export const mindsetCards = [
  {
    id: "curiosity",
    icon: "Compass",
    color: "from-orange-500 to-amber-500",
    border: "border-orange-200 hover:border-orange-400",
    bgHover: "hover:bg-orange-50/50",
    title: "Curiosity-Driven",
    quote: "I learn by building — every project starts with a question I want to answer.",
    description: "Whether examining MRI neurological patterns or experimenting with transformer attention heads, genuine curiosity transforms complex problems into intuitive discoveries."
  },
  {
    id: "growth",
    icon: "TrendingUp",
    color: "from-blue-500 to-cyan-500",
    border: "border-blue-200 hover:border-blue-400",
    bgHover: "hover:bg-blue-50/50",
    title: "Growth Over Comfort",
    quote: "I actively seek challenges outside my current skill set, from Kaggle to hackathons.",
    description: "Stepping onto competitive hackathon stages (Sandbox 2nd Place, TECH-KRUTI, Technex) tests resilience, quick pivots, and high-velocity team execution under pressure."
  },
  {
    id: "explainability",
    icon: "Brain",
    color: "from-indigo-500 to-purple-500",
    border: "border-indigo-200 hover:border-indigo-400",
    bgHover: "hover:bg-indigo-50/50",
    title: "Explainability Matters",
    quote: "I believe AI should be understandable, not just accurate — that's why I focus on Explainable AI.",
    description: "A black-box prediction is never enough in high-stakes domains like medical imaging. Using Grad-CAM and attribution maps makes machine predictions trustworthy for clinicians."
  },
  {
    id: "continuous",
    icon: "Lightbulb",
    color: "from-emerald-500 to-teal-500",
    border: "border-emerald-200 hover:border-emerald-400",
    bgHover: "hover:bg-emerald-50/50",
    title: "Continuous Upskilling",
    quote: "Consistently completing certifications and internships to stay current with real-world AI/ML.",
    description: "From IBM and AWS cloud fundamentals to Shell sustainability data systems, staying ahead requires daily deliberate practice and cross-disciplinary curiosity."
  }
];
