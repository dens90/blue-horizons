/** Prefisso per file in /public quando il sito è servito sotto un sottopercorso (es. GitHub Pages). */
export function publicPath(assetPath: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const path = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${base}${path}`;
}
