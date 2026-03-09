"use client";

import ScrollReveal from "./scroll-reveal";

const FOOTER_LINKS = [
  { label: "서비스", href: "#features" },
  { label: "활용 분야", href: "#use-cases" },
  { label: "갤러리", href: "#gallery" },
  { label: "문의하기", href: "#contact" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950 py-12">
      <ScrollReveal>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between">
          <div>
            <p className="text-lg font-bold tracking-tight">
              <span className="gradient-text">Voter</span>
              <span className="text-slate-400">View</span>
            </p>
            <p className="mt-1 text-xs text-slate-600">
              모든 리더의 브랜딩 파트너
            </p>
          </div>

          <nav>
            <ul className="flex gap-6">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-slate-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-xs text-slate-700">
            &copy; {new Date().getFullYear()} VoterView. All rights reserved.
          </p>
        </div>
      </ScrollReveal>
    </footer>
  );
}
