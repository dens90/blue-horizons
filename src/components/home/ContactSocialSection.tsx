import { publicPath } from "@/lib/publicPath";
import { SectionHeading } from "./SectionHeading";
import Image from "next/image";

// TODO: URL profili reali
const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/", bg: "bg-sky-600 hover" },
  { label: "Instagram", href: "https://www.instagram.com/", bg: "bg-[#F8C703]" },
];

export function ContactSocialSection() {
  return (
    <section
      id="contatti"
      className="bg-gradient-to-t from-sky-100/95 via-white to-sky-50/40 py-20 md:py-28"
      aria-labelledby="contatti-heading"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          id="contatti-heading"
          eyebrow="Seguici sui nostri social"
          title="Canali Social"
          description="Scrivici per gruppi, eventi privati o collaborazioni."
        />

        <div className="flex flex-col gap-10 rounded-3xl border border-sky-100 bg-white p-8 shadow-sm shadow-sky-900/5 md:flex-row md:items-center md:justify-between md:p-12">
          <p className="max-w-md text-lg leading-relaxed text-sky-900/80">
            {/* TODO: email, telefono, sede */}
            Siamo attivi in stagione lungo la costa marchigiana. Seguici per
            aggiornamenti sulle prossime date e sui nuovi percorsi.
          </p>
          <nav aria-label="Social">
            <ul className="flex flex-wrap gap-4">
            
              <li>
                <a href="">
                <Image src={`${publicPath("/facebook-logo.svg")}`} alt="Facebook logo" width={38} height={38} />
                </a>
              </li>
              <li>
                <a href="">
                <Image src={`${publicPath("/instagram-logo.svg")}`} alt="Instagram logo" width={38} height={38} />
                </a>
              </li>
              <li>
                <a href="">
                <Image src={`${publicPath("/tiktok-logo.svg")}`} alt="TikTok logo" width={118} height={38} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
