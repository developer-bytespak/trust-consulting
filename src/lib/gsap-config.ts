"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function registerGSAPPlugins() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({
    ease: "power3.out",
    duration: 0.8,
  });

  ScrollTrigger.defaults({
    start: "top 80%",
    toggleActions: "play none none none",
  });
}

export { gsap, ScrollTrigger };
