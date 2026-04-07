"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Force fixed positioning on mobile — prevents GSAP/Framer Motion interference
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const lock = () => {
      nav.style.position = "fixed";
      nav.style.top = "0px";
      nav.style.transform = "none";
      // Reset individual transform properties (Framer Motion v12+)
      nav.style.translate = "none";
      nav.style.scale = "none";
      nav.style.rotate = "none";
    };

    lock();
    window.addEventListener("scroll", lock, { passive: true });
    return () => window.removeEventListener("scroll", lock);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed-nav fixed top-0 left-0 right-0 z-50 bg-brand-black border-b border-brand-gold/20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/consulting-logo.png"
              alt="TrustPoint Consulting"
              width={220}
              height={80}
              className="h-20 md:h-[70px] w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="relative text-sm font-body font-medium text-brand-cream/80 hover:text-brand-cream transition-colors py-1"
                whileHover="hover"
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] bg-brand-gold origin-left"
                  style={{ width: "100%" }}
                  initial={{ scaleX: 0 }}
                  variants={{
                    hover: {
                      scaleX: 1,
                      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                />
              </motion.button>
            ))}
          </div>

          {/* Hamburger */}
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                className="block w-6 h-0.5 bg-brand-cream"
                animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-brand-cream"
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-brand-cream"
                animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-brand-black flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="font-display text-3xl font-bold text-brand-cream"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{
                    delay: i * 0.08,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
