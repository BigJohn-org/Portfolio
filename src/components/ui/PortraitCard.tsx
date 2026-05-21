"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";

/**
 * Editorial portrait badge — small framed portrait with cinematic treatment.
 * Designed to swap in higher-res photos when they arrive without code changes.
 */
export default function PortraitCard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [12, -12]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 6]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <motion.figure
      ref={ref}
      style={{ y }}
      className="group relative isolate flex w-fit items-center gap-4 rounded-2xl border border-bone/10 bg-bone/[0.02] p-2.5 pr-5 backdrop-blur-md"
    >
      {/* Portrait frame */}
      <div className="relative size-16 shrink-0 overflow-hidden rounded-xl ring-1 ring-bone/10 md:size-20">
        <motion.div style={{ filter }} className="absolute inset-0">
          <Image
            src={portfolioData.personal.image}
            alt={portfolioData.personal.fullName}
            fill
            sizes="(min-width: 768px) 80px, 64px"
            className="object-cover saturate-[0.95] transition-transform duration-700 ease-glide group-hover:scale-105"
            priority
          />
        </motion.div>
        {/* Warm color grade */}
        <div
          aria-hidden
          className="absolute inset-0 mix-blend-color"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,91,46,0.18), rgba(92,141,255,0.08))",
          }}
        />
        {/* Inner shadow */}
        <div
          aria-hidden
          className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.45)]"
        />
        {/* Cinematic grain */}
        <div
          aria-hidden
          className="absolute inset-0 mix-blend-overlay opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        {/* Live dot */}
        <span className="absolute right-1.5 top-1.5 inline-flex size-2">
          <span className="absolute inset-0 rounded-full bg-accent" />
          <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />
        </span>
      </div>

      {/* Caption */}
      <figcaption className="min-w-0 leading-tight">
        <p className="font-serif text-lg italic text-bone">
          {portfolioData.personal.name}
        </p>
        <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
          Engineer · Lagos
        </p>
        <p className="mt-1.5 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
          <span className="size-1 rounded-full bg-current" />
          Available
        </p>
      </figcaption>
    </motion.figure>
  );
}
