import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";

const size = { width: 1200, height: 630 };

/**
 * Dynamic social card. Any page that does not supply its own image gets one
 * generated from its title, so every shared link has a branded preview.
 * Usage: /api/og?title=Some%20Page%20Title
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rawTitle = searchParams.get("title")?.slice(0, 110);
  const title = rawTitle && rawTitle.length > 0 ? rawTitle : siteConfig.title;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#faf8f3",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", flexWrap: "wrap", width: 56, height: 56, gap: 4 }}>
            <div style={{ width: 26, height: 26, backgroundColor: "#0f8a48", borderRadius: 3 }} />
            <div style={{ width: 26, height: 26, backgroundColor: "#e0322a", borderRadius: 3 }} />
            <div style={{ width: 26, height: 26, backgroundColor: "#1553cc", borderRadius: 3 }} />
            <div style={{ width: 26, height: 26, backgroundColor: "#ffc933", borderRadius: 3 }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 800, color: "#101010", letterSpacing: -1.5 }}>
              squareit
            </div>
            <div style={{ fontSize: 14, color: "#6b6b6b", letterSpacing: 2, marginTop: 2 }}>
              DIGITAL GROWTH SIMPLIFIED
            </div>
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: title.length > 60 ? 60 : 74,
            fontWeight: 800,
            color: "#101010",
            lineHeight: 1.05,
            letterSpacing: -2.5,
            maxWidth: 960,
          }}
        >
          {title}
        </div>

        {/* Footer bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 24, color: "#6b6b6b" }}>squareit.in</div>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 76, height: 10, backgroundColor: "#0f8a48", borderRadius: 999 }} />
            <div style={{ width: 76, height: 10, backgroundColor: "#e0322a", borderRadius: 999 }} />
            <div style={{ width: 76, height: 10, backgroundColor: "#ffc933", borderRadius: 999 }} />
            <div style={{ width: 76, height: 10, backgroundColor: "#1553cc", borderRadius: 999 }} />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    },
  );
}
