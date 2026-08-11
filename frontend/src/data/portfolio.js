export const PROFILE = {
  name: "Anshita Verma",
  first: "Anshita",
  last: "Verma",
  role: "Software Engineer & ML Researcher",
  email: "annshhita@gmail.com",
  phone: "+91 78078 59029",
  tagline:
    "A computer scientist who finds a little magic in clean code, curious research, and softly polished interfaces.",
  bio: [
    "I'm an Integrated M.Tech student in Computer Science & Engineering at NIT Hamirpur, currently shaping lockscreen experiences at Samsung R&D.",
    "My days drift between framework engineering, deep-learning research, and 800+ solved problems worth of competitive programming — always chasing the elegant solution.",
  ],
};

export const LINKS = [
  { label: "GitHub", url: "https://github.com/annshita", handle: "@annshita" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/anshitaverma16/", handle: "in/anshitaverma16" },
  { label: "LeetCode", url: "https://leetcode.com/u/annshhita/", handle: "@annshhita" },
];

export const MANIFESTO = [
  {
    n: "01",
    title: "Curiosity first",
    body: "From Bayesian meta-learning to real-time schedulers, I follow questions wherever they lead — research papers, foundation models, and all.",
  },
  {
    n: "02",
    title: "Craft in the details",
    body: "Whether it's a lockscreen animation on a foldable or a validation pipeline, the small refinements are where the delight lives.",
  },
  {
    n: "03",
    title: "Build things that ship",
    body: "60+ production bugs validated, features integrated into flagship devices. Ideas matter most when they reach real people.",
  },
];

export const SKILLS = {
  languages: ["C++", "C", "Kotlin", "Java", "Python", "SQL"],
  focus: ["Deep Learning", "Machine Learning", "Operating Systems", "DSA", "Computer Networks", "DBMS"],
  tools: ["VS Code", "Android Studio", "Git", "GitHub", "Gerrit"],
};

export const EXPERIENCE = [
  {
    role: "Software Engineer Intern",
    company: "Samsung R&D Institute, India",
    period: "Jan 2026 — Jun 2026",
    points: [
      "Contributed to the Lockscreen area within Samsung's Framework team; shipped UI enhancements integrated into upcoming foldable devices.",
      "Verified & validated 60+ production-level Lockscreen bugs on One UI 8.5 flagships, including Galaxy Flip 7 and Fold 7.",
      "Developed agentic AI-powered Lockscreen features for upcoming One UI 9.0 flagship devices.",
    ],
  },
  {
    role: "Integrated M.Tech (Dual Degree), CSE",
    company: "National Institute of Technology, Hamirpur",
    period: "2021 — 2026",
    points: [
      "B.Tech CGPA 8.2 / 10 · M.Tech CGPA 8.4 / 10.",
      "Coursework across OOP, Operating Systems, DSA, Computer Networks, Deep Learning, Machine Learning, and DBMS.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Kidney Disease Detection",
    stack: "Python · Deep Learning",
    desc: "One-shot kidney disease prediction using the TabPFN foundation model via Bayesian meta-learning, with a TabPFGen + KS-test + PCA/t-SNE augmentation pipeline — 97.59% accuracy on a 1,660-sample dataset.",
  },
  {
    title: "IoT Anomaly Detection",
    stack: "Python · Machine Learning",
    desc: "An IoT attack-detection framework across multiple datasets with PCA-based dimensionality reduction and Decision Tree, Naive Bayes, SVM & Logistic Regression models.",
  },
  {
    title: "Real-Time EDF Scheduler",
    stack: "C++ · Operating Systems",
    desc: "Designed and simulated the Earliest Deadline First real-time scheduling algorithm to analyse feasibility, deadline misses, and processor utilisation.",
  },
];

export const ACHIEVEMENTS = [
  "Solved 550+ LeetCode problems (top 16%) and 800+ across all platforms combined.",
  "Published research on MedViT-based Alzheimer's diagnosis — accepted at IEEE CVMI-2025, NIT Rourkela.",
  "CLIP-based framework for kidney condition diagnosis accepted at IEEE CVMI-2026, COEP Pune (to be published).",
  "Co-authored a paper on Alzheimer's stage prediction using a Kolmogorov–Arnold Network.",
];

export const MARQUEE_WORDS = [
  "Deep Learning", "Foundation Models", "Framework Engineering", "Competitive Programming",
  "Research", "Foldables", "Agentic AI", "Elegant Systems",
];
