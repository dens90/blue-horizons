type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Intestazione più larga (es. sezioni full-bleed in home) */
  wide?: boolean;
  /** Testi chiari su sfondo scuro (es. gradient arancio) */
  variant?: "default" | "onDark";
  custom?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  wide = false,
  variant = "default",
  custom,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const widthClass = wide ? "max-w-4xl lg:max-w-5xl" : "max-w-2xl";

  const eyebrowClass =
    variant === "onDark"
      ? "text-sm font-medium uppercase tracking-[0.2em] text-amber-100/90"
      : "text-sm font-medium uppercase tracking-[0.2em] text-sky-600";

  const titleClass =
    variant === "onDark"
      ? "text-3xl font-semibold tracking-tight text-white md:text-4xl"
      : "text-3xl font-semibold tracking-tight text-sky-950 md:text-4xl";

  const descriptionClass =
    variant === "onDark" ? "text-lg leading-relaxed text-white/85" : "text-lg leading-relaxed text-sky-900/70";

  return (
    <div className={`mb-12 md:mb-16 ${widthClass} ${alignClass} ${custom ?? ""}`}>
      {eyebrow ? <p className={`mb-3 ${eyebrowClass}`}>{eyebrow}</p> : null}
      <h2 id={id} className={titleClass}>
        {title}
      </h2>
      {description ? <p className={`mt-4 ${descriptionClass}`}>{description}</p> : null}
    </div>
  );
}
