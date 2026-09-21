'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Generative AI & NLP',
    skills: ['GenAI', 'LLMs', 'RAG', 'AI Agents', 'Agentic AI', 'LangChain', 'LangGraph', 'CrewAI', 'Prompt Engineering', 'Semantic Search', 'Embeddings', 'FAISS', 'ChromaDB', 'pgvector']
  },
  {
    title: 'Machine Learning & DL',
    skills: ['Scikit-learn', 'TensorFlow', 'Keras', 'Feature Engineering', 'Model Evaluation', 'ANN', 'CNN', 'RNN']
  },
  {
    title: 'Backend & APIs',
    skills: ['FastAPI', 'Flask', 'Streamlit', 'REST APIs', 'API Integration', 'Postman']
  },
  {
    title: 'MLOps & DevOps',
    skills: ['Docker', 'CI/CD', 'GitHub Actions', 'ML Pipelines', 'Model Deployment', 'Monitoring']
  },
  {
    title: 'Databases & Tools',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Git', 'GitHub', 'Ollama', 'OpenAI', 'Claude']
  },
  {
    title: 'Data Science & Analytics',
    skills: ['Python', 'Pandas', 'NumPy', 'EDA', 'Data Visualization', 'Matplotlib', 'Seaborn', 'PowerBI']
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-oswald)] uppercase tracking-tighter text-[var(--text)]">
            TECH_STACK
          </h2>
          <div className="h-px w-full max-w-sm bg-gradient-to-r from-[var(--accent-red)] to-transparent mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/70 backdrop-blur-md border border-[var(--accent-red)]/50 rounded-xl p-6 shadow-[0_10px_30px_rgba(179,157,219,0.15)] hover:shadow-[0_10px_40px_rgba(124,92,214,0.25)] hover:border-[var(--bright-red)] transition-all"
            >
              <h3 className="text-xl font-bold font-[var(--font-syne)] text-[var(--text)] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--bright-red)]" />
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium font-[var(--font-jetbrains-mono)] bg-[var(--surface)] border border-[var(--accent-red)]/30 rounded text-[var(--text)] opacity-80 hover:text-[var(--bright-red)] hover:bg-[var(--accent-red)]/10 hover:border-[var(--bright-red)] transition-colors cursor-default"
                    data-magnetic
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
