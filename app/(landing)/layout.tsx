import { LandingShell } from "@/components/landing/LandingShell";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return <LandingShell>{children}</LandingShell>;
}
