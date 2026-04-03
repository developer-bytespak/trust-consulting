"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap-config";
import { splitTextIntoSpans } from "@/lib/split-text";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#B8960C" strokeWidth="1.5" />
      </svg>
    ),
    title: "Experienced Professionals",
    description:
      "Our team brings years of specialized expertise across immigration, legal, financial, and business services.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="#B8960C" strokeWidth="1.5" />
        <path d="M9 22V12h6v10" stroke="#B8960C" strokeWidth="1.5" />
      </svg>
    ),
    title: "All-in-One Solution",
    description:
      "No need to visit multiple offices. Everything you need is available under one roof for your convenience.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#B8960C" strokeWidth="1.5" />
        <path d="M8 10h8M8 14h4" stroke="#B8960C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Bilingual Support",
    description:
      "We proudly serve English and Spanish speaking clients, ensuring clear communication throughout the entire process.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" stroke="#B8960C" strokeWidth="1.5" />
        <path d="M12 6v6l4 2" stroke="#B8960C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Fast Turnaround",
    description:
      "We understand time is critical. Our streamlined processes ensure your documents and applications move as quickly as possible.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="#B8960C" strokeWidth="1.5" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#B8960C" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1" fill="#B8960C" />
      </svg>
    ),
    title: "Confidential & Secure",
    description:
      "Your personal information and documents are handled with the highest level of privacy, security, and discretion.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" stroke="#B8960C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Affordable & Transparent",
    description:
      "No hidden fees, no surprises. We offer competitive pricing with full transparency so you always know what to expect.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

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

      // Cards — staggered scale-up with rotation
      const boxes = gsap.utils.toArray<HTMLElement>(".why-box");
      boxes.forEach((box, i) => {
        gsap.from(box, {
          scale: 0.8,
          opacity: 0,
          rotateY: 15,
          duration: 0.8,
          ease: "back.out(1.4)",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: box,
            start: "top 88%",
          },
        });

        // Gold left border reveal
        const border = box.querySelector(".why-box-accent");
        if (border) {
          gsap.from(border, {
            scaleY: 0,
            transformOrigin: "top",
            duration: 0.5,
            ease: "power2.out",
            delay: i * 0.1 + 0.3,
            scrollTrigger: {
              trigger: box,
              start: "top 88%",
            },
          });
        }
      });

      // Subtle background color shift
      gsap.to(sectionRef.current, {
        backgroundColor: "#FEFDFB",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
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
            Why Us
          </motion.span>

          <h2
            ref={headingRef}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black leading-tight"
          >
            Why Thousands of Clients Trust TrustPoint
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="why-box relative bg-white border border-brand-divider rounded-xl p-8 pl-10 overflow-hidden"
              whileHover={{
                y: -8,
                borderColor: "#B8960C",
                backgroundColor: "#FBF8F0",
                boxShadow: "0 16px 40px rgba(184, 150, 12, 0.12)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Gold left accent bar */}
              <div className="why-box-accent absolute left-0 top-0 bottom-0 w-1 bg-brand-gold rounded-l-xl" />

              <motion.div
                className="mb-5 w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.15, rotate: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {feature.icon}
              </motion.div>

              <h3 className="font-display text-xl font-bold text-brand-black mb-3">
                {feature.title}
              </h3>

              <p className="font-body text-sm text-brand-black/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
