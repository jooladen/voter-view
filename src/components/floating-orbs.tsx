"use client";

import { motion } from "framer-motion";

const ORBS = [
  {
    color: "bg-indigo-500/30",
    size: "w-72 h-72",
    duration: 18,
    initialX: "-10%",
    initialY: "-20%",
  },
  {
    color: "bg-violet-500/20",
    size: "w-96 h-96",
    duration: 22,
    initialX: "60%",
    initialY: "10%",
  },
  {
    color: "bg-cyan-400/20",
    size: "w-64 h-64",
    duration: 15,
    initialX: "30%",
    initialY: "60%",
  },
] as const;

export default function FloatingOrbs() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${orb.color} ${orb.size}`}
          style={{ left: orb.initialX, top: orb.initialY }}
          animate={{
            x: [0, 40, -30, 20, 0],
            y: [0, -30, 20, -40, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
