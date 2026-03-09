"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SPRING_CONFIG = { damping: 25, stiffness: 250, mass: 0.5 };
const HOVER_SPRING = { type: "spring" as const, stiffness: 300, damping: 20 };
const OUTER_SIZE = 40;
const INNER_SIZE = 8;
const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, textarea, select";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, SPRING_CONFIG);
  const springY = useSpring(cursorY, SPRING_CONFIG);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!hasPointer || prefersReduced) return;

    setVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE_SELECTOR)) {
        setHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE_SELECTOR)) {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  const outerScale = hovered ? 1.5 : 1;
  const innerScale = hovered ? 0 : 1;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border-2 border-white mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          width: OUTER_SIZE,
          height: OUTER_SIZE,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ scale: outerScale }}
        transition={HOVER_SPRING}
      />
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-white mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          width: INNER_SIZE,
          height: INNER_SIZE,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ scale: innerScale }}
        transition={HOVER_SPRING}
      />
    </>
  );
}
