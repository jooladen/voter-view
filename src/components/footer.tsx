"use client";

import { candidate } from "@/data/candidate";
import ScrollReveal from "./scroll-reveal";

const SOCIAL_ICONS: Record<string, string> = {
  instagram: "📷",
  facebook: "📘",
  youtube: "🎬",
  twitter: "🐦",
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 py-12 text-slate-300">
      <ScrollReveal>
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">연락처</h4>
            <p className="mb-2">
              <span className="text-slate-400">이메일: </span>
              <a
                href={`mailto:${candidate.email}`}
                className="transition-colors hover:text-indigo-400"
              >
                {candidate.email}
              </a>
            </p>
            <p>
              <span className="text-slate-400">전화: </span>
              <a
                href={`tel:${candidate.phone}`}
                className="transition-colors hover:text-indigo-400"
              >
                {candidate.phone}
              </a>
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold text-white">SNS</h4>
            <div className="flex gap-4">
              {candidate.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl transition-opacity hover:opacity-70"
                  aria-label={link.label}
                >
                  {SOCIAL_ICONS[link.platform] ?? "🔗"}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-end">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} {candidate.name}. All rights
              reserved.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
