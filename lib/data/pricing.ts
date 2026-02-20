import { Check } from "lucide-react";

export interface PricingPlan {
  id:          string;
  name:        string;
  price:       string;
  period:      string;
  description: string;
  features:    string[];
  cta:         string;
  highlighted: boolean;  // Plan mis en avant
  badge?:      string;
}

/** ✏️ Personnaliser : remplacer par les vrais plans du produit */
export const PRICING_PLANS: PricingPlan[] = [
  {
    id:          "starter",
    name:        "Starter",
    price:       "29€",
    period:      "HT/mois",
    description: "Pour les indépendants et petites équipes qui démarrent.",
    highlighted: false,
    cta:         "Commencer gratuitement",
    features: [
      "1 utilisateur",
      "100 interactions/mois",
      "Assistant IA basique",
      "Email support",
      "Intégrations essentielles",
      "Tableau de bord simple",
    ],
  },
  {
    id:          "pro",
    name:        "Pro",
    price:       "79€",
    period:      "HT/mois",
    description: "Pour les équipes en croissance qui veulent aller plus loin.",
    highlighted: true,
    badge:       "Recommandé",
    cta:         "Essai gratuit 14 jours",
    features: [
      "Jusqu'à 10 utilisateurs",
      "Interactions illimitées",
      "Assistant IA avancé",
      "Support prioritaire",
      "Toutes les intégrations",
      "Analytics en temps réel",
      "Alertes proactives",
      "Calendrier intelligent",
    ],
  },
  {
    id:          "enterprise",
    name:        "Enterprise",
    price:       "Sur devis",
    period:      "",
    description: "Pour les grandes équipes avec des besoins spécifiques.",
    highlighted: false,
    cta:         "Contacter l'équipe",
    features: [
      "Utilisateurs illimités",
      "SLA garanti 99.9%",
      "Account manager dédié",
      "Onboarding personnalisé",
      "Audit & conformité avancée",
      "Intégrations sur mesure",
      "Formation équipe incluse",
      "Contrat sur mesure",
    ],
  },
];

/** Tableau comparatif des plans */
export const PRICING_COMPARISON = [
  { feature: "Utilisateurs",          starter: "1",           pro: "10",           enterprise: "Illimité" },
  { feature: "Interactions/mois",     starter: "100",         pro: "Illimitées",   enterprise: "Illimitées" },
  { feature: "Assistant IA",          starter: "Basique",     pro: "Avancé",       enterprise: "Sur mesure" },
  { feature: "Analytics",             starter: "Simple",      pro: "Temps réel",   enterprise: "Avancé" },
  { feature: "Support",               starter: "Email",        pro: "Prioritaire",  enterprise: "Dédié 24/7" },
  { feature: "Intégrations",          starter: "5",           pro: "Illimitées",   enterprise: "Sur mesure" },
  { feature: "SLA",                   starter: "—",           pro: "99.5%",        enterprise: "99.9%" },
  { feature: "Audit trail",           starter: "—",           pro: "✓",            enterprise: "✓" },
  { feature: "SSO",                   starter: "—",           pro: "—",            enterprise: "✓" },
  { feature: "Contrat sur mesure",    starter: "—",           pro: "—",            enterprise: "✓" },
] as const;

export const TRIAL_DAYS = 14;
export const MONEY_BACK_DAYS = 30;
