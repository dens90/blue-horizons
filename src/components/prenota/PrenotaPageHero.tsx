export function PrenotaPageHero() {
  return (
    <section
      className="border-b border-sky-100 bg-gradient-to-b from-sky-50/90 to-white pb-16 pt-12 md:pb-20 md:pt-16"
      aria-labelledby="prenota-page-title"
    >
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-600">
          Prenotazioni
        </p>
        <h1
          id="prenota-page-title"
          className="text-balance text-3xl font-semibold tracking-tight text-sky-950 md:text-4xl lg:text-5xl"
        >
          Prenota la tua acquabike
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-sky-900/80">
          {/* TODO: testo definitivo dal cliente */}
          Scegli uno slot orario e noleggia una waterbike per circa{" "}
          <strong className="font-semibold text-sky-950">un’ora</strong>. Per
          ogni fascia sono disponibili al massimo{" "}
          <strong className="font-semibold text-sky-950">5 acquabike</strong> —
          la disponibilità effettiva è gestita in fase di prenotazione (Cal.com).
        </p>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-sky-700/85">
          Più sotto trovi anche gli{" "}
          <a
            href="#prenota-eventi"
            className="font-semibold text-sky-800 underline decoration-sky-300 underline-offset-2 transition hover:text-sky-600"
          >
            eventi speciali
          </a>{" "}
          (tour al tramonto, uscite guidate): frequenza settimanale o
          bisettimanale, posti limitati.
        </p>
      </div>
    </section>
  );
}
