"use client";

import { pledges } from "@/data/pledges";
import PledgeCard from "./pledge-card";
import ScrollReveal from "./scroll-reveal";

export default function PledgeSection() {
  return (
    <section id="pledges" className="bg-slate-900 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            주요 공약
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pledges.map((pledge, index) => (
            <PledgeCard key={pledge.id} {...pledge} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
