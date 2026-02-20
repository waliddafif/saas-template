export interface FAQItem {
  question: string;
  answer:   string;
  category?: "general" | "pricing" | "technical" | "security";
}

/** ✏️ Personnaliser : remplacer par les vraies questions du produit */
export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Est-ce que je peux essayer gratuitement ?",
    answer:   "Oui ! Vous bénéficiez d'un essai gratuit de 14 jours sans carte bancaire requise. Vous avez accès à toutes les fonctionnalités du plan Pro pendant cette période.",
    category: "general",
  },
  {
    question: "Comment fonctionne la facturation ?",
    answer:   "La facturation est mensuelle ou annuelle (2 mois offerts). Vous pouvez upgrader, downgrader ou annuler à tout moment depuis votre espace client.",
    category: "pricing",
  },
  {
    question: "Puis-je annuler à tout moment ?",
    answer:   "Oui, sans frais ni engagement. Si vous annulez, vous conservez l'accès jusqu'à la fin de la période en cours. Nous proposons aussi un remboursement de 30 jours sans conditions.",
    category: "pricing",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer:   "Absolument. Vos données sont hébergées en France, chiffrées au repos et en transit, et nous sommes conformes au RGPD. Vous restez propriétaire de vos données à tout moment.",
    category: "security",
  },
  {
    question: "Y a-t-il une limite d'utilisation sur le plan Pro ?",
    answer:   "Le plan Pro offre des interactions illimitées et prend en charge jusqu'à 10 utilisateurs. Pour les équipes plus grandes, notre plan Enterprise est fait pour vous.",
    category: "pricing",
  },
  {
    question: "Proposez-vous des intégrations avec mes outils existants ?",
    answer:   "Oui, nous nous intégrons avec les outils les plus populaires (Google, Microsoft 365, Slack, Zapier, etc.). Le plan Pro donne accès à toutes les intégrations disponibles.",
    category: "technical",
  },
  {
    question: "Quel support est disponible ?",
    answer:   "Tous les plans incluent le support email. Le plan Pro bénéficie d'un support prioritaire avec des temps de réponse garantis. Le plan Enterprise dispose d'un account manager dédié.",
    category: "general",
  },
  {
    question: "Combien de temps prend la configuration ?",
    answer:   "La plupart de nos clients sont opérationnels en moins de 30 minutes. Notre assistant de configuration vous guide pas à pas dès votre inscription.",
    category: "general",
  },
];

export const FAQ_HOMEPAGE = FAQ_ITEMS.slice(0, 5);
export const FAQ_PRICING   = FAQ_ITEMS.filter((f) => f.category === "pricing");
