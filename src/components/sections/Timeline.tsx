"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { journey, type Milestone } from "@/data/experience";
import Reveal from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

const kindLabel: Record<Milestone["kind"], string> = {
  education: "Education",
  work: "Work",
  build: "Build",
  milestone: "Milestone",
};

const kindAccent: Record<Milestone["kind"], string> = {
  education: "text-signal border-signal/40",
  work: "text-bone border-bone/40",
  build: "text-accent border-accent/40",
  milestone: "text-bone border-bone/40",
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
              <span className="text-accent">005 — </span>Journey
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-sans text-display-xl font-medium tracking-tightest text-balance">
              From learning loops to{" "}
              <span className="display-serif font-normal">
                shipping protocols.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-bone/65 leading-relaxed">
              A short chronology — engineering training, ecosystem contributions, and
              original builds. The timeline reads like a compounding curve, because
              that&apos;s what it is.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative pl-6 md:pl-12">
          {/* Vertical track */}
          <div className="absolute bottom-0 left-1 top-0 w-px bg-bone/10 md:left-3" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1 top-0 w-px origin-top bg-gradient-to-b from-accent via-accent to-transparent md:left-3"
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
        {/* Node dot */}
        <div className="absolute -left-6 top-1.5 flex size-3 items-center justify-center md:-left-12">
          <span className="size-3 rounded-full border border-accent/60 bg-ink" />
          <span className="absolute size-1.5 rounded-full bg-accent" />
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

          {milestone.editable && (
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-accent/80">
              ⚑ editable — update in src/data/experience.ts
            </p>
          )}
        </div>
      </div>
    </Reveal>
  );
}
