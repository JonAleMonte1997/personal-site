import { ImageResponse } from "next/og";
import { site } from "@/data/site";

// Preview social 1200×630, generado en build (sin runtime). Tema oscuro y
// acento verde, espejo del design system de LibreFit igual que el sitio.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = site.title;

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
          backgroundColor: "#000000",
          color: "#f9fafb",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#22c55e",
            letterSpacing: "0.1em",
          }}
        >
          {site.url.replace("https://", "")}
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.05,
            marginTop: 28,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            fontSize: 44,
            color: "#9ca3af",
            marginTop: 24,
            maxWidth: 980,
          }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            marginTop: 52,
            height: 8,
            width: 140,
            backgroundColor: "#22c55e",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
