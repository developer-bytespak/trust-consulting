"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap-config";

const trustPoints = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#C9A84C" strokeWidth="1.5" />
      </svg>
    ),
    title: "Multidisciplinary Expertise",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="#C9A84C" strokeWidth="1.5" />
      </svg>
    ),
    title: "Client-Centered Approach",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="#C9A84C" strokeWidth="1.5" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1" fill="#C9A84C" />
      </svg>
    ),
    title: "Confidential Processes",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 4L12 14.01l-3-3" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Proven Results",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray<HTMLElement>(".why-box");
      boxes.forEach((box, i) => {
        gsap.from(box, {
          scale: 0.85,
          opacity: 0,
          duration: 0.7,
          ease: "back.out(1.4)",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: box,
            start: "top 88%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="section-y section-padding"
      style={{
        background:
          "radial-gradient(ellipse at top center, rgba(201,168,76,0.06) 0%, #0A0A0A 50%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            className="inline-block font-body text-xs tracking-[0.2em] uppercase text-brand-gold font-semibold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Us
          </motion.span>

          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-cream leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Why TrustPoint Consulting
          </motion.h2>

          <div className="flex justify-center mb-6">
            <div className="w-20 h-[2px] bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-light" />
          </div>
        </div>

        {/* Founder-led authority block */}
        <motion.div
          className="relative bg-[#111111] border border-white/10 rounded-2xl p-8 md:p-12 lg:p-16 mb-16 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle gold glow top-left */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-5 gap-10 items-center relative z-10">
            {/* Professional headshot — left column */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                {/* Outer gold ring */}
                <div className="absolute -inset-3 rounded-2xl border border-brand-gold/20" />
                {/* Image container */}
                <div className="relative w-56 h-64 md:w-64 md:h-72 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-brand-gold/30 overflow-hidden flex items-end justify-center">
                  {/* Premium silhouette */}
                  <svg viewBox="0 0 200 240" className="w-full h-full" preserveAspectRatio="xMidYMax meet">
                    <defs>
                      <linearGradient id="suitGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.05" />
                      </linearGradient>
                    </defs>
                    {/* Head */}
                    <circle cx="100" cy="70" r="32" fill="url(#suitGrad)" stroke="#C9A84C" strokeWidth="1" />
                    {/* Shoulders / suit */}
                    <path d="M30 240 C30 175 55 150 100 145 C145 150 170 175 170 240" fill="url(#suitGrad)" stroke="#C9A84C" strokeWidth="1" />
                    {/* Tie */}
                    <path d="M95 145 L100 175 L105 145" fill="#C9A84C" fillOpacity="0.4" />
                    {/* Lapels */}
                    <path d="M80 150 L100 175 L75 200" stroke="#C9A84C" strokeWidth="0.8" fill="none" strokeOpacity="0.5" />
                    <path d="M120 150 L100 175 L125 200" stroke="#C9A84C" strokeWidth="0.8" fill="none" strokeOpacity="0.5" />
                  </svg>
                  {/* Gold bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
                </div>
              </div>
            </div>

            {/* Bio content — right column */}
            <div className="lg:col-span-3">
              <div className="inline-block bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 mb-5">
                <span className="font-body text-xs tracking-widest uppercase text-brand-gold font-semibold">
                  Leadership
                </span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-cream mb-4">
                Built on Expertise. Driven by Trust.
              </h3>

              <p className="font-body text-base md:text-lg text-brand-cream/75 leading-relaxed mb-4">
                Led by experienced consultants with backgrounds in law, compliance,
                and international services. TrustPoint Consulting was built on a
                simple principle: everyone deserves expert guidance they can trust.
              </p>

              <p className="font-body text-sm text-brand-cream/55 leading-relaxed mb-6">
                We combine deep industry knowledge with a genuine commitment to our
                clients&apos; success, making complex processes simple and accessible
                for individuals, families, and businesses alike.
              </p>

              {/* Credential badges */}
              <div className="flex flex-wrap gap-3">
                {["500+ Clients Served", "10+ Years Experience", "Bilingual Support"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 font-body text-xs text-brand-gold bg-brand-gold/8 border border-brand-gold/15 px-3 py-1.5 rounded-full"
                    >
                      <svg viewBox="0 0 16 16" fill="#C9A84C" className="w-3 h-3">
                        <path d="M8 0l2 5.2 5.6.8-4 3.8.9 5.6L8 13.1l-5.5 2.3.9-5.6-4-3.8L6 5.2z" />
                      </svg>
                      {badge}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Trust Point Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point) => (
            <motion.div
              key={point.title}
              className="why-box relative bg-[#111111] border border-white/10 rounded-xl p-6 text-center transition-colors duration-300 hover:border-brand-gold/50"
              whileHover={{
                y: -8,
                boxShadow: "0 16px 40px rgba(201, 168, 76, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-14 h-14 bg-brand-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                {point.icon}
              </div>

              <h3 className="font-display text-lg font-bold text-brand-cream">
                {point.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
