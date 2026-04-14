import { publicPath } from "@/lib/publicPath";

export type FeaturedEvent = {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  time: string;
  imageSrc: string;
  imageAlt: string;
};

export const featuredEvents: FeaturedEvent[] = [
  {
    id: "1",
    slug: "sunrise-conero",
    title: "Sunrise tour — Conero",
    description:
      "Partenza all’alba in waterbike: mare calmo, luce morbida sulla riviera e briefing dedicato ai primi passi in acqua.",
    date: "Sabato 12 luglio 2026",
    time: "06:00 – 08:00",
    imageSrc: publicPath("/assets/images/home/grid-01.jpg"),
    imageAlt: "Tour all’alba in waterbike lungo la costa del Conero",
  },
  {
    id: "2",
    slug: "waterbike-aperitivo",
    title: "Waterbike & aperitivo",
    description:
      "Percorso leggero al tramonto e momento conviviale a riva: ideale per gruppi di amici o team building sul mare.",
    date: "Domenica 20 luglio 2026",
    time: "17:30 – 20:00",
    imageSrc: publicPath("/assets/images/events/event-02.jpg"),
    imageAlt: "Gruppo in waterbike al tramonto prima dell’aperitivo",
  },
  {
    id: "3",
    slug: "famiglie-10",
    title: "Gruppo famiglie (10+)",
    description:
      "Turni brevi, ritmo tranquillo e attenzione ai più giovani: pedalare sull’acqua in sicurezza insieme ai ragazzi dai 10 anni.",
    date: "Giovedì 7 agosto 2026",
    time: "10:00 – 11:30",
    imageSrc: publicPath("/assets/images/home/grid-03.jpg"),
    imageAlt: "Famiglie in waterbike vicino alla spiaggia",
  },
];

export function getFeaturedEventBySlug(slug: string): FeaturedEvent | undefined {
  return featuredEvents.find((e) => e.slug === slug);
}
