"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import PortraitCard from "@/components/ui/PortraitCard";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-smoke to-ink" />
  ),
});

export default function Hero() {
  const [rotation, setRotation] = useState(0);
  const taglines = portfolioData.taglines;

  useEffect(() => {
    const i = setInterval(() => setRotation((r) => (r + 1) % taglines.length), 3600);
    return () => clearInterval(i);
  }, [taglines.length]);

  return (
    <section
      id="top"
      className="relative isolate grain min-h-[100svh] overflow-hidden pt-32 md:pt-40"
    >
      <HeroCanvas />

      <div className="container-editorial relative z-10 flex min-h-[calc(100svh-10rem)] flex-col justify-between pb-12">
        {/* Eyebrow + status row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Reveal delay={0.05}>
            <Tag tone="accent">{portfolioData.personal.statusBadge}</Tag>
          </Reveal>
          <Reveal delay={0.1} className="hidden font-mono text-[10.5px] uppercase tracking-[0.22em] text-steel md:block">
            <div className="flex items-center gap-3">
              <span className="size-1 rounded-full bg-accent" />
              <span>{portfolioData.personal.location}</span>
              <span className="text-bone/20">·</span>
              <span>{new Date().toLocaleString("en-US", { timeZone: "Africa/Lagos", hour: "2-digit", minute: "2-digit", hour12: false })} WAT</span>
            </div>
          </Reveal>
        </div>

        {/* Main display */}
        <div className="mt-12 max-w-[1200px]">
          <Reveal delay={0.15}>
            <p className="eyebrow mb-8">
              <span className="text-accent">001 — </span>Software Engineer · Stellar ecosystem · Lagos
            </p>
          </Reveal>

          <h1 className="font-sans text-display-2xl font-medium tracking-tightest text-bone text-balance">
            <SplitText
              text="Full-stack engineer,"
              as="span"
              className="block"
              delay={0.2}
            />
            <SplitText
              text="writing into Stellar."
              as="span"
              className="display-serif block font-normal text-bone/95"
              delay={0.5}
            />
          </h1>

          <Reveal delay={1.1} className="mt-10 grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="text-lg leading-relaxed text-bone/75 text-balance">
              I work across the web (Next.js, React, TypeScript) and backend (Python,
              Go, Java), and lately most of my time goes into the Stellar ecosystem —
              writing Soroban smart contracts in Rust and the small product
              experiments that sit around them.
            </p>

            {/* Rotating tagline */}
            <div className="font-mono text-[12px] uppercase tracking-[0.16em] text-steel">
              <div className="mb-2 flex items-center gap-2">
                <span className="size-1 rounded-full bg-accent" />
                <span>currently</span>
              </div>
              <div className="h-[1.4em] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={rotation}
                    initial={{ y: 22, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -22, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-bone"
                  >
                    {taglines[rotation]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1.3} className="mt-12 flex flex-wrap items-center gap-3">
            <Button href="#work" variant="primary">
              See the work
            </Button>
            <Button href="#contact" variant="outline" arrow={false}>
              Get in touch
            </Button>
          </Reveal>
        </div>

        {/* Bottom row — terminal + portrait */}
        <div className="mt-16 grid grid-cols-1 items-end gap-6 md:mt-20 md:grid-cols-[1fr_auto] md:gap-10">
          <Reveal delay={1.5}>
            <div className="glass max-w-md rounded-md px-4 py-3 font-mono text-[12px] text-bone/85">
              <span className="text-accent">$</span>{" "}
              <span className="text-steel">whoami</span>
              <br />
              <span>imeobong.john</span>{" "}
              <span className="text-steel">
                — engineer · Stellar · Lagos · learning in public.
              </span>
              <span className="ml-1 inline-block h-3 w-[7px] translate-y-[2px] bg-accent animate-pulse" />
            </div>
          </Reveal>

          <Reveal delay={1.7}>
            <PortraitCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
