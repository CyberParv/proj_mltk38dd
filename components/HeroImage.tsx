'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroImageProps {
  imageUrl: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  overlayOpacity?: string;
}

export function HeroImage({
  imageUrl,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  overlayOpacity = 'bg-primary/60',
}: HeroImageProps) {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center bg-background">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(' + imageUrl + ')' }} />
      <div className={cn('absolute inset-0', overlayOpacity)} />
      <div className="relative z-10 container mx-auto max-w-7xl px-4 text-center text-primary-foreground">
        <p className="mb-4 inline-flex items-center rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-4 py-1 text-xs uppercase tracking-[0.2em]">Est. 2018 • Award-Winning Cuisine</p>
        <h1 className="text-4xl font-heading font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-primary-foreground/90">
          {subheadline}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8 py-6 text-base md:text-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base md:text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
