"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import Reveal from "@/components/motion/Reveal";
import Tag from "@/components/ui/Tag";
import { cn } from "@/lib/cn";

export default function ProjectCase({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  const isReverse = index % 2 === 1;

  return (
    <article
      ref={ref}
      className="relative grid grid-cols-1 gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-12"
    >
      {/* Mockup column */}
      <div
        className={cn(
          "lg:col-span-7",
          isReverse && "lg:order-2"
        )}
      >
        <Reveal>
          <motion.div
            style={{ y }}
            className="group relative aspect-[16/11] overflow-hidden rounded-2xl border border-bone/10 bg-smoke"
          >
            {/* Stylized device frame mockup */}
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div
              className="absolute inset-0 opacity-70"
              style={{
                background: `radial-gradient(circle at 30% 20%, ${project.accent}33, transparent 55%), radial-gradient(circle at 80% 80%, ${project.accent}1a, transparent 60%)`,
              }}
            />

            <div className="absolute inset-6 flex flex-col rounded-xl border border-bone/10 bg-ink/70 backdrop-blur-md">
              <div className="flex items-center gap-1.5 border-b border-bone/10 px-4 py-3">
                <span className="size-2 rounded-full bg-bone/20" />
                <span className="size-2 rounded-full bg-bone/20" />
                <span className="size-2 rounded-full bg-bone/20" />
                <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
                  {project.slug}.app
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p
                    className="font-mono text-[10.5px] uppercase tracking-[0.18em]"
                    style={{ color: project.accent }}
                  >
                    {project.status} · {project.year}
                  </p>
                  <h4 className="mt-3 font-serif text-3xl italic text-bone md:text-4xl">
                    {project.name}
                  </h4>
                  <p className="mt-3 max-w-md text-bone/70">
                    {project.oneLiner}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {project.highlights.slice(0, 3).map((h, i) => (
                    <div
                      key={i}
                      className="rounded-md border border-bone/10 bg-bone/[0.02] p-3 text-[11px] leading-snug text-bone/65"
                    >
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-bone/10 bg-ink/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-bone/70 backdrop-blur">
              <span
                className="size-1.5 rounded-full"
                style={{ background: project.accent }}
              />
              {project.year}
            </div>
          </motion.div>
        </Reveal>
      </div>

      {/* Copy column */}
      <div
        className={cn(
          "flex flex-col justify-center lg:col-span-5",
          isReverse && "lg:order-1"
        )}
      >
        <Reveal>
          <p
            className="font-mono text-[10.5px] uppercase tracking-[0.22em]"
            style={{ color: project.accent }}
          >
            {String(index + 1).padStart(2, "0")} / {project.tags[0]}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h3 className="mt-4 font-sans text-display-md font-medium tracking-tightest text-bone">
            {project.name}
          </h3>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-3 font-serif text-2xl italic leading-snug text-bone/90">
            {project.oneLiner}
          </p>
        </Reveal>

        <div className="mt-8 space-y-5 text-bone/70 leading-relaxed">
          <Reveal delay={0.15}>
            <div>
              <p className="eyebrow mb-2">Problem</p>
              <p>{project.problem}</p>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <div>
              <p className="eyebrow mb-2">Approach</p>
              <p>{project.approach}</p>
            </div>
          </Reveal>
          <Reveal delay={0.21}>
            <div>
              <p className="eyebrow mb-2">Outcome</p>
              <p>{project.outcome}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25} className="mt-8 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Tag key={s} tone="ghost">
              {s}
            </Tag>
          ))}
        </Reveal>

        <Reveal delay={0.3} className="mt-8 flex flex-wrap items-center gap-5">
          <Link
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-bone hover:text-accent"
          >
            View repository
            <ArrowUpRight
              className="size-4 transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
              strokeWidth={1.5}
            />
          </Link>
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-bone/70 hover:text-bone"
            >
              Live demo
              <ArrowUpRight
                className="size-4 transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
                strokeWidth={1.5}
              />
            </Link>
          )}
        </Reveal>
      </div>
    </article>
  );
}
