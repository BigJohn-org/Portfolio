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
            "linear-gradient(135deg, #0a0a0b 0%, #16161a 50%, #0a0a0b 100%)",
          color: "#efece4",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#ff5b2e",
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
            Software Engineer · Stellar ecosystem · Lagos
          </p>
          <h1
            style={{
              fontSize: 88,
              lineHeight: 0.96,
              fontWeight: 500,
              letterSpacing: "-0.035em",
              margin: 0,
              maxWidth: 1000,
            }}
          >
            Full-stack engineer, writing into Stellar.
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
          <span>Lagos · WAT</span>
          <span style={{ color: "#ff5b2e" }}>
            ● Open to engineering roles · remote-friendly
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
