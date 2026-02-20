import Link from "next/link";
import { Zap } from "lucide-react";

const FOOTER_LINKS = {
  Produit:    [
    { href: "/#fonctionnalites", label: "Fonctionnalités" },
    { href: "/tarifs",           label: "Tarifs" },
    { href: "/login",            label: "Connexion" },
  ],
  Ressources: [
    { href: "/faq",     label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  Légal: [
    { href: "/legal/mentions-legales", label: "Mentions légales" },
    { href: "/legal/cgu",              label: "CGU" },
    { href: "/legal/privacy",          label: "Politique RGPD" },
  ],
} as const;

/** ✏️ Personnaliser : remplacer "YourSaaS", email, et liens */
export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-white mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <Zap className="h-4 w-4 text-white" />
              </div>
              YourSaaS
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              La plateforme qui simplifie votre quotidien et booste votre productivité.
            </p>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-sm font-semibold text-white mb-3">{section}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} YourSaaS · Tous droits réservés</p>
          <p>
            <a href="mailto:contact@yoursaas.fr" className="hover:text-white transition-colors">
              contact@yoursaas.fr
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
