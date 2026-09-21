// ============================================================
// PORTFOLIO DATA — Sukanya Lambaday
// Extracted from Sukanya's Resume/Information
// ============================================================

export const personal = {
  name: "Sukanya Lambaday",
  title: "Full-Stack AI Engineer",
  subtitle: "Generative AI · LLMs · RAG · NLP · Multi-Agent Systems",
  location: "Hyderabad, India",
  phone: "",
  email: "sukanyal1627@gmail.com",
  linkedin: "https://www.linkedin.com/in/sukanya-lambaday/",
  github: "https://github.com/SukanyaLambaday",
  portfolio: "#",
  bio: "Full-Stack AI Engineer specializing in Generative AI, LLMs, RAG, NLP, and multi-agent systems. Experienced in engineering end-to-end AI applications across the AI, backend, and frontend stack using Python, FastAPI, React, LangChain, vector databases, and LLM platforms. Skilled in RAG pipelines, semantic search, AI agents, intelligent automation, and real-time enterprise solutions.",
  shortBio: "Bridging the gap between AI Models and Production.",
  stats: [
    { label: "CGPA", value: "8.62", suffix: "/10" },
    { label: "Projects Built", value: "3", suffix: "+" },
    { label: "Certifications", value: "4", suffix: "" },
    { label: "Experience", value: "2", suffix: " Roles" },
  ],
};

export const skills = [
  {
    category: "Generative AI & NLP",
    icon: "🤖",
    color: "#C40024",
    items: [
      "GenAI", "LLMs", "RAG", "AI Agents", "Agentic AI", "LangChain", "LangGraph", "CrewAI", "Prompt Engineering", "Semantic Search", "Embeddings", "FAISS", "ChromaDB", "pgvector"
    ],
  },
  {
    category: "Machine Learning & DL",
    icon: "🧠",
    color: "#00F5FF",
    items: [
      "Scikit-learn", "TensorFlow", "Keras", "Feature Engineering", "Model Evaluation", "ANN", "CNN", "RNN"
    ],
  },
  {
    category: "Backend & APIs",
    icon: "⚡",
    color: "#7B2FBE",
    items: [
      "FastAPI", "Flask", "Streamlit", "REST APIs", "API Integration", "Postman"
    ],
  },
  {
    category: "MLOps & DevOps",
    icon: "🚀",
    color: "#00C9A7",
    items: ["Docker", "CI/CD", "GitHub Actions", "ML Pipelines", "Model Deployment", "Monitoring"],
  },
  {
    category: "Databases & Tools",
    icon: "🗄️",
    color: "#FF6B2B",
    items: ["PostgreSQL", "MySQL", "SQLite", "Git", "GitHub", "Ollama", "OpenAI", "Claude"],
  },
  {
    category: "Data Science & Analytics",
    icon: "📊",
    color: "#F7C59F",
    items: [
      "Python", "Pandas", "NumPy", "EDA", "Data Visualization", "Matplotlib", "Seaborn", "PowerBI"
    ],
  },
];

export const experiences = [
  {
    id: "ikcon",
    role: "IT Intern",
    company: "IKCON Digital IT Services Pvt Ltd",
    period: "Jun 2026 – Present",
    type: "Full-time Internship",
    color: "#C40024",
    projects: [
      {
        name: "AI-Powered Automation & QA",
        bullets: [
          "Automated the UMS (Unified Meeting Suite) pipeline for multi-modal transcript generation with LLM-based classification.",
          "Built AI-powered QA/testing agents using LLM orchestration.",
          "Developed \"RAG Cortex\", an enterprise document Q&A RAG system with FastAPI, pgvector, and Ollama embeddings."
        ],
      },
    ],
  },
  {
    id: "placemantra",
    role: "Artificial Intelligence Intern",
    company: "Placemantra",
    period: "Jan 2025 – Mar 2025",
    type: "Internship",
    color: "#00F5FF",
    projects: [
      {
        name: "NLP & Machine Learning Pipelines",
        bullets: [
          "Developed end-to-end NLP and machine learning pipelines.",
          "Built customer segmentation models (K-Means clustering).",
          "Built spam news classification systems achieving 95.8% accuracy with full model evaluation and visualization."
        ],
      },
    ],
  },
];

export const projects = [
  {
    id: "multi-agent-recruitment",
    name: "Multi-Agent AI Recruitment Automation Platform",
    tagline: "Automated Resume Screening & ATS Scoring",
    description: "Architected a multi-agent system for automated resume screening, ATS scoring, and semantic candidate-job matching. Implemented RAG-based semantic search with FAISS vector embeddings for skill extraction.",
    tech: ["CrewAI", "LangChain", "FastAPI", "React.js", "FAISS"],
    live: null,
    github: "#",
    color: "#C40024",
    highlight: "Multi-Agent Architecture",
    bullets: [
      "Architected a multi-agent system for automated resume screening, ATS scoring, and semantic candidate-job matching.",
      "Implemented RAG-based semantic search with FAISS vector embeddings for skill extraction.",
    ],
  },
  {
    id: "tripiq",
    name: "TripIQ - Agentic AI Travel Booking System",
    tagline: "Agentic Travel Planning & Route Optimization",
    description: "Developed an agentic workflow system for travel planning and route optimization using LangGraph and Model Context Protocol. Engineered an evaluation system to analyze 100+ travel options.",
    tech: ["FastAPI", "React.js", "MongoDB", "LangGraph", "MCP"],
    live: null,
    github: "#",
    color: "#00F5FF",
    highlight: "Agentic AI",
    bullets: [
      "Developed an agentic workflow system for travel planning and route optimization using LangGraph and Model Context Protocol.",
      "Engineered an evaluation system to analyze 100+ travel options.",
    ],
  },
  {
    id: "rag-cortex",
    name: "RAG Cortex - AI-Powered RAG Platform",
    tagline: "Enterprise Document Q&A",
    description: "Built an end-to-end RAG system for enterprise document Q&A with semantic chunking and embedding generation using Ollama. Integrated pgvector with PostgreSQL for efficient similarity search.",
    tech: ["Python", "LangChain", "pgvector", "Ollama", "Docker"],
    live: null,
    github: "#",
    color: "#7B2FBE",
    highlight: "RAG & Vector DB",
    bullets: [
      "Built an end-to-end RAG system for enterprise document Q&A with semantic chunking and embedding generation using Ollama.",
      "Integrated pgvector with PostgreSQL for efficient similarity search.",
    ],
  },
];

export const certifications = [
  {
    id: "certified-data-science",
    name: "Certified Data Science Professional",
    subtitle: "Oracle Cloud Infrastructure",
    issuer: "Oracle",
    issuerLogo: "Oracle",
    year: "2025",
    color: "#C40024",
    credentialCode: "N/A",
    hash: "SHA256://8a2b...c9d4",
    verifiedDate: "2025",
    competencies: ["Machine Learning", "Data Science", "OCI"],
  },
  {
    id: "emerging-tech",
    name: "Emerging Technologies Certification",
    subtitle: "SAP & Edunet Foundation",
    issuer: "SAP & Edunet Foundation",
    issuerLogo: "SAP",
    year: "2025",
    color: "#00F5FF",
    credentialCode: "N/A",
    hash: "SHA256://1d5c...9f0e",
    verifiedDate: "2025",
    competencies: ["Emerging Tech", "SAP", "Innovation"],
  },
  {
    id: "langchain-academy",
    name: "Foundation: Introduction to LangChain",
    subtitle: "LangChain Academy",
    issuer: "LangChain Academy",
    issuerLogo: "LangChain",
    year: "2026",
    color: "#7B2FBE",
    credentialCode: "N/A",
    hash: "SHA256://6b8a...3c2d",
    verifiedDate: "2026",
    competencies: ["LangChain", "GenAI", "AI Agents"],
  },
];

export const achievements = [
  {
    title: "Finalist",
    event: "TASK Code Unnati",
    org: "SAP & Edunet",
    year: "2026",
    color: "#FFD700",
  },
];

export const education = [
  {
    degree: "B.Tech in Electronics & Communication Engineering",
    university: "Ellenki College of Engineering and Technology",
    shortName: "JNTUH",
    period: "Nov 2022 – May 2026",
    cgpa: "8.62",
    location: "Hyderabad, India",
    color: "#C40024",
  },
];
