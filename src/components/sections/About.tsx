'use client';

import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-oswald)] uppercase tracking-tighter text-[var(--text)]">
            About
          </h2>
          <div className="h-px w-full max-w-sm bg-gradient-to-r from-[var(--accent-red)] to-transparent mt-4" />
        </div>

        <div className="max-w-4xl mx-auto">

          {/* Bio Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--accent-red)]/50 bg-white/70 backdrop-blur-xl rounded-lg overflow-hidden shadow-[0_10px_40px_rgba(179,157,219,0.3)]"
          >
            <div className="bg-[var(--surface)]/80 border-b border-[var(--accent-red)]/30 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-4 flex items-center gap-2 text-xs font-[var(--font-jetbrains-mono)] text-[var(--bright-red)]">
                <Terminal size={14} />
                <span>sukanya@root:~/about</span>
              </div>
            </div>
            <div className="p-6 md:p-8 font-[var(--font-jetbrains-mono)] text-sm md:text-base text-[var(--text)] leading-relaxed">
              <p className="mb-4">
                <span className="text-[var(--bright-red)]">&gt;</span> Initialize bio protocol...
              </p>
              <p className="mb-4 text-[var(--text)] font-semibold">
                Hi, I&apos;m Sukanya Lambaday, a Full-Stack AI Engineer specializing in Generative AI, LLMs, RAG, NLP, and multi-agent systems.
              </p>
              <p className="mb-4">
                Experienced in engineering end-to-end AI applications across the AI, backend, and frontend stack using Python, FastAPI, React, LangChain, vector databases, and LLM platforms.
              </p>
              <p className="mb-4">
                Skilled in RAG pipelines, semantic search, AI agents, intelligent automation, and real-time enterprise solutions.
              </p>
              <p>
                <span className="text-[var(--bright-red)] animate-pulse">_</span>
              </p>
            </div>
          </motion.div>



        </div>
      </div>
    </section>
  );
}
