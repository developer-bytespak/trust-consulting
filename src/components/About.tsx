"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap-config";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const trustBadges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#B8960C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#B8960C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Licensed Professionals",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="#B8960C" strokeWidth="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#B8960C" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    label: "Confidential & Secure",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#B8960C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Bilingual Support",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image slide in from left with parallax
      gsap.from(imageRef.current, {
        x: -120,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Parallax on image
      gsap.to(imageRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Content slide in from right
      gsap.from(contentRef.current, {
        x: 120,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-y section-padding bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with gold border frame */}
          <div ref={imageRef} className="relative">
            <div className="relative aspect-[4/5] bg-gradient-to-br from-brand-gold-bg to-brand-divider rounded-lg overflow-hidden">
              {/* Placeholder professional image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg viewBox="0 0 120 120" className="w-32 h-32 mx-auto mb-4 opacity-30">
                    <circle cx="60" cy="40" r="20" stroke="#B8960C" strokeWidth="2" fill="none" />
                    <path d="M20 110 C20 80 40 65 60 65 C80 65 100 80 100 110" stroke="#B8960C" strokeWidth="2" fill="none" />
                  </svg>
                  <p className="font-body text-sm text-brand-black/30">Professional Consultation</p>
                </div>
              </div>
              {/* Gold border frame */}
              <div className="absolute inset-3 border-2 border-brand-gold/40 rounded-sm pointer-events-none" />
            </div>
            {/* Gold accent square */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-gold/10 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-brand-gold/10 rounded-lg -z-10" />
          </div>

          {/* Text Content */}
          <div ref={contentRef}>
            <motion.span
              className="inline-block font-body text-xs tracking-[0.2em] uppercase text-brand-gold font-semibold mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              About TrustPoint Consulting
            </motion.span>

            <motion.h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black leading-tight mb-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Your Trusted Partner in Every Step of the Journey
            </motion.h2>

            <motion.p
              className="font-body text-base md:text-lg text-brand-black/70 leading-relaxed mb-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              At TrustPoint Consulting, we believe that expert guidance should be accessible
              to everyone. Whether you&apos;re navigating the complexities of immigration,
              starting a new business, handling legal documents, or planning your finances
              — our team of experienced professionals is here to provide complete, reliable,
              and confidential support. We are more than a consulting firm; we are your
              trusted partner.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {trustBadges.map((badge) => (
                <motion.div
                  key={badge.label}
                  className="flex items-center gap-2 bg-brand-gold-bg px-4 py-2.5 rounded-full"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  {badge.icon}
                  <span className="font-body text-sm font-medium text-brand-black">
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Link */}
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 font-body text-brand-gold font-semibold group"
              whileHover="hover"
            >
              Learn More About Our Team
              <motion.span
                variants={{ hover: { x: 6 } }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                →
              </motion.span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
