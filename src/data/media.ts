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
 * Site-wide media map. Each slot points at a DIFFERENT asset —
 * no photo repeats across sections.
 *
 * July 2026 asset drop in /public/media/:
 *   photo-cafe-01.jpg  headphones on, deep in the laptop (café)     → hero
 *   photo-cafe-02.jpg  hydrating behind the MacBook (café)          → about b-side
 *   photo-hall.jpg     standing portrait, black hoodie, marble hall → about (main)
 *   photo-car.jpg      car selfie, green lanyard                    → contact
 *   video-cafe.mp4     1280×720 landscape working clip (3.6MB)      → journey
 *   video-reel.mp4     1080×1920 portrait reel (7.2MB)              → omnist
 *   video-snap.mp4     720×1280 portrait clip (11.8MB)              → spare (heavy)
 *
 * Earlier assets (photo-01…photo-22, video-01/02) remain available as spares.
 */
export const media = {
  hero: {
    kind: "image",
    src: "/media/photo-cafe-01.jpg",
    fallback: "/imeobong.jpg",
    alt: "Imeobong John — headphones on, shipping from a Lagos café",
    caption: "Lagos · 2026 · in the field",
    tone: "cool",
    aspect: "3/4",
    parallax: 0.6,
  },

  about: {
    kind: "image",
    src: "/media/photo-hall.jpg",
    fallback: "/imeobong.jpg",
    alt: "Imeobong John — portrait",
    caption: "// subject · I.J.A",
    tone: "neutral",
    aspect: "3/4",
    parallax: 0.5,
  },

  workspace: {
    kind: "image",
    src: "/media/photo-cafe-02.jpg",
    fallback: "/imeobong.jpg",
    alt: "Behind the MacBook — hydrate and ship",
    caption: "// the rig · hydrate & ship",
    tone: "cool",
    aspect: "3/4",
    parallax: 0.4,
  },

  omnist: {
    kind: "video",
    src: "/media/video-reel.mp4",
    fallback: "/media/photo-01.jpeg",
    alt: "OMNIST concept reel",
    caption: "// concept reel · 2026",
    tone: "cool",
    aspect: "9/16",
    parallax: 0.6,
  },

  contact: {
    kind: "image",
    src: "/media/photo-car.jpg",
    fallback: "/imeobong.jpg",
    alt: "Imeobong John",
    tone: "warm",
    aspect: "3/4",
    parallax: 0.4,
  },

  journey: {
    kind: "video",
    src: "/media/video-cafe.mp4",
    poster: "/media/photo-cafe-01.jpg",
    fallback: "/media/photo-14.jpeg",
    alt: "In the field — Lagos, 2026",
    caption: "// live footage · the journey continues",
    tone: "neutral",
    aspect: "16/9",
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
