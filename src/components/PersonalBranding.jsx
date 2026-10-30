import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Compass,
  Fingerprint,
  MessageCircle,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import TornDivider from './TornDivider';

const brandServices = [
  {
    title: 'Brand Positioning',
    description: 'Define what makes you different and how the world sees you.',
    icon: Compass,
  },
  {
    title: 'Digital Identity',
    description: 'Create a consistent, professional presence across social platforms.',
    icon: Fingerprint,
  },
  {
    title: 'Content Strategy',
    description: 'Turn your ideas and expertise into content people want to engage with.',
    icon: MessageCircle,
  },
  {
    title: 'Visual Storytelling',
    description: 'Build a recognisable identity through impactful creative content.',
    icon: Sparkles,
  },
  {
    title: 'Audience Growth',
    description: 'Connect with the right people and grow meaningful engagement.',
    icon: UsersRound,
  },
];

export default function PersonalBranding({ onOpenContact }) {
  return (
    <section
      id="personal-branding"
      className="relative scroll-mt-20 overflow-hidden bg-[#0A0A0A] py-24"
    >
      <TornDivider />
      <div className="pointer-events-none absolute -right-32 top-12 h-96 w-96 rounded-full bg-[#9A0002]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-neutral-900">
              <span className="h-2 w-2 rounded-full bg-[#9A0002]" />
              Personal Branding
            </div>

            <h2 className="mb-6 font-heading text-3xl font-extrabold leading-[1.05] tracking-tight text-[#EFE6DE] transition-colors duration-400 hover:text-[#9A0002] cursor-pointer sm:text-5xl">
              YOUR NAME
              <br />
              IS YOUR BRAND.
              <br />
              <span className="text-neutral-400 transition-colors duration-400 hover:text-[#9A0002]">
                MAKE IT MATTER.
              </span>
            </h2>

            <p className="mb-5 text-sm leading-relaxed text-neutral-300 sm:text-base">
              Your expertise deserves more than a profile. It deserves a presence that builds credibility,
              attracts the right audience, and creates lasting opportunities.
            </p>
            <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
              At PIXIETRICKS, we transform your knowledge, personality, and vision into a distinctive
              personal brand that stands out in a crowded digital world.
            </p>

            <div className="mt-10 hidden border-l-2 border-[#9A0002] pl-5 lg:block">
              <p className="font-heading text-sm font-bold uppercase leading-relaxed tracking-wider text-neutral-200">
                Your expertise.
                <br />
                Your identity.
                <br />
                Your influence.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="mb-6 flex items-end justify-between border-b border-neutral-700 pb-4">
              <h3 className="font-heading text-2xl font-extrabold uppercase tracking-tight text-[#EFE6DE] sm:text-3xl">
                What We Build
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                Your presence, by design
              </span>
            </div>

            <div className="space-y-3">
              {brandServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    key={service.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    className="group flex gap-4 rounded-2xl border border-neutral-200 bg-[#EFE6DE]/80 p-5 transition-all duration-300 hover:border-[#9A0002]/40 hover:bg-white/50 sm:gap-5 sm:p-6"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100 text-[#9A0002] transition-colors group-hover:border-[#9A0002] group-hover:bg-[#9A0002] group-hover:text-[#EFE6DE]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-heading text-xl font-bold text-[#0A0A0A] transition-colors group-hover:text-[#9A0002]">
                        {service.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-neutral-600">
                        {service.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-5 rounded-3xl bg-[#0A0A0A] p-6 text-[#EFE6DE] sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <p className="font-heading text-xl font-extrabold uppercase leading-tight sm:text-2xl">
                  Your expertise. Your identity. Your influence.
                </p>
                <p className="mt-2 text-xs leading-relaxed text-neutral-400 sm:text-sm">
                  Ready to become a name people recognise and remember?
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#9A0002] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#EFE6DE] transition-colors hover:bg-[#760002]"
              >
                Let&apos;s Build Your Brand
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
