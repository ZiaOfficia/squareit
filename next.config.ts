import type { NextConfig } from "next";

// TEMPORARILY DISABLED — only the homepage is live, so these sections (and
// everything under them) redirect home instead of 404ing. Temporary (307) so
// browsers don't cache it; delete this list when the pages are restored.
const disabledSections = [
  "/about",
  "/services",
  "/portfolio",
  "/case-studies",
  "/blog",
  "/career",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
  "/refund-policy",
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // Modern formats keep Core Web Vitals (LCP) healthy — important for SEO.
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920],
    remotePatterns: [
      // Add the CDN / media host here once the backend is live.
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "squareit.in" },
    ],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Keep legacy URLs alive so existing rankings transfer cleanly.
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/blogs", destination: "/blog", permanent: true },
      { source: "/blogs/:slug", destination: "/blog/:slug", permanent: true },

      ...disabledSections.map((section) => ({
        source: `${section}/:path*`,
        destination: "/",
        permanent: false,
      })),
    ];
  },
};

export default nextConfig;
