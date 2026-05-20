import type { Config } from "tailwindcss";

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
          DEFAULT: "#0a0a0b",
          50: "#f7f6f3",
          100: "#ecebe7",
          200: "#d4d2cb",
          300: "#a8a59a",
          400: "#6b6960",
          500: "#3b3a37",
          600: "#26262a",
          700: "#1a1a1d",
          800: "#121215",
          900: "#0a0a0b",
        },
        bone: "#efece4",
        smoke: "#16161a",
        fog: "#26262a",
        steel: "#8b8d94",
        accent: {
          DEFAULT: "#ff5b2e",
          50: "#fff2ec",
          100: "#ffe3d6",
          200: "#ffbfa3",
          300: "#ff9870",
          400: "#ff7448",
          500: "#ff5b2e",
          600: "#e64517",
          700: "#bc3712",
          800: "#902c0f",
          900: "#5e1d0a",
        },
        signal: "#5c8dff",
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
        "radial-fade": "radial-gradient(ellipse at top, rgba(255,91,46,0.08), transparent 60%)",
        "spotlight": "radial-gradient(circle at 50% 0%, rgba(239,236,228,0.06), transparent 50%)",
      },
      animation: {
        "float-slow": "float 12s ease-in-out infinite",
        "drift": "drift 24s linear infinite",
        "shimmer": "shimmer 3s linear infinite",
        "blink": "blink 4s ease-in-out infinite",
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
      },
    },
  },
  plugins: [],
};
export default config;
