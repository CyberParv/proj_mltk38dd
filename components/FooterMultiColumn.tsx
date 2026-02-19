import Link from 'next/link';

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterMultiColumnProps {
  brand?: string;
  description?: string;
  columns?: FooterColumn[];
  copyright?: string;
}

const defaultColumns: FooterColumn[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Menu', href: '/menu' },
      { label: 'Reservations', href: '/reservations' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Visit Us',
    links: [
      { label: '428 Spice Lane', href: 'https://maps.google.com/?q=428+Spice+Lane+San+Francisco+CA+94102' },
      { label: 'San Francisco, CA 94102', href: 'https://maps.google.com/?q=428+Spice+Lane+San+Francisco+CA+94102' },
      { label: '(415) 555-7890', href: 'tel:+14155557890' },
      { label: 'hello@saffronspicekitchen.com', href: 'mailto:hello@saffronspicekitchen.com' },
    ],
  },
  {
    title: 'Hours',
    links: [
      { label: 'Tue–Thu: 5:00 PM – 10:00 PM', href: '/contact' },
      { label: 'Fri–Sat: 5:00 PM – 11:00 PM', href: '/contact' },
      { label: 'Sun: 4:00 PM – 9:00 PM', href: '/contact' },
      { label: 'Mon: Closed', href: '/contact' },
    ],
  },
  {
    title: 'Social',
    links: [
      { label: 'Instagram: @saffronspicekitchen', href: 'https://instagram.com/saffronspicekitchen' },
      { label: 'Facebook: SaffronSpiceKitchenSF', href: 'https://facebook.com/SaffronSpiceKitchenSF' },
      { label: 'Twitter: @saborspice', href: 'https://twitter.com/saborspice' },
      { label: 'Private Events', href: 'mailto:events@saffronspicekitchen.com' },
    ],
  },
];

export function FooterMultiColumn({
  brand = 'Saffron Spice Kitchen',
  description = 'Authentic Indian cuisine crafted with passion, inspired by family traditions and regional flavors from across India.',
  columns = defaultColumns,
  copyright,
}: FooterMultiColumnProps) {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-heading font-semibold">{brand}</h3>
            <p className="mt-3 text-sm text-primary-foreground/70">{description}</p>
          </div>
          {columns.map(function (col) {
            return (
              <div key={col.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map(function (link) {
                    return (
                      <li key={link.href}>
                        <Link href={link.href} className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="my-8 h-px w-full bg-primary-foreground/20" />
        <p className="text-center text-sm text-primary-foreground/60">
          {copyright || '© ' + new Date().getFullYear() + ' ' + brand + '. All rights reserved.'}
        </p>
      </div>
    </footer>
  );
}
