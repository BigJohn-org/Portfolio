"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData, type SkillCore } from "@/data/portfolio";
import Reveal from "@/components/motion/Reveal";
import Marquee from "@/components/motion/Marquee";
import { cn } from "@/lib/cn";

/**
 * The command center — each language is a floating energy core
 * with its ecosystem orbiting around it.
 */
export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-32 md:py-48">
      {/* Ambient glow behind the command center */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(0,229,255,0.05), transparent 65%)",
        }}
      />

      <div className="container-editorial">
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-6">
              <span className="text-accent">003 — </span>Command center
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-sans text-display-xl font-medium tracking-tightest text-balance">
              Six energy cores,{" "}
              <span className="display-serif font-normal aurora-text">
                one system.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-bone/65 leading-relaxed">
              Every core is a language I ship with; everything orbiting it is
              the ecosystem it powers. Hover a core to bring it online.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioData.skillCores.map((core, i) => (
            <Reveal key={core.id} delay={i * 0.07}>
              <CoreCard core={core} index={i} />
            </Reveal>
          ))}
        </div>

        {/* Full stack marquee */}
        <div className="mt-24">
          <Reveal className="mb-8">
            <p className="eyebrow">// full inventory — what I reach for</p>
          </Reveal>
          <Marquee duration={48} pauseOnHover>
            {portfolioData.skills.map((s) => (
              <span
                key={s.name}
                className="inline-flex items-center gap-3 font-serif italic text-3xl md:text-4xl"
                style={{
                  color:
                    s.weight === 3
                      ? "var(--bone)"
                      : s.weight === 2
                        ? "rgba(248,250,252,0.55)"
                        : "rgba(248,250,252,0.3)",
                }}
              >
                <span className="text-accent">✦</span>
                {s.name}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

function CoreCard({ core, index }: { core: SkillCore; index: number }) {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="holo group relative h-full overflow-hidden rounded-2xl p-7 scanlines"
      style={{ transformStyle: "preserve-3d" }}
      data-cursor
    >
      {/* Reactive glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-600"
        style={{
          opacity: active ? 1 : 0.35,
          background: `radial-gradient(70% 55% at 50% 20%, ${core.color}1f, transparent 70%)`,
        }}
      />

      {/* Orbit system */}
      <div className="relative mx-auto flex h-44 w-44 items-center justify-center">
        {/* Orbit track */}
        <div
          className="absolute inset-0 rounded-full border border-dashed transition-colors duration-600"
          style={{ borderColor: active ? `${core.color}55` : `${core.color}22` }}
        />
        {/* Rotating chip ring — chips counter-rotate to stay upright */}
        <div
          className="absolute inset-0"
          style={{
            animation: `orbit ${active ? 10 : 22}s linear infinite`,
            transition: "animation-duration 0.6s",
          }}
        >
          {core.orbit.map((chip, ci) => {
            const angle = (ci / core.orbit.length) * 360;
            return (
              <div
                key={chip}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `rotate(${angle}deg) translateY(-88px) rotate(-${angle}deg)`,
                }}
              >
                <span
                  className="block whitespace-nowrap rounded-full border px-2 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.12em] backdrop-blur-sm"
                  style={{
                    animation: `orbit ${active ? 10 : 22}s linear infinite reverse`,
                    borderColor: `${core.color}40`,
                    color: core.color,
                    background: "rgba(5,5,5,0.55)",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {chip}
                </span>
              </div>
            );
          })}
        </div>

        {/* The core itself */}
        <div
          className={cn(
            "relative flex size-24 items-center justify-center rounded-full transition-shadow duration-600",
            active && "animate-pulse-glow"
          )}
          style={{
            background: `radial-gradient(circle at 35% 30%, ${core.color}30, rgba(5,5,5,0.7) 70%)`,
            border: `1px solid ${core.color}66`,
            boxShadow: active
              ? `0 0 32px -4px ${core.color}88, inset 0 0 24px -8px ${core.color}66`
              : `0 0 18px -8px ${core.color}55, inset 0 0 16px -10px ${core.color}44`,
          }}
        >
          <CoreVisual visual={core.visual} color={core.color} />
        </div>
      </div>

      {/* Readout */}
      <div className="relative mt-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-sans text-2xl font-medium tracking-tightest text-bone">
            {core.name}
          </h3>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em]" style={{ color: core.color }}>
            core {String(index + 1).padStart(2, "0")} · {active ? "online" : "idle"}
          </span>
        </div>
        <p className="mt-1 font-serif text-lg italic text-bone/70">{core.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-bone/60">{core.detail}</p>
      </div>
    </motion.div>
  );
}

/** Distinct animated glyph per core type. */
function CoreVisual({ visual, color }: { visual: SkillCore["visual"]; color: string }) {
  const stroke = { stroke: color, fill: "none", strokeWidth: 1.4 } as const;

  switch (visual) {
    case "ring": // fast-moving energy ring
      return (
        <svg viewBox="0 0 48 48" className="size-12 animate-spin-slow" style={{ animationDuration: "6s" }}>
          <circle cx="24" cy="24" r="16" {...stroke} opacity="0.3" />
          <path d="M 24 8 A 16 16 0 0 1 40 24" {...stroke} strokeLinecap="round" />
          <circle cx="40" cy="24" r="2" fill={color} />
        </svg>
      );
    case "neural": // pulsing network
      return (
        <svg viewBox="0 0 48 48" className="size-12">
          <g {...stroke} opacity="0.5">
            <line x1="10" y1="14" x2="24" y2="24" />
            <line x1="10" y1="34" x2="24" y2="24" />
            <line x1="24" y1="24" x2="38" y2="12" />
            <line x1="24" y1="24" x2="38" y2="36" />
            <line x1="10" y1="14" x2="38" y2="12" />
          </g>
          {[[10, 14], [10, 34], [24, 24], [38, 12], [38, 36]].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="2.5" fill={color} className="animate-pulse-glow" style={{ animationDelay: `${i * 0.4}s` }} />
          ))}
        </svg>
      );
    case "cube": // rotating holographic cube
      return (
        <svg viewBox="0 0 48 48" className="size-12 animate-spin-slow" style={{ animationDuration: "12s" }}>
          <path d="M24 6 L40 15 L40 33 L24 42 L8 33 L8 15 Z" {...stroke} />
          <path d="M24 6 L24 24 M24 24 L40 33 M24 24 L8 33" {...stroke} opacity="0.6" />
        </svg>
      );
    case "contract": // sealed contract glyph
      return (
        <svg viewBox="0 0 48 48" className="size-12">
          <path d="M14 8 h16 l6 6 v26 h-22 Z" {...stroke} />
          <path d="M30 8 v6 h6" {...stroke} />
          <line x1="19" y1="22" x2="31" y2="22" {...stroke} opacity="0.7" />
          <line x1="19" y1="28" x2="31" y2="28" {...stroke} opacity="0.7" />
          <circle cx="24" cy="36" r="3" {...stroke} className="animate-pulse-glow" />
        </svg>
      );
    case "stack": // layered architecture
      return (
        <svg viewBox="0 0 48 48" className="size-12">
          {[12, 21, 30].map((y, i) => (
            <rect
              key={y}
              x="10"
              y={y}
              width="28"
              height="6"
              rx="1.5"
              {...stroke}
              className="animate-pulse-glow"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </svg>
      );
    case "sphere": // database sphere
      return (
        <svg viewBox="0 0 48 48" className="size-12">
          <ellipse cx="24" cy="12" rx="14" ry="5" {...stroke} />
          <path d="M10 12 v24 c0 2.8 6.3 5 14 5 s14 -2.2 14 -5 v-24" {...stroke} />
          <path d="M10 24 c0 2.8 6.3 5 14 5 s14 -2.2 14 -5" {...stroke} opacity="0.6" />
        </svg>
      );
  }
}
