import { ImageResponse } from "next/og";
import { site } from "@/data/site";

// Branded 1200×630 social preview, generated at build time (no runtime).
// Dark theme + cyan accent, consistent with the site design system.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.jobTitle}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0d1117",
          color: "#e6edf3",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#06b6d4",
            letterSpacing: "0.1em",
          }}
        >
          {site.url.replace("https://", "")}
        </div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 700,
            lineHeight: 1.05,
            marginTop: 28,
          }}
        >
          {site.name}
        </div>
        <div style={{ fontSize: 46, color: "#8b949e", marginTop: 16 }}>
          {site.jobTitle}
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#8b949e",
            marginTop: 44,
            maxWidth: 940,
          }}
        >
          I build AI systems that survive the real world.
        </div>
        <div
          style={{
            marginTop: 52,
            height: 8,
            width: 140,
            backgroundColor: "#06b6d4",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
