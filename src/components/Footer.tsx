"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap-config";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Immigration Services",
  "Business Services",
  "Fingerprinting",
  "Insurance & Taxes",
  "Notary Services",
  "Apostille Certification",
  "Tax Preparation",
];

const socialIcons = [
  {
    label: "Facebook",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    label: "Instagram",
    path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01",
    rect: true,
  },
  {
    label: "LinkedIn",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z",
    circle: "M4 4",
  },
  {
    label: "Google",
    path: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.89 11h-4.34v3.11h2.58c-.39 1.22-1.53 2.11-2.87 2.11-1.66 0-3.01-1.35-3.01-3.01s1.35-3.01 3.01-3.01c.74 0 1.42.27 1.94.72l1.69-1.69A5.27 5.27 0 0 0 12.26 10c-2.87 0-5.2 2.33-5.2 5.2s2.33 5.2 5.2 5.2c3 0 5.07-2.11 5.07-5.07 0-.44-.06-.88-.17-1.29-.01-.03-.17-.04-.27-.04z",
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gold divider line draw
      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        });
      }

      // Logo fade in
      gsap.from(".footer-logo", {
        scale: 0.85,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });

      // Columns stagger
      gsap.from(".footer-col", {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className="bg-brand-footer-bg text-white">
      {/* Gold divider line */}
      <div ref={lineRef} className="h-[2px] bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold" />

      <div className="max-w-7xl mx-auto section-padding py-16 md:py-20">
        {/* Logo + Tagline centered */}
        <div className="footer-logo text-center mb-14">
          <div className="flex justify-center mb-4">
            <Image
              src="/consulting-logo.png"
              alt="TrustPoint Consulting"
              width={320}
              height={160}
              className="h-36 md:h-44 w-auto object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.3)]"
            />
          </div>
          <p className="font-sub text-base text-brand-gold italic">
            &ldquo;Trusted Guidance. Complete Solutions.&rdquo;
          </p>
        </div>

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-14">
          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-brand-gold font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="font-body text-sm text-white/60 inline-flex items-center"
                    whileHover={{ color: "#D4AF37", x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-brand-gold font-semibold mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <motion.a
                    href="#services"
                    className="font-body text-sm text-white/60 inline-flex items-center"
                    whileHover={{ color: "#D4AF37", x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-brand-gold font-semibold mb-5">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="font-body text-sm text-white/60">
                123 Main Street, Suite 200
                <br />
                Anytown, ST 12345
              </li>
              <li className="font-body text-sm text-white/60">
                (555) 123-4567
              </li>
              <li className="font-body text-sm text-white/60">
                info@trustpointconsulting.com
              </li>
              <li className="font-body text-sm text-white/60">
                Mon – Fri 9AM – 6PM
                <br />
                Sat 10AM – 4PM
              </li>
            </ul>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-4 mb-10">
          {socialIcons.map((social) => (
            <motion.a
              key={social.label}
              href="#"
              className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/60"
              whileHover={{ scale: 1.2, rotate: 10, borderColor: "#D4AF37", color: "#D4AF37" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              aria-label={social.label}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                {social.rect && (
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                )}
                <path d={social.path} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                {social.circle && (
                  <circle cx={4} cy={4} r="1" fill="currentColor" />
                )}
              </svg>
            </motion.a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} TrustPoint Consulting. All rights reserved.
          </p>
          <div className="flex gap-6">
            <motion.a
              href="#"
              className="font-body text-xs text-white/40"
              whileHover={{ color: "#D4AF37" }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="font-body text-xs text-white/40"
              whileHover={{ color: "#D4AF37" }}
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        aria-label="Back to top"
      >
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-5 h-5 text-white"
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <path
            d="M18 15l-6-6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.button>
    </footer>
  );
}
