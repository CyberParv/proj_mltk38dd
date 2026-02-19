import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">404 Error</p>
        <h1 className="mt-4 font-[var(--font-heading)] text-4xl md:text-5xl">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you’re looking for doesn’t exist. Explore our menu or make a reservation instead.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href="/menu">Explore the Menu</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
