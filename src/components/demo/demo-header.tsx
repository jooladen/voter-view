"use client";

import { useState, useEffect } from "react";
import { candidate } from "@/data/candidate";
import { HEADER_HEIGHT, SCROLL_THRESHOLD } from "@/lib/constants";

const NAV_ITEMS = [
  { label: "소개", href: "#profile" },
  { label: "공약", href: "#pledges" },
  { label: "갤러리", href: "#gallery" },
  { label: "연락처", href: "#contact" },
];

function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function DemoHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/90 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <button
          onClick={() => handleNavClick("#hero")}
          className="text-lg font-bold text-white"
        >
          {candidate.name}
        </button>

        <ul className="hidden gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className="nav-link relative text-sm font-medium text-white transition-colors hover:text-indigo-400"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="border-t border-slate-700 bg-slate-900/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full py-3 text-left text-sm font-medium text-slate-200 transition-colors hover:text-indigo-400"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
