import Image from "next/image";
import Link from "next/link";
import { featuredEvents } from "@/constants/featuredEvents";
import { SectionHeading } from "./SectionHeading";

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FeaturedEventsSection() {
  return (
    <section
      id="tour"
      className="w-full border-b border-amber-200/60 bg-[radial-gradient(circle_at_top,_#FDBA74_0%,_#F97316_30%,_#EA580C_70%,_#C2410C_100%)] py-24 md:py-32 lg:py-44"
      aria-labelledby="eventi-heading"
    >
      <div className="mx-auto w-full max-w-none px-4 sm:px-6 md:px-8  ">
        <SectionHeading
          id="eventi-heading"
          align="center"
          wide
          variant="onDark"
          eyebrow="In programma"
          title="Eventi in evidenza"
          description="Esperienze guidate sul mare: scegli il tour che fa per te e apri la scheda per data, orari e dettagli."
          custom="md:mb-24"
        />

        <ul className="grid w-full grid-cols-1 gap-14 md:grid-cols-3 md:gap-6 lg:gap-8 xl:gap-10">
          {featuredEvents.map((event) => (
            <li key={event.id} className="flex w-full flex-col items-center text-center">
              <div className="relative w-full overflow-hidden rounded-2xl bg-amber-900/20 shadow-xl shadow-amber-950/20">
                <div className="relative aspect-3/4 w-full">
                  <Image
                    src={event.imageSrc}
                    alt={event.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 34vw"
                  />
                </div>
              </div>

              <h3 className="mt-8 max-w-xl text-balance text-xl font-medium leading-snug text-white/80 sm:text-2xl md:text-2xl lg:text-3xl">
                {event.title}
              </h3>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-black/80 md:text-lg font-semibold">
                {event.description}
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-white/80 md:text-sm">
                {event.date} · {event.time}
              </p>

              <div className="mt-10">
                <Link
                  href={`/eventi/${event.slug}`}
                  className="inline-flex items-center gap-2.5 rounded-md bg-black/80 px-7 py-3 text-base font-semibold text-white shadow-md transition hover:bg-white/40 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Vedi evento
                  <ArrowRightIcon className="size-4 shrink-0" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
