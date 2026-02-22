import { NextResponse, type NextRequest } from "next/server";

/**
 * ─── Auth check ──────────────────────────────────────────────────────────────
 *
 * Ce proxy vérifie la présence d'un cookie de session.
 * Adapter selon le provider auth utilisé :
 *
 *   Firebase   → setter le cookie côté client après signIn :
 *                document.cookie = `${SESSION_COOKIE}=1; path=/; SameSite=Lax`
 *
 *   NextAuth   → utiliser `getToken({ req })` de next-auth/jwt
 *
 *   Supabase   → utiliser `createServerClient` de @supabase/ssr
 *                et appeler `supabase.auth.getUser()`
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** ✏️ Changer le nom du cookie si nécessaire */
const SESSION_COOKIE = "auth-session";

// Routes accessibles sans authentification
const PUBLIC_ROUTES    = ["/login", "/signup", "/payment", "/faq", "/tarifs"];
// Routes d'auth — si connecté on redirige vers /dashboard
const AUTH_ONLY_ROUTES = ["/login", "/signup"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAuthenticated = !!request.cookies.get(SESSION_COOKIE)?.value;
  const isLanding       = pathname === "/";
  const isPublic        = isLanding || PUBLIC_ROUTES.some((r) => pathname.startsWith(r));
  const isAuthOnly      = AUTH_ONLY_ROUTES.some((r) => pathname.startsWith(r));

  // Pas connecté → redirige vers /login (sauf routes publiques)
  if (!isAuthenticated && !isPublic) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Connecté + page login/signup → redirige vers /dashboard
  if (isAuthenticated && isAuthOnly) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
