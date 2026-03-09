"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE_CURVE, REVEAL_MARGIN } from "@/lib/constants";

type TextRevealProps = {
  text: string;
  className?: string;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

export default function TextReveal({
  text,
  className,
  staggerDelay = 0.04,
  as: Tag = "h1",
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: REVEAL_MARGIN });

  const chars = text.split("");

  return (
    <div ref={ref}>
      <Tag className={className} aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={`${i}-${char}`}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 0.5,
            delay: i * staggerDelay,
            ease: EASE_CURVE,
          }}
          className="inline-block"
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      </Tag>
    </div>
  );
}
