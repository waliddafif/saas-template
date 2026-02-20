import type { LucideIcon } from "lucide-react";
import {
  Zap, Shield, BarChart3, Users, Bell, Clock,
  Globe, Lock, Headphones, Sparkles, FileText, Calendar,
} from "lucide-react";

export interface Feature {
  id:          string;
  icon:        LucideIcon;
  color:       string;  // Tailwind bg color class
  title:       string;
  description: string;
  highlight?:  boolean; // Shown on homepage
}

/** ✏️ Personnaliser : remplacer par les vraies features du produit */
export const FEATURES: Feature[] = [
  {
    id:          "productivity",
    icon:        Zap,
    color:       "bg-blue-100 text-blue-600",
    title:       "Productivité × 3",
    description: "Automatisez les tâches répétitives et concentrez-vous sur ce qui compte vraiment.",
    highlight:   true,
  },
  {
    id:          "smart-assistant",
    icon:        Sparkles,
    color:       "bg-violet-100 text-violet-600",
    title:       "Assistant IA intégré",
    description: "Un assistant intelligent qui comprend votre contexte et répond à vos clients 24/7.",
    highlight:   true,
  },
  {
    id:          "unified-communication",
    icon:        Globe,
    color:       "bg-cyan-100 text-cyan-600",
    title:       "Communication unifiée",
    description: "Voix, email, chat et SMS dans une seule interface. Ne ratez plus aucun message.",
    highlight:   true,
  },
  {
    id:          "security",
    icon:        Shield,
    color:       "bg-emerald-100 text-emerald-600",
    title:       "Sécurité & conformité",
    description: "Hébergement France, chiffrement end-to-end, conforme RGPD. Vos données sont protégées.",
    highlight:   true,
  },
  {
    id:          "analytics",
    icon:        BarChart3,
    color:       "bg-orange-100 text-orange-600",
    title:       "Analytics en temps réel",
    description: "Tableaux de bord en direct pour piloter votre activité et identifier les opportunités.",
  },
  {
    id:          "team",
    icon:        Users,
    color:       "bg-pink-100 text-pink-600",
    title:       "Collaboration équipe",
    description: "Gérez votre équipe, attribuez des tâches et suivez la performance en un coup d'œil.",
  },
  {
    id:          "notifications",
    icon:        Bell,
    color:       "bg-yellow-100 text-yellow-600",
    title:       "Alertes proactives",
    description: "Soyez alerté avant que les problèmes n'arrivent. Ne soyez plus jamais pris par surprise.",
  },
  {
    id:          "scheduling",
    icon:        Calendar,
    color:       "bg-indigo-100 text-indigo-600",
    title:       "Calendrier intelligent",
    description: "Synchronisation multi-agendas, prise de RDV automatique et rappels intelligents.",
  },
  {
    id:          "documents",
    icon:        FileText,
    color:       "bg-teal-100 text-teal-600",
    title:       "Gestion documentaire",
    description: "Collectez, classez et retrouvez vos documents en quelques secondes grâce à l'IA.",
  },
  {
    id:          "support",
    icon:        Headphones,
    color:       "bg-rose-100 text-rose-600",
    title:       "Support dédié",
    description: "Une équipe disponible pour vous accompagner à chaque étape de votre croissance.",
  },
  {
    id:          "speed",
    icon:        Clock,
    color:       "bg-amber-100 text-amber-600",
    title:       "Réponse < 2 secondes",
    description: "Infrastructure haute disponibilité. Vos clients obtiennent une réponse immédiate.",
  },
  {
    id:          "compliance",
    icon:        Lock,
    color:       "bg-slate-100 text-slate-600",
    title:       "Audit & traçabilité",
    description: "Journal complet de toutes les actions. Conformité aux exigences réglementaires.",
  },
];

export const HIGHLIGHTED_FEATURES = FEATURES.filter((f) => f.highlight);

/** Stats affichées dans le Hero */
export const HERO_STATS = [
  { value: "10-15h",  label: "Gagnées par semaine",      color: "text-blue-600" },
  { value: "24/7",    label: "Disponibilité assistant",   color: "text-cyan-600" },
  { value: "30+",     label: "Fonctionnalités incluses",  color: "text-emerald-600" },
] as const;
