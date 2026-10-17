import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [openPopover, setOpenPopover] = useState(false);

  const whatsappNumber = '918825860664';
  const defaultMessage = encodeURIComponent(
    'Hello PIXETRICKS! I would like to talk about creative content, marketing, and digital advertising for my business.'
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Popover Card */}
      <AnimatePresence>
        {openPopover && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            className="mb-4 bg-neutral-900 text-[#EFE6DE] p-5 rounded-2xl shadow-2xl border border-neutral-800 w-80 relative overflow-hidden"
          >
            <button
              onClick={() => setOpenPopover(false)}
              className="absolute top-3 right-3 text-neutral-400 hover:text-[#EFE6DE] p-1"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <img
                  src="/pixietricks-mark.png"
                  alt="Pixietricks logo"
                  className="w-10 h-10 rounded-lg object-cover border border-[#9A0002]"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#9A0002] rounded-full border-2 border-black"></span>
              </div>
              <div>
                <span className="font-heading text-sm font-bold text-[#EFE6DE] block">
                  PIXETRICKS Team
                </span>
                <span className="text-[10px] text-[#EFE6DE] font-semibold uppercase tracking-wider block">
                  ● Online • Creative Partner
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed mb-4 bg-neutral-950 p-3 rounded-xl border border-neutral-800">
              "Hi there! Have an idea, a business or a marketing challenge? Let's talk about it."
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-[#9A0002] hover:bg-[#760002] text-[#EFE6DE] text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-[#EFE6DE]" />
              <span>Start WhatsApp Chat</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Launcher Button */}
      <div className="relative">
        {/* Pulsing Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#9A0002]/40 animate-ping pointer-events-none"></span>

        <button
          onClick={() => setOpenPopover(!openPopover)}
          className="relative w-14 h-14 bg-[#9A0002] text-[#EFE6DE] rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-300 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-[#EFE6DE] stroke-none group-hover:rotate-12 transition-transform" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#9A0002] rounded-full border-2 border-[#EFE6DE]"></span>
        </button>
      </div>

    </div>
  );
}
