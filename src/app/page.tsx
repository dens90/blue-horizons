import { ContactSocialSection } from "@/components/home/ContactSocialSection";
import { FeaturedEventsSection } from "@/components/home/FeaturedEventsSection";
import { GalleryPreviewSection } from "@/components/home/GalleryPreviewSection";
import { HomeHero } from "@/components/home/HomeHero";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HowItWorksSection />
      <FeaturedEventsSection />
      <GalleryPreviewSection />
      <ContactSocialSection />
    </>
  );
}
