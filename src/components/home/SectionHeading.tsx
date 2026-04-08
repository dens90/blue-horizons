type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`mb-12 max-w-2xl md:mb-16 ${alignClass}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-600">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="text-3xl font-semibold tracking-tight text-sky-950 md:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-sky-900/70">
          {description}
        </p>
      ) : null}
    </div>
  );
}
