"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/cn";

type Mode = "enter" | "exit" | "through";

type Props = {
  children: ReactNode;
  className?: string;
  /** "enter" — lift toward camera as it enters viewport.
   *  "exit"  — recede / scale down as it leaves toward the top.
   *  "through" — both: enter from below, exit to the top. */
  mode?: Mode;
  rotate?: number; // degrees rotateX at the start/end
  translateZ?: number; // px
  scaleMin?: number;
  blurMax?: number; // px
  perspective?: number; // px
  origin?: string;
};

/**
 * Scroll-driven 3D wrapper. Wraps any element with a perspective container
 * and applies rotateX / translateZ / scale / blur tied to scroll progress.
 * Respects prefers-reduced-motion via the underlying Framer hooks (no animation
 * past the spring smoothing).
 */
export default function Scroll3D({
  children,
  className,
  mode = "enter",
  rotate = 14,
  translateZ = 80,
  scaleMin = 0.92,
  blurMax = 4,
  perspective = 1200,
  origin = "50% 50%",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset:
      mode === "exit"
        ? ["start start", "end start"]
        : mode === "enter"
          ? ["start end", "start 30%"]
          : ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 26,
    mass: 0.5,
  });

  // Output ramps
  const rotateRange = mode === "exit" ? [0, -rotate] : [rotate, 0];
  const zRange =
    mode === "exit" ? [0, -translateZ] : [-translateZ, 0];
  const scaleRange =
    mode === "exit" ? [1, scaleMin] : [scaleMin, 1];
  const blurRange =
    mode === "exit" ? [0, blurMax] : [blurMax, 0];
  const opacityRange =
    mode === "exit" ? [1, 0.2] : [0.4, 1];

  // For "through" we map a 0..1..0 curve manually
  const rotateX = useTransform(
    smooth,
    mode === "through" ? [0, 0.5, 1] : [0, 1],
    mode === "through" ? [rotate, 0, -rotate] : rotateRange
  );
  const z = useTransform(
    smooth,
    mode === "through" ? [0, 0.5, 1] : [0, 1],
    mode === "through" ? [-translateZ, 0, -translateZ] : zRange
  );
  const scale = useTransform(
    smooth,
    mode === "through" ? [0, 0.5, 1] : [0, 1],
    mode === "through" ? [scaleMin, 1, scaleMin] : scaleRange
  );
  const blurPx = useTransform(
    smooth,
    mode === "through" ? [0, 0.5, 1] : [0, 1],
    mode === "through" ? [blurMax, 0, blurMax] : blurRange
  );
  const opacity = useTransform(
    smooth,
    mode === "through" ? [0, 0.5, 1] : [0, 1],
    mode === "through" ? [0.3, 1, 0.3] : opacityRange
  );

  const filter = useTransform(blurPx, (b) => `blur(${b}px)`);

  return (
    <div
      ref={ref}
      className={cn("[transform-style:preserve-3d]", className)}
      style={{ perspective: `${perspective}px` }}
    >
      <motion.div
        style={{
          rotateX,
          z,
          scale,
          opacity,
          filter,
          transformOrigin: origin,
          transformStyle: "preserve-3d",
          willChange: "transform, filter, opacity",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
