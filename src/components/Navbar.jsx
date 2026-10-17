import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Strategy', href: '#strategy' },
    { name: 'Why Us', href: '#why-us' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3.5 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex min-h-10 items-center justify-center">
          {/* Logo */}
          <a href="#" className="absolute left-0 top-1/2 flex -translate-y-1/2 items-center gap-2">
            <img
              src="/pixietricks-mark.png"
              alt="Pixietricks megaphone logo"
              className="h-9 w-9 shrink-0 rounded-lg object-cover"
            />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl tracking-tight text-[#0A0A0A] flex items-center gap-1.5">
                PIXIETRICKS
                <span className="w-2 h-2 rounded-full bg-[#9A0002] inline-block animate-pulse"></span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-neutral-800 font-bold -mt-1">
                Strategy & Creative Growth
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#EFE6DE]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-neutral-200/80 shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-neutral-700 hover:text-[#9A0002] hover:bg-neutral-100 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <div className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#0A0A0A] hover:bg-neutral-200 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A] text-[#EFE6DE] border-b border-neutral-800 px-6 py-8 space-y-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-heading font-semibold hover:text-[#9A0002] transition-colors py-1 flex items-center justify-between border-b border-neutral-800/60"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
