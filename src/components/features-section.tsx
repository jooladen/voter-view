"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FEATURES } from "@/data/landing-content";
import ScrollReveal from "./scroll-reveal";

const TILT_MAX = 12;

function FeatureCard({
  icon,
  title,
  description,
  index,
}: {
  icon: string;
  title: string;
  description: string;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setRotate({ x: (py - 0.5) * -TILT_MAX, y: (px - 0.5) * TILT_MAX });
    setGlare({ x: px * 100, y: py * 100 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50 });
  };

  return (
    <ScrollReveal delay={0.1 + index * 0.08}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ transformPerspective: 800 }}
        className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-500 hover:border-indigo-500/40 hover:bg-white/[0.06] hover:shadow-[0_8px_40px_rgba(99,102,241,0.15)]"
      >
        {/* Glare */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.08), transparent 60%)`,
          }}
        />
        <div className="relative z-10">
          <div className="mb-5 text-4xl">{icon}</div>
          <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
          <p className="text-sm leading-relaxed text-slate-400">{description}</p>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="relative bg-slate-950 py-24">
      {/* Subtle top gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-indigo-950/30 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <p className="mb-3 text-center text-sm font-semibold tracking-widest text-indigo-400 uppercase">
            Services
          </p>
          <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">
            프리미엄 프로모션 서비스
          </h2>
          <p className="mx-auto mb-16 max-w-xl text-center text-slate-500">
            리더의 브랜드 가치를 극대화하는 6가지 핵심 서비스
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
