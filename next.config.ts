import type { NextConfig } from "next";

// GITHUB_ACTIONS is set automatically to "true" by GitHub Actions runners,
// so this only applies basePath/assetPrefix during the Pages deploy build —
// local dev and builds stay at the site root.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "tapa-tapa";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // GitHub Pages serves static files only — no server to run the
    // Next.js image optimizer, so images are served as-is.
    unoptimized: true,
  },
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}/` : "",
  env: {
    // next/image with unoptimized:true doesn't auto-prefix local image src
    // with basePath, so components read this to build the path themselves.
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? `/${repoName}` : "",
  },
};

export default nextConfig;
