import { ImageResponse } from "next/og";
import { portfolioData } from "@/data/portfolio";

export const runtime = "edge";

const size = { width: 1200, height: 630 };

export async function GET() {
  void portfolioData;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #050505 0%, #081423 55%, #050505 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#00e5ff",
              boxShadow: "0 0 18px rgba(0,229,255,0.8)",
            }}
          />
          <span
            style={{
              fontSize: 14,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            Imeobong John · Portfolio
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <p
            style={{
              fontSize: 18,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              opacity: 0.55,
              margin: 0,
            }}
          >
            Backend &amp; Full-Stack Engineer · Fintech Infrastructure
          </p>
          <h1
            style={{
              fontSize: 84,
              lineHeight: 0.96,
              fontWeight: 500,
              letterSpacing: "-0.035em",
              margin: 0,
              maxWidth: 1000,
            }}
          >
            I don&apos;t just build software. I engineer digital experiences.
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 16,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            opacity: 0.6,
          }}
        >
          <span>Lagos · WAT · Stellar / Soroban &amp; Web3</span>
          <span style={{ color: "#00e5ff" }}>
            ● Open to backend / full-stack roles · remote-friendly
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
