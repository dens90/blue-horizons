import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredEvents, getFeaturedEventBySlug } from "@/constants/featuredEvents";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return featuredEvents.map((event) => ({ slug: event.slug }));
}

export default async function EventoPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getFeaturedEventBySlug(slug);
  if (!event) notFound();

  return (
    <article className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="relative aspect-[21/9] max-h-[min(52vh,520px)] w-full bg-sky-200">
        <Image
          src={event.imageSrc}
          alt={event.imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-sky-950/25" aria-hidden />
      </div>

      <div className="mx-auto max-w-2xl px-6 py-12 sm:px-8 md:py-16">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600">Evento</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-sky-950 md:text-4xl">
          {event.title}
        </h1>
        <p className="mt-4 text-sm font-medium text-sky-800">
          {event.date} · {event.time}
        </p>
        <p className="mt-6 text-lg leading-relaxed text-sky-900/80">{event.description}</p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <Link
            href="/prenota-acquabike"
            className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            Prenota questo evento
          </Link>
          <Link
            href="/#tour"
            className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white px-8 py-3 text-sm font-semibold text-sky-900 transition hover:border-sky-300 hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            Torna agli eventi
          </Link>
        </div>
      </div>
    </article>
  );
}
