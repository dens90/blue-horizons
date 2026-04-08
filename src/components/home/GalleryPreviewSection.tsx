import { SectionHeading } from "./SectionHeading";

const placeholderCount = 6;

export function GalleryPreviewSection() {
  return (
    <section
      className="border-b border-sky-100 bg-white py-20 md:py-28"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          id="gallery-heading"
          eyebrow="Momenti"
          title="Gallery preview"
          description="Anteprima griglia — TODO: sostituire con foto reali (ottimizzate e con consensi)."
        />

        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:gap-6">
          {Array.from({ length: placeholderCount }, (_, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-sky-100/80"
            >
              <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-sky-700/50">
                Foto {i + 1}
              </span>
              {/* TODO: <Image src={...} alt="..." fill /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
