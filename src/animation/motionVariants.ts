import { Variants } from "framer-motion";

export const fadeInSlow: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

/* 🔥 NUEVAS VARIANTES PREMIUM */

export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
    clipPath: "inset(0 100% 0 0)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const lineGrow: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

// animation/motionVariants.ts
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const parallaxImage = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const sectionReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};
