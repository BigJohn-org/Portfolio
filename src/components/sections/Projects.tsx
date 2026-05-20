"use client";

import { projects } from "@/data/projects";
import Reveal from "@/components/motion/Reveal";
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

        <div className="mt-16 divide-y divide-bone/10">
          {projects.map((p, i) => (
            <ProjectCase key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
