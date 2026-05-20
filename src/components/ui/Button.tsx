"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "@/components/motion/Magnetic";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "outline";

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  variant?: Variant;
  arrow?: boolean;
  external?: boolean;
};

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-400 ease-glide focus:outline-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-bone text-ink hover:bg-accent hover:text-bone",
  ghost:
    "bg-bone/[0.04] text-bone hover:bg-bone/[0.08] border border-bone/10",
  outline:
    "border border-bone/20 text-bone hover:border-bone/60 hover:bg-bone/[0.03]",
};

export default function Button({
  href,
  onClick,
  children,
  className,
  variant = "primary",
  arrow = true,
  external = false,
}: Props) {
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          className="size-3.5 transition-transform duration-400 ease-glide group-hover/btn:-translate-y-px group-hover/btn:translate-x-px"
          strokeWidth={2}
        />
      )}
    </>
  );

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Magnetic strength={0.18} className="inline-block">
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={classes}
        >
          {content}
        </Link>
      </Magnetic>
    );
  }

  return (
    <Magnetic strength={0.18} className="inline-block">
      <button onClick={onClick} className={classes}>
        {content}
      </button>
    </Magnetic>
  );
}
