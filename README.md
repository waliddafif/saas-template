# saas-template

Template Next.js 16 complet pour applications SaaS — landing page + app protégée.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (standalone — SSR complet) |
| UI | shadcn/ui (new-york, neutral) + Tailwind CSS v4 |
| Auth | Swappable : Firebase (défaut) / Supabase / JWT custom |
| Forms | react-hook-form + zod |
| Icons | lucide-react |
| Toasts | sonner |
| Deploy | Vercel / GCP Cloud Run / Railway / Docker |

## Démarrage rapide

```bash
cp .env.example .env.local   # Configurer Firebase + API URL
npm install
npm run dev                  # http://localhost:3000
npm run build                # OBLIGATOIRE avant commit
```

## Personnalisation (< 30 min)

1. **Nom du produit** : search & replace `YourSaaS` → `MonProduit` dans tout le projet
2. **Features** : éditer `lib/data/features.ts`
3. **Tarifs** : éditer `lib/data/pricing.ts`
4. **FAQ** : éditer `lib/data/faq.ts`
5. **Navigation app** : éditer `lib/navigation.ts`
6. **Auth provider** : modifier l'import dans `lib/auth/index.ts`
7. **Couleurs** : modifier les tokens HSL dans `app/globals.css`

## Auth routing

Le fichier `proxy.ts` (racine du projet) gère les redirections :

| Route | Non connecté | Connecté |
|-------|-------------|----------|
| `/` (landing) | ✅ Accessible | ✅ Accessible |
| `/login`, `/signup` | ✅ Accessible | → `/dashboard` |
| `/dashboard/*` | → `/login` | ✅ Accessible |
| `/faq`, `/tarifs` | ✅ Accessible | ✅ Accessible |

**Configurer la vérification de session** dans `proxy.ts` :

```ts
// Nom du cookie de session — à adapter selon le provider
const SESSION_COOKIE = "auth-session";
```

- **Firebase** : setter le cookie manuellement après `signIn` : `document.cookie = "auth-session=1; path=/; SameSite=Lax"`
- **NextAuth** : remplacer la vérification par `getToken({ req })` de `next-auth/jwt`
- **Supabase** : utiliser `createServerClient` de `@supabase/ssr` et `supabase.auth.getUser()`

## Structure

```
proxy.ts                     ← Auth routing (public / protégé / auth-only)
app/
├── layout.tsx               ← Root layout (font Manrope, metadata, Toaster)
├── globals.css              ← Design tokens (couleurs, shadows, dark mode)
├── (landing)/               ← Site marketing public
│   ├── page.tsx             ← Homepage (Hero → Features → Pricing → FAQ → CTA)
│   ├── tarifs/page.tsx      ← Page tarifs détaillée
│   └── faq/page.tsx         ← FAQ complète
├── (auth)/login/page.tsx    ← Connexion (email + Google)
└── (app)/dashboard/page.tsx ← Dashboard (zone protégée)

components/
├── landing/
│   ├── LandingShell.tsx     ← Navbar + Footer + scroll progress
│   ├── Navbar.tsx           ← Sticky, frosted glass, mobile-first
│   ├── Footer.tsx           ← 4 colonnes, dark
│   ├── HeroSection.tsx      ← Hero avec stats, trust badges, CTAs
│   ├── FeaturesSection.tsx  ← Grille 2×2 de feature cards
│   ├── PricingSection.tsx   ← 3 plans + tableau comparatif
│   ├── FAQSection.tsx       ← Accordion (homepage / full / pricing)
│   └── FinalCTASection.tsx  ← Bannière gradient bleue
├── layout/AppShell.tsx      ← Sidebar collapsible + header
└── ui/
    ├── button.tsx           ← WCAG 44px min, 6 variants
    ├── badge.tsx            ← + variants success/warning/info
    └── page-states.tsx      ← Empty / Loading / Error

lib/
├── data/                    ← ✏️ Contenu à personnaliser
│   ├── features.ts          ← Features + HERO_STATS
│   ├── pricing.ts           ← Plans + tableau comparatif
│   └── faq.ts               ← Questions / réponses
├── auth/
│   ├── index.ts             ← Changer d'auth en 1 ligne
│   ├── firebase.ts          ← Implémentation Firebase
│   └── supabase.ts          ← Stub Supabase (à compléter)
├── api.ts                   ← Fetch authentifié (auth-agnostique)
├── errors.ts                ← ApiError, ForbiddenError, RateLimitError
├── themeStore.ts            ← Dark mode (localStorage + system)
└── utils.ts                 ← cn() helper
```

## Ajouter des composants shadcn/ui

```bash
npx shadcn@latest add card dialog table tabs select
```

## Changer d'auth provider

```ts
// lib/auth/index.ts — modifier uniquement cet import
import { firebaseAuthAdapter as adapter } from "./firebase";   // Firebase (défaut)
import { supabaseAuthAdapter as adapter } from "./supabase";  // Supabase
```

## Deploy

```bash
# Vercel (recommandé — zero config)
vercel --prod

# GCP Cloud Run
gcloud run deploy mon-app --source . --region europe-west1

# Docker
docker build -t mon-app .
docker run -p 3000:3000 mon-app

# Railway / Render / Netlify
# Push sur main → déploiement automatique
```

## Notes

- `useParams()` fonctionne nativement (plus de workaround `usePathname`)
- Server Components disponibles pour le data fetching
- API Routes disponibles dans `app/api/` si besoin d'un backend léger
- Firebase Auth → init lazy via `lib/auth/firebase.ts` (SSR-safe côté client)

## Conventions

Voir `CLAUDE.md` pour les règles spécifiques au projet.
Les règles universelles (sécurité, tests, code) sont dans `~/.claude/CLAUDE.md`.
