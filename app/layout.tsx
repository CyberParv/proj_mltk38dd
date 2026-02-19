import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FooterMultiColumn from "@/components/FooterMultiColumn";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Saffron Spice Kitchen | Authentic Indian Restaurant in San Francisco",
  description: "Experience award-winning Indian cuisine at Saffron Spice Kitchen. Authentic tandoor dishes, regional curries, and warm hospitality in the heart of San Francisco. Reserve your table today.",
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Reservations", href: "/reservations" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${cormorant.variable} bg-background text-foreground min-h-screen flex flex-col`}>
        <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-[var(--font-heading)] text-2xl font-semibold text-primary">
              Saffron Spice Kitchen
            </Link>
            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="hidden md:block">
              <Button asChild>
                <Link href="/reservations">Reserve a Table</Link>
              </Button>
            </div>
            <div className="md:hidden">
              <Button asChild variant="outline">
                <Link href="/menu">Menu</Link>
              </Button>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <FooterMultiColumn
          brand="Saffron Spice Kitchen"
          description="Authentic Indian cuisine crafted with passion in the heart of San Francisco."
          columns={[
            {
              title: "Visit",
              links: [
                { label: "428 Spice Lane", href: "https://maps.google.com" },
                { label: "Downtown District", href: "https://maps.google.com" },
                { label: "San Francisco, CA 94102", href: "https://maps.google.com" },
              ],
            },
            {
              title: "Hours",
              links: [
                { label: "Tue-Thu: 5:00 PM - 10:00 PM", href: "/reservations" },
                { label: "Fri-Sat: 5:00 PM - 11:00 PM", href: "/reservations" },
                { label: "Sun: 4:00 PM - 9:00 PM", href: "/reservations" },
                { label: "Mon: Closed", href: "/reservations" },
              ],
            },
            {
              title: "Contact",
              links: [
                { label: "(415) 555-7890", href: "tel:+14155557890" },
                { label: "hello@saffronspicekitchen.com", href: "mailto:hello@saffronspicekitchen.com" },
                { label: "Private Events", href: "mailto:events@saffronspicekitchen.com" },
              ],
            },
            {
              title: "Explore",
              links: [
                { label: "Menu", href: "/menu" },
                { label: "Reservations", href: "/reservations" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ],
            },
          ]}
          bottomText="© 2024 Saffron Spice Kitchen. All rights reserved."
          socialLinks={[
            { label: "Instagram", href: "https://instagram.com/saffronspicekitchen" },
            { label: "Facebook", href: "https://facebook.com/SaffronSpiceKitchenSF" },
            { label: "Twitter", href: "https://twitter.com/saborspice" },
          ]}
        />
      </body>
    </html>
  );
}
