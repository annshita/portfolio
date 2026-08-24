export const PROFILE = {
  name: "Anshita Verma",
  first: "Anshita",
  last: "Verma",
  role: "Software Engineer",
  email: "annshhita@gmail.com",
  phone: "+91 78078 59029",
  tagline:
    "Software engineer by day, code detective and AI power user by night. I’m a curious generalist who loves bridging the gap between core algorithms and real-world machine learning. Whether I’m optimizing data structures, fine-tuning ML models, or leveraging AI tools to build faster, I thrive on tackling new technical challenges head-on.",
  bio: [
    "Hi! I'm an engineer who wears way too many hats. Armed with an Integrated Master's in Computer Science, experience at Samsung, published research, and a mild obsession with LeetCode, I'm the kind of developer who uses AI to build faster, experiment bolder, and tackle tricky problems from every angle.",
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
    body: "I don't lock myself into a single niche. I willingly jump across domains and follow complex problems wherever they lead. But when a project demands depth, I can hyper focus and obsess over the finest details until it's solved.",
  },
  {
    n: "02",
    title: "Craft in the details",
    body: "From designing LaTeX-driven evaluation frameworks for medical image segmentation to writing clean, optimized algorithm pipelines, the real magic happens in the fine grained details. Research and implementation deserve the exact same precision.",
  },
  {
    n: "03",
    title: "Build things that ship",
    body: "Two live web applications deployed and counting, with more concepts in active development. Clean code and bold research mean the most when they actually hit production and reach real people.",
  },
];

export const SKILLS = {
  languages: ["C++", "C", "Python", "Kotlin", "Java", "SQL", "HTML", "CSS", "JavaScript", "Typescript"],
  focus: ["Deep Learning", "Machine Learning", "Operating Systems", "Data Structures and Algorithms", "Computer Networks", "Database Management Systems", "Object Oriented Programming", "System Design", "Android Development", "Artificial Intelligence", "Retrival Augmented Generation (RAG)", "Model Context Protocol (MCP)", "Agentic AI"],
  tools: ["React", "Next.js", "React Native", "Express.js", "Rest API", "FastAPI", "Node.js", "PyTorch", "TensorFlow", "Keras", "Git", "GitHub", "Gerrit", "Android Studio", "VS Code"],
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
    title: "Code Chat",
    stack: "Retrieval Augmented Generation (RAG)",
    desc: "A Streamlit application that uses the Google Gemini API and LlamaIndex to let you chat with GitHub repositories!",
    github: "https://github.com/annshita/RAG-Code-Chat",
    live: "https://ragbasedcodechat.streamlit.app/",
  },
  {
    title: "GitHub Repo Agent",
    stack: "Agentic AI, MCP",
    desc: "An MCP based Agent that answers user queries about GitHub repositories. This Streamlit app lets you interact with GitHub repositories using natural language queries.",
    github: "https://github.com/annshita/GitHub-Repo-Agent",
    live: "https://repository-agent-mcp-tools.streamlit.app/",
  },
  {
    title: "Real Time OS Scheduler",
    stack: "C++ · Operating Systems",
    desc: "A real-time task scheduling simulator, written in modern C++17. A portable C++ library + CLI + web visualizer with five scheduling algorithms, so it runs anywhere (Linux/macOS/Windows, or in CI) instead of requiring physical hardware or simulator.",
    github: "https://github.com/annshita/RTOS-Scheduler",
    live: "https://rtos-scheduler.onrender.com/",
  },
  {
    title: "Kidney Disease Detection",
    stack: "Python · Deep Learning",
    desc: "One-shot kidney disease prediction using the TabPFN foundation model via Bayesian meta-learning, with a TabPFGen + KS-test + PCA/t-SNE augmentation pipeline — 97.59% accuracy on a 1,660-sample dataset.",
    github: "https://github.com/annshita/CKD-using-TabPFN",
    live: "",
  },
];

export const ACHIEVEMENTS = [
  "Solved 550+ LeetCode problems (top 16%) and 800+ across all platforms combined.",
  "Published research on MedViT-based Alzheimer's diagnosis — accepted at IEEE CVMI-2025, NIT Rourkela.",
  "CLIP-based framework for kidney condition diagnosis accepted at IEEE CVMI-2026, COEP Pune (to be published).",
  "Co-authored a paper on Alzheimer's stage prediction using a Kolmogorov–Arnold Network.",
];

export const MARQUEE_WORDS = [
  "Competitive Programming", "Research & Development", "Machine Learning & Deep Learning",
  "Artificial Intelligence", "C / C++", "Android Development", "Software Engineering",
  "Computer Science Fundamentals",
];
