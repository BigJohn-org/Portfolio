"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/cn";

export type CinematicTone = "warm" | "cool" | "neutral" | "amber";
type MediaKind = "image" | "video";

type Props = {
  src: string;
  kind?: MediaKind;
  poster?: string;
  alt?: string;
  aspect?: string;
  tone?: CinematicTone;
  className?: string;
  rounded?: string;
  parallax?: number;
  ring?: boolean;
  grainOpacity?: number;
  vignette?: boolean;
  caption?: string;
  zoomOnHover?: boolean;
  priority?: boolean;
  cover?: boolean;
  /**
   * Public/relative path that may not exist yet (e.g. /media/hero.mp4).
   * If a request for it fails, we fall back to `fallbackSrc`.
   */
  fallbackSrc?: string;
};

const toneOverlay: Record<CinematicTone, string> = {
  warm: "linear-gradient(135deg, rgba(255,91,46,0.22), rgba(255,140,80,0.05) 40%, rgba(92,141,255,0.08))",
  amber: "linear-gradient(180deg, rgba(255,148,60,0.16), rgba(10,10,11,0.4))",
  cool: "linear-gradient(135deg, rgba(92,141,255,0.16), rgba(10,10,11,0.35))",
  neutral: "linear-gradient(180deg, rgba(239,236,228,0.04), rgba(10,10,11,0.25))",
};

/**
 * Universal cinematic media wrapper. Wire an image, a video, or anything that
 * arrives later — the treatment stack is identical so the page reads as one
 * coherent piece even when assets swap in.
 *
 * /public/media/ paths recommended:
 *   hero.mp4          — landing visual (loops, muted)
 *   hero-poster.jpg   — poster frame
 *   about.jpg         — portrait for About
 *   workspace.mp4     — coding / working footage
 *   lagos.mp4         — environment / city b-roll
 *   omnist.mp4        — OMNIST concept reel
 *   contact.jpg       — small accent portrait
 */
export default function Cinematic({
  src,
  kind = "image",
  poster,
  alt = "",
  aspect = "4/5",
  tone = "warm",
  className,
  rounded = "rounded-2xl",
  parallax = 0,
  ring = true,
  grainOpacity = 0.25,
  vignette = true,
  caption,
  zoomOnHover = true,
  priority = false,
  cover = true,
  fallbackSrc,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${parallax * 8}%`, `${-parallax * 8}%`]
  );

  return (
    <figure ref={ref} className={cn("group/cine relative isolate", className)}>
      <div
        className={cn(
          "relative overflow-hidden",
          rounded,
          ring && "ring-1 ring-bone/10"
        )}
        style={{ aspectRatio: aspect }}
      >
        {/* Media layer (image or video) */}
        <motion.div style={{ y }} className="absolute inset-0">
          {kind === "video" ? (
            <VideoLayer
              src={src}
              poster={poster}
              fallbackSrc={fallbackSrc}
              cover={cover}
            />
          ) : (
            <ImageLayer
              src={src}
              alt={alt}
              cover={cover}
              priority={priority}
              zoomOnHover={zoomOnHover}
            />
          )}
        </motion.div>

        {/* Color grade */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 mix-blend-color"
          style={{ background: toneOverlay[tone] }}
        />

        {/* Vignette */}
        {vignette && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.55)]"
          />
        )}

        {/* Grain */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 mix-blend-overlay"
          style={{
            opacity: grainOpacity,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Edge sheen — subtle border highlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            background:
              "linear-gradient(180deg, rgba(239,236,228,0.07), transparent 25%, transparent 80%, rgba(0,0,0,0.4))",
          }}
        />
      </div>

      {caption && (
        <figcaption className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-steel">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function ImageLayer({
  src,
  alt,
  cover,
  priority,
  zoomOnHover,
}: {
  src: string;
  alt: string;
  cover: boolean;
  priority: boolean;
  zoomOnHover: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 1024px) 50vw, 100vw"
      priority={priority}
      className={cn(
        cover ? "object-cover" : "object-contain",
        "transition-transform duration-[1200ms] ease-glide will-change-transform",
        zoomOnHover && "group-hover/cine:scale-[1.03]"
      )}
    />
  );
}

function VideoLayer({
  src,
  poster,
  fallbackSrc,
  cover,
}: {
  src: string;
  poster?: string;
  fallbackSrc?: string;
  cover: boolean;
}) {
  return (
    <video
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={cn(
        "absolute inset-0 h-full w-full",
        cover ? "object-cover" : "object-contain"
      )}
      onError={(e) => {
        if (fallbackSrc) {
          const v = e.currentTarget;
          if (v.src !== window.location.origin + fallbackSrc) {
            v.src = fallbackSrc;
          }
        }
      }}
    />
  );
}

export type { Props as CinematicProps };

/* Convenience export so consumers can read motion-value types if needed */
export type ScrollMotionValue = MotionValue<string | number>;
