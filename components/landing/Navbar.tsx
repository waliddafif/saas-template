"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/#fonctionnalites", label: "Fonctionnalités" },
  { href: "/tarifs",           label: "Tarifs" },
  { href: "/faq",              label: "FAQ" },
] as const;

interface NavbarProps {
  scrollProgress?: number; // 0–100
}

/** ✏️ Personnaliser : remplacer "YourSaaS" et les liens */
export function Navbar({ scrollProgress = 0 }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Scroll progress bar */}
      {scrollProgress > 0 && (
        <div
          className="fixed top-0 left-0 z-[60] h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      )}

      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/75 backdrop-blur-xl dark:bg-slate-900/75">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>

        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Zap className="h-4 w-4" />
            </div>
            <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
              YourSaaS
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-1 rounded-full border border-border px-2 py-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-blue-50 hover:text-blue-800 dark:hover:bg-blue-950/40 dark:hover:text-blue-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Connexion</Link>
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" asChild>
              <Link href="/login">Essai gratuit</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-white/95 px-4 py-4 dark:bg-slate-900/95">
            <nav className="flex flex-col gap-1 mb-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2">
              <Button variant="outline" asChild>
                <Link href="/login">Connexion</Link>
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600" asChild>
                <Link href="/login">Essai gratuit 14 jours</Link>
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
