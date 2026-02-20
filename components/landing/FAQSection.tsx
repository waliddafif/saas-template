"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_HOMEPAGE, FAQ_ITEMS, FAQ_PRICING } from "@/lib/data/faq";

interface FAQSectionProps {
  items?: typeof FAQ_ITEMS;
  showLink?: boolean;
  title?: string;
}

function FAQList({ items, showLink = false, title = "Questions fréquentes" }: FAQSectionProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight mb-2 text-center">{title}</h2>
          {showLink && (
            <p className="text-center text-muted-foreground mb-8">
              Vous ne trouvez pas la réponse ?{" "}
              <Link href="/contact" className="text-blue-600 hover:underline">
                Contactez-nous
              </Link>
            </p>
          )}

          <Accordion type="multiple" className="mt-8 space-y-2">
            {(items ?? FAQ_HOMEPAGE).map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {showLink && (
            <div className="mt-8 text-center">
              <Link
                href="/faq"
                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
              >
                Voir toutes les questions <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/** Section FAQ pour la homepage (5 questions + lien) */
export function FAQHomepageSection() {
  return <FAQList items={FAQ_HOMEPAGE} showLink />;
}

/** Section FAQ complète */
export function FAQFullSection() {
  return <FAQList items={FAQ_ITEMS} title="Toutes les questions" />;
}

/** Section FAQ pour la page tarifs */
export function FAQPricingSection() {
  return <FAQList items={FAQ_PRICING} title="Questions sur les tarifs" />;
}
