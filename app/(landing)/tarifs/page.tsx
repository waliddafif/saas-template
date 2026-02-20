import { PricingSection }   from "@/components/landing/PricingSection";
import { FAQPricingSection } from "@/components/landing/FAQSection";
import { FinalCTASection }   from "@/components/landing/FinalCTASection";

export const metadata = {
  title: "Tarifs — YourSaaS",
  description: "Des tarifs simples et transparents. Essai gratuit 14 jours sans carte bancaire.",
};

export default function TarifsPage() {
  return (
    <>
      <div className="py-16 text-center bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Tarifs</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Simple, transparent, sans surprise. Changez de plan à tout moment.
        </p>
      </div>
      <PricingSection />
      <FAQPricingSection />
      <FinalCTASection />
    </>
  );
}
