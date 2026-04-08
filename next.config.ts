import type { NextConfig } from "next";

// GitHub Pages: sito su https://<user>.github.io/<repo>/
const basePath = "/blue-horizons";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
