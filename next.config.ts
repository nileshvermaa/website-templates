import type { NextConfig } from "next";

// This template deploys to the website-templates GitHub Pages gallery at
//   https://<user>.github.io/website-templates/<branch>/
// so a static export with a per-branch base path is required. `next dev`
// keeps serving at localhost root because the base path is prod-only.
const repo = "website-templates";
const branch = process.env.PAGES_BRANCH ?? "highnote-clone-full";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repo}/${branch}` : "";

const nextConfig: NextConfig = {
  output: "export", // emit a fully static site to out/
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true }, // next/image optimization is unavailable on static hosts
  trailingSlash: true, // emit dir/index.html so deep links resolve under Pages
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
