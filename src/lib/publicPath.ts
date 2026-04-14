const NEXT_CHUNK_MARKER = "/_next/";

/**
 * Su GitHub Pages il bundle client a volte non ha `NEXT_PUBLIC_BASE_PATH` iniettato
 * (cache build, ordine di inlining). Deduciamo il basePath dagli asset Next già nel DOM.
 */
function inferAssetBaseFromDom(): string {
  if (typeof document === "undefined") return "";

  const hrefOrSrc = (el: Element) =>
    el.getAttribute("href") || el.getAttribute("src") || "";

  const candidates = [
    ...document.querySelectorAll<HTMLLinkElement>('link[href*="/_next/"]'),
    ...document.querySelectorAll<HTMLScriptElement>('script[src*="/_next/"]'),
  ];

  for (const el of candidates) {
    const raw = hrefOrSrc(el);
    if (!raw) continue;
    try {
      const pathname = new URL(raw, window.location.href).pathname;
      const idx = pathname.indexOf(NEXT_CHUNK_MARKER);
      if (idx <= 0) continue;
      return pathname.slice(0, idx);
    } catch {
      continue;
    }
  }

  return "";
}

/** Base dedotto lato client; `undefined` = non ancora riuscito (riproviamo a ogni chiamata). */
let resolvedClientBase: string | undefined;

function resolveAssetBase(): string {
  const fromEnv = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (fromEnv) return fromEnv;

  if (typeof window !== "undefined") {
    if (resolvedClientBase !== undefined) return resolvedClientBase;
    const inferred = inferAssetBaseFromDom();
    if (inferred) resolvedClientBase = inferred;
    return inferred;
  }

  return "";
}

/**
 * Prefisso per file in `/public` quando il sito usa `basePath` (es. GitHub Pages).
 * Usare per `video`, `img`/`Image src`, hash verso asset statici, ecc.
 *
 * In browser, se `NEXT_PUBLIC_BASE_PATH` manca nel bundle, il base viene dedotto da
 * `link`/`script` verso `/_next/` (sempre presenti nelle pagine Next esportate).
 */
export function publicPath(assetPath: string): string {
  const base = resolveAssetBase();
  const path = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${base}${path}`;
}
