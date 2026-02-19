import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatarUrl?: string;
  rating?: number;
}

interface TestimonialsGridProps {
  headline: string;
  subheadline?: string;
  testimonials: Testimonial[];
}

export function TestimonialsGrid({ headline, subheadline, testimonials }: TestimonialsGridProps) {
  return (
    <section className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-heading font-semibold tracking-tight text-foreground md:text-5xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(function (t, i) {
            var initials = t.name
              .split(' ')
              .map(function (n) {
                return n[0];
              })
              .join('');
            return (
              <Card key={i} className="border bg-background">
                <CardContent className="p-6">
                  {t.rating && (
                    <div className="mb-3 flex gap-1 text-accent">
                      {Array.from({ length: t.rating }).map(function (_, j) {
                        return <Star key={j} className="h-4 w-4 fill-accent text-accent" />;
                      })}
                    </div>
                  )}
                  <p className="text-muted-foreground italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-muted flex items-center justify-center">
                      {t.avatarUrl ? (
                        <img src={t.avatarUrl} alt={t.name} className="h-full w-full object-cover" />
                      ) : (
                        <span className="text-xs font-semibold text-foreground">{initials}</span>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
