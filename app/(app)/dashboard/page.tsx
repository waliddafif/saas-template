export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Bienvenue sur votre espace YourSaaS.</p>
      </div>

      {/* KPI cards placeholder */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {["Métrique 1", "Métrique 2", "Métrique 3", "Métrique 4"].map((label) => (
          <div key={label} className="rounded-xl border border-border bg-card p-6 shadow-xs">
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="mt-2 text-3xl font-bold">—</p>
          </div>
        ))}
      </div>

      {/* Content placeholder */}
      <div className="rounded-xl border border-border bg-card p-8 text-center text-muted-foreground shadow-xs">
        ✏️ Ajouter ici les widgets et graphiques du dashboard
      </div>
    </div>
  );
}
