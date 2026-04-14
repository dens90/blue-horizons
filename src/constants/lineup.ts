interface LineupItem {
  label: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export const lineup: LineupItem[] = [
  {
    label: "IDEALE PER INIZIARE",
    title: "Waterbike Easy",
    description:
      "Pensata per chi si avvicina alla pedalata sull'acqua: telaio stabile, manovre intuitive e briefing chiaro così parti sereno dal primo metro.",
    cta: "Scopri Easy",
    href: "/prenota-acquabike",
    imageSrc: "/assets/images/home/grid-01.jpg",
    imageAlt: "Waterbike Easy in tour vicino alla riva",
  },
  {
    label: "TOUR E NOLEGGIO QUOTIDIANO",
    title: "Waterbike Classic",
    description:
      "Il punto di equilibrio della flotta: comfort, ritmo sostenibile e versatilità per escursioni panoramiche in coppia o in piccolo gruppo tra cielo e costa.",
    cta: "Scopri Classic",
    href: "/prenota-acquabike",
    imageSrc: "/assets/images/home/grid-02.jpg",
    imageAlt: "Tour in waterbike Classic al tramonto sul mare",
  },
  {
    label: "PER CHI AMA PIÙ DINAMISMO",
    title: "Waterbike Sport",
    description:
      "Più reattiva e scattante per chi vuole sentire bene la pedalata sull'acqua, con un assetto pensato per tratte più vivaci senza rinunciare alla sicurezza.",
    cta: "Scopri Sport",
    href: "/prenota-acquabike",
    imageSrc: "/assets/images/home/grid-03.jpg",
    imageAlt: "Sessione in waterbike Sport in mare aperto",
  },
  {
    label: "ESPERIENZE E PEDALATORI ESPERTI",
    title: "Waterbike Performance",
    description:
      "Per chi ha già confidenza con il mare: precisione di guida e sensazioni più dirette, ideali per uscite più lunghe o quando vuoi spingere un po' di più.",
    cta: "Scopri Performance",
    href: "/prenota-acquabike",
    imageSrc: "/assets/images/home/grid-04.jpg",
    imageAlt: "Esperienza guidata con waterbike Performance",
  },
] as const;
