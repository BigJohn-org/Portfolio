"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { comingSoon } from "@/data/projects";
import { media } from "@/data/media";
import Reveal from "@/components/motion/Reveal";
import Scroll3D from "@/components/motion/Scroll3D";
import Tag from "@/components/ui/Tag";
import Cinematic from "@/components/ui/Cinematic";

export default function ComingSoon() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const dashboardY = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);
  const dashboardRotate = useTransform(scrollYProgress, [0, 0.5, 1], [3, 0, -3]);

  return (
    <section
      id="omnist"
      ref={ref}
      className="relative isolate overflow-hidden py-32 md:py-48"
    >
      {/* Background gradient + grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-30" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(92,141,255,0.10), transparent 60%), radial-gradient(50% 40% at 80% 100%, rgba(255,91,46,0.07), transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-bone/30 to-transparent" />

      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy column */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6">
                <span className="text-accent">004 — </span>Future systems
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <Tag tone="signal">{comingSoon.category}</Tag>
                <Tag tone="ghost">{comingSoon.status}</Tag>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-sans text-display-xl font-medium tracking-tightest">
                {comingSoon.name}
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-4 font-serif text-2xl italic leading-snug text-bone/90">
                {comingSoon.pitch}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-bone/65 leading-relaxed">
                {comingSoon.longPitch}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-2 font-mono text-[11.5px] uppercase tracking-[0.16em] text-bone/70 sm:grid-cols-2">
                {comingSoon.capabilities.map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-accent" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Mockup column */}
          <div className="lg:col-span-7">
            <motion.div
              style={{
                y: dashboardY,
                rotate: dashboardRotate,
              }}
              className="relative"
            >
              <OmnistDashboard />
            </motion.div>
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-24 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/10 md:grid-cols-2 lg:grid-cols-4">
          {comingSoon.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="h-full bg-ink p-7 transition-colors hover:bg-bone/[0.03]">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-2xl italic text-bone">
                  {p.title}
                </h3>
                <p className="mt-3 text-bone/65 leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Concept reel — portrait video, centered for a film-reel feel */}
        <div className="mt-24">
          <Reveal>
            <div className="mb-5 flex items-end justify-between">
              <p className="eyebrow">// concept reel · 2026</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-steel">
                no audio · loop · vertical reel
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
            {/* Left specs column */}
            <div className="hidden flex-col items-end gap-3 lg:flex">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-steel">
                ⌘ format
              </p>
              <p className="text-right font-serif italic text-bone/80">
                Vertical · 424 × 642
              </p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-steel">
                ⌘ runtime
              </p>
              <p className="text-right font-serif italic text-bone/80">
                Loop · no audio
              </p>
            </div>

            {/* Reel */}
            <Scroll3D mode="enter" rotate={14} translateZ={140} scaleMin={0.94}>
              <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
                <Cinematic
                  src={media.omnist.src}
                  kind={media.omnist.kind}
                  alt={media.omnist.alt}
                  tone={media.omnist.tone}
                  aspect={media.omnist.aspect}
                  parallax={media.omnist.parallax}
                  grainOpacity={0.32}
                  rounded="rounded-3xl"
                />
                {/* Floating reel marker */}
                <div className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-2 rounded-full glass-strong px-3 py-1.5">
                  <span className="relative inline-flex size-2">
                    <span className="absolute inset-0 rounded-full bg-accent" />
                    <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone">
                    REC · OMNIST
                  </span>
                </div>
                <div className="pointer-events-none absolute right-3 top-3 rounded-full glass-strong px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-bone">
                  9:16
                </div>
              </div>
            </Scroll3D>

            {/* Right specs column */}
            <div className="hidden flex-col gap-3 lg:flex">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-steel">
                ⌘ stage
              </p>
              <p className="font-serif italic text-bone/80">
                In concept · 2026
              </p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-steel">
                ⌘ classification
              </p>
              <p className="font-serif italic text-bone/80">
                Communication OS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * OS-style communications dashboard mockup — pure CSS/SVG, no backend.
 */
function OmnistDashboard() {
  const threads = [
    { name: "Adunni · Engineering", app: "Slack", body: "Pushed the Soroban contract — review when you can.", time: "now", urgent: true },
    { name: "Tobi", app: "WhatsApp", body: "Lunch tomorrow? 1pm at the usual spot.", time: "4m" },
    { name: "Lagos Stellar Devs", app: "Telegram", body: "Demo day call — Thursday, 18:00 WAT.", time: "11m" },
    { name: "Mom ❤", app: "iMessage", body: "Call me when you wake up.", time: "1h", pinned: true },
    { name: "Stellar Foundation", app: "Email", body: "Re: Soroban audit grant — next steps.", time: "2h" },
  ];

  return (
    <div className="group relative aspect-[16/11] overflow-hidden rounded-2xl border border-bone/10 bg-smoke shadow-[0_50px_120px_-20px_rgba(0,0,0,0.6)]">
      {/* Background aurora */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(40% 40% at 30% 20%, rgba(92,141,255,0.18), transparent 60%), radial-gradient(40% 40% at 80% 90%, rgba(255,91,46,0.14), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* OS Frame */}
      <div className="absolute inset-3 flex flex-col rounded-xl border border-bone/10 bg-ink/80 backdrop-blur-xl">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-bone/10 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-bone/20" />
            <span className="size-2 rounded-full bg-bone/20" />
            <span className="size-2 rounded-full bg-bone/20" />
          </div>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-bone/70">
            OMNIST · v0.1
          </p>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-bone/40">
            <span className="size-1.5 rounded-full bg-emerald-400/70" />
            online
          </div>
        </div>

        {/* Main layout: sidebar + thread list + context */}
        <div className="grid flex-1 grid-cols-[180px_1fr_180px] divide-x divide-bone/5 overflow-hidden">
          {/* Sidebar */}
          <aside className="flex flex-col gap-2 p-3 text-[11px]">
            <p className="mb-1 font-mono text-[9.5px] uppercase tracking-[0.18em] text-steel">
              spaces
            </p>
            {["All threads", "Family", "Work", "Stellar", "Founders", "Muted"].map(
              (s, i) => (
                <div
                  key={s}
                  className={`flex items-center justify-between rounded-md px-2 py-1.5 ${i === 0 ? "bg-bone/[0.06] text-bone" : "text-bone/55"}`}
                >
                  <span>{s}</span>
                  {i === 0 && (
                    <span className="rounded-full bg-accent px-1.5 text-[9px] font-mono text-ink">
                      3
                    </span>
                  )}
                </div>
              )
            )}
            <div className="mt-auto rounded-md border border-bone/10 bg-bone/[0.02] p-2.5">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-accent">
                ai · drafting
              </p>
              <p className="mt-1.5 text-[10.5px] text-bone/70 leading-snug">
                3 replies suggested, awaiting your review.
              </p>
            </div>
          </aside>

          {/* Thread list */}
          <div className="flex flex-col overflow-hidden">
            <div className="flex items-center gap-3 border-b border-bone/5 px-4 py-3">
              <span className="font-serif text-lg italic text-bone">Inbox</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-steel">
                merged from 6 apps
              </span>
            </div>
            <div className="flex-1 overflow-hidden">
              {threads.map((t, i) => (
                <div
                  key={t.name}
                  className={`flex items-start gap-3 border-b border-bone/5 px-4 py-3 ${i === 0 ? "bg-bone/[0.03]" : ""}`}
                >
                  <div
                    className="mt-1 size-7 shrink-0 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, hsl(${(i * 60) % 360}, 65%, 60%), hsl(${(i * 60 + 40) % 360}, 65%, 45%))`,
                    }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="truncate text-[12px] font-medium text-bone">
                        {t.name}
                      </p>
                      <span className="shrink-0 font-mono text-[9.5px] uppercase tracking-[0.16em] text-steel">
                        {t.time}
                      </span>
                    </div>
                    <p className="mt-0.5 truncate text-[11px] text-bone/60">
                      {t.body}
                    </p>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <span className="rounded-sm bg-bone/[0.06] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-bone/70">
                        {t.app}
                      </span>
                      {t.urgent && (
                        <span className="rounded-sm bg-accent/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-accent">
                          urgent
                        </span>
                      )}
                      {t.pinned && (
                        <span className="rounded-sm bg-signal/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-signal">
                          pinned
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Context panel */}
          <aside className="flex flex-col gap-3 p-3 text-[11px]">
            <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-steel">
              context · adunni
            </p>
            <div className="rounded-md border border-bone/10 bg-bone/[0.02] p-2.5">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-accent">
                commitment
              </p>
              <p className="mt-1 text-[10.5px] leading-snug text-bone/75">
                You promised a contract review by EOD.
              </p>
            </div>
            <div className="rounded-md border border-bone/10 bg-bone/[0.02] p-2.5">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-signal">
                relation
              </p>
              <p className="mt-1 text-[10.5px] leading-snug text-bone/75">
                Coworker · 48 threads · weekly
              </p>
            </div>
            <div className="rounded-md border border-accent/30 bg-accent/[0.06] p-2.5">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-accent">
                suggested reply
              </p>
              <p className="mt-1 text-[10.5px] leading-snug text-bone/85">
                &ldquo;Reviewing now — comments inline by 5pm WAT.&rdquo;
              </p>
            </div>
            <div className="mt-auto flex gap-2">
              <div className="flex-1 rounded-md border border-bone/10 bg-bone/[0.02] p-2 text-center font-mono text-[9.5px] uppercase tracking-[0.18em] text-bone/70">
                Send
              </div>
              <div className="flex-1 rounded-md border border-bone/10 bg-bone/[0.02] p-2 text-center font-mono text-[9.5px] uppercase tracking-[0.18em] text-bone/40">
                Edit
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom status bar */}
        <div className="flex items-center justify-between border-t border-bone/5 px-4 py-2 font-mono text-[9.5px] uppercase tracking-[0.18em] text-steel">
          <span>orchestrating · 6 silos · local-first</span>
          <span className="text-accent">● routing optimized</span>
        </div>
      </div>

      {/* Floating holographic glyph */}
      <div className="pointer-events-none absolute -right-8 -top-8 size-40 rounded-full border border-bone/10 opacity-50">
        <div className="absolute inset-3 rounded-full border border-bone/10" />
        <div className="absolute inset-7 rounded-full border border-bone/10" />
      </div>
    </div>
  );
}
