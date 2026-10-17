import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import FilmTape from './FilmTape';

export default function Hero({ onOpenContact }) {
  const headlineWords = ["WE DON'T JUST", "MARKET.", "WE MAKE AN", "IMPACT."];

  const clientLogos = [
    { name: 'SEO', tag: 'Organic growth' },
    { name: 'SOCIAL MEDIA', tag: 'Brand building' },
    { name: 'VIDEO', tag: 'Creative production' },
    { name: 'DESIGN', tag: 'Visual systems' },
    { name: 'COPYWRITING', tag: 'Growth messaging' },
    { name: 'GOOGLE ADS', tag: 'Performance advertising' },
    { name: 'META ADS', tag: 'Paid social advertising' },
  ];

  const stats = [
    { value: '07', label: 'Creative digital services' },
    { value: '07', label: 'Strategy steps' },
    { value: '06', label: 'Collaboration phases' },
    { value: '04', label: 'Guiding principles' },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#EFE6DE]">
    {/* Background ambient lighting effects */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9A0002]/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
    <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-neutral-900/5 rounded-full blur-[90px] pointer-events-none -z-10"></div>
    <FilmTape className="left-[-30%] top-[3.5rem] z-0 h-32 w-[160%] opacity-30" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EFE6DE] border border-neutral-200/90 shadow-xs mb-8"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#9A0002] border border-black/20 animate-ping"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-800 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              STRATEGY · CREATIVITY · DIGITAL
            </span>
          </motion.div>

          {/* Main Headline (Word by Word reveal with smooth hover accent transition) */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#0A0A0A] leading-[0.95] max-w-5xl mb-8">
            {headlineWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`inline-block mr-3 sm:mr-4 transition-colors duration-400 hover:text-[#9A0002] cursor-pointer ${
                  word === 'MARKET.' || word === 'IMPACT.'
                    ? 'relative text-neutral-950 font-black'
                    : ''
                }`}
              >
                {word === 'IMPACT.' ? (
                  <span className="relative">
                    <span className="relative z-10">{word}</span>
                    <span className="absolute bottom-2 left-0 right-0 h-4 bg-[#9A0002]/20 -z-0 transform -rotate-1 rounded-sm"></span>
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl text-neutral-600 max-w-2xl font-normal leading-relaxed mb-10"
          >
            From creative content to powerful campaigns, we help businesses turn bold ideas into memorable brands.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16"
          >
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0A0A0A] text-[#EFE6DE] font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-2xl hover:bg-neutral-800 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-black/10 group"
            >
              <span>Let's Work Together</span>
              <div className="w-7 h-7 rounded-full bg-[#9A0002] text-[#EFE6DE] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </div>
            </button>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EFE6DE] text-[#0A0A0A] border border-neutral-300 font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-2xl hover:bg-neutral-100 hover:border-neutral-400 transition-all shadow-xs"
            >
              <span>Our Services</span>
            </a>
          </motion.div>

          {/* Key Stat Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl text-left border border-neutral-200/80 hover:border-black/20 transition-all hover:shadow-md"
              >
                <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0A0A0A] tracking-tight mb-1 flex items-baseline gap-1">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Infinite Client Logo Marquee */}
      <div className="mt-20 pt-8 border-t border-b border-neutral-200/80 bg-[#EFE6DE]/60 backdrop-blur-xs overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-center text-neutral-400">
            Creative services to help your business get noticed
          </p>
        </div>
        <div className="relative w-full overflow-hidden py-4">
          <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-2 rounded-xl bg-neutral-100/80 border border-neutral-200/60 shrink-0 hover:border-black/30 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#9A0002] border border-black/20"></div>
                <span className="font-heading font-black text-sm tracking-wider text-neutral-800">
                  {logo.name}
                </span>
                <span className="text-[10px] font-medium text-neutral-400 bg-neutral-200 px-2 py-0.5 rounded-md">
                  {logo.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
