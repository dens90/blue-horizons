const steps = [
  { title: "Scegli orario", text: "Apri il calendario e seleziona la fascia che preferisci." },
  { title: "Inserisci i dati", text: "Nome, contatto e numero di acquabike richieste." },
  { title: "Ricevi conferma", text: "Email o messaggio con riepilogo e istruzioni per il ritiro." },
];

export function StandardAcquabikeSection() {
  return (
    <section
      id="prenota-acquabike"
      className="scroll-mt-24 bg-white py-14 md:py-20"
      aria-labelledby="standard-booking-heading"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border-2 border-sky-200/90 bg-gradient-to-b from-sky-50/80 via-white to-white p-8 shadow-xl shadow-sky-900/[0.06] md:p-12 lg:p-14">
          <header className="mb-10 max-w-3xl">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-sky-600">
              Noleggio principale
            </p>
            <h2
              id="standard-booking-heading"
              className="text-3xl font-semibold tracking-tight text-sky-950 md:text-4xl lg:text-[2.5rem]"
            >
              Prenotazione acquabike
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-sky-900/75">
              {/* TODO: dettagli su location, condizioni meteo, politiche — testo cliente */}
              Durata tipica{" "}
              <strong className="font-semibold text-sky-950">circa 1 ora</strong>
              . Massimo{" "}
              <strong className="font-semibold text-sky-950">5 acquabike</strong>{" "}
              per slot: limiti e disdette sono configurati in Cal.com.
            </p>
            <p className="mt-3 text-base leading-relaxed text-sky-800/70">
              {/* TODO: aggiornare quando le basi operative sono definite */}
              L&apos;uscita può essere in{" "}
              <strong className="font-medium text-sky-900">mare o fiume</strong>{" "}
              a seconda del giorno e delle condizioni — il team ti confermerà
              luogo e orario.
            </p>
          </header>

          {/*
            TODO (cliente): Inserisci qui il widget Cal.com per la prenotazione standard delle acquabike
            (script inline o componente React consigliato da Cal.com). Puoi sostituire il wrapper sotto
            o inserire lo snippet subito prima del div, lasciando id="calcom-acquabike-widget" se richiesto.
          */}
          <div
            id="calcom-acquabike-widget"
            className="min-h-[28rem] rounded-2xl border-2 border-dashed border-sky-300/90 bg-white/90 md:min-h-[32rem]"
            aria-label="Widget Cal.com noleggio acquabike — da integrare"
          />

          <div className="mt-12 border-t border-sky-100 pt-10">
            <h3 className="text-lg font-semibold text-sky-950">Come funziona</h3>
            <ol className="mt-6 grid gap-6 sm:grid-cols-3 sm:gap-8">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-wb-accent)] text-sm font-bold text-sky-950"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-sky-950">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-sky-800/75">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
