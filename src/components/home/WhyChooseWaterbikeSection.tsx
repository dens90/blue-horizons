import Image from "next/image";
import { publicPath } from "@/lib/publicPath";

// --- CONTENT ---

interface Pillar {
  title: string;
  path: string;
  text: string;
  glowClass: string;
  imageAlt: string;
}

const pillars: Pillar[] = [
  {
    title: "100% eco-sostenibile",
    path: "/assets/images/home/eco.png",
    text: "Energia pulita, zero emissioni. Pedala rispettando il mare.",
    glowClass: "bg-emerald-400/35",
    imageAlt: "Illustrazione eco-sostenibilità: energia pulita in mare",
  },
  {
    title: "Tecnologia premium",
    path: "/assets/images/home/premium.png",
    text: "Mezzi Manta5 / Schiller di ultima generazione. Sicuri e performanti.",
    glowClass: "bg-orange-400/40",
    imageAlt: "Illustrazione tecnologia premium waterbike",
  },
  {
    title: "Esperienza zero stress",
    path: "/assets/images/home/no-stress-2.png",
    text: "Prenoti in pochi minuti online, check-in rapido in spiaggia e subito in acqua.",
    glowClass: "bg-amber-300/45",
    imageAlt: "Illustrazione esperienza semplice e senza stress",
  },
];

// --- SECTION ---

export function WhyChooseWaterbikeSection() {
  return (
    <section
      className="border-b border-sky-100/80 bg-white py-20 md:py-28 lg:py-32"
      aria-labelledby="why-waterbike-heading"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <h2
          id="why-waterbike-heading"
          className="text-center text-2xl font-bold uppercase tracking-[0.12em] text-neutral-900 md:text-3xl lg:tracking-[0.14em]"
        >
          Perché waterbike tours?
        </h2>

        <ul className="mt-16 grid gap-16 md:mt-20 md:grid-cols-3 md:gap-10 lg:gap-14">
          {pillars.map((item) => (
            <li key={item.title} className="flex flex-col items-center text-center">
              <div className="relative flex h-44 w-full max-w-[200px] items-center justify-center md:h-48 md:max-w-[220px]">
                <div
                  className={`pointer-events-none absolute inset-0 m-auto h-36 w-36 rounded-full ${item.glowClass} blur-3xl md:h-44 md:w-44`}
                  aria-hidden
                />
                <div className="relative z-10 h-36 w-36 drop-shadow-[0_1px_0_rgba(0,0,0,0.08)] md:h-40 md:w-40">
                  <Image
                    src={publicPath(item.path)}
                    alt={item.imageAlt}
                    width={176}
                    height={176}
                    className="h-full w-full object-contain"
                    sizes="(max-width: 768px) 200px, 220px"
                  />
                </div>
              </div>

              <h3 className="mt-8 text-base font-bold uppercase tracking-wide text-neutral-900 md:text-lg">
                {item.title}
              </h3>
              <p className="mt-4 max-w-[280px] text-pretty text-sm leading-relaxed text-neutral-600 md:text-base">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
