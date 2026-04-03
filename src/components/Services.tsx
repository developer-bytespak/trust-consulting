"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";
import { splitTextIntoSpans } from "@/lib/split-text";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
        <circle cx="12" cy="12" r="10" stroke="#B8960C" strokeWidth="1.5" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#B8960C" strokeWidth="1.5" />
        <path d="M12 8l2 2-2 2" stroke="#B8960C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Immigration Services",
    description:
      "Expert visa and citizenship assistance for individuals and families. We guide you through every application, petition, and interview process with precision and care.",
    tags: ["Visa Applications", "Citizenship", "Green Card"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="#B8960C" strokeWidth="1.5" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="#B8960C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 12v3" stroke="#B8960C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Business Services",
    description:
      "From LLC formation to business consulting, we help entrepreneurs launch, structure, and grow their businesses the right way from day one.",
    tags: ["LLC Formation", "EIN Registration", "Business Consulting"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
        <path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 0 0 8 11a4 4 0 1 1 8 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0 0 15.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 0 0 8 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" stroke="#B8960C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Fingerprinting Services",
    description:
      "Certified federal and state fingerprinting for background checks, employment clearances, licensing, and immigration requirements.",
    tags: ["Federal", "State", "Background Checks"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#B8960C" strokeWidth="1.5" />
        <path d="M8 14l2-6h4l2 6M9 12h6" stroke="#B8960C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Insurance & Taxes",
    description:
      "Comprehensive auto and business insurance solutions alongside expert tax filing services — all under one roof for your convenience.",
    tags: ["Auto Insurance", "Business Insurance", "Tax Filing"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#B8960C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2v6h6" stroke="#B8960C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="15" r="3" stroke="#B8960C" strokeWidth="1.5" />
      </svg>
    ),
    title: "Notary Services",
    description:
      "Professional document notarization for legal, business, and personal documents. Fast, reliable, and legally certified.",
    tags: ["Document Notarization", "Legal Forms", "Certifications"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#B8960C" strokeWidth="1.5" />
        <path d="M9 12l2 2 4-4" stroke="#B8960C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Apostille Certification",
    description:
      "Official state, federal, and court document certifications accepted internationally. We handle the entire authentication process for you.",
    tags: ["State Certifications", "Federal", "International Documents"],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading split text
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

      // Gold underline
      gsap.from(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.8,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 85%",
        },
      });

      // Cards batch animation
      ScrollTrigger.batch(".service-card", {
        start: "top 85%",
        onEnter: (elements) => {
          gsap.from(elements, {
            y: 60,
            opacity: 0,
            stagger: 0.1,
            duration: 0.7,
            ease: "power3.out",
          });
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section-y section-padding bg-white"
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
            What We Do
          </motion.span>

          <h2
            ref={headingRef}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black leading-tight mb-4"
          >
            Comprehensive Services Tailored to Your Needs
          </h2>

          <div className="flex justify-center mb-6">
            <div
              ref={lineRef}
              className="w-20 h-[2px] bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-light"
            />
          </div>

          <motion.p
            className="font-sub text-lg md:text-xl text-brand-black/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            From immigration guidance to business formation, we provide expert
            support across every area that matters to you and your future.
          </motion.p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="service-card group relative bg-white border border-brand-divider rounded-xl p-8 cursor-pointer"
              style={{ borderTopWidth: "3px", borderTopColor: "#B8960C" }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(184, 150, 12, 0.12)",
                borderTopColor: "#D4AF37",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Icon */}
              <motion.div
                className="mb-5"
                whileHover={{ scale: 1.15, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-black mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body text-base md:text-lg text-brand-black/60 leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block font-body text-xs tracking-widest uppercase text-brand-gold bg-brand-gold/8 px-3 py-1.5 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Learn More Link */}
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-1 font-body text-base text-brand-gold font-semibold"
                whileHover="hover"
              >
                Learn More
                <motion.span
                  variants={{ hover: { x: 6 } }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
