"use client";

import { USE_CASES } from "@/data/landing-content";
import ScrollReveal from "./scroll-reveal";

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="relative overflow-hidden bg-slate-900 py-24">
      {/* Background accent */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-violet-600/10 blur-[150px]" />
      <div className="pointer-events-none absolute left-0 bottom-1/4 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <p className="mb-3 text-center text-sm font-semibold tracking-widest text-indigo-400 uppercase">
            Use Cases
          </p>
          <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">
            어떤 분야든, 당신의 무대입니다
          </h2>
          <p className="mx-auto mb-16 max-w-xl text-center text-slate-500">
            정치인만의 전유물이 아닙니다. 리더십이 필요한 모든 곳에서 활용됩니다.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {USE_CASES.map((item, i) => (
            <ScrollReveal key={item.title} delay={0.1 + i * 0.12} variant={i % 2 === 0 ? "fade-left" : "fade-right"}>
              <div className="group relative flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:border-indigo-500/30 hover:bg-white/[0.06] hover:shadow-[0_4px_30px_rgba(99,102,241,0.1)] sm:p-8">
                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-3xl transition-colors duration-300 group-hover:bg-indigo-500/20">
                  {item.icon}
                </div>

                <div>
                  <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">
                    {item.label}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
