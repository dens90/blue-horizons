import type { Metadata } from "next";
import { PrenotaPageHero } from "@/components/prenota/PrenotaPageHero";
import { SpecialEventsBookingSection } from "@/components/prenota/SpecialEventsBookingSection";
import { StandardAcquabikeSection } from "@/components/prenota/StandardAcquabikeSection";

export const metadata: Metadata = {
  title: "Prenota acquabike (placeholder)",
  description: "Placeholder: sostituire metadati in pre-pubblicazione.",
};

export default function PrenotaAcquabikePage() {
  return (
    <>
      <PrenotaPageHero />
      <StandardAcquabikeSection />
      <SpecialEventsBookingSection />
    </>
  );
}
