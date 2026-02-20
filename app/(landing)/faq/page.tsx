import { FAQFullSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";

export const metadata = {
  title: "FAQ — YourSaaS",
  description: "Toutes les réponses à vos questions sur YourSaaS.",
};

export default function FAQPage() {
  return (
    <>
      <FAQFullSection />
      <FinalCTASection />
    </>
  );
}
