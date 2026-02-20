import { HeroSection }      from "@/components/landing/HeroSection";
import { FeaturesSection }   from "@/components/landing/FeaturesSection";
import { PricingSection }    from "@/components/landing/PricingSection";
import { FAQHomepageSection } from "@/components/landing/FAQSection";
import { FinalCTASection }   from "@/components/landing/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <FAQHomepageSection />
      <FinalCTASection />
    </>
  );
}
