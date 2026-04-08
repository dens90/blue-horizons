const exampleEvents = [
  {
    title: "Tour al tramonto",
    description:
      "Uscita guidata al calar del sole, ritmo rilassato e soste foto. Circa 1 volta a settimana.",
  },
  {
    title: "Uscita di gruppo",
    description:
      "Percorso condiviso con guida, ideale per chi prova la waterbike la prima volta. Ogni due settimane.",
  },
  {
    title: "Mattina slow & caffè",
    description:
      "Slot mattutino con colazione leggera a terra (dettagli da definire). Posti molto limitati.",
  },
];

export function SpecialEventsBookingSection() {
  return (
    <section
      id="prenota-eventi"
      className="scroll-mt-24 border-t border-sky-100 bg-sky-50/40 py-12 md:py-16"
      aria-labelledby="eventi-speciali-heading"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <header className="mb-8 max-w-2xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-sky-600/90">
            Secondario · posti limitati
          </p>
          <h2
            id="eventi-speciali-heading"
            className="text-2xl font-semibold tracking-tight text-sky-950 md:text-3xl"
          >
            Prenota un evento speciale
          </h2>
          <p className="mt-3 text-base leading-relaxed text-sky-800/75">
            {/* TODO: calendario reale e tipologie evento — testo cliente */}
            Organizziamo esperienze come tour al tramonto o uscite di gruppo con
            cadenza{" "}
            <strong className="font-medium text-sky-900">settimanale o ogni due settimane</strong>
            . I posti sono ridotti rispetto al noleggio standard.
          </p>
        </header>

        <ul className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {exampleEvents.map((event) => (
            <li
              key={event.title}
              className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm shadow-sky-900/[0.03]"
            >
              <h3 className="font-semibold text-sky-950">{event.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sky-800/70">
                {event.description}
              </p>
              <a
                href="#prenota-eventi"
                className="mt-4 inline-block text-sm font-semibold text-sky-700 underline decoration-sky-300 underline-offset-2 hover:text-sky-600"
              >
                Vai al calendario eventi
              </a>
            </li>
          ))}
        </ul>

        {/*
          TODO (cliente): Inserisci qui il widget Cal.com per la prenotazione degli eventi speciali
          (event type / link diverso dal noleggio standard). Script o embed subito sopra o nel div sotto.
        */}
        <div
          id="calcom-eventi-widget"
          className="min-h-[20rem] rounded-2xl border border-dashed border-sky-200 bg-white/80 md:min-h-[24rem]"
          aria-label="Widget Cal.com eventi speciali — da integrare"
        />
      </div>
    </section>
  );
}
