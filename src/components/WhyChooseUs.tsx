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
    description: "Our consultants bring backgrounds in law, compliance, finance, and international services.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="#C9A84C" strokeWidth="1.5" />
      </svg>
    ),
    title: "Client-Centered Approach",
    description: "Every case is handled with personalized attention and a plan tailored to your unique needs.",
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
    description: "Your information and documents are handled with the highest level of privacy and security.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 4L12 14.01l-3-3" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Proven Results",
    description: "Thousands of successful cases across immigration, business, legal, and financial services.",
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
      className="section-y section-padding bg-brand-black"
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

        {/* Professional headshot + Bio */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Avatar placeholder */}
          <motion.div
            className="relative mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-brand-gold/40 bg-[#111111] flex items-center justify-center mx-auto overflow-hidden">
              {/* Professional silhouette avatar */}
              <svg viewBox="0 0 120 120" className="w-40 h-40 opacity-50">
                <circle cx="60" cy="38" r="20" stroke="#C9A84C" strokeWidth="2" fill="none" />
                <path d="M20 110 C20 78 38 63 60 63 C82 63 100 78 100 110" stroke="#C9A84C" strokeWidth="2" fill="none" />
              </svg>
            </div>
            {/* Gold glow ring */}
            <div className="absolute inset-0 rounded-full border border-brand-gold/10 scale-110" />
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-lg md:text-xl text-brand-cream/80 leading-relaxed mb-6">
              Led by experienced consultants with backgrounds in law, compliance,
              and international services. TrustPoint Consulting was built on a
              simple principle: everyone deserves expert guidance they can trust.
            </p>
            <p className="font-body text-base text-brand-cream/60 leading-relaxed">
              We combine deep industry knowledge with a genuine commitment to our
              clients&apos; success, making complex processes simple and accessible
              for individuals, families, and businesses alike.
            </p>
          </motion.div>
        </div>

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

              <h3 className="font-display text-lg font-bold text-brand-cream mb-2">
                {point.title}
              </h3>

              <p className="font-body text-sm text-brand-cream/60 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
