# CLAUDE.md — saas-template

> Les règles globales (sécurité, conventions, tests) sont dans `~/.claude/CLAUDE.md`.
> Ce fichier contient uniquement les règles **spécifiques à ce projet**.

---

## Stack

- **Framework** : Next.js 16 (`output: standalone` — SSR complet)
- **UI** : shadcn/ui (new-york, neutral) + Tailwind CSS v4
- **Auth** : Swappable via `lib/auth/index.ts` (Firebase par défaut)
- **Forms** : react-hook-form + zod
- **Icons** : lucide-react
- **Deploy** : Vercel (zero-config) ou Docker/Cloud Run

## Personnalisation rapide

1. Remplacer `YourSaaS` par le nom du produit (search & replace global)
2. Éditer `lib/data/features.ts` — features du produit
3. Éditer `lib/data/pricing.ts` — plans et tarifs
4. Éditer `lib/data/faq.ts` — questions fréquentes
5. Adapter `lib/navigation.ts` — items de navigation app
6. Changer l'auth provider si besoin : `lib/auth/index.ts`

## Structure

```
app/
├── (landing)/        ← Site marketing public (SSR)
│   ├── page.tsx      ← Homepage (Hero, Features, Pricing, FAQ, CTA)
│   ├── tarifs/       ← Page pricing détaillée
│   └── faq/          ← FAQ complète
├── (auth)/login/     ← Connexion
└── (app)/            ← Zone protégée (auth requise)
    └── dashboard/

components/landing/   ← Sections landing (Navbar, Footer, Hero...)
components/layout/    ← AppShell (sidebar collapsible)
components/ui/        ← shadcn/ui customisés (button WCAG, badge+variants...)
lib/data/             ← Contenu éditable (features, pricing, faq)
lib/auth/             ← Auth swappable (firebase / supabase / jwt)
```

## Commandes

```bash
cp .env.example .env.local
npm install
npm run dev
npm run build         # Vérifier avant commit
```

## Deploy

```bash
# Vercel (recommandé — zero config)
vercel --prod

# Docker / GCP Cloud Run
docker build -t mon-app .
gcloud run deploy mon-app --source . --region europe-west1

# Railway / Render
# Push sur main → déploiement automatique
```

## Avantages vs static export

- `useParams()` fonctionne nativement (plus de workaround `usePathname`)
- Server Components avec data fetching
- API Routes dans le même repo si besoin
- Middleware pour auth server-side
- Image Optimization automatique
- ISR (revalidation automatique des pages)
