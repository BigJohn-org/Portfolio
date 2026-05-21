"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "__intro_played_v1";

export default function IntroSequence() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const played = sessionStorage.getItem(STORAGE_KEY);
    if (played || reduceMotion) return;

    setShow(true);
    document.documentElement.style.overflow = "hidden";

    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem(STORAGE_KEY, "1");
      document.documentElement.style.overflow = "";
    }, 2200);

    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end overflow-hidden bg-ink"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.95, ease: [0.7, 0, 0.3, 1] },
          }}
        >
          {/* Faint grid */}
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

          {/* Subtle radial glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 50%, rgba(255,91,46,0.06), transparent 60%)",
            }}
          />

          {/* Content */}
          <div className="container-editorial relative w-full pb-10 md:pb-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="flex items-center justify-between gap-6"
            >
              <div className="flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-steel">
                <span className="relative inline-flex size-2">
                  <span className="absolute inset-0 rounded-full bg-accent" />
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />
                </span>
                <span>imeobong-john / portfolio</span>
              </div>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-steel">
                Lagos · WAT
              </span>
            </motion.div>

            {/* Word build-in */}
            <div className="mt-8 overflow-hidden md:mt-12">
              <motion.h2
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="font-sans text-display-xl font-medium tracking-tightest text-bone"
              >
                Imeobong John{" "}
                <span className="display-serif font-normal text-bone/70">
                  / portfolio
                </span>
              </motion.h2>
            </div>

            {/* Progress line */}
            <div className="relative mt-10 h-px w-full overflow-hidden bg-bone/10 md:mt-14">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.4, ease: [0.45, 0, 0.55, 1] }}
                className="absolute inset-0 origin-left bg-accent"
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-3 flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.22em] text-steel"
            >
              <span>Loading scene</span>
              <CountUp />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CountUp() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const dur = 1500;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return <span className="tabular-nums">{String(n).padStart(3, "0")} / 100</span>;
}
