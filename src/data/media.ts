import type { CinematicTone } from "@/components/ui/Cinematic";

export type MediaKind = "image" | "video";

export type MediaSlot = {
  kind: MediaKind;
  src: string;
  poster?: string;
  fallback?: string;
  alt?: string;
  caption?: string;
  tone?: CinematicTone;
  aspect?: string;
  parallax?: number;
};

/**
 * Site-wide media map. Each slot is intentionally pointed at a DIFFERENT
 * asset — no photo repeats across sections.
 *
 * Available raw assets in /public/media/:
 *   photo-01.jpeg   B&W full-body with phone (atmospheric)        → hero
 *   photo-02.jpeg   profile in front of whiteboard code           → projects header
 *   photo-13.jpeg   studio portrait, black hoodie                 → about (main)
 *   photo-14.jpeg   hackathon pensive shot                        → journey
 *   photo-19.jpeg   formal full-body grey traditional             → contact
 *   photo-20.jpeg   animated conversation (hedge backdrop)        → spare
 *   photo-solid.jpg B&W coding at hacker house                    → about (b-side / workspace)
 *   video-02.mp4    short clip (679KB)                            → omnist reel
 *   video-01.mp4    longer clip (3.7MB)                           → spare (heavy)
 *
 * To swap any slot, edit only the entry below. Components auto-pick up.
 */
export const media = {
  hero: {
    kind: "image",
    src: "/media/photo-01.jpeg",
    fallback: "/imeobong.jpg",
    alt: "Imeobong John — Lagos",
    caption: "Lagos · 2026 · 35mm",
    tone: "neutral",
    aspect: "3/4",
    parallax: 0.6,
  },

  about: {
    kind: "image",
    src: "/media/photo-13.jpeg",
    fallback: "/imeobong.jpg",
    alt: "Imeobong John — studio portrait",
    caption: "// portrait · studio",
    tone: "warm",
    aspect: "4/5",
    parallax: 0.5,
  },

  workspace: {
    kind: "image",
    src: "/media/photo-solid.jpg",
    fallback: "/imeobong.jpg",
    alt: "At the keyboard — Lagos Hacker House",
    caption: "// the rig · Hacker House",
    tone: "neutral",
    aspect: "1/1",
    parallax: 0.4,
  },

  omnist: {
    kind: "video",
    src: "/media/video-02.mp4",
    fallback: "/media/photo-01.jpeg",
    alt: "OMNIST concept reel",
    caption: "// concept reel · 2026",
    tone: "cool",
    // video-02 is 424x642 (≈2:3 portrait). Matching aspect so nothing crops.
    aspect: "424/642",
    parallax: 0.6,
  },

  contact: {
    kind: "image",
    src: "/media/photo-19.jpeg",
    fallback: "/imeobong.jpg",
    alt: "Imeobong John",
    tone: "warm",
    aspect: "3/4",
    parallax: 0.4,
  },

  journey: {
    kind: "image",
    src: "/media/photo-14.jpeg",
    fallback: "/imeobong.jpg",
    alt: "Lagos Hacker House",
    caption: "// Lagos Hacker House · the journey continues",
    tone: "neutral",
    aspect: "3/2",
    parallax: 0.5,
  },

  projects: {
    kind: "image",
    src: "/media/photo-02.jpeg",
    fallback: "/imeobong.jpg",
    alt: "Engineering — whiteboard, code, profile",
    caption: "// thinking · in front of the whiteboard",
    tone: "neutral",
    aspect: "3/2",
    parallax: 0.5,
  },
} satisfies Record<string, MediaSlot>;
