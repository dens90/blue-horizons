import { publicPath } from "@/lib/publicPath";
import { SectionHeading } from "./SectionHeading";

// --- ICONS (inline SVG, nessuna dipendenza) ---

function IconCalendar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 2v3M16 2v3M3.5 9h17M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconDelivery({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="11"
        r="2.25"
        stroke="currentColor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 22a10 10 0 100-20 10 10 0 000 20zM12 6v6l4 2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// --- CONTENT ---

const steps = [
  {
    title: "Prenoti la waterbike",
    text: "Dal sito scegli data, fascia oraria e — se previsto — il modello. Ricevi conferma e promemoria con il punto d’incontro e cosa portare in spiaggia.",
    Icon: IconCalendar,
  },
  {
    title: "Ti consegniamo la waterbike",
    text: "All’orario concordato ti aspettiamo in zona spiaggia: consegna del mezzo, casco se incluso, regolazione sella e briefing sicurezza prima di entrare in acqua.",
    Icon: IconDelivery,
  },
  {
    title: "Tempo di utilizzo",
    text: "Il noleggio è legato allo slot prenotato: rispetta orario di inizio e fine così possiamo consegnare il turno a chi viene dopo. Per estensioni, scrivici con anticipo.",
    Icon: IconClock,
  },
] as const;

// --- SECTION ---

export function HowItWorksSection() {
  return (
    <section
      id="come-funziona"
      className="relative overflow-hidden bg-gradient-to-b from-sky-100/95 via-white to-sky-50/40 py-20 md:py-28 lg:py-32"
      aria-labelledby="come-funziona-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(14,165,233,0.14),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="mb-4 flex justify-center md:mb-6">
          <span className="inline-flex items-center rounded-md border border-sky-200/80 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-800 shadow-sm shadow-sky-900/5">
            L&apos;ESPERIENZA INIZIA QUI
          </span>
        </div>

        <SectionHeading
          id="come-funziona-heading"
          align="center"
          wide
          eyebrow="Pochi passi verso il mare"
          title="Come funziona il noleggio"
          description="Tre momenti semplici per passare dallo schermo della tua camera al blu dell&apos;orizzonte. Ecco come ci organizziamo:"
        />

        <div className="relative">
          <div
            className="pointer-events-none absolute left-[8%] right-[8%] top-[2.25rem] hidden h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent md:block"
            aria-hidden
          />

          <ol
            className="relative grid list-none gap-8 p-0 md:grid-cols-3 md:gap-6 lg:gap-8"
            aria-label="Tre passaggi: prenotazione, consegna e tempo di utilizzo"
          >
            {steps.map((step, i) => {
              const { Icon } = step;
              return (
                <li
                  key={step.title}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 mb-6 flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-sky-700 text-white shadow-lg shadow-sky-900/25 ring-4 ring-white">
                    <Icon className="h-8 w-8" />
                    <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-sky-950 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                  </div>

                  <div className="w-full flex-1 rounded-3xl border border-sky-100/90 bg-white/95 p-8 shadow-md shadow-sky-900/[0.04] ring-1 ring-sky-50 backdrop-blur-sm md:pt-10">
                    <h3 className="text-lg font-semibold tracking-tight text-sky-950 md:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-pretty text-sm leading-relaxed text-sky-900/75 md:text-base">
                      {step.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-16 flex flex-col items-center border-t border-sky-200/60 pt-12 text-center md:mt-20 md:pt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
            Prossimo passo
          </p>
          <p className="mx-auto mt-3 max-w-lg text-pretty text-base leading-relaxed text-sky-900/80 md:text-lg">
            Sotto trovi tutte le waterbike prenotabili: confronta modelli e apri
            la scheda per dettagli e disponibilità.
          </p>
          {/*
            Hash con <Link> in App Router spesso non scrolla al target: usiamo <a> nativo.
            publicPath: href corretto anche con BASE_PATH (GitHub Pages).
          */}
          <a
            href={publicPath("#lineup-waterbike")}
            className="mt-8 inline-flex items-center justify-center rounded-md bg-sky-600 hover:opacity-60 px-8 py-3 text-sm font-semibold text-white shadow-md shadow-sky-900/15 transition hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            Vedi le waterbike prenotabili
          </a>
        </div>
      </div>
    </section>
  );
}
