import { ContactSocialSection } from "@/components/home/ContactSocialSection";
import { FeaturedEventsSection } from "@/components/home/FeaturedEventsSection";
import { HomeHero } from "@/components/home/HomeHero";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import Mosaico from "@/components/home/Mosaico";
import { WhyChooseWaterbikeSection } from "@/components/home/WhyChooseWaterbikeSection";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HowItWorksSection />
      <Mosaico />
      <FeaturedEventsSection />
      <WhyChooseWaterbikeSection />
     {/*  <GalleryPreviewSection /> */}
      <ContactSocialSection />
    </>
  );
}
