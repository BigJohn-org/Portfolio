"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "__intro_played_v2";
const DURATION = 3400; // total ms before exit begins

type P = {
  x: number;
  y: number;
  tx: number;
  ty: number;
  vx: number;
  vy: number;
  r: number;
  seed: number;
  color: string;
};

const COLORS = ["0,229,255", "248,250,252", "108,92,231", "0,255,163"];

/**
 * Scene 1 — Arrival.
 * Darkness. A single light. Particles assemble into the IJ monogram,
 * it pulses once, a digital wave expands, and on cue the logo explodes
 * into the particles that become the hero.
 */
export default function IntroSequence() {
  const [show, setShow] = useState(false);
  const [pct, setPct] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    }, DURATION);

    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, []);

  // Particle choreography
  useEffect(() => {
    if (!show) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Sample the monogram from an offscreen canvas
    const off = document.createElement("canvas");
    const ow = 480;
    const oh = 260;
    off.width = ow;
    off.height = oh;
    const octx = off.getContext("2d")!;
    octx.fillStyle = "#fff";
    const bodyFont = getComputedStyle(document.body).fontFamily || "system-ui, sans-serif";
    octx.font = `700 190px ${bodyFont}`;
    octx.textAlign = "center";
    octx.textBaseline = "middle";
    octx.fillText("IJ", ow / 2, oh / 2 + 10);
    const img = octx.getImageData(0, 0, ow, oh).data;

    const targets: { x: number; y: number }[] = [];
    const gap = 5;
    for (let y = 0; y < oh; y += gap) {
      for (let x = 0; x < ow; x += gap) {
        if (img[(y * ow + x) * 4 + 3] > 128) {
          targets.push({
            x: w / 2 + (x - ow / 2) * 1.0,
            y: h / 2 + (y - oh / 2) * 1.0,
          });
        }
      }
    }

    const particles: P[] = targets.map((tg) => {
      const ang = Math.random() * Math.PI * 2;
      const dist = Math.max(w, h) * (0.35 + Math.random() * 0.45);
      return {
        x: w / 2 + Math.cos(ang) * dist,
        y: h / 2 + Math.sin(ang) * dist,
        tx: tg.x,
        ty: tg.y,
        vx: 0,
        vy: 0,
        r: Math.random() * 1.4 + 0.7,
        seed: Math.random() * Math.PI * 2,
        color: COLORS[Math.random() < 0.7 ? 0 : Math.floor(Math.random() * COLORS.length)],
      };
    });

    const start = performance.now();
    let raf = 0;
    let exploded = false;

    const tick = (now: number) => {
      const el = now - start;
      ctx.clearRect(0, 0, w, h);

      // progress readout
      const p = Math.min(1, el / (DURATION - 700));
      setPct(Math.floor(p * 100));

      // Phase: assemble (0 → 1800), hold+pulse (1800 → 2600), explode (2600 →)
      const explodeAt = 2600;
      if (el > explodeAt && !exploded) {
        exploded = true;
        for (const pt of particles) {
          const ang = Math.atan2(pt.y - h / 2, pt.x - w / 2) + (Math.random() - 0.5) * 0.8;
          const sp = Math.random() * 16 + 6;
          pt.vx = Math.cos(ang) * sp;
          pt.vy = Math.sin(ang) * sp;
        }
      }

      // Digital wave rings during pulse phase
      if (el > 1900 && el < explodeAt + 500) {
        const ringP = ((el - 1900) % 700) / 700;
        const r = ringP * Math.min(w, h) * 0.42;
        ctx.beginPath();
        ctx.arc(w / 2, h / 2, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0,229,255,${(1 - ringP) * 0.35})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      const pulse = el > 1800 ? 1 + Math.sin((el - 1800) * 0.012) * 0.04 : 1;

      for (const pt of particles) {
        if (exploded) {
          pt.x += pt.vx;
          pt.y += pt.vy;
          pt.vx *= 0.985;
          pt.vy *= 0.985;
        } else {
          // eased assembly with slight swirl
          const k = 0.055 + Math.sin(pt.seed) * 0.01;
          const dx = (pt.tx - w / 2) * pulse + w / 2 - pt.x;
          const dy = (pt.ty - h / 2) * pulse + h / 2 - pt.y;
          pt.vx = pt.vx * 0.82 + dx * k;
          pt.vy = pt.vy * 0.82 + dy * k;
          pt.x += pt.vx;
          pt.y += pt.vy;
        }

        const tw = 0.65 + Math.sin(el * 0.01 + pt.seed * 6) * 0.35;
        const fade = exploded ? Math.max(0, 1 - (el - explodeAt) / 700) : 1;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pt.color},${tw * fade})`;
        ctx.fill();
      }

      // center glow
      const glowA = exploded ? Math.max(0, 0.5 - (el - explodeAt) / 800) : Math.min(0.5, el / 2000);
      const grad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, 320);
      grad.addColorStop(0, `rgba(0,229,255,${glowA * 0.16})`);
      grad.addColorStop(1, "rgba(0,229,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-ink"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.06,
            transition: { duration: 0.8, ease: [0.7, 0, 0.3, 1] },
          }}
        >
          <canvas ref={canvasRef} className="absolute inset-0" />

          {/* Holographic progress ring */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="relative flex size-20 items-center justify-center">
              <svg className="absolute inset-0 -rotate-90" viewBox="0 0 80 80">
                <circle
                  cx="40"
                  cy="40"
                  r="35"
                  fill="none"
                  stroke="rgba(0,229,255,0.12)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="35"
                  fill="none"
                  stroke="rgba(0,229,255,0.9)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray={`${(pct / 100) * 219.9} 219.9`}
                  style={{ filter: "drop-shadow(0 0 6px rgba(0,229,255,0.6))" }}
                />
              </svg>
              <span className="font-mono text-[11px] tabular-nums text-accent">
                {String(pct).padStart(2, "0")}%
              </span>
            </div>
          </div>

          {/* Corner telemetry */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute left-6 top-6 flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-steel md:left-10 md:top-8"
          >
            <span className="relative inline-flex size-2">
              <span className="absolute inset-0 rounded-full bg-accent" />
              <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />
            </span>
            <span>initializing universe</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute right-6 top-6 font-mono text-[10.5px] uppercase tracking-[0.22em] text-steel md:right-10 md:top-8"
          >
            imeobong.john · Lagos · WAT
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
