"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap-config";
import { splitTextIntoSpans } from "@/lib/split-text";

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading split text
      if (headingRef.current) {
        const words = splitTextIntoSpans(headingRef.current, "words");
        gsap.from(words, {
          y: 60,
          opacity: 0,
          stagger: 0.06,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        });
      }

      // Shimmer sweep - repeating
      if (shimmerRef.current) {
        gsap.fromTo(
          shimmerRef.current,
          { x: "-100%" },
          {
            x: "200%",
            duration: 2.5,
            ease: "power2.inOut",
            repeat: -1,
            repeatDelay: 3,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Subtle animated gradient
      gsap.to(sectionRef.current, {
        backgroundPosition: "200% center",
        duration: 8,
        ease: "none",
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 section-padding overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0A0A0A 0%, #1a1714 50%, #0A0A0A 100%)",
        backgroundSize: "200% 100%",
      }}
    >
      {/* Shimmer beam */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={shimmerRef}
          className="absolute top-0 h-full w-1/3 -skew-x-12"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.06), transparent)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.span
          className="inline-block font-body text-xs tracking-[0.2em] uppercase text-brand-gold font-semibold mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get Started Today
        </motion.span>

        <h2
          ref={headingRef}
          className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6"
        >
          Ready to Move Forward With Confidence?
        </h2>

        <motion.p
          className="font-sub text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Book your free consultation with a TrustPoint specialist and take the
          first step toward your goals.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#contact"
            className="relative overflow-hidden bg-brand-gold text-white font-body font-semibold px-8 py-3.5 rounded-full text-base"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 12px 32px rgba(184, 150, 12, 0.4)",
            }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="relative z-10">Schedule a Free Consultation</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.a>

          <motion.a
            href="tel:+10000000000"
            className="flex items-center gap-2 border-2 border-white/30 text-white font-body font-semibold px-8 py-3.5 rounded-full text-base"
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(212, 175, 55, 0.15)",
              borderColor: "#D4AF37",
            }}
            whileTap={{ scale: 0.96 }}
          >
            <motion.svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5"
              whileHover={{
                rotate: [0, -15, 15, -10, 10, 0],
                transition: { duration: 0.5 },
              }}
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
            Call Us Now
          </motion.a>
        </motion.div>

        <motion.p
          className="font-body text-xs text-white/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          No commitment required. Same-day appointments available.
        </motion.p>
      </div>
    </section>
  );
}
