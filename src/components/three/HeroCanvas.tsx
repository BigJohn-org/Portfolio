"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ShaderGradient from "./ShaderGradient";
import ParticleField from "./ParticleField";

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: true,
          stencil: false,
          depth: false,
        }}
        camera={{ position: [0, 0, 1], fov: 70 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ShaderGradient />
          <ParticleField count={420} />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" />
    </div>
  );
}
