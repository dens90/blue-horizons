import React, { useId } from "react";

// --- TYPES ---
type WaterbikeSocialButtonProps = {
  href: string;
  background: string;
  icon?: React.ReactNode;
  text?: string;
  cssCustom?: string;
  textColor?: string;
  ariaLabel: string;
};

// --- SVG PATH ---
// Sagoma top-down della waterbike: due pontoni paralleli + telaio centrale
// ViewBox: 0 0 240 100
const HULL_TOP =
  "M 25,8 C 8,8 0,16 0,27 C 0,38 8,46 25,46 L 215,46 C 232,46 240,38 240,27 C 240,16 232,8 215,8 Z";

const HULL_BOTTOM =
  "M 25,54 C 8,54 0,62 0,73 C 0,84 8,92 25,92 L 215,92 C 232,92 240,84 240,73 C 240,62 232,54 215,54 Z";

// Traversa centrale che connette i due pontoni (il telaio)
const CROSSBEAM =
  "M 80,46 L 160,46 L 160,54 L 80,54 Z";

export function WaterbikeSocialButton({
  href,
  background,
  icon,
  text,
  cssCustom = "",
  textColor = "text-white",
  ariaLabel,
}: WaterbikeSocialButtonProps) {
  // useId garantisce un ID univoco per ogni istanza del bottone nella pagina
  const clipId = useId();

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative inline-block w-[240px] h-[100px]
        transition-opacity duration-200 hover:opacity-75
        focus-visible:outline focus-visible:outline-2 
        focus-visible:outline-offset-4 focus-visible:outline-current
        ${cssCustom}
      `}
      style={{ clipPath: `url(#${clipId})` }}
    >
      {/* SVG clip-path definition (invisible, solo strutturale) */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
            <path d={HULL_TOP} />
            <path d={HULL_BOTTOM} />
            <path d={CROSSBEAM} />
          </clipPath>
        </defs>
      </svg>

      {/* Sfondo colorato che viene clippato */}
      <span
        className={`absolute inset-0 ${background}`}
        aria-hidden="true"
      />

      {/* Contenuto: icona + testo centrati */}
      <span
        className={`
          relative z-10 flex h-full items-center justify-center gap-2
          ${textColor} font-semibold text-sm
        `}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {text && <span>{text}</span>}
      </span>
    </a>
  );
}