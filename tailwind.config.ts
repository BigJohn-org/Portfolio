import type { Config } from "tailwindcss";

/**
 * Deep-space design tokens.
 *
 * ink     — void black          #050505
 * navy    — midnight navy       #081423
 * smoke   — dark graphite       #0B1220
 * fog     — raised surface      #16213A
 * bone    — crisp white         #F8FAFC
 * steel   — cool light gray     #94A3B8
 * accent  — electric cyan       #00E5FF
 * signal  — royal purple        #6C5CE7
 * aurora  — aurora green        #00FFA3
 * magenta — soft magenta        #EC4899
 * copper  — structural copper   #B87333
 * neon    — neon blue           #3B82F6
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1680px",
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#050505",
          50: "#f2f6fc",
          100: "#e2eaf5",
          200: "#c3d2e6",
          300: "#94aac9",
          400: "#5f7ba3",
          500: "#3d5680",
          600: "#243B5C",
          700: "#16213A",
          800: "#0B1220",
          900: "#050505",
        },
        navy: "#081423",
        bone: "#F8FAFC",
        smoke: "#0B1220",
        fog: "#16213A",
        steel: "#94A3B8",
        accent: {
          DEFAULT: "#00E5FF",
          50: "#ecfeff",
          100: "#cffcfe",
          200: "#a5f6fc",
          300: "#67ecf9",
          400: "#22d8ee",
          500: "#00E5FF",
          600: "#0299b8",
          700: "#0a7a94",
          800: "#116278",
          900: "#135166",
        },
        signal: "#6C5CE7",
        aurora: "#00FFA3",
        magenta: "#EC4899",
        copper: "#B87333",
        neon: "#3B82F6",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(4rem, 10vw, 9rem)", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
        "display-xl": ["clamp(3rem, 7vw, 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "eyebrow": ["0.72rem", { lineHeight: "1", letterSpacing: "0.18em" }],
      },
      letterSpacing: {
        tightest: "-0.045em",
        editorial: "-0.025em",
      },
      transitionTimingFunction: {
        glide: "cubic-bezier(0.16, 1, 0.3, 1)",
        slip: "cubic-bezier(0.22, 1, 0.36, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        ease: "cubic-bezier(0.45, 0, 0.55, 1)",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        900: "900ms",
        1200: "1200ms",
      },
      backgroundImage: {
        "grain": "url('/textures/grain.png')",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        "radial-fade": "radial-gradient(ellipse at top, rgba(0,229,255,0.08), transparent 60%)",
        "spotlight": "radial-gradient(circle at 50% 0%, rgba(248,250,252,0.06), transparent 50%)",
      },
      boxShadow: {
        "glow-cyan": "0 0 24px -6px rgba(0,229,255,0.5), 0 0 64px -12px rgba(0,229,255,0.25)",
        "glow-purple": "0 0 24px -6px rgba(108,92,231,0.5), 0 0 64px -12px rgba(108,92,231,0.25)",
        "glow-aurora": "0 0 24px -6px rgba(0,255,163,0.45), 0 0 64px -12px rgba(0,255,163,0.2)",
        "island": "0 30px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,229,255,0.06)",
      },
      animation: {
        "float-slow": "float 12s ease-in-out infinite",
        "float-slower": "float 18s ease-in-out infinite",
        "drift": "drift 24s linear infinite",
        "shimmer": "shimmer 3s linear infinite",
        "blink": "blink 4s ease-in-out infinite",
        "breathe": "breathe 4.5s ease-in-out infinite",
        "orbit": "orbit 14s linear infinite",
        "orbit-reverse": "orbit 18s linear infinite reverse",
        "pulse-glow": "pulseGlow 3.2s ease-in-out infinite",
        "scan": "scan 6s linear infinite",
        "spin-slow": "spin 22s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        drift: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        blink: {
          "0%, 92%, 100%": { transform: "scaleY(1)" },
          "96%": { transform: "scaleY(0.1)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.015)", opacity: "0.92" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", filter: "brightness(1)" },
          "50%": { opacity: "1", filter: "brightness(1.3)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
