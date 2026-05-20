import { ReactNode } from "react";
import { cn } from "@/lib/cn";

export default function Tag({
  children,
  tone = "bone",
  className,
}: {
  children: ReactNode;
  tone?: "bone" | "accent" | "signal" | "ghost";
  className?: string;
}) {
  const tones = {
    bone: "border-bone/15 bg-bone/[0.03] text-bone",
    accent: "border-accent/30 bg-accent/[0.07] text-accent-300",
    signal: "border-signal/30 bg-signal/[0.06] text-signal",
    ghost: "border-bone/10 bg-transparent text-steel",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em] backdrop-blur-sm",
        tones[tone],
        className
      )}
    >
      <span className="size-1 rounded-full bg-current opacity-60" />
      {children}
    </span>
  );
}
