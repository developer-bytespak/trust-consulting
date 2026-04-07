"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap-config";

const WHATSAPP_URL = "https://wa.me/16029184012";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

  return (
    <footer ref={footerRef} className="bg-brand-footer-bg text-white">
      {/* Gold divider line */}
      <div ref={lineRef} className="h-[2px] bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold" />

      <div className="max-w-7xl mx-auto section-padding py-16 md:py-20">
        {/* Logo + Tagline */}
        <div className="footer-logo text-center mb-14">
          <div className="flex justify-center mb-4">
            <Image
              src="/consulting-logo.png"
              alt="TrustPoint Consulting"
              width={320}
              height={160}
              className="h-28 md:h-36 w-auto object-contain drop-shadow-[0_0_12px_rgba(201,168,76,0.3)]"
            />
          </div>
          <p className="font-display text-base text-brand-gold italic">
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
              {["Services", "Why Us", "Testimonials", "Contact"].map((label) => (
                <li key={label}>
                  <motion.a
                    href={`#${label.toLowerCase().replace(" ", "-")}`}
                    className="font-body text-sm text-white/60 inline-flex items-center"
                    whileHover={{ color: "#C9A84C", x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {label}
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
              {[
                "Immigration & Global Mobility",
                "Business & Corporate Services",
                "Identity & Compliance",
                "Legal Support & Documentation",
                "Insurance & Tax Advisory",
              ].map((service) => (
                <li key={service}>
                  <motion.a
                    href="#services"
                    className="font-body text-sm text-white/60 inline-flex items-center"
                    whileHover={{ color: "#C9A84C", x: 4 }}
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
              <li>
                <a
                  href="mailto:info@trustpointconsulting.com"
                  className="font-body text-sm text-white/60 hover:text-brand-gold transition-colors"
                >
                  info@trustpointconsulting.com
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-white/60 hover:text-brand-gold transition-colors"
                >
                  +1 (602) 918-4012
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            &copy; 2025 TrustPoint Consulting. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <motion.a
              href="#privacy"
              className="font-body text-xs text-white/40"
              whileHover={{ color: "#C9A84C" }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#terms"
              className="font-body text-xs text-white/40"
              whileHover={{ color: "#C9A84C" }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#disclaimer"
              className="font-body text-xs text-white/40"
              whileHover={{ color: "#C9A84C" }}
            >
              Disclaimer
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
