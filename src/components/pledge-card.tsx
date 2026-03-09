"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Pledge } from "@/data/pledges";
import ScrollReveal from "./scroll-reveal";

type PledgeCardProps = Pledge & {
  index?: number;
};

const TILT_MAX = 15;

export default function PledgeCard({
  icon,
  category,
  title,
  description,
  index = 0,
}: PledgeCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    setRotate({
      x: (py - 0.5) * -TILT_MAX,
      y: (px - 0.5) * TILT_MAX,
    });
    setGlare({ x: px * 100, y: py * 100 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50 });
  };

  return (
    <ScrollReveal delay={0.1 + index * 0.1}>
      <motion.article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ transformPerspective: 800 }}
        className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-md transition-colors duration-300 hover:border-indigo-500/50 hover:shadow-[0_8px_30px_rgba(99,102,241,0.2)]"
      >
        {/* Glare overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.15), transparent 60%)`,
          }}
        />

        <div className="relative z-10">
          <div className="mb-4 text-4xl">{icon}</div>
          <span className="text-sm font-medium text-indigo-400">
            {category}
          </span>
          <h3 className="mt-1 text-lg font-bold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            {description}
          </p>
        </div>
      </motion.article>
    </ScrollReveal>
  );
}
