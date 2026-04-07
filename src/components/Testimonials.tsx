"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap-config";

const testimonials = [
  {
    name: "Maria G.",
    service: "Immigration Services",
    text: "TrustPoint made the entire visa process feel manageable. They handled everything with professionalism and kept us informed every step of the way. I cannot recommend them enough.",
  },
  {
    name: "James R.",
    service: "Business Services",
    text: "I needed to form my LLC quickly and TrustPoint delivered. They explained every step clearly and had everything set up faster than I expected. Outstanding service.",
  },
  {
    name: "Sofia M.",
    service: "Apostille & Notary",
    text: "I had urgent documents that needed apostille certification for an international transaction. TrustPoint got it done in record time. Truly a lifesaver.",
  },
  {
    name: "Carlos T.",
    service: "Insurance & Taxes",
    text: "Their tax filing service saved me a significant amount this year. The team was thorough, knowledgeable, and always available to answer my questions.",
  },
  {
    name: "Angela P.",
    service: "Fingerprinting",
    text: "Quick, professional, and hassle-free. The fingerprinting service was exactly what I needed for my background check. Will be coming back for all my consulting needs.",
  },
];

const allTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!trackRef.current) return;

      const cards = trackRef.current.children;
      const totalWidth = Array.from(cards)
        .slice(0, testimonials.length)
        .reduce((acc, card) => acc + (card as HTMLElement).offsetWidth + 24, 0);

      tweenRef.current = gsap.to(trackRef.current, {
        x: -totalWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x: number) => {
            return parseFloat(String(x)) % totalWidth;
          }),
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (tweenRef.current) {
      if (isHovered) {
        tweenRef.current.pause();
      } else {
        tweenRef.current.resume();
      }
    }
  }, [isHovered]);

  const stars = Array.from({ length: 5 }).map((_, i) => (
    <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-brand-gold">
      <path d="M10 1l2.47 5.01L18 6.97l-4 3.9.94 5.5L10 13.77l-4.94 2.6.94-5.5-4-3.9 5.53-.96L10 1z" />
    </svg>
  ));

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="section-y bg-[#0D0D0D] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            className="inline-block font-body text-xs tracking-[0.2em] uppercase text-brand-gold font-semibold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Client Stories
          </motion.span>

          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-cream leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            What Our Clients Say About Us
          </motion.h2>

          <motion.p
            className="font-body text-lg md:text-xl text-brand-cream/60 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Trusted by individuals, families, and businesses.
          </motion.p>

          {/* Social proof badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
          >
            <div className="flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 px-4 py-2 rounded-full">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="7" r="4" stroke="#C9A84C" strokeWidth="1.5" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-body text-sm font-semibold text-brand-gold">500+ Clients Served</span>
            </div>
            <div className="flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 px-4 py-2 rounded-full">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 16 16" fill="#C9A84C" className="w-3.5 h-3.5">
                    <path d="M8 0l2 5.2 5.6.8-4 3.8.9 5.6L8 13.1l-5.5 2.3.9-5.6-4-3.8L6 5.2z" />
                  </svg>
                ))}
              </div>
              <span className="font-body text-sm font-semibold text-brand-gold">4.9 / 5 Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 px-4 py-2 rounded-full">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#C9A84C" strokeWidth="1.5" />
                <path d="M9 12l2 2 4-4" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-body text-sm font-semibold text-brand-gold">98% Satisfaction</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={trackRef}
          className="flex gap-6 pl-6"
          style={{ width: "max-content" }}
        >
          {allTestimonials.map((testimonial, i) => (
            <motion.div
              key={`${testimonial.name}-${i}`}
              className="relative bg-[#111111] border border-white/10 rounded-xl p-8 w-[380px] flex-shrink-0"
              whileHover={{
                y: -8,
                borderColor: "rgba(201, 168, 76, 0.4)",
                boxShadow: "0 16px 32px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Gold quotation mark */}
              <div className="absolute top-4 right-6 font-display text-7xl text-brand-gold/15 leading-none select-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">{stars}</div>

              {/* Text */}
              <p className="font-body text-sm text-brand-cream/70 leading-relaxed italic mb-6 relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <span className="font-display text-sm font-bold text-brand-gold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-brand-cream">
                    {testimonial.name}
                  </p>
                  <span className="inline-block font-body text-[10px] tracking-widest uppercase text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded-full mt-0.5">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
