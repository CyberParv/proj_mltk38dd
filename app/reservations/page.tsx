import HeroImage from "@/components/HeroImage";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const metadata = {
  title: "Reservations | Saffron Spice Kitchen",
  description: "Reserve your table at Saffron Spice Kitchen. Book online or call for parties of 8 or more.",
};

const timeSlots = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
];

const occasions = [
  "Birthday",
  "Anniversary",
  "Business Dinner",
  "Date Night",
  "Other",
];

const policies = [
  {
    title: "Cancellation",
    text: "Please cancel at least 4 hours in advance to avoid a $25 per person fee.",
  },
  {
    title: "Late Arrival",
    text: "Tables are held for 15 minutes past reservation time.",
  },
  {
    title: "Large Parties",
    text: "Groups of 8+ require a credit card to hold the reservation.",
  },
  {
    title: "Dress Code",
    text: "Smart casual attire is appreciated.",
  },
];

export default function ReservationsPage() {
  return (
    <div className="flex flex-col">
      <HeroImage
        title="Reserve Your Table"
        subtitle="Join us for an unforgettable dining experience. For parties of 8 or more, please call us directly."
        imageUrl="/images/dining-room.jpg"
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <Card className="p-8 bg-card border-border">
              <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl">Make a Reservation</h2>
              <p className="mt-2 text-muted-foreground">Tables are available Tuesday through Sunday. Maximum party size online: 8 guests.</p>
              <form className="mt-8 grid gap-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@email.com" />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="(415) 555-7890" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="party">Party Size</Label>
                    <Input id="party" type="number" min={1} max={8} placeholder="2" />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <select id="time" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="occasion">Occasion</Label>
                  <select id="occasion" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
                    {occasions.map((occasion) => (
                      <option key={occasion} value={occasion}>
                        {occasion}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="requests">Special Requests</Label>
                  <Textarea id="requests" placeholder="Dietary needs, seating preferences, or other notes" />
                </div>
                <Button type="submit">Reserve Table</Button>
              </form>
            </Card>

            <Card className="p-8 bg-muted border-border">
              <h3 className="font-[var(--font-heading)] text-2xl">Private Dining</h3>
              <p className="mt-2 text-muted-foreground">
                Our elegant private dining room accommodates up to 24 guests, perfect for celebrations, corporate events, and intimate gatherings. Custom menus available.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>• Customized tasting menus</li>
                <li>• Dedicated service staff</li>
                <li>• Audio-visual equipment</li>
                <li>• Complimentary valet parking</li>
              </ul>
              <div className="mt-6">
                <Button asChild variant="outline">
                  <a href="mailto:events@saffronspicekitchen.com">Inquire About Private Events</a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Reservation Policies</p>
            <h2 className="mt-4 font-[var(--font-heading)] text-3xl md:text-5xl">Know before you go</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {policies.map((policy) => (
              <Card key={policy.title} className="p-6 bg-card border-border">
                <h3 className="font-[var(--font-heading)] text-2xl">{policy.title}</h3>
                <p className="mt-2 text-muted-foreground">{policy.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
