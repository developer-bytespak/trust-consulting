import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

export const cardHover = {
  y: -10,
  boxShadow: "0 20px 40px rgba(184, 150, 12, 0.15)",
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

export const buttonTap = {
  scale: 0.97,
};

export const goldUnderlineHover = {
  scaleX: 1,
  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
};

export const linkArrowHover = {
  x: 6,
  transition: { type: "spring", stiffness: 400, damping: 15 },
};
