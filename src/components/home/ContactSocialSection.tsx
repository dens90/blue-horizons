import { SectionHeading } from "./SectionHeading";

// TODO: URL profili reali
const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];

export function ContactSocialSection() {
  return (
    <section
      id="contatti"
      className="bg-gradient-to-b from-white to-sky-50/80 py-20 md:py-28"
      aria-labelledby="contatti-heading"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          id="contatti-heading"
          eyebrow="Restiamo in contatto"
          title="Contatti e social"
          description="Scrivici per gruppi, eventi privati o collaborazioni — TODO: testo e recapiti definitivi."
        />

        <div className="flex flex-col gap-10 rounded-3xl border border-sky-100 bg-white p-8 shadow-sm shadow-sky-900/5 md:flex-row md:items-center md:justify-between md:p-12">
          <p className="max-w-md text-lg leading-relaxed text-sky-900/80">
            {/* TODO: email, telefono, sede */}
            Siamo attivi in stagione lungo la costa marchigiana. Seguici per
            aggiornamenti su date speciali e nuovi percorsi.
          </p>

          <nav aria-label="Social">
            <ul className="flex flex-wrap gap-4">
              {socialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-sky-200 bg-[var(--color-wb-accent)]/90 px-6 py-2.5 text-sm font-semibold text-sky-950 transition hover:bg-[var(--color-wb-accent-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
