"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap-config";
import { splitTextIntoSpans } from "@/lib/split-text";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Logo entrance
      tl.from(logoRef.current, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      });

      // Headline split text animation
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

      // Gold line draw
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

      // Sub-headline
      tl.from(
        subRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.3"
      );

      // CTA buttons
      tl.from(
        ctaRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.2"
      );

      // Scroll indicator
      tl.from(
        scrollRef.current,
        {
          opacity: 0,
          duration: 0.4,
        },
        "-=0.1"
      );

      // Infinite scroll bounce
      gsap.to(scrollRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: "power1.inOut",
      });

      // Particles
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
    >
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 60"
                stroke="#B8960C"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M 0 0 L 60 60"
                stroke="#B8960C"
                strokeWidth="0.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating gold particles */}
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
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-black leading-tight mb-4"
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
          className="font-sub text-base sm:text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-2xl mx-auto mb-6"
        >
          Your all-in-one consulting partner for Immigration, Business, Legal, and
          Financial Services — helping individuals and businesses navigate every
          step with confidence.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <motion.a
            href="#contact"
            className="relative overflow-hidden bg-brand-gold text-white font-body font-semibold px-8 py-3.5 rounded-full text-base"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 12px 32px rgba(184, 150, 12, 0.4)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">Schedule a Consultation</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.a>

          <motion.a
            href="#services"
            className="border-2 border-brand-gold text-brand-gold font-body font-semibold px-8 py-3.5 rounded-full text-base"
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(184, 150, 12, 0.08)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Services
          </motion.a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-body text-brand-black/40 tracking-widest uppercase">
          Scroll to explore
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-brand-gold"
        >
          <path
            d="M10 4 L10 14 M5 10 L10 15 L15 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
