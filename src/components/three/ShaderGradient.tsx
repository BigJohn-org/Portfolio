"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uRes;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;

  // 2D simplex-ish noise
  vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }
  float noise(vec2 p) {
    const float K1 = 0.366025404;
    const float K2 = 0.211324865;
    vec2 i = floor(p + (p.x + p.y) * K1);
    vec2 a = p - i + (i.x + i.y) * K2;
    float m = step(a.y, a.x);
    vec2 o = vec2(m, 1.0 - m);
    vec2 b = a - o + K2;
    vec2 c = a - 1.0 + 2.0 * K2;
    vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
    vec3 n = h * h * h * h * vec3(
      dot(a, hash(i)),
      dot(b, hash(i + o)),
      dot(c, hash(i + 1.0))
    );
    return dot(n, vec3(70.0));
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p *= 2.02;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uRes.x / uRes.y;
    vec2 p = vec2(uv.x * aspect, uv.y);

    vec2 m = uMouse * 0.15;
    float t = uTime * 0.05;

    float n1 = fbm(p * 1.8 + vec2(t, -t * 0.6) + m);
    float n2 = fbm(p * 3.2 + vec2(-t * 0.4, t * 0.8) - m * 0.7);
    float membrane = smoothstep(-0.1, 0.6, n1 * 0.7 + n2 * 0.4);

    // vignette toward center
    float d = distance(vec2(uv.x, uv.y * 0.55 + 0.225), vec2(0.5, 0.5));
    float vignette = 1.0 - smoothstep(0.3, 0.95, d);

    vec3 col = mix(uColorA, uColorB, membrane);
    col = mix(col, uColorC, pow(membrane, 2.4) * 0.55);
    col *= 0.55 + vignette * 0.6;

    // film grain pulse
    float g = fract(sin(dot(uv * uRes.xy, vec2(12.9898, 78.233))) * 43758.5453);
    col += (g - 0.5) * 0.02;

    gl_FragColor = vec4(col, 1.0);
  }
`;

export default function ShaderGradient() {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const { size, viewport } = useThree();
  const mouse = useRef(new THREE.Vector2(0, 0));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uRes: { value: new THREE.Vector2(size.width, size.height) },
      uColorA: { value: new THREE.Color("#08080a") },
      uColorB: { value: new THREE.Color("#1a0d08") },
      uColorC: { value: new THREE.Color("#ff5b2e") },
    }),
    [size.width, size.height]
  );

  useFrame((state, delta) => {
    if (!mat.current) return;
    mat.current.uniforms.uTime.value += delta;
    mouse.current.lerp(state.pointer, 0.06);
    mat.current.uniforms.uMouse.value.copy(mouse.current);
    mat.current.uniforms.uRes.value.set(size.width, size.height);
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={mat}
        uniforms={uniforms}
        vertexShader={vertex}
        fragmentShader={fragment}
        depthWrite={false}
        depthTest={false}
        transparent
      />
    </mesh>
  );
}
