"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type MarqueeProps = {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
  pauseOnHover?: boolean;
};

export default function Marquee({
  children,
  duration = 36,
  reverse = false,
  className,
  pauseOnHover = false,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden mask-fade-x",
        className
      )}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 items-center gap-12 px-6 will-change-transform",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          style={{
            animation: `${reverse ? "marqueeReverse" : "marquee"} ${duration}s linear infinite`,
          }}
          aria-hidden={i === 1}
        >
          {children}
        </div>
      ))}
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        @keyframes marqueeReverse {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
