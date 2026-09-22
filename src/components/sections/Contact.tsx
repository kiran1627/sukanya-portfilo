'use client';

import { useState } from 'react';
import { Copy, Check, Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personal } from '../../data/portfolio';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = personal.email;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-oswald)] uppercase tracking-tighter text-center text-[var(--text)]">
            INITIATE_CONTACT
          </h2>
          <div className="h-px w-full max-w-sm bg-gradient-to-r from-transparent via-[var(--accent-red)] to-transparent mx-auto mt-4" />
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/70 backdrop-blur-md border border-[var(--accent-red)]/50 rounded-2xl p-8 mb-12 shadow-[0_10px_30px_rgba(179,157,219,0.15)] inline-block">
            <p className="text-[var(--text)] opacity-90 text-lg">
              Currently building AI systems and open to new opportunities.
              Whether you have a question, a project idea, or just want to connect,
              my inbox is always open.
            </p>
          </div>

          <div
            onClick={handleCopy}
            className="inline-flex items-center gap-4 bg-white/70 backdrop-blur-md border border-[var(--accent-red)]/50 hover:border-[var(--bright-red)] rounded-full py-4 px-8 cursor-pointer transition-all duration-300 group mb-16 shadow-[0_10px_30px_rgba(179,157,219,0.15)] hover:shadow-[0_10px_40px_rgba(124,92,214,0.25)]"
            data-magnetic
          >
            <div className="p-2 bg-[var(--accent-red)]/20 rounded-full text-[var(--bright-red)] group-hover:bg-[var(--accent-red)] group-hover:text-white transition-colors">
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </div>
            <span className="text-xl md:text-2xl font-[var(--font-jetbrains-mono)] font-bold tracking-tight text-[var(--text)] group-hover:text-[var(--bright-red)] transition-colors">
              {email}
            </span>
          </div>

          <div className="flex justify-center gap-6 flex-wrap">
            {[
              { icon: FaGithub, href: personal.github, label: 'GitHub' },
              { icon: FaLinkedin, href: personal.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
              { icon: Phone, href: `tel:${personal.phone}`, label: 'Phone' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-[var(--accent-red)]/30 rounded-full text-[var(--text)] opacity-70 hover:text-[var(--bright-red)] hover:border-[var(--bright-red)] hover:bg-white transition-colors bg-[var(--surface)] shadow-[0_5px_15px_rgba(179,157,219,0.1)]"
                aria-label={social.label}
                data-magnetic
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full py-6 text-center border-t border-[var(--accent-red)]/20 bg-white/80 backdrop-blur-md">
        <p className="text-xs text-[var(--text)] opacity-60 font-[var(--font-jetbrains-mono)]">
          &copy; {new Date().getFullYear()} SUKANYA LAMBADAY. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </section>
  );
}
