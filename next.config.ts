import type { NextConfig } from "next";

/**
 * GitHub Pages: `https://<user>.github.io/<repo>/` → imposta BASE_PATH uguale al nome repo.
 * Esempio build: `BASE_PATH=/blue-horizons npm run build`
 *
 * Hosting sulla root (Vercel, Netlify, dominio senza sottocartella): NON impostare BASE_PATH.
 */
const raw = process.env.BASE_PATH?.trim() ?? "";
const basePath = raw.replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath } : {}),
  // Su GitHub Pages i path con slash finale evitano edge case con le cartelle statiche
  trailingSlash: Boolean(basePath),
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
