"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { journey, type Milestone } from "@/data/experience";
import { media } from "@/data/media";
import Reveal from "@/components/motion/Reveal";
import Scroll3D from "@/components/motion/Scroll3D";
import Cinematic from "@/components/ui/Cinematic";
import { cn } from "@/lib/cn";

const kindLabel: Record<Milestone["kind"], string> = {
  education: "Education",
  work: "Work",
  build: "Build",
  milestone: "Milestone",
};

const kindAccent: Record<Milestone["kind"], string> = {
  education: "text-signal border-signal/40",
  work: "text-accent border-accent/40",
  build: "text-aurora border-aurora/40",
  milestone: "text-magenta border-magenta/40",
};

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 30%", "end 70%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="relative py-32 md:py-48">
      <div className="container-editorial">
        <div className="mb-20 max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-6">
              <span className="text-accent">006 — </span>The railway of memories
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-sans text-display-xl font-medium tracking-tightest text-balance">
              Every station,{" "}
              <span className="display-serif font-normal aurora-text">
                a milestone.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-bone/65 leading-relaxed">
              Ride the line — from the self-taught foundation, through the
              Semicolon Africa residency and a client-facing internship, to
              open-source contributions across the Stellar ecosystem. The light
              follows you as you scroll.
            </p>
          </Reveal>
        </div>

        {/* Cinematic frame between intro + chronology */}
        <div className="mb-20">
          <Scroll3D mode="enter" rotate={10} translateZ={100} scaleMin={0.94}>
            <div className="relative mx-auto max-w-4xl">
              <Cinematic
                src={media.journey.src}
                kind={media.journey.kind}
                alt={media.journey.alt}
                tone={media.journey.tone}
                aspect={media.journey.aspect}
                parallax={media.journey.parallax}
                rounded="rounded-3xl"
                caption={media.journey.caption}
                grainOpacity={0.3}
              />
              <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full glass-strong px-3 py-1.5">
                <span className="size-1.5 rounded-full bg-signal" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone">
                  field · 2026 · Lagos
                </span>
              </div>
            </div>
          </Scroll3D>
        </div>

        <div ref={ref} className="relative pl-6 md:pl-12">
          {/* Railway track */}
          <div className="absolute bottom-0 left-1 top-0 w-px bg-accent/10 md:left-3" />
          <motion.div
            style={{ height: lineHeight, boxShadow: "0 0 12px rgba(0,229,255,0.5)" }}
            className="absolute left-1 top-0 w-px origin-top bg-gradient-to-b from-accent via-signal to-transparent md:left-3"
          />

          <div className="space-y-16 md:space-y-24">
            {journey.map((m, i) => (
              <MilestoneRow key={i} milestone={m} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MilestoneRow({
  milestone,
  index,
}: {
  milestone: Milestone;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.04}>
      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr] md:gap-12">
        {/* Station node */}
        <div className="absolute -left-6 top-1.5 flex size-3 items-center justify-center md:-left-12">
          <span className="size-3 rounded-full border border-accent/60 bg-ink shadow-glow-cyan" />
          <span className="absolute size-1.5 rounded-full bg-accent animate-pulse-glow" />
        </div>

        {/* Year column */}
        <div className="md:pt-1">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-steel">
            {milestone.range ?? milestone.year}
          </p>
        </div>

        {/* Content */}
        <div>
          <div
            className={cn(
              "mb-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em]",
              kindAccent[milestone.kind]
            )}
          >
            <span className="size-1 rounded-full bg-current opacity-60" />
            {kindLabel[milestone.kind]}
          </div>

          <h3 className="font-sans text-2xl font-medium tracking-tightest text-bone md:text-3xl">
            {milestone.title}
          </h3>
          <p className="mt-1.5 font-serif text-lg italic text-bone/70">
            {milestone.org}
          </p>
          <p className="mt-4 max-w-2xl text-bone/65 leading-relaxed">
            {milestone.body}
          </p>

          {milestone.highlights && (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {milestone.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-bone/10 bg-bone/[0.02] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-bone/75"
                >
                  {h}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}
