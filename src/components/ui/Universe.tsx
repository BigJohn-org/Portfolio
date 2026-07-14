"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number; // 0..1 viewport space
  y: number;
  z: number; // depth layer 0..1 (far..near)
  r: number;
  seed: number;
  hue: "white" | "cyan" | "purple";
};

type Stream = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
};

const STAR_COLORS = {
  white: [248, 250, 252],
  cyan: [0, 229, 255],
  purple: [140, 122, 255],
} as const;

const STREAM_COLORS = ["0,229,255", "108,92,231", "0,255,163"];

/**
 * The living digital universe — fixed site-wide backdrop.
 * Three parallax star layers twinkle and drift against scroll,
 * constellation lines form near the cursor, and data streams
 * occasionally shoot across the void.
 */
export default function Universe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let running = true;
    let t = 0;

    const stars: Star[] = [];
    const streams: Stream[] = [];
    const mouse = { x: 0.5, y: 0.4, tx: 0.5, ty: 0.4 };
    let scrollY = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seedStars = () => {
      stars.length = 0;
      const count = Math.min(260, Math.floor((w * h) / 6500));
      for (let i = 0; i < count; i++) {
        const roll = Math.random();
        stars.push({
          x: Math.random(),
          y: Math.random(),
          z: Math.random(),
          r: Math.random() * 1.3 + 0.35,
          seed: Math.random() * Math.PI * 2,
          hue: roll < 0.72 ? "white" : roll < 0.9 ? "cyan" : "purple",
        });
      }
    };

    const spawnStream = () => {
      if (streams.length > 3) return;
      const fromLeft = Math.random() > 0.5;
      const angle = (Math.random() * 18 + 12) * (Math.PI / 180);
      const speed = Math.random() * 6 + 7;
      streams.push({
        x: fromLeft ? -40 : w + 40,
        y: Math.random() * h * 0.7,
        vx: (fromLeft ? 1 : -1) * Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: Math.random() * 60 + 70,
        color: STREAM_COLORS[Math.floor(Math.random() * STREAM_COLORS.length)],
      });
    };

    const draw = () => {
      if (!running) return;
      t += 1;
      ctx.clearRect(0, 0, w, h);

      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;

      // Stars — parallax against scroll + gentle drift
      const near: { sx: number; sy: number }[] = [];
      for (const s of stars) {
        const parallax = 0.02 + s.z * 0.12;
        let sy = (s.y * h - scrollY * parallax) % h;
        if (sy < 0) sy += h;
        const sx =
          (s.x * w + Math.sin(t * 0.0018 + s.seed) * 8 * s.z + (mouse.x - 0.5) * -22 * s.z + w) % w;

        const tw = 0.45 + Math.sin(t * 0.02 + s.seed * 7) * 0.35;
        const [cr, cg, cb] = STAR_COLORS[s.hue];
        const alpha = tw * (0.25 + s.z * 0.55);
        ctx.beginPath();
        ctx.arc(sx, sy, s.r * (0.7 + s.z * 0.6), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cr},${cg},${cb},${alpha})`;
        ctx.fill();

        if (s.z > 0.55) near.push({ sx, sy });
      }

      // Constellation lines — connect near-layer stars close to the cursor
      const mx = mouse.x * w;
      const my = mouse.y * h;
      ctx.lineWidth = 0.6;
      for (let i = 0; i < near.length; i++) {
        const a = near[i];
        const dm = Math.hypot(a.sx - mx, a.sy - my);
        if (dm > 260) continue;
        for (let j = i + 1; j < near.length; j++) {
          const b = near[j];
          const d = Math.hypot(a.sx - b.sx, a.sy - b.sy);
          if (d < 130) {
            const fade = (1 - d / 130) * (1 - dm / 260) * 0.35;
            ctx.strokeStyle = `rgba(0,229,255,${fade})`;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.stroke();
          }
        }
      }

      // Data streams — glowing comets
      if (!reduce && Math.random() < 0.004) spawnStream();
      for (let i = streams.length - 1; i >= 0; i--) {
        const st = streams[i];
        st.x += st.vx;
        st.y += st.vy;
        st.life += 1;
        const p = st.life / st.maxLife;
        if (p >= 1 || st.x < -80 || st.x > w + 80 || st.y > h + 80) {
          streams.splice(i, 1);
          continue;
        }
        const alpha = Math.sin(p * Math.PI) * 0.7;
        const tail = 14;
        const grad = ctx.createLinearGradient(
          st.x - st.vx * tail,
          st.y - st.vy * tail,
          st.x,
          st.y
        );
        grad.addColorStop(0, `rgba(${st.color},0)`);
        grad.addColorStop(1, `rgba(${st.color},${alpha})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(st.x - st.vx * tail, st.y - st.vy * tail);
        ctx.lineTo(st.x, st.y);
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    const onMouse = (e: MouseEvent) => {
      mouse.tx = e.clientX / w;
      mouse.ty = e.clientY / h;
    };
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    const onVis = () => {
      running = document.visibilityState === "visible";
      if (running) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(draw);
      }
    };
    const onResize = () => {
      resize();
      seedStars();
    };

    resize();
    seedStars();

    if (reduce) {
      // Static field for reduced motion — draw once, no loop.
      t = 30;
      running = true;
      draw();
      running = false;
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
      window.addEventListener("mousemove", onMouse, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });
      document.addEventListener("visibilitychange", onVis);
    }
    window.addEventListener("resize", onResize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20">
      {/* Nebula fog layers */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 75% 8%, rgba(8,20,35,0.85), transparent 65%), radial-gradient(ellipse 55% 40% at 15% 85%, rgba(108,92,231,0.07), transparent 65%), radial-gradient(ellipse 45% 35% at 85% 70%, rgba(0,229,255,0.04), transparent 60%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* Holographic horizon grid at the base */}
      <div
        className="absolute inset-x-0 bottom-0 h-[38vh] opacity-[0.14]"
        style={{
          background:
            "linear-gradient(rgba(0,229,255,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.28) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          transform: "perspective(600px) rotateX(58deg)",
          transformOrigin: "50% 100%",
          maskImage: "linear-gradient(to top, black 15%, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to top, black 15%, transparent 85%)",
        }}
      />
    </div>
  );
}
