"use client";

import { projects } from "@/data/projects";
import { media } from "@/data/media";
import Reveal from "@/components/motion/Reveal";
import Scroll3D from "@/components/motion/Scroll3D";
import Cinematic from "@/components/ui/Cinematic";
import ProjectCase from "./ProjectCase";

export default function Projects() {
  return (
    <section id="work" className="relative py-32 md:py-48">
      <div className="container-editorial">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">
                <span className="text-accent">003 — </span>Things I&apos;ve built
              </p>
            </Reveal>
            <Reveal>
              <h2 className="font-sans text-display-xl font-medium tracking-tightest text-balance">
                A mix of{" "}
                <span className="display-serif font-normal">
                  experiments
                </span>{" "}
                and{" "}
                <span className="display-serif font-normal">fundamentals.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-bone/65">
              Some Stellar / Soroban experiments I&apos;m using to learn the
              ecosystem, plus the earlier projects that taught me the fundamentals.
              I leave the small ones up on purpose — that&apos;s part of the journey.
            </p>
          </Reveal>
        </div>

        {/* Cinematic header frame */}
        <div className="mt-14">
          <Scroll3D mode="enter" rotate={12} translateZ={120} scaleMin={0.95}>
            <div className="relative">
              <Cinematic
                src={media.projects.src}
                kind={media.projects.kind}
                alt={media.projects.alt}
                tone={media.projects.tone}
                aspect={media.projects.aspect}
                parallax={media.projects.parallax}
                rounded="rounded-3xl"
                grainOpacity={0.28}
                caption={media.projects.caption}
              />
              <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full glass-strong px-3 py-1.5">
                <span className="relative inline-flex size-2">
                  <span className="absolute inset-0 rounded-full bg-accent" />
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone">
                  the work · 003
                </span>
              </div>
              <div className="pointer-events-none absolute right-4 bottom-4 rounded-full glass-strong px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-bone">
                07 projects below
              </div>
            </div>
          </Scroll3D>
        </div>

        <div className="mt-12 divide-y divide-bone/10">
          {projects.map((p, i) => (
            <ProjectCase key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
