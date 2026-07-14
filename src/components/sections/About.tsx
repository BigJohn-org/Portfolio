"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import { media } from "@/data/media";
import Reveal from "@/components/motion/Reveal";
import Scroll3D from "@/components/motion/Scroll3D";
import Tag from "@/components/ui/Tag";
import Cinematic from "@/components/ui/Cinematic";
import EnergyStat from "@/components/ui/EnergyStat";

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
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-ink/60 to-transparent" />

      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow mb-8">
            <span className="text-accent">002 — </span>The laboratory
          </p>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <h2 className="font-sans text-display-xl font-medium tracking-tightest text-balance">
                Engineering{" "}
                <span className="display-serif font-normal aurora-text">
                  financial infrastructure
                </span>{" "}
                for everyday Nigerians.
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 space-y-6 max-w-xl text-bone/75 leading-relaxed">
              <p>{portfolioData.personal.bio}</p>
              <p>{portfolioData.personal.subBio}</p>
            </Reveal>

            <Reveal delay={0.2} className="mt-12 flex flex-wrap gap-2">
              <Tag tone="accent">Go · Python · TypeScript</Tag>
              <Tag tone="signal">Rust · Soroban · Stellar</Tag>
              <Tag tone="bone">FastAPI · NestJS · Spring Boot</Tag>
              <Tag tone="ghost">Fintech · Payments · Healthtech</Tag>
            </Reveal>
          </div>

          {/* Holographic portrait plate with 3D scroll-in */}
          <Scroll3D mode="enter" rotate={12} translateZ={120} scaleMin={0.94}>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="relative overflow-hidden rounded-2xl scanlines">
                <Cinematic
                  src={media.about.src}
                  kind={media.about.kind}
                  alt={media.about.alt}
                  tone={media.about.tone}
                  aspect={media.about.aspect}
                  parallax={media.about.parallax}
                  caption={media.about.caption}
                />
              </div>
              {/* Specimen labels */}
              <div className="absolute -top-3 left-4 inline-flex items-center gap-2 rounded-full glass-strong px-3 py-1">
                <span className="size-1.5 rounded-full bg-accent" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone/80">
                  ⌘ subject · I.J.A
                </span>
              </div>
              <div className="absolute -bottom-3 right-4 inline-flex items-center gap-2 rounded-full glass-strong px-3 py-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone/80">
                  specimen · lagos node
                </span>
              </div>
            </div>
          </Scroll3D>
        </div>

        {/* Philosophy — full-width 3-column row */}
        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-accent/10 bg-accent/10 md:grid-cols-3">
          {portfolioData.philosophy.map((p, i) => (
            <Reveal key={p.heading} delay={i * 0.08}>
              <div className="group relative h-full bg-ink p-7 transition-colors duration-600 ease-glide hover:bg-accent/[0.03]">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl italic text-bone">
                    {p.heading}
                  </h3>
                </div>
                <p className="mt-4 text-bone/65 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* B-side frame — engineer at the rig */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:mt-24 md:grid-cols-[1fr_1.4fr] md:items-center md:gap-14">
          <Scroll3D mode="enter" rotate={10} translateZ={100} scaleMin={0.94}>
            <div className="relative mx-auto w-full max-w-md md:max-w-none">
              <div className="relative overflow-hidden rounded-2xl scanlines">
                <Cinematic
                  src={media.workspace.src}
                  kind={media.workspace.kind}
                  alt={media.workspace.alt}
                  tone={media.workspace.tone}
                  aspect={media.workspace.aspect}
                  parallax={media.workspace.parallax}
                  caption={media.workspace.caption}
                  grainOpacity={0.32}
                />
              </div>
              <div className="absolute -top-3 right-4 inline-flex items-center gap-2 rounded-full glass-strong px-3 py-1">
                <span className="size-1.5 rounded-full bg-signal" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone/80">
                  B-side · in the field
                </span>
              </div>
            </div>
          </Scroll3D>
          <div>
            <Reveal>
              <p className="eyebrow mb-5">// from the field</p>
            </Reveal>
            <Reveal>
              <h3 className="font-sans text-display-md font-medium tracking-tightest text-bone text-balance">
                Most of the work{" "}
                <span className="display-serif font-normal text-accent">
                  happens here.
                </span>
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-bone/65 leading-relaxed">
                Lagos cafés, late nights, headphones on — most of what shipped
                this year was written somewhere that looked like this. Quiet
                work, steady commits, the boring middle.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Energy stats strip */}
        <div className="hairline mt-24 pt-10">
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {portfolioData.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <EnergyStat
                  value={s.value}
                  suffix={s.suffix}
                  label={s.label}
                  sub={s.sub}
                  delay={i * 0.15}
                />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Personal row: quote + interests + now */}
        <div className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Quote */}
          <Reveal className="md:col-span-5">
            <figure className="glass-strong relative h-full rounded-2xl p-8">
              <span
                aria-hidden
                className="absolute left-5 top-2 font-serif text-7xl italic leading-none text-accent/40"
              >
                &ldquo;
              </span>
              <blockquote className="relative font-serif text-2xl italic leading-snug text-bone md:text-3xl">
                {portfolioData.quote.text}
              </blockquote>
              <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-steel">
                — {portfolioData.quote.author} · a quote I keep returning to
              </figcaption>
            </figure>
          </Reveal>

          {/* Interests */}
          <Reveal delay={0.1} className="md:col-span-4">
            <div className="h-full rounded-2xl border border-accent/10 bg-accent/[0.02] p-8">
              <p className="eyebrow mb-5">// outside the editor</p>
              <ul className="space-y-4">
                {portfolioData.interests.map((i) => (
                  <li key={i.label}>
                    <p className="font-serif text-xl italic text-bone">
                      {i.label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-bone/60">
                      {i.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Now */}
          <Reveal delay={0.18} className="md:col-span-3">
            <div className="flex h-full flex-col rounded-2xl border border-accent/10 bg-accent/[0.02] p-8">
              <div className="mb-5 flex items-center gap-2">
                <span className="relative inline-flex size-2">
                  <span className="absolute inset-0 rounded-full bg-aurora" />
                  <span className="absolute inset-0 animate-ping rounded-full bg-aurora/60" />
                </span>
                <p className="eyebrow">// now</p>
              </div>
              <ul className="space-y-3 text-sm text-bone/75">
                {portfolioData.nowFocus.map((n) => (
                  <li key={n} className="flex items-start gap-2 leading-snug">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
