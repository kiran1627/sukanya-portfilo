'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Intersection observer for active section logic could go here
      // For simplicity, we'll just check scroll position roughly or use IntersectionObserver
      const sections = navLinks.map(link => document.querySelector(link.href) as HTMLElement);

      let current = '';
      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id') || '';
          }
        }
      });
      setActiveSection(`#${current}`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <nav
          className={`flex items-center justify-between mx-auto rounded-full transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-md border border-[var(--accent-red)]/30 px-6 py-3 max-w-4xl shadow-[0_10px_30px_rgba(179,157,219,0.15)]' : 'max-w-7xl'
            }`}
        >
          <Link href="/" className="text-xl font-bold font-[var(--font-oswald)] tracking-wider text-[var(--text)]" data-magnetic>
            SUKANYA
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 relative">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-[var(--text)] opacity-70 hover:text-[var(--bright-red)] transition-colors"
                data-magnetic
              >
                {activeSection === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-[var(--accent-red)]/20 rounded-full"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[var(--text)] p-2 hover:text-[var(--bright-red)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-[var(--accent-red)]/30 py-4 px-6 md:hidden flex flex-col space-y-4 shadow-[0_20px_40px_rgba(179,157,219,0.15)]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-[var(--text)] opacity-80 hover:text-[var(--bright-red)] py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
