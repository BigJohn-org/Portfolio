"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import Reveal from "@/components/motion/Reveal";
import Marquee from "@/components/motion/Marquee";
import Tag from "@/components/ui/Tag";

const stats = [
  { value: "75", label: "repositories" },
  { value: "7", label: "original Stellar projects" },
  { value: "4", label: "languages shipped" },
  { value: "2026", label: "active year" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden py-32 md:py-48">
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full grid-bg opacity-60"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-ink to-transparent" />

      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow mb-8">
            <span className="text-accent">002 — </span>About
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <h2 className="font-sans text-display-xl font-medium tracking-tightest text-balance">
                I build the rails the financial system{" "}
                <span className="display-serif font-normal text-bone/90">
                  forgot to lay.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 space-y-6 max-w-xl text-bone/75 leading-relaxed">
              <p>{portfolioData.personal.bio}</p>
              <p>{portfolioData.personal.subBio}</p>
            </Reveal>

            <Reveal delay={0.2} className="mt-12 flex flex-wrap gap-2">
              <Tag tone="signal">Rust · Soroban</Tag>
              <Tag tone="bone">Next.js · Edge</Tag>
              <Tag tone="accent">Stellar Network</Tag>
              <Tag tone="ghost">Go · Python · Java</Tag>
            </Reveal>
          </div>

          {/* Philosophy stack */}
          <div className="space-y-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/[0.02]">
            {portfolioData.philosophy.map((p, i) => (
              <Reveal key={p.heading} delay={i * 0.08}>
                <div className="group relative bg-ink p-7 transition-colors duration-600 ease-glide hover:bg-bone/[0.03]">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-2xl italic text-bone">
                      {p.heading}
                    </h3>
                  </div>
                  <p className="mt-4 max-w-md text-bone/65 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div className="hairline mt-24 pt-10">
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div>
                  <p className="font-sans text-5xl font-medium tracking-tightest text-bone md:text-6xl">
                    {s.value}
                  </p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-steel">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Skills marquee */}
        <div className="mt-24">
          <Reveal className="mb-8">
            <p className="eyebrow">// stack — what I reach for</p>
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
                        ? "rgba(239,236,228,0.55)"
                        : "rgba(239,236,228,0.3)",
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
