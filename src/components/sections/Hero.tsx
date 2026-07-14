"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { media } from "@/data/media";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import Cinematic from "@/components/ui/Cinematic";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-navy to-ink" />
  ),
});

// Floating code fragments that orbit the hero
const codeFragments = [
  { text: "tx.sign(keypair)", x: "6%", y: "24%", delay: "0s", dur: "14s" },
  { text: "contractimpl! { AjoChain }", x: "72%", y: "12%", delay: "2s", dur: "16s" },
  { text: "quote → accept → settle", x: "12%", y: "78%", delay: "4s", dur: "13s" },
  { text: "go func(session *USSD)", x: "80%", y: "82%", delay: "1s", dur: "15s" },
];

export default function Hero() {
  const [rotation, setRotation] = useState(0);
  const taglines = portfolioData.taglines;
  const heroLines = portfolioData.personal.heroLines;
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-driven 3D exit choreography for the hero
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 160, damping: 28, mass: 0.5 });
  const headlineRotate = useTransform(smooth, [0, 1], [0, -12]);
  const headlineY = useTransform(smooth, [0, 1], ["0%", "-25%"]);
  const headlineScale = useTransform(smooth, [0, 1], [1, 0.86]);
  const headlineBlur = useTransform(smooth, [0, 1], [0, 6]);
  const headlineFilter = useTransform(headlineBlur, (b) => `blur(${b}px)`);
  const headlineOpacity = useTransform(smooth, [0, 0.85], [1, 0]);

  const plateRotate = useTransform(smooth, [0, 1], [0, 8]);
  const plateY = useTransform(smooth, [0, 1], ["0%", "-12%"]);
  const plateScale = useTransform(smooth, [0, 1], [1, 0.95]);

  useEffect(() => {
    const i = setInterval(() => setRotation((r) => (r + 1) % taglines.length), 3600);
    return () => clearInterval(i);
  }, [taglines.length]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative isolate grain min-h-[100svh] overflow-hidden pt-32 md:pt-40"
      style={{ perspective: "1400px" }}
    >
      <HeroCanvas />

      {/* Orbiting code fragments */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
        {codeFragments.map((f) => (
          <span
            key={f.text}
            className="absolute font-mono text-[11px] text-accent/25"
            style={{
              left: f.x,
              top: f.y,
              animation: `float ${f.dur} ease-in-out ${f.delay} infinite`,
              textShadow: "0 0 12px rgba(0,229,255,0.25)",
            }}
          >
            {f.text}
          </span>
        ))}
      </div>

      <div className="container-editorial relative z-10 flex min-h-[calc(100svh-10rem)] flex-col justify-between pb-12">
        {/* Eyebrow + status row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Reveal delay={0.05}>
            <Tag tone="accent">{portfolioData.personal.statusBadge}</Tag>
          </Reveal>
          <Reveal delay={0.1} className="hidden font-mono text-[10.5px] uppercase tracking-[0.22em] text-steel md:block">
            <div className="flex items-center gap-3">
              <span className="size-1 rounded-full bg-aurora shadow-glow-aurora" />
              <span>{portfolioData.personal.location}</span>
              <span className="text-bone/20">·</span>
              <span>
                {new Date().toLocaleString("en-US", {
                  timeZone: "Africa/Lagos",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })} WAT
              </span>
            </div>
          </Reveal>
        </div>

        {/* Main grid: staged headline + holographic plate */}
        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* Headline column — the three lines, cinematic timing */}
          <motion.div
            style={{
              rotateX: headlineRotate,
              y: headlineY,
              scale: headlineScale,
              filter: headlineFilter,
              opacity: headlineOpacity,
              transformStyle: "preserve-3d",
              transformOrigin: "50% 100%",
              willChange: "transform, filter, opacity",
            }}
          >
            <Reveal delay={0.15}>
              <p className="eyebrow mb-8">
                <span className="text-accent">001 — </span>
                Backend &amp; Full-Stack Engineer · Fintech Infrastructure
              </p>
            </Reveal>

            <h1 className="font-sans text-display-xl font-medium tracking-tightest text-bone text-balance">
              <SplitText
                text={heroLines[0]}
                as="span"
                className="block text-bone/85"
                delay={0.2}
              />
              <SplitText
                text={heroLines[1]}
                as="span"
                className="block"
                delay={0.7}
              />
            </h1>

            {/* Line three — typed transmission */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-serif text-2xl italic text-accent text-glow-cyan md:text-3xl"
            >
              {heroLines[2]}
            </motion.p>

            <Reveal
              delay={1.75}
              className="mt-10 grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end"
            >
              <p className="text-lg leading-relaxed text-bone/75 text-balance">
                {portfolioData.personal.bio}
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

            <Reveal delay={1.9} className="mt-12 flex flex-wrap items-center gap-3">
              <Button href="#work" variant="primary">
                Enter the universe
              </Button>
              <Button href="#contact" variant="outline" arrow={false}>
                Open a channel
              </Button>
            </Reveal>
          </motion.div>

          {/* Holographic portrait plate */}
          <motion.div
            style={{
              rotateY: plateRotate,
              y: plateY,
              scale: plateScale,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <Reveal delay={0.6}>
              <div className="relative animate-float-slower">
                {/* Glow plate */}
                <div
                  aria-hidden
                  className="absolute -inset-8 -z-10 rounded-3xl"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 50% 50%, rgba(0,229,255,0.14), rgba(108,92,231,0.06) 60%, transparent 75%)",
                  }}
                />
                {/* Corner brackets */}
                <div aria-hidden className="pointer-events-none absolute -inset-3 z-10">
                  <span className="absolute left-0 top-0 h-5 w-5 border-l border-t border-accent/60" />
                  <span className="absolute right-0 top-0 h-5 w-5 border-r border-t border-accent/60" />
                  <span className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-accent/60" />
                  <span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-accent/60" />
                </div>

                <div className="relative overflow-hidden rounded-2xl scanlines">
                  <Cinematic
                    src={media.hero.src}
                    kind={media.hero.kind}
                    alt={media.hero.alt}
                    tone={media.hero.tone}
                    aspect={media.hero.aspect}
                    parallax={media.hero.parallax}
                    caption={media.hero.caption}
                    priority
                  />
                </div>

                {/* Holographic ID pane */}
                <div className="holo absolute -bottom-5 -left-4 z-10 rounded-xl px-4 py-3 md:-left-8">
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-accent/80">
                    // identity verified
                  </p>
                  <p className="mt-1 font-sans text-sm font-medium text-bone">
                    {portfolioData.personal.fullName}
                  </p>
                  <div className="mt-1.5 flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-[0.18em] text-steel">
                    <span className="relative inline-flex size-1.5">
                      <span className="absolute inset-0 rounded-full bg-aurora" />
                      <span className="absolute inset-0 animate-ping rounded-full bg-aurora/60" />
                    </span>
                    <span>online · daily commits</span>
                  </div>
                </div>

                {/* Edge spec label */}
                <div className="absolute -right-3 top-6 hidden flex-col items-end gap-1 lg:flex">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-steel">
                    NODE
                  </span>
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-accent/70">
                    LAG — 001 / 26
                  </span>
                </div>
              </div>
            </Reveal>
          </motion.div>
        </div>

        {/* Terminal — bottom of hero */}
        <div className="mt-16 md:mt-20">
          <Reveal delay={2.05}>
            <div className="glass max-w-lg rounded-md px-4 py-3 font-mono text-[12px] text-bone/85">
              <span className="text-accent">$</span>{" "}
              <span className="text-steel">whoami</span>
              <br />
              <span>imeobong.john</span>{" "}
              <span className="text-steel">
                — backend &amp; full-stack · fintech infra · Stellar / Soroban · Lagos
              </span>
              <span className="ml-1 inline-block h-3 w-[7px] translate-y-[2px] bg-accent animate-pulse" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
