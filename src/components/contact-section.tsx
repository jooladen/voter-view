"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT } from "@/data/landing-content";
import ScrollReveal from "./scroll-reveal";

const WEB3FORMS_KEY = "a35bf664-a98a-4483-bb90-a35296a7c153";

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const INITIAL_FORM: FormData = { name: "", email: "", company: "", message: "" };

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `[VoterView] ${formData.name}님의 문의`,
          from_name: formData.name,
          ...formData,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData(INITIAL_FORM);
      }
    } catch {
      // Network error — user can retry
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none backdrop-blur-sm transition-all duration-300 focus:border-indigo-500/50 focus:bg-white/[0.06] focus:ring-2 focus:ring-indigo-500/20";

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-24">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/8 blur-[120px]" />

      <div className="relative mx-auto max-w-2xl px-4">
        <ScrollReveal>
          <p className="mb-3 text-center text-sm font-semibold tracking-widest text-indigo-400 uppercase">
            Contact
          </p>
          <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">
            {CONTACT.heading}
          </h2>
          <p className="mx-auto mb-12 max-w-md text-center text-slate-500">
            {CONTACT.subtext}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-10 text-center backdrop-blur-sm"
              >
                <div className="mb-4 text-5xl">&#10003;</div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {CONTACT.successTitle}
                </h3>
                <p className="mb-6 text-slate-400">{CONTACT.successMessage}</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="rounded-full border border-white/20 px-6 py-2 text-sm text-white transition-colors hover:bg-white/10"
                >
                  추가 문의하기
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm sm:p-10"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-medium text-slate-400"
                    >
                      이름 *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="홍길동"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-medium text-slate-400"
                    >
                      이메일 *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="contact@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-1.5 block text-xs font-medium text-slate-400"
                  >
                    소속/단체
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="회사명 또는 단체명"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-medium text-slate-400"
                  >
                    문의 내용 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="프로젝트에 대해 간략히 알려주세요."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="glow-hover w-full rounded-xl bg-indigo-600 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {submitting ? "전송 중..." : "문의 보내기"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </ScrollReveal>
      </div>
    </section>
  );
}
