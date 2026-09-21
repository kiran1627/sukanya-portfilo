'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-start overflow-hidden pt-20">

      {/* Background Watermark */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 text-[15vw] font-bold font-[var(--font-oswald)] uppercase leading-none opacity-20 select-none pointer-events-none"
        style={{
          WebkitTextStroke: '2px rgba(124, 92, 214, 0.35)',
          textShadow: '0 0 50px rgba(179, 157, 219, 0.25)',
          color: 'transparent'
        }}
      >
        SUKANYA
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Eyebrow Badge */}
          <div className="inline-block border border-[var(--accent-red)]/30 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 shadow-[0_4px_20px_rgba(179,157,219,0.2)]">
            <span className="text-xs font-medium tracking-[0.2em] text-[var(--bright-red)] font-[var(--font-jetbrains-mono)] uppercase">
              AI ENGINEER & FULL-STACK
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-8xl lg:text-[7.5rem] font-bold font-[var(--font-oswald)] leading-[0.9] uppercase tracking-tighter text-[var(--text)]" style={{ maxWidth: '13ch' }}>
            <span className="block mb-2 text-[var(--text)]">ENGINEERING INTELLIGENT</span>
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, var(--bright-red) 0%, var(--accent-red) 100%)'
              }}
            >
              AI SYSTEMS<span className="text-[var(--bright-red)]">.</span>
            </span>
          </h1>

          {/* Metric Telemetry */}
          <div className="flex flex-wrap gap-6 mt-12 mb-12 font-[var(--font-jetbrains-mono)] text-sm text-[var(--text)] opacity-70">
            <div className="flex flex-col">
              <span className="text-[var(--text)] text-xl font-bold">8+</span>
              <span>Projects</span>
            </div>

            <div className="w-px bg-[var(--accent-red)]/30"></div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 text-[var(--bright-red)]">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="font-bold text-xs sm:text-sm">Open to Opportunities</span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 font-[var(--font-space-grotesk)]">
            <Link
              href="#projects"
              className="group relative flex items-center justify-center gap-2 bg-[var(--bright-red)] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(124,92,214,0.3)]"
              data-magnetic
            >
              <span className="relative z-10">Explore Work</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="/Kiran_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2 border border-[var(--accent-red)]/40 bg-white/60 backdrop-blur-sm text-[var(--text)] px-8 py-4 rounded-full font-bold uppercase tracking-wider overflow-hidden transition-transform hover:scale-105 active:scale-95 hover:bg-white/80 shadow-[0_4px_20px_rgba(179,157,219,0.15)]"
              data-magnetic
            >
              <span className="relative z-10">Download Résumé</span>
              <Download size={18} className="relative z-10 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
