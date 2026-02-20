import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const font = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

/** ✏️ Personnaliser : title, description, OG image */
export const metadata: Metadata = {
  title: {
    default:  "YourSaaS — Simplifiez votre activité grâce à l'IA",
    template: "%s — YourSaaS",
  },
  description:
    "YourSaaS automatise vos tâches répétitives, unifie vos communications et vous donne une vision claire de votre activité.",
  openGraph: {
    type:        "website",
    locale:      "fr_FR",
    siteName:    "YourSaaS",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${font.variable} font-sans`}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
