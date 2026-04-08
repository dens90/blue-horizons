import Link from "next/link";
import { SectionHeading } from "./SectionHeading";

// TODO: sostituire con dati CMS / API quando disponibili
const events = [
  {
    id: "1",
    title: "Sunrise tour — Riviera del Conero",
    date: "Sabato 12 luglio 2026",
    time: "06:00 – 08:00",
  },
  {
    id: "2",
    title: "Waterbike & aperitivo",
    date: "Domenica 20 luglio 2026",
    time: "17:30 – 20:00",
  },
  {
    id: "3",
    title: "Gruppo famiglie (bambini 10+)",
    date: "Giovedì 7 agosto 2026",
    time: "10:00 – 11:30",
  },
];

export function FeaturedEventsSection() {
  return (
    <section
      id="tour"
      className="border-b border-sky-100 bg-sky-50/70 py-20 md:py-28"
      aria-labelledby="eventi-heading"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          id="eventi-heading"
          eyebrow="In programma"
          title="Eventi in evidenza"
          description="Date e titoli di esempio — TODO: collegare a calendario reale."
        />

        <ul className="grid gap-8 md:grid-cols-3">
          {events.map((event) => (
            <li
              key={event.id}
              className="flex flex-col rounded-3xl border border-white/80 bg-white p-8 shadow-sm shadow-sky-900/5"
            >
              <h3 className="text-lg font-semibold leading-snug text-sky-950">
                {event.title}
              </h3>
              <p className="mt-4 text-sm font-medium text-sky-700">{event.date}</p>
              <p className="mt-1 text-sm text-sky-900/65">{event.time}</p>
              <div className="mt-8 flex flex-1 items-end">
                <Link
                  href={`#evento-${event.id}`}
                  className="inline-flex w-full items-center justify-center rounded-full border border-sky-200 bg-white px-5 py-2.5 text-sm font-semibold text-sky-900 transition hover:border-sky-300 hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                >
                  Dettagli
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
