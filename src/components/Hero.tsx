"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap-config";
import { splitTextIntoSpans } from "@/lib/split-text";

const WHATSAPP_URL = "https://wa.me/16029184012";
const WHATSAPP_AUTO =
  "https://wa.me/16029184012?text=Welcome%20to%20TrustPoint%20Consulting.%20How%20can%20we%20assist%20you%20today%3F";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(logoRef.current, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      });

      if (headlineRef.current) {
        const words = splitTextIntoSpans(headlineRef.current, "words");
        tl.from(
          words,
          {
            y: 80,
            opacity: 0,
            stagger: 0.06,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }

      tl.from(
        lineRef.current,
        {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.8,
          ease: "power2.inOut",
        },
        "-=0.3"
      );

      tl.from(
        subRef.current,
        { y: 30, opacity: 0, duration: 0.6 },
        "-=0.3"
      );

      tl.from(
        ctaRef.current,
        { y: 20, opacity: 0, duration: 0.5 },
        "-=0.2"
      );

      if (particlesRef.current) {
        const particles = particlesRef.current.children;
        Array.from(particles).forEach((particle) => {
          gsap.set(particle, {
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 20,
            opacity: Math.random() * 0.3 + 0.1,
          });
          gsap.to(particle, {
            y: -20,
            duration: Math.random() * 8 + 6,
            repeat: -1,
            ease: "none",
            delay: Math.random() * 5,
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, #0A0A0A 60%)",
      }}
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 60" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
              <path d="M 0 0 L 60 60" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gold particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-brand-gold"
            style={{ opacity: 0 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div ref={logoRef} className="mb-4 inline-block">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src="/consulting-logo.png"
              alt="TrustPoint Consulting"
              width={200}
              height={100}
              className="h-20 md:h-24 w-auto object-contain mx-auto"
              priority
            />
          </motion.div>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-cream leading-tight mb-4"
        >
          Trusted Guidance. Complete Solutions.
        </h1>

        {/* Gold line */}
        <div className="flex justify-center mb-4">
          <div
            ref={lineRef}
            className="w-24 h-[2px] bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-light"
          />
        </div>

        {/* Sub-headline */}
        <p
          ref={subRef}
          className="font-body text-base sm:text-lg md:text-xl text-brand-cream/70 leading-relaxed max-w-2xl mx-auto mb-8"
        >
          Strategic consulting across immigration, business, compliance, and
          documentation&mdash;delivered with precision, confidentiality, and results.
        </p>

        {/* 3 CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden bg-brand-gold text-brand-black font-body font-semibold px-8 py-3.5 rounded-full text-base"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 12px 32px rgba(201, 168, 76, 0.4)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">Book a Consultation</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.a>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-brand-gold text-brand-gold font-body font-semibold px-8 py-3.5 rounded-full text-base"
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(201, 168, 76, 0.1)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            Start Your Case
          </motion.a>

          <motion.a
            href={WHATSAPP_AUTO}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white font-body font-semibold px-8 py-3.5 rounded-full text-base"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 12px 32px rgba(37, 211, 102, 0.35)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat With Us
          </motion.a>
        </div>
      </div>

    </section>
  );
}
