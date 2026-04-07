"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";

const WHATSAPP_URL = "https://wa.me/16029184012";
const WHATSAPP_CHAT =
  "https://wa.me/16029184012?text=Welcome%20to%20TrustPoint%20Consulting.%20How%20can%20we%20assist%20you%20today%3F";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
        <circle cx="12" cy="12" r="10" stroke="#C9A84C" strokeWidth="1.5" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#C9A84C" strokeWidth="1.5" />
      </svg>
    ),
    title: "Immigration & Global Mobility",
    bullets: [
      "Visa & Citizenship Assistance",
      "Asylum & Humanitarian Cases",
      "USCIS Filings & Documentation",
    ],
    cta: "Start Your Immigration Process",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="#C9A84C" strokeWidth="1.5" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 12v3" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Business & Corporate Services",
    bullets: [
      "Business Formation (LLC, Corp)",
      "EIN Registration",
      "Business Consulting & Compliance",
    ],
    cta: "Launch Your Business",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
        <path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 0 0 8 11a4 4 0 1 1 8 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0 0 15.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 0 0 8 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Identity & Compliance Services",
    bullets: [
      "Fingerprinting (FBI, Background Checks)",
      "Identity Verification",
      "Compliance Documentation",
    ],
    cta: "Schedule Fingerprinting",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2v6h6" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="15" r="3" stroke="#C9A84C" strokeWidth="1.5" />
      </svg>
    ),
    title: "Legal Support & Documentation",
    bullets: [
      "Notary Services",
      "Apostille (State, Federal, International)",
      "Certified Document Processing",
    ],
    cta: "Process Your Documents",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#C9A84C" strokeWidth="1.5" />
        <path d="M8 14l2-6h4l2 6M9 12h6" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Insurance & Tax Advisory",
    bullets: [
      "Auto & Business Insurance",
      "Tax Filing & Advisory",
      "Financial Compliance Support",
    ],
    cta: "Get Covered / File Taxes",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch(".service-card", {
        start: "top 85%",
        onEnter: (elements) => {
          gsap.from(elements, {
            y: 60,
            opacity: 0,
            stagger: 0.12,
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
            What We Do
          </motion.span>

          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-cream leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our Services
          </motion.h2>

          <div className="flex justify-center mb-6">
            <div className="w-20 h-[2px] bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-light" />
          </div>

          <motion.p
            className="font-body text-lg md:text-xl text-brand-cream/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            From immigration guidance to business formation, we provide expert
            support across every area that matters.
          </motion.p>
        </div>

        {/* Service Cards — 2-3 column grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="service-card group relative bg-[#111111] border border-white/10 rounded-xl p-8 transition-colors duration-300 hover:border-brand-gold/60"
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(201, 168, 76, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Icon */}
              <div className="mb-5">{service.icon}</div>

              {/* Title */}
              <h3 className="font-display text-xl md:text-2xl font-bold text-brand-cream mb-4">
                {service.title}
              </h3>

              {/* Bullet list */}
              <ul className="space-y-2 mb-6">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 font-body text-sm text-brand-cream/60"
                  >
                    <svg viewBox="0 0 20 20" className="w-4 h-4 mt-0.5 flex-shrink-0 fill-brand-gold">
                      <path d="M10 1l2.47 5.01L18 6.97l-4 3.9.94 5.5L10 13.77l-4.94 2.6.94-5.5-4-3.9 5.53-.96L10 1z" />
                    </svg>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-brand-gold text-brand-black font-body font-semibold py-3 rounded-lg text-sm mb-3"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 24px rgba(201, 168, 76, 0.3)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                {service.cta}
              </motion.a>

              {/* Chat link */}
              <a
                href={WHATSAPP_CHAT}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-body text-xs text-brand-gold/80 hover:text-brand-gold transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat about this service
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
