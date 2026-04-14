/**
 * Prefisso per file in `/public` quando il sito usa `basePath` (es. GitHub Pages).
 * Usare per `video`, `img`/`Image src`, e ogni URL statico non gestito da `next/link`.
 */
export function publicPath(assetPath: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const path = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${base}${path}`;
}
