"use client";

import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { candidate } from "@/data/candidate";
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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
    >
      <FloatingOrbs />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: EASE_CURVE }}
          style={{ y: photoY }}
          className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl shadow-xl md:mx-0"
        >
          <Image
            src={candidate.photo}
            alt={`${candidate.name} 후보 사진`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 384px"
          />
        </motion.div>

        <div className="text-center md:text-left">
          <ScrollReveal delay={0.2}>
            <p className="mb-2 text-sm font-semibold tracking-wider text-indigo-400">
              {candidate.party}
            </p>
          </ScrollReveal>

          <TextReveal
            text={candidate.name}
            className="gradient-text mb-4 text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
            staggerDelay={0.06}
          />

          <ScrollReveal delay={0.5}>
            <p className="mb-8 text-lg text-slate-300 md:text-xl">
              {candidate.slogan}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <MagneticButton
              onClick={() => scrollToSection("#pledges")}
              className="glow-hover inline-block rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
            >
              공약 보기
            </MagneticButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
