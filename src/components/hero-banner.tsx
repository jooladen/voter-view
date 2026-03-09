"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HERO, STATS } from "@/data/landing-content";
import { HEADER_HEIGHT, EASE_CURVE } from "@/lib/constants";
import TextReveal from "./text-reveal";
import ScrollReveal from "./scroll-reveal";
import MagneticButton from "./magnetic-button";
import FloatingOrbs from "./floating-orbs";

function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function HeroBanner() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
    >
      <FloatingOrbs />

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center">
        {/* Badge */}
        <ScrollReveal delay={0.1}>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: EASE_CURVE }}
            className="mb-6 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-indigo-300 uppercase backdrop-blur-sm"
          >
            {HERO.badge}
          </motion.span>
        </ScrollReveal>

        {/* Headline */}
        <div className="mb-6">
          {HERO.headline.split("\n").map((line, i) => (
            <TextReveal
              key={i}
              text={line}
              className="gradient-text text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
              staggerDelay={0.04}
            />
          ))}
        </div>

        {/* Subtext */}
        <ScrollReveal delay={0.6}>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {HERO.subtext}
          </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal delay={0.8}>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <MagneticButton
              onClick={() => scrollToSection("#features")}
              className="glow-hover inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-indigo-500"
            >
              {HERO.cta1}
              <span aria-hidden="true">&rarr;</span>
            </MagneticButton>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/10"
            >
              데모 보기
            </Link>
            <MagneticButton
              onClick={() => scrollToSection("#contact")}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-transparent px-8 py-3.5 text-sm font-semibold text-indigo-300 transition-all duration-300 hover:scale-105 hover:border-indigo-500/60 hover:text-white"
            >
              {HERO.cta2}
            </MagneticButton>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={1}>
          <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.1 + i * 0.1, ease: EASE_CURVE }}
                className="text-center"
              >
                <p className="text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-slate-600 uppercase">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-slate-600 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
