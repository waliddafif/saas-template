"use client";

import Link from "next/link";
import { CheckCircle2, Server, Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HERO_STATS } from "@/lib/data/features";

/** ✏️ Personnaliser : headline, sous-titre, badges, stats, trust */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">

          {/* Badges */}
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            <Badge variant="info">✨ Nouveau : Assistant IA v2</Badge>
            <Badge variant="success">🇫🇷 Hébergé en France</Badge>
            <Badge variant="secondary">🔒 Conforme RGPD</Badge>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Simplifiez votre activité{" "}
            <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
              grâce à l&apos;IA
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-xl text-muted-foreground md:text-2xl max-w-2xl mx-auto">
            YourSaaS automatise vos tâches répétitives, unifie vos communications
            et vous donne une vision claire de votre activité en temps réel.
          </p>

          {/* CTAs */}
          <div className="mb-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-base h-12 px-8"
              asChild
            >
              <Link href="/login">Essayer gratuitement 14 jours</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base h-12 px-8" asChild>
              <Link href="/#fonctionnalites">Voir les fonctionnalités</Link>
            </Button>
          </div>

          {/* Stats glass card */}
          <div className="glass rounded-2xl p-6 grid grid-cols-3 gap-4 mb-8">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Server className="h-4 w-4 text-blue-500" />
              Hébergement France
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-emerald-500" />
              Conforme RGPD
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="h-4 w-4 text-violet-500" />
              Données chiffrées
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-cyan-500" />
              Sans carte bancaire
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
