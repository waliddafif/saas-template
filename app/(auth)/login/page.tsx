"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Zap, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { authAdapter } from "@/lib/auth/index";
import { toast } from "sonner";

const schema = z.object({
  email:    z.string().email("Email invalide"),
  password: z.string().min(8, "Minimum 8 caractères"),
});
type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setLoading(true);
    try {
      await authAdapter.signIn(data.email, data.password);
      window.location.href = "/app/dashboard";
    } catch {
      toast.error("Email ou mot de passe incorrect");
    } finally {
      setLoading(false);
    }
  }

  async function signInWithGoogle() {
    try {
      await authAdapter.signInWithProvider?.("google");
      window.location.href = "/app/dashboard";
    } catch {
      toast.error("Connexion Google échouée");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Zap className="h-5 w-5" />
            </div>
            <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
              YourSaaS
            </span>
          </Link>
          <h1 className="mt-6 text-2xl font-bold">Connexion</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Pas encore de compte ?{" "}
            <Link href="/login?mode=signup" className="text-blue-600 hover:underline">
              Créer un compte
            </Link>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="vous@exemple.fr"
              {...register("email")}
              className="mt-1 w-full h-11 rounded-md border border-input bg-background px-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-ring"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium">Mot de passe</label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              {...register("password")}
              className="mt-1 w-full h-11 rounded-md border border-input bg-background px-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-ring"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-destructive">{errors.password.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Se connecter
          </Button>
        </form>

        <div className="my-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">ou</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <Button variant="outline" className="w-full" onClick={signInWithGoogle}>
          Continuer avec Google
        </Button>
      </div>
    </div>
  );
}
