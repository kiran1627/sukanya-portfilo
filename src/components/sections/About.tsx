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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Bio Typography */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h3 className="text-3xl md:text-5xl font-bold font-[var(--font-syne)] text-[var(--text)] mb-6 leading-tight">
              Bridging the gap between <span className="text-[var(--bright-red)]">AI Models</span> and <span className="text-[var(--bright-red)]">Production</span>.
            </h3>
            <p className="text-[var(--text)] opacity-70 mb-6 font-[var(--font-jetbrains-mono)] leading-relaxed">
              I am a Full-Stack AI Engineer specializing in Generative AI, LLMs, RAG, NLP, and multi-agent systems.
            </p>
            <p className="text-[var(--text)] opacity-70 font-[var(--font-jetbrains-mono)] leading-relaxed">
              With experience in engineering end-to-end AI applications, I build robust pipelines across the backend, frontend, and AI stack to deliver real-time enterprise solutions.
            </p>
          </motion.div>

          {/* Minimalist Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white/50 backdrop-blur-md border border-[var(--accent-red)]/30 rounded-2xl p-8 md:p-10 shadow-[0_10px_40px_rgba(179,157,219,0.15)] hover:shadow-[0_10px_50px_rgba(124,92,214,0.25)] hover:border-[var(--bright-red)] transition-all duration-500"
          >
            <div className="space-y-6 text-[var(--text)] opacity-90 leading-relaxed text-base md:text-lg">
              <p>
                Hello! I&apos;m <span className="font-bold text-[var(--bright-red)]">Sukanya Lambaday</span>, and I specialize in turning complex AI models into scalable, production-ready applications. My expertise spans across Generative AI, LLMs, RAG architectures, and NLP.
              </p>
              <p>
                I have hands-on experience engineering end-to-end applications across the entire stack. From building multi-agent workflows using <span className="font-semibold text-[var(--accent-red)]">LangChain</span> and <span className="font-semibold text-[var(--accent-red)]">CrewAI</span> to developing high-performance backends with <span className="font-semibold text-[var(--accent-red)]">FastAPI</span> and vector databases, I thrive on solving hard engineering problems.
              </p>
              <p>
                Whether it&apos;s intelligent automation, semantic search, or real-time enterprise AI solutions, I am driven by a passion to build systems that are not only intelligent, but also robust and intuitive.
              </p>
            </div>
          </motion.div>



        </div>
      </div>
    </section>
  );
}
