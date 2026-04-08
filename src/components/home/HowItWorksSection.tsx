import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    title: "Scegli data e tour",
    text: "Prenota online lo slot che preferisci: gruppi piccoli e orari flessibili.",
  },
  {
    title: "Briefing in spiaggia",
    text: "Ti consegniamo la waterbike, casco e tutte le indicazioni di sicurezza.",
  },
  {
    title: "Pedala sull’acqua",
    text: "Segui la guida lungo un percorso panoramico, al tuo ritmo.",
  },
];

function StepIcon({ index }: { index: number }) {
  return (
    <div
      className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-lg font-semibold text-sky-700"
      aria-hidden
    >
      {/* TODO: sostituire con icone brand / SVG */}
      {index + 1}
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section
      id="come-funziona"
      className="border-b border-sky-100 bg-white py-20 md:py-28"
      aria-labelledby="come-funziona-heading"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          id="come-funziona-heading"
          eyebrow="Semplicità"
          title="Come funziona"
          description="Tre passaggi per essere già in acqua. TODO: testi definitivi dal cliente."
        />

        <ul className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-3xl border border-sky-100/80 bg-sky-50/40 p-8 md:p-10"
            >
              <StepIcon index={i} />
              <h3 className="text-xl font-semibold text-sky-950">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-sky-900/75">{step.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
