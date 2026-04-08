"use client";

import Link from "next/link";
import { useState } from "react";
import { publicPath } from "@/lib/publicPath";

export function HomeHero() {
  const [videoReady, setVideoReady] = useState(true);

  return (
    <section
      className="relative flex min-h-[88vh] w-full items-center justify-center overflow-hidden"
      aria-label="Introduzione tour waterbike"
    >
      {/* Fallback se manca /video-placeholder.mp4 o errore di caricamento — TODO: video reale */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-sky-200 via-sky-400 to-sky-700"
        aria-hidden
      />

      {videoReady ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoReady(false)}
        >
          <source src={publicPath("/video-placeholder.mp4")} type="video/mp4" />
        </video>
      ) : null}

      <div
        className="absolute inset-0 bg-sky-900/35"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center sm:px-8 md:py-32">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/90">
          Marche · mare
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          Tour in waterbike nelle Marche
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/90 md:text-xl">
          {/* TODO: sottotitolo definitivo dal cliente */}
          Pedala sull&apos;acqua tra cielo e costa: esperienze guidate, facili e
          adatte a tutti.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/prenota-acquabike#prenota-acquabike"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-wb-accent)] px-8 py-3.5 text-base font-semibold text-sky-950 shadow-sm transition hover:bg-[var(--color-wb-accent-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
          >
            Noleggia Waterbike
          </Link>
        </div>
      </div>
    </section>
  );
}
