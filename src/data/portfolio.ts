// ============================================================
// PORTFOLIO DATA — Sukanya Lambaday
// Extracted from Sukanya's Resume/Information
// ============================================================

export const personal = {
  name: "Sukanya Lambaday",
  title: "Full-Stack AI Engineer",
  subtitle: "Generative AI · LLMs · RAG · NLP · Multi-Agent Systems",
  location: "Hyderabad, India",
  phone: "+91-9491316259",
  email: "sukanyal1627@gmail.com",
  linkedin: "https://www.linkedin.com/in/sukanya27/",
  github: "https://github.com/sukanya-L-1627",
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
    name: "AI-Powered Multi-Agent Recruitment Automation Platform",
    tagline: "Multi-Agent AI / Enterprise AI",
    description: "Enterprise-grade AI hiring assistant automating recruitment workflows using autonomous AI agents — from resume parsing to interview generation and candidate ranking.",
    tech: ["CrewAI", "LangChain", "Gemini API", "Sentence Transformers", "FAISS", "React.js", "Python", "RAG", "NLP", "Vector DB"],
    live: null,
    video: "/videos/multi_agent_recruitment.mp4",
    github: "#",
    color: "#00F5FF",
    highlight: "Multi-Agent Architecture",
    bullets: [
      "Built an enterprise-grade AI hiring assistant using CrewAI for multi-agent orchestration, automating the complete recruitment lifecycle end-to-end.",
      "Implemented resume parsing, skill extraction, ATS scoring, semantic candidate-job matching, candidate ranking, and automated email communication.",
      "Engineered interview question generation and recruiter summary generation using LangChain and Google Gemini API for intelligent reasoning.",
      "Used Sentence Transformers and FAISS for semantic vector search and RAG-based intelligent candidate retrieval.",
      "Delivered a modern React.js dashboard with real-time analytics, ATS score visualizations, candidate insights, and semantic search capabilities.",
      "Demonstrates multi-agent systems, NLP, vector databases, semantic similarity, workflow automation, and enterprise full-stack AI engineering."
    ],
  },
  {
    id: "motoriq",
    name: "MotorIQ – Intelligent Condition Monitoring",
    tagline: "Industrial IoT / Embedded AI",
    description: "Real-time IoT system for monitoring machine health using ESP32 and industrial sensors.",
    tech: ["ESP32", "Embedded C", "Arduino", "Sensors", "IoT", "Hardware Integration"],
    live: null,
    video: "/videos/motoriq.mp4",
    github: "#",
    color: "#7B2FBE",
    highlight: "Industrial IoT",
    bullets: [
      "Developed a real-time IoT system for monitoring machine health using ESP32, analyzing temperature, vibration, and RPM.",
      "Implemented intelligent rule-based logic to detect anomalies and trigger predictive alerts.",
      "Designed for reliable, low-cost industrial deployment with seamless hardware-software integration."
    ],
  },
  {
    id: "tripiq",
    name: "TripIQ – Agentic AI Travel System",
    tagline: "Agentic AI / Automation",
    description: "Agent-driven AI travel system using MCP for autonomous planning and booking automation.",
    tech: ["Python", "MCP", "AI Agents", "React", "APIs", "LLMs", "LangGraph"],
    live: null,
    video: "/videos/tripiq.mp4",
    github: "#",
    color: "#FF6B2B",
    highlight: "Agentic AI",
    bullets: [
      "Built an agent-driven AI travel system using Model Context Protocol (MCP) for autonomous decision-making and execution.",
      "Automated the complete booking flow, including intelligent bus selection, hotel suggestions, and last-mile planning.",
      "Integrated real-time APIs to enable agents to analyze travel options and execute decisions based on user preferences."
    ],
  },
  {
    id: "airlines-chatbot",
    name: "Airlines Chatbot",
    tagline: "GenAI / Conversational AI",
    description: "GenAI-powered airline policy chatbot explaining baggage rules, check-in timelines, and travel guidelines with strict query guardrails.",
    tech: ["Python", "Streamlit", "Gemini Flash", "Google AI Studio API", "Prompt Engineering", "Query Validation"],
    live: null,
    video: "/videos/airline_chatbot.mp4",
    github: "#",
    color: "#00C9A7",
    highlight: "Conversational AI",
    bullets: [
      "Developed a GenAI-powered airline policy chatbot to explain baggage rules, check-in timelines, boarding procedures, and travel guidelines in simple language.",
      "Integrated Gemini Flash with prompt-engineering guardrails to ensure explanation-only responses while blocking booking, refund, and pricing-related queries.",
      "Built a secure Streamlit web application with environment-based API key management and real-time passenger query handling.",
      "Implemented policy validation logic to detect restricted intents and provide safe, controlled responses for aviation use cases.",
      "Designed a modular architecture with separate layers for UI, prompt control, AI integration, and query safety validation."
    ],
  },
  {
    id: "cinesense",
    name: "CineSense– Movie discovery platform",
    tagline: "Recommendation Systems",
    description: "AI-powered movie discovery platform using hybrid filtering and association rule mining.",
    tech: ["Python", "Pandas", "Streamlit", "Apriori"],
    live: null,
    video: "/videos/movie_recommendation.mp4",
    github: "#",
    color: "#F7C59F",
    highlight: "Recommendation Systems",
    bullets: [
      "Designed a hybrid movie recommendation engine combining collaborative filtering and Apriori-based association mining.",
      "Integrated similarity scoring and normalized ranking to improve relevance under sparse data conditions.",
      "Delivered a Netflix-style interactive discovery interface."
    ],
  },
  {
    id: "emotion-detection",
    name: "Explainable Multi-Label Intent and Emotion Detection System",
    tagline: "Natural Language Processing",
    description: "Hybrid NLP system identifying user intent and emotional tone in customer support.",
    tech: ["NLP", "Scikit-learn", "Python", "Streamlit"],
    live: null,
    video: "/videos/emotion_intelligence.mp4",
    github: "#",
    color: "#C40024",
    highlight: "Natural Language Processing",
    bullets: [
      "Developed a multi-label NLP system to detect user intent and emotional tone from text inputs.",
      "Implemented TF-IDF feature extraction with hybrid ML and rule-based logic.",
      "Built an interactive interface for real-time prediction testing."
    ],
  },
  {
    id: "churn-intelligence",
    name: "Customer Churn Intelligence System",
    tagline: "Customer Analytics / ML",
    description: "End-to-end ML system predicting customer churn probability, timing, and risk factors.",
    tech: ["Python", "XGBoost", "Random Forest", "NLP", "Scikit-learn", "Streamlit"],
    live: null,
    video: "/videos/customer_churn.mp4",
    github: "#",
    color: "#00F5FF",
    highlight: "Machine Learning",
    bullets: [
      "Built an end-to-end ML system predicting churn probability and timing using XGBoost and Random Forest.",
      "Integrated NLP-based sentiment analysis to quantify customer dissatisfaction from support logs.",
      "Engineered actionable insights and retention strategies based on feature importance and risk scoring."
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
