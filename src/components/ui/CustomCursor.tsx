"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, [role='button'], input, textarea, select, label, [data-cursor]";

/**
 * Glowing orb cursor with a lagging halo ring.
 * Fine pointers only — touch devices never see it.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("cursor-orb");
    dot.style.opacity = "0";
    ring.style.opacity = "0";

    let x = -100;
    let y = -100;
    let rx = -100;
    let ry = -100;
    let scale = 1;
    let targetScale = 1;
    let raf = 0;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        rx = x;
        ry = y;
      }
      const el = (e.target as Element | null)?.closest?.(INTERACTIVE);
      targetScale = el ? 2.4 : 1;
    };

    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onDown = () => {
      targetScale = 0.7;
    };
    const onUp = () => {
      targetScale = 1;
    };

    const loop = () => {
      rx += (x - rx) * 0.14;
      ry += (y - ry) * 0.14;
      scale += (targetScale - scale) * 0.16;
      dot.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
      ring.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0) scale(${scale})`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-orb");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[110] hidden md:block">
      <div
        ref={dotRef}
        className="absolute left-0 top-0 size-2 rounded-full bg-accent transition-opacity duration-300"
        style={{ boxShadow: "0 0 10px rgba(0,229,255,0.9), 0 0 24px rgba(0,229,255,0.45)" }}
      />
      <div
        ref={ringRef}
        className="absolute left-0 top-0 size-9 rounded-full border border-accent/40 transition-opacity duration-300"
        style={{ boxShadow: "inset 0 0 12px rgba(0,229,255,0.12)" }}
      />
    </div>
  );
}
