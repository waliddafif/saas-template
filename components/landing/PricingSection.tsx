import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PRICING_PLANS, PRICING_COMPARISON, TRIAL_DAYS, MONEY_BACK_DAYS } from "@/lib/data/pricing";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section id="tarifs" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Tarifs simples et transparents
          </h2>
          <p className="text-lg text-muted-foreground">
            {TRIAL_DAYS} jours d&apos;essai gratuit · Sans carte bancaire ·
            Remboursé si non satisfait sous {MONEY_BACK_DAYS} jours
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {PRICING_PLANS.map((plan) => (
            <Card
              key={plan.id}
              className={cn(
                "relative flex flex-col",
                plan.highlighted && "border-2 border-blue-500 shadow-lg",
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-3">{plan.badge}</Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="flex flex-col flex-1">
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={cn(
                    "w-full",
                    plan.highlighted &&
                      "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
                  )}
                  variant={plan.highlighted ? "default" : "outline"}
                  asChild
                >
                  <Link href="/login">{plan.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison table */}
        <details className="max-w-4xl mx-auto">
          <summary className="cursor-pointer text-center text-sm font-medium text-blue-600 hover:text-blue-700 mb-4">
            Voir le tableau comparatif détaillé
          </summary>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 font-semibold">Fonctionnalité</th>
                  {PRICING_PLANS.map((plan) => (
                    <th key={plan.id} className="text-center p-3 font-semibold">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PRICING_COMPARISON.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white dark:bg-slate-950" : "bg-muted/20"}>
                    <td className="p-3 font-medium">{row.feature}</td>
                    <td className="text-center p-3 text-muted-foreground">{row.starter}</td>
                    <td className="text-center p-3 text-muted-foreground">{row.pro}</td>
                    <td className="text-center p-3 text-muted-foreground">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>

        {/* Reinsurance */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Check className="h-4 w-4 text-emerald-500" />
            Sans engagement
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="h-4 w-4 text-emerald-500" />
            Configuration en 5 min
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="h-4 w-4 text-emerald-500" />
            Satisfait ou remboursé {MONEY_BACK_DAYS}j
          </span>
        </div>
      </div>
    </section>
  );
}
