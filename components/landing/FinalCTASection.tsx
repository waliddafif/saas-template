import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TRIAL_DAYS } from "@/lib/data/pricing";

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          🚀 Prêt à transformer votre activité ?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
          Rejoignez des centaines de professionnels qui ont déjà gagné du temps
          et amélioré leur service client avec YourSaaS.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50 text-base h-12 px-8"
            asChild
          >
            <Link href="/login">
              Démarrer l&apos;essai gratuit {TRIAL_DAYS} jours
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/50 text-white hover:bg-white/10 text-base h-12 px-8"
            asChild
          >
            <Link href="/contact">Demander une démo</Link>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
          <span className="flex items-center gap-1.5">
            <Check className="h-4 w-4" />
            Sans carte bancaire
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="h-4 w-4" />
            Configuration en 5 min
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="h-4 w-4" />
            Annulation en 1 clic
          </span>
        </div>
      </div>
    </section>
  );
}
