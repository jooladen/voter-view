"use client";

import Image from "next/image";
import { candidate } from "@/data/candidate";
import ScrollReveal from "./scroll-reveal";

export default function ProfileSection() {
  return (
    <section id="profile" className="bg-slate-50 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-white">
            후보자 소개
          </h2>
        </ScrollReveal>

        <div className="grid items-start gap-10 md:grid-cols-[280px_1fr]">
          <ScrollReveal variant="scale">
            <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src={candidate.profilePhoto}
                alt={`${candidate.name} 프로필 사진`}
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.1}>
              <h3 className="mb-1 text-2xl font-bold text-slate-900 dark:text-white">
                {candidate.name}
              </h3>
              <p className="mb-6 text-indigo-600 dark:text-indigo-400">
                {candidate.party}
              </p>
            </ScrollReveal>

            <ul className="space-y-3">
              {candidate.history.map((item, index) => (
                <ScrollReveal key={index} delay={0.15 + index * 0.08}>
                  <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                    {item}
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
