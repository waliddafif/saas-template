import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HIGHLIGHTED_FEATURES } from "@/lib/data/features";

export function FeaturesSection() {
  return (
    <section id="fonctionnalites" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Tout ce dont vous avez besoin, au même endroit
          </h2>
          <p className="text-lg text-muted-foreground">
            Une plateforme complète pensée pour vous faire gagner du temps
            et servir vos clients encore mieux.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {HIGHLIGHTED_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.color} mb-3`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/produit">
              Voir toutes les fonctionnalités
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
