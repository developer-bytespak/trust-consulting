"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap-config";
import { splitTextIntoSpans } from "@/lib/split-text";

const steps = [
  {
    number: "01",
    title: "Book a Consultation",
    description:
      "Schedule a free consultation online or by phone. Tell us what you need and we'll match you with the right specialist.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#B8960C" strokeWidth="1.5" />
        <path d="M16 2v4M8 2v4M3 10h18" stroke="#B8960C" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="16" r="2" fill="#B8960C" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Share Your Information",
    description:
      "Provide the necessary documents and details. Our team reviews everything carefully and identifies the best path forward for your situation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#B8960C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2v6h6M12 18v-6M9 15l3-3 3 3" stroke="#B8960C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "We Handle Everything",
    description:
      "Our experts manage every form, filing, certification, and follow-up on your behalf — so you can focus on what matters most.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#B8960C" strokeWidth="1.5" />
        <path d="M12 6v6l4 2" stroke="#B8960C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Receive Your Results",
    description:
      "Get your completed documents, approvals, and confirmations delivered efficiently. We follow up until everything is fully resolved.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#B8960C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 4L12 14.01l-3-3" stroke="#B8960C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading split text animation
      if (headingRef.current) {
        const letters = splitTextIntoSpans(headingRef.current, "chars");
        gsap.from(letters, {
          y: 60,
          opacity: 0,
          stagger: 0.02,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        });
      }

      // Progress line drawing
      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scaleX: 0,
          transformOrigin: "left center",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 70%",
            scrub: 1,
          },
        });
      }

      // Steps staggered entrance
      stepsRef.current.forEach((step) => {
        if (!step) return;
        gsap.from(step, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="section-y section-padding bg-brand-offwhite"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            className="inline-block font-body text-xs tracking-[0.2em] uppercase text-brand-gold font-semibold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.span>

          <h2
            ref={headingRef}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black leading-tight mb-4"
          >
            Simple Steps, Exceptional Results
          </h2>

          <motion.p
            className="font-sub text-lg md:text-xl text-brand-black/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Getting started with TrustPoint is straightforward. Here&apos;s how
            we work with you from first contact to final outcome.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting horizontal line (desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[12%] right-[12%] h-[2px] bg-brand-divider">
            <div
              ref={lineRef}
              className="absolute inset-0 bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold h-full"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => { stepsRef.current[i] = el; }}
              >
                <motion.div
                  className="relative bg-white rounded-xl p-6 pt-8 text-center border border-brand-divider"
                  whileInView={{
                    boxShadow: [
                      "0 0 0 rgba(184, 150, 12, 0)",
                      "0 4px 20px rgba(184, 150, 12, 0.1)",
                    ],
                  }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center">
                    <span className="font-body text-sm font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="flex justify-center mb-4 mt-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-brand-black mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-brand-black/60 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
