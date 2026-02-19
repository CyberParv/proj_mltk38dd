export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 space-y-6">
        <div className="h-12 w-2/3 rounded-lg bg-muted animate-pulse" />
        <div className="h-6 w-1/2 rounded-lg bg-muted animate-pulse" />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="h-48 rounded-2xl bg-muted animate-pulse" />
          <div className="h-48 rounded-2xl bg-muted animate-pulse" />
          <div className="h-48 rounded-2xl bg-muted animate-pulse" />
        </div>
        <div className="h-10 w-1/3 rounded-lg bg-muted animate-pulse" />
      </div>
    </div>
  );
}
