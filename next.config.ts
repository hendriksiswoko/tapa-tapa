import type { NextConfig } from "next";

// Served from a custom domain (tapatapa.sinergicreativa.com) at the site
// root via public/CNAME, so no basePath/assetPrefix is needed even though
// this is built and hosted on GitHub Pages.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    // GitHub Pages serves static files only — no server to run the
    // Next.js image optimizer, so images are served as-is.
    unoptimized: true,
  },
};

export default nextConfig;
