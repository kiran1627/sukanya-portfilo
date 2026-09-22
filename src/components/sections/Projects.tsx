'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, PlayCircle, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../data/portfolio';

function ProjectCard({ project, onOpenVideo }: { project: typeof projects[0], onOpenVideo: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Rotate calculations
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    
    // Spotlight calculations
    const xPct = (x / rect.width) * 100;
    const yPct = (y / rect.height) * 100;
    setSpotlight({ x: xPct, y: yPct, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setSpotlight({ ...spotlight, opacity: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative rounded-2xl border border-[var(--accent-red)]/50 bg-white/70 backdrop-blur-md p-6 overflow-hidden h-full flex flex-col transition-all duration-300 shadow-[0_10px_30px_rgba(179,157,219,0.15)] hover:shadow-[0_10px_40px_rgba(124,92,214,0.25)] hover:border-[var(--bright-red)]"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Spotlight Effect */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0 mix-blend-multiply"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(600px circle at ${spotlight.x}% ${spotlight.y}%, rgba(124,92,214,0.12), transparent 40%)`
        }}
      />

      <div className="relative z-10 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold font-[var(--font-syne)] text-[var(--text)] mb-3" style={{ transform: 'translateZ(30px)' }}>
          {project.name}
        </h3>
        
        <p className="text-[var(--text)] opacity-70 text-sm mb-6 flex-grow" style={{ transform: 'translateZ(20px)' }}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8" style={{ transform: 'translateZ(25px)' }}>
          {project.tech.map(tech => (
            <span key={tech} className="text-xs font-[var(--font-jetbrains-mono)] text-[var(--bright-red)] bg-[var(--accent-red)]/10 border border-[var(--accent-red)]/30 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 mt-auto relative z-50">
          {project.github && project.github !== "#" && (
            <a href={project.github} className="p-2 bg-[var(--surface)] border border-[var(--accent-red)]/30 hover:bg-white hover:text-[var(--bright-red)] rounded-full text-[var(--text)] transition-colors relative z-50 pointer-events-auto" data-magnetic>
              <FaGithub size={20} />
            </a>
          )}
          {project.live && project.live !== "#" && (
            <a href={project.live} className="p-2 bg-[var(--bright-red)] hover:bg-[var(--text)] rounded-full text-white transition-colors relative z-50 pointer-events-auto" data-magnetic>
              <ExternalLink size={20} />
            </a>
          )}
          {project.video && (
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onOpenVideo();
              }} 
              className="flex items-center gap-2 p-2 px-4 bg-[var(--surface)] border border-[var(--accent-red)]/30 hover:bg-white hover:text-[var(--bright-red)] rounded-full text-[var(--text)] transition-colors text-sm font-medium relative z-50 pointer-events-auto" 
              data-magnetic
            >
              <PlayCircle size={20} />
              <span>Demo</span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState<{url: string, title: string} | null>(null);

  return (
    <>
      <section id="projects" className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-oswald)] uppercase tracking-tighter text-[var(--text)]">
              DEPLOYMENTS
            </h2>
            <div className="h-px w-full max-w-sm bg-gradient-to-r from-[var(--accent-red)] to-transparent mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="h-full" style={{ perspective: '1000px' }}>
                <ProjectCard project={project} onOpenVideo={() => setActiveVideo({ url: project.video!, title: project.name })} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm" 
            onClick={() => setActiveVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl bg-[var(--background)] rounded-2xl overflow-hidden shadow-2xl border border-[var(--accent-red)]/30 pointer-events-auto" 
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-[var(--accent-red)]/20">
                <h3 className="text-xl font-bold text-[var(--text)] font-[var(--font-syne)]">{activeVideo.title}</h3>
                <button onClick={() => setActiveVideo(null)} className="p-2 text-[var(--text)] bg-[var(--surface)] hover:bg-[var(--bright-red)] hover:text-white rounded-full transition-colors cursor-pointer pointer-events-auto">
                  <X size={20} />
                </button>
              </div>
              <div className="aspect-video w-full bg-black relative">
                <video 
                  src={activeVideo.url} 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
