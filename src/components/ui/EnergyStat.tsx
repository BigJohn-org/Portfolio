"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * A statistic that charges like an energy cell — the number counts up
 * with an ease-out curve while a charge bar fills beneath it.
 */
export default function EnergyStat({
  value,
  suffix = "",
  label,
  sub,
  delay = 0,
}: {
  value: number;
  suffix?: string;
  label: string;
  sub?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  const [charged, setCharged] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(value);
      setCharged(true);
      return;
    }
    const dur = 1600;
    let raf = 0;
    const startAt = performance.now() + delay * 1000;
    const tick = (t: number) => {
      const p = Math.min(1, Math.max(0, (t - startAt) / dur));
      // ease-out-expo — charges fast, settles slow
      const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setN(Math.round(e * value));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setCharged(true);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, delay]);

  return (
    <div ref={ref} className="group relative">
      <p className="font-sans text-5xl font-medium tracking-tightest text-bone md:text-6xl">
        <span className="tabular-nums">{n}</span>
        <span className="text-accent">{suffix}</span>
      </p>

      {/* Charge bar */}
      <div className="mt-3 h-px w-full max-w-[140px] overflow-hidden rounded-full bg-accent/10">
        <div
          className="h-full rounded-full transition-[width] duration-1200 ease-glide"
          style={{
            width: inView ? "100%" : "0%",
            background: "linear-gradient(90deg, #00E5FF, #6C5CE7)",
            boxShadow: charged ? "0 0 8px rgba(0,229,255,0.7)" : "none",
          }}
        />
      </div>

      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-steel">
        {label}
      </p>
      {sub && (
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-bone/35">
          {sub}
        </p>
      )}
    </div>
  );
}
