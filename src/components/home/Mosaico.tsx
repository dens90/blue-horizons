import Image from "next/image";
import Link from "next/link";
import React from "react";
import { lineup } from "@/constants/lineup";

const Mosaico = () => {
  return (
    <section
      id="lineup-waterbike"
      className="scroll-mt-20 bg-gradient-to-t from-sky-100/95 via-white to-sky-50/40 py-16 sm:scroll-mt-24 md:py-24"
      aria-labelledby="mosaico-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2
            id="mosaico-heading"
            className="text-2xl font-bold uppercase tracking-tight text-neutral-900 md:text-3xl"
          >
            La nostra lineup di waterbike
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-500 md:text-base">
            Quattro modelli per livelli diversi: dalla prima volta in acqua ai tour più dinamici lungo la
            costa.
          </p>
        </header>

        <div className="flex flex-col gap-4 sm:gap-2">
          {lineup.map((item, index) => {
            const imageOnRight = index % 2 === 1;

            return (
              <article
                key={item.title}
                className="grid grid-cols-1 items-center gap-8 sm:gap-2 md:grid-cols-2 lg:gap-0 mb-12 sm:mb-0"
              >
                <div
                  className={`relative aspect-4/3 w-full overflow-hidden bg-neutral-100 ${
                    imageOnRight ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>

                <div
                  className={`flex flex-col gap-4 px-1 text-left ${
                    imageOnRight ? "md:order-1 sm:pl-0" : "md:order-2 sm:pl-12"
                  }`}
                >
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400 md:text-xs">
                    {item.label}
                  </p>
                  <h3 className="text-3xl font-bold uppercase tracking-tight text-neutral-900 md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="max-w-prose text-sm leading-relaxed text-neutral-600 md:text-base">
                    {item.description}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={item.href}
                      className="inline-flex items-center justify-center rounded-md border border-neutral-900 px-5 py-1.5 text-xs font-semibold uppercase tracking-wide text-black transition-colors hover:bg-neutral-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      {item.cta}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mosaico;