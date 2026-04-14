import { ContactSocialSection } from "@/components/home/ContactSocialSection";
import { FeaturedEventsSection } from "@/components/home/FeaturedEventsSection";
import { GalleryPreviewSection } from "@/components/home/GalleryPreviewSection";
import { HomeHero } from "@/components/home/HomeHero";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import Mosaico from "@/components/home/Mosaico";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HowItWorksSection />
      <Mosaico />
      <FeaturedEventsSection />
      <GalleryPreviewSection />
      <ContactSocialSection />
    </>
  );
}
