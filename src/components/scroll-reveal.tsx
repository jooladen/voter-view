"use client";

import { type ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE_CURVE, REVEAL_MARGIN } from "@/lib/constants";

type RevealVariant = "fade-up" | "fade-left" | "fade-right" | "scale";

type ScrollRevealProps = {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
};

const VARIANTS: Record<RevealVariant, { hidden: Record<string, number>; visible: Record<string, number> }> = {
  "fade-up": {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
};

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.7,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: REVEAL_MARGIN });

  const { hidden, visible } = VARIANTS[variant];

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? visible : hidden}
      transition={{ duration, delay, ease: EASE_CURVE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
