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
    title: "Attention to detail",
    body: "From designing evaluation frameworks for medical datasets to writing clean, optimized algorithm pipelines, fine grained details always matter the most. Research and implementation deserve the exact same precision.",
  },
  {
    n: "03",
    title: "Keep learning, keep shipping",
    body: "Some deployed web applications while some concepts still developing, clean code and bold research mean the most when they actually hit production and reach real people.",
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
    stack: "Retrieval Augmented Generation (RAG), LlamaIndex (Data Orchestration), Vector Embeddings",
    points: [
      "Architected a Retrieval-Augmented Generation (RAG) application using LlamaIndex and Google Gemini to automatically ingest, chunk, and analyze GitHub repositories, enabling users to interactively query complex codebases using natural language.",
      "Engineered an in-memory semantic search pipeline utilizing Gemini Embeddings (VectorStoreIndex) combined with custom PromptTemplates to inject top-K relevant code snippets into the LLM context, effectively mitigating AI hallucinations by grounding all responses in the retrieved source code.",
      "Developed a stateful, low-latency conversational interface using Streamlit, implementing session-state logic for chat history persistence and global resource caching to eliminate redundant API calls and prevent GitHub rate-limit exhaustion.",
    ],
    github: "https://github.com/annshita/RAG-Code-Chat",
    live: "https://ragbasedcodechat.streamlit.app/",
  },
  {
    title: "DocuAgent",
    stack: "Model Context Protocol (MCP), LLM Token Optimization, Fault Tolerance Architecture",
    points: [
      "Engineered a document-analysis AI agent using the Model Context Protocol (MCP) and the Agno framework, securely scoping a Node.js filesystem server over stdio to grant a Gemini LLM autonomous, read-only access to user-uploaded files.",
      "Architected a hybrid context-injection strategy that pre-loads document excerpts into the LLM system prompt while maintaining MCP as an on-demand fallback tool, reducing API round-trip latency and optimizing token consumption.",
      "Built robust fault-tolerance mechanisms by implementing a custom regex-driven retry backoff for rate limits and automated fallback routing from primary to secondary LLMs, ensuring uninterrupted service during API outages or strict token caps.",
    ],
    github: "https://github.com/annshita/DocuAgent",
    live: "https://docuagent.streamlit.app/",
  },
  {
    title: "GitHub Repo Agent",
    stack: "Model Context Protocol (MCP), Agentic LLM Architecture, Defense in Depth Security",
    points: [
      "Engineered an autonomous repository assistant using Python and the Model Context Protocol (MCP), enabling natural language querying of live GitHub data (code, issues, pull requests) via a standardized tool interface.",
      "Integrated Groq's LPU-accelerated inference with the Agno framework, achieving near-instantaneous reasoning loops for multi-step agent actions and minimizing latency compared to traditional RAG architectures.",
      "Implemented principle-of-least-privilege security by explicitly whitelisting read-only MCP tools and isolating user API credentials to prevent multi-tenant state collisions in concurrent environments.",
    ],
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
