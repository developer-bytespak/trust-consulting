"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP =
  "https://wa.me/16029184012?text=Welcome%20to%20TrustPoint%20Consulting.%20How%20can%20we%20assist%20you%20today%3F";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Mobile: bottom bar */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-40 bg-brand-black/95 backdrop-blur-md border-t border-brand-gold/20 py-3 px-6 flex items-center justify-center md:hidden"
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            exit={{ y: 80 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-sm bg-brand-gold text-brand-black font-body font-semibold py-3 rounded-full text-center text-sm"
            >
              Book a Consultation
            </a>
          </motion.div>

          {/* Desktop: top-right floating button (below navbar) */}
          <motion.a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex fixed top-24 right-8 z-40 items-center gap-2 bg-brand-gold text-brand-black font-body font-semibold px-6 py-3 rounded-full shadow-lg shadow-brand-gold/20"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 24px rgba(201, 168, 76, 0.4)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Book a Consultation
          </motion.a>
        </>
      )}
    </AnimatePresence>
  );
}
