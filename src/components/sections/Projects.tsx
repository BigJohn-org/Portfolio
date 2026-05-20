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
                <span className="text-accent">003 — </span>Selected work
              </p>
            </Reveal>
            <Reveal>
              <h2 className="font-sans text-display-xl font-medium tracking-tightest text-balance">
                Seven shipments,{" "}
                <span className="display-serif font-normal">one thesis.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-bone/65">
              Original Stellar and Soroban work from a single quarter — payment rails,
              communal-savings contracts, and on-chain settlement primitives designed
              for African users first.
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
