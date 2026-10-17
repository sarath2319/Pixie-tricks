import React, { useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#EFE6DE] pt-20 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Big Banner */}
        <div className="pb-16 border-b border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#EFE6DE] block mb-2">
              PIXETRICKS · YOUR CREATIVE PARTNER
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#EFE6DE] tracking-tight transition-colors duration-400 hover:text-[#9A0002] cursor-pointer">
              LET'S TURN YOUR IDEAS <br />
              <span className="text-neutral-500 hover:text-[#9A0002] transition-colors duration-400">INTO SOMETHING GREAT.</span>
            </h2>
            <p className="text-neutral-400 text-sm mt-4">From the first idea to the final campaign, we're here to help your brand move forward.</p>
          </div>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-3 bg-[#9A0002] text-[#EFE6DE] font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-2xl hover:bg-[#760002] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#9A0002]/20 shrink-0"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Links Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#9A0002] rounded-lg flex items-center justify-center font-bold text-[#EFE6DE] font-heading">
                P
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-[#EFE6DE]">
                PIXIETRICKS
              </span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              We help businesses grow their online presence through creative content, thoughtful marketing and digital advertising.
            </p>

            {/* Live System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-semibold text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-[#9A0002] animate-pulse"></span>
              <span>Open for New Projects</span>
            </div>
          </div>

          {/* Core Services Links */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#EFE6DE] mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li><a href="#services" className="hover:text-[#EFE6DE] transition-colors">SEO Optimization</a></li>
              <li><a href="#services" className="hover:text-[#EFE6DE] transition-colors">Social Media Marketing</a></li>
              <li><a href="#services" className="hover:text-[#EFE6DE] transition-colors">Video & Motion Graphics</a></li>
              <li><a href="#services" className="hover:text-[#EFE6DE] transition-colors">Graphic Design</a></li>
              <li><a href="#services" className="hover:text-[#EFE6DE] transition-colors">Content & Copywriting</a></li>
              <li><a href="#services" className="hover:text-[#EFE6DE] transition-colors">Google Ads</a></li>
              <li><a href="#services" className="hover:text-[#EFE6DE] transition-colors">Meta Ads</a></li>
            </ul>
          </div>

          {/* Agency Navigation */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#EFE6DE] mb-4">
              Explore Pixietricks
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li><a href="#strategy" className="hover:text-[#EFE6DE] transition-colors">Our Strategy</a></li>
              <li><a href="#why-us" className="hover:text-[#EFE6DE] transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-[#EFE6DE] transition-colors">Contact Us</a></li>
            </ul>
            <div className="mt-8 space-y-2">
              <span className="block font-heading font-bold text-xs uppercase tracking-wider text-[#EFE6DE]">
                Contact No
              </span>
              <a
                href="tel:+918825860664"
                className="inline-block text-xs font-semibold tracking-wide text-neutral-300 hover:text-[#EFE6DE] transition-colors"
              >
                +91 88258 60664
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#EFE6DE] mb-4">
              The Pixietricks Digest
            </h4>
            <p className="text-neutral-400 text-xs mb-3">
              Creative ideas, useful marketing tips and updates to help your business grow.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-[#EFE6DE] placeholder-neutral-500 focus:outline-none focus:border-[#9A0002]"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-[#9A0002] hover:bg-[#760002] text-[#EFE6DE] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <span>{subscribed ? 'Subscribed!' : 'Subscribe to the Digest'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <div>
            © 2026 PIXETRICKS. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Cookie Preferences</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
