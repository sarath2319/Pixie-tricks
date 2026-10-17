import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import FilmTape from './FilmTape';
import { 
  Search, Share2, Video, Palette, FileText, TrendingUp, Target, 
  ArrowUpRight, CheckCircle2, X, Layers, Cpu, Award
} from 'lucide-react';

export default function Services({ onOpenContact }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalService, setActiveModalService] = useState(null);

  const categories = ['All', 'Organic Growth', 'Brand Building', 'Creative Production', 'Visual Systems', 'Growth Messaging', 'Performance Advertising', 'Paid Social Advertising'];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Search': return <Search className="w-6 h-6" />;
      case 'Share2': return <Share2 className="w-6 h-6" />;
      case 'Video': return <Video className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'FileText': return <FileText className="w-6 h-6" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
      case 'Target': return <Target className="w-6 h-6" />;
      default: return <Layers className="w-6 h-6" />;
    }
  };

  const filteredServices = selectedCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="py-24 bg-[#EFE6DE] relative overflow-hidden border-b border-neutral-200">
      <FilmTape className="left-[-20%] top-[-0.5rem] z-0 h-28 w-[140%] opacity-35" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[11px] font-bold uppercase tracking-wider text-neutral-800 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#9A0002]"></span>
              Our Services
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#0A0A0A] tracking-tight transition-colors duration-400 hover:text-[#9A0002] cursor-pointer">
              MADE TO MAKE YOUR <br />
              <span className="text-neutral-400 hover:text-[#9A0002] transition-colors duration-400">BRAND STAND OUT.</span>
            </h2>
          </div>
          <p className="text-neutral-600 max-w-md text-sm leading-relaxed">
            We turn creative ideas into powerful visuals, engaging content and digital experiences that help your business get noticed.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#0A0A0A] text-[#EFE6DE] shadow-md'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-[#EFE6DE] rounded-3xl p-8 border border-neutral-200/90 hover:border-black hover:bg-[#EFE6DE] transition-all duration-300 flex flex-col justify-between hover:shadow-xl relative"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#EFE6DE] border border-neutral-200 flex items-center justify-center text-neutral-900 group-hover:bg-[#0A0A0A] group-hover:text-[#9A0002] group-hover:border-black transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-heading text-sm font-bold text-neutral-400">
                    {service.number}
                  </span>
                </div>

                {/* Service Titles */}
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block mb-1">
                  {service.category}
                </span>
                <h3 className="font-heading text-xl font-bold text-[#0A0A0A] mb-3 transition-colors duration-400 group-hover:text-[#9A0002] hover:text-[#9A0002] cursor-pointer">
                  {service.title}
                </h3>
                <p className="text-neutral-600 text-xs leading-relaxed mb-6">
                  {service.tagline}
                </p>

                {/* Top Features bullets */}
                <ul className="space-y-2 mb-8">
                  {service.features.slice(0, 3).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer & Metric */}
              <div className="pt-6 border-t border-neutral-200/80 flex items-center justify-between">
                <div className="bg-[#9A0002]/10 text-[#9A0002] text-[11px] font-bold px-3 py-1 rounded-full border border-[#9A0002]/30 flex items-center gap-1">
                  <Award className="w-3 h-3 text-[#9A0002]" />
                  {service.results}
                </div>
                <button
                  onClick={() => setActiveModalService(service)}
                  className="w-9 h-9 rounded-full bg-[#EFE6DE] border border-neutral-300 flex items-center justify-center text-neutral-900 group-hover:bg-[#0A0A0A] group-hover:text-[#EFE6DE] group-hover:border-black transition-all"
                  aria-label={`View details for ${service.title}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal */}
      <AnimatePresence>
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalService(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-[#EFE6DE] rounded-3xl p-6 sm:p-10 shadow-2xl border border-neutral-200 z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-neutral-100 text-neutral-600 hover:bg-black hover:text-[#EFE6DE] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#9A0002] text-[#EFE6DE] text-xs font-bold uppercase rounded-full">
                  {activeModalService.category}
                </span>
                <span className="text-xs font-bold text-neutral-400">
                  Service #{activeModalService.number}
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#0A0A0A] mb-3">
                {activeModalService.title}
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base mb-8 leading-relaxed">
                {activeModalService.description}
              </p>

              {/* Metric Card */}
              <div className="p-4 rounded-2xl bg-neutral-900 text-[#EFE6DE] flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs text-neutral-400 block uppercase font-bold tracking-wider">The Goal</span>
                  <span className="font-heading text-xl sm:text-2xl font-extrabold text-[#EFE6DE]">{activeModalService.results}</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#EFE6DE]/10 flex items-center justify-center text-[#EFE6DE]">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              {/* Full Features Breakdown */}
              <div className="mb-8">
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-neutral-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900" />
                  What We Do
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeModalService.features.map((feat, idx) => (
                    <div key={idx} className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-xs font-semibold text-neutral-800 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9A0002] mt-1.5 shrink-0 border border-black/20"></span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & Tech Stack */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 pt-6 border-t border-neutral-200">
                <div>
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-900 mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-neutral-900" />
                    More Ways We Help
                  </h4>
                  <ul className="space-y-1.5 text-xs text-neutral-600">
                    {activeModalService.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <span className="text-neutral-900 font-bold">•</span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-900 mb-3 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-neutral-900" />
                    The Goal
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalService.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded-md text-[11px] font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal CTA */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-200">
                <button
                  onClick={() => setActiveModalService(null)}
                  className="px-5 py-2.5 rounded-xl border border-neutral-300 text-xs font-bold text-neutral-700 hover:bg-neutral-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setActiveModalService(null);
                    onOpenContact();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#0A0A0A] text-[#EFE6DE] text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center gap-2"
                >
                  <span>Let's Work Together</span>
                  <ArrowUpRight className="w-4 h-4 text-[#EFE6DE]" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
