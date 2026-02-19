import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/components/HeroImage";
import CTABanner from "@/components/CTABanner";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import GalleryMasonry from "@/components/GalleryMasonry";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Tandoor Fired",
    description: "Authentic clay oven cooking at 900°F",
    icon: "🔥",
  },
  {
    title: "Fresh Spices",
    description: "Ground daily from whole imported spices",
    icon: "🌿",
  },
  {
    title: "Made with Love",
    description: "Family recipes passed down generations",
    icon: "❤️",
  },
];

const featuredDishes = [
  {
    name: "Lamb Rogan Josh",
    description: "Slow-braised lamb in aromatic Kashmiri spices, finished with saffron cream",
    price: "$28",
    image: "/images/rogan-josh.jpg",
    badge: "Chef's Favorite",
  },
  {
    name: "Butter Chicken",
    description: "Tandoori chicken in velvety tomato-cream sauce with fenugreek",
    price: "$24",
    image: "/images/butter-chicken.jpg",
    badge: "Most Popular",
  },
  {
    name: "Paneer Tikka Masala",
    description: "Chargrilled cottage cheese in rich onion-tomato gravy",
    price: "$22",
    image: "/images/paneer-tikka.jpg",
    badge: "Vegetarian",
  },
];

const menuPreview = [
  {
    name: "Appetizers",
    items: [
      { name: "Samosa Chaat", price: "$12" },
      { name: "Tandoori Prawns", price: "$18" },
      { name: "Aloo Tikki", price: "$10" },
    ],
  },
  {
    name: "Main Courses",
    items: [
      { name: "Chicken Biryani", price: "$26" },
      { name: "Dal Makhani", price: "$18" },
      { name: "Fish Curry", price: "$28" },
    ],
  },
  {
    name: "Breads",
    items: [
      { name: "Garlic Naan", price: "$5" },
      { name: "Peshawari Naan", price: "$7" },
      { name: "Tandoori Roti", price: "$4" },
    ],
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    title: "Google Reviews",
    quote: "The best Indian food I've ever had outside of India. The Lamb Rogan Josh transported me straight to Kashmir. Absolutely divine!",
    rating: 5,
  },
  {
    name: "David Chen",
    title: "Yelp",
    quote: "Celebrated our anniversary here and it was perfect. The ambiance, the service, and the food—all exceptional. The tasting menu is a must-try.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    title: "OpenTable",
    quote: "As someone who grew up eating Indian food, I'm very particular. Saffron Spice Kitchen exceeded all my expectations. Authentic flavors done right.",
    rating: 5,
  },
];

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Sizzling tandoori platter" },
  { src: "/images/gallery-2.jpg", alt: "Elegant dining room" },
  { src: "/images/gallery-3.jpg", alt: "Colorful spice display" },
  { src: "/images/gallery-4.jpg", alt: "Chef preparing naan" },
  { src: "/images/gallery-5.jpg", alt: "Dessert presentation" },
  { src: "/images/gallery-6.jpg", alt: "Private dining setup" },
];

const hours = [
  { days: "Tuesday - Thursday", time: "5:00 PM - 10:00 PM" },
  { days: "Friday - Saturday", time: "5:00 PM - 11:00 PM" },
  { days: "Sunday", time: "4:00 PM - 9:00 PM" },
  { days: "Monday", time: "Closed" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroImage
        title="A Journey Through the Flavors of India"
        subtitle="Experience the rich tapestry of Indian cuisine, where centuries-old recipes meet modern culinary artistry. Every dish tells a story of tradition, spice, and love."
        imageUrl="/images/hero-tandoori-spread.jpg"
        badge="Est. 2018 • Award-Winning Cuisine"
        primaryCta={{ label: "Reserve Your Table", href: "/reservations" }}
        secondaryCta={{ label: "Explore Our Menu", href: "/menu" }}
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Where Tradition Meets Innovation</p>
            <h2 className="mt-4 font-[var(--font-heading)] text-3xl md:text-5xl">Crafted with heritage, served with heart</h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              At Saffron Spice Kitchen, we honor the diverse culinary heritage of India while embracing contemporary techniques. Our chefs source the finest spices directly from Kerala, Rajasthan, and Kashmir to create dishes that transport you to the vibrant streets and royal kitchens of India.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 bg-card border-border">
                <div className="text-3xl">{feature.icon}</div>
                <h3 className="mt-4 font-[var(--font-heading)] text-2xl text-foreground">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Signature Creations</p>
            <h2 className="mt-4 font-[var(--font-heading)] text-3xl md:text-5xl">Dishes that define our culinary philosophy</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredDishes.map((dish) => (
              <Card key={dish.name} className="overflow-hidden bg-card border-border">
                <div className="relative h-56 w-full">
                  <Image src={dish.image} alt={dish.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-[var(--font-heading)] text-2xl">{dish.name}</h3>
                    <span className="text-primary font-semibold">{dish.price}</span>
                  </div>
                  <p className="mt-3 text-muted-foreground">{dish.description}</p>
                  <span className="mt-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{dish.badge}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Meet Chef Priya Sharma</p>
              <h2 className="mt-4 font-[var(--font-heading)] text-3xl md:text-5xl">Cooking with memory and soul</h2>
              <blockquote className="mt-6 border-l-4 border-primary pl-4 text-lg text-muted-foreground">
                “Cooking is not just about feeding the body—it's about nourishing the soul. Every spice I use carries the memory of my grandmother's kitchen in Jaipur.”
              </blockquote>
              <p className="mt-6 text-muted-foreground">
                With over 20 years of culinary experience and training at the Oberoi Centre of Learning, Chef Priya brings authentic regional Indian flavors to every plate. Her innovative approach has earned Saffron Spice Kitchen recognition in Food & Wine Magazine and a spot on the city's Top 10 Indian Restaurants list.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>• James Beard Award Nominee 2023</li>
                <li>• Featured in Bon Appétit</li>
                <li>• Culinary Institute of India Graduate</li>
              </ul>
            </div>
            <div className="relative h-96 w-full overflow-hidden rounded-2xl">
              <Image src="/images/chef-priya.jpg" alt="Chef Priya Sharma" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Our Menu</p>
            <h2 className="mt-4 font-[var(--font-heading)] text-3xl md:text-5xl">A curated selection from our kitchen</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {menuPreview.map((category) => (
              <Card key={category.name} className="p-6 bg-card border-border">
                <h3 className="font-[var(--font-heading)] text-2xl">{category.name}</h3>
                <div className="mt-4 space-y-3">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between text-sm">
                      <span>{item.name}</span>
                      <span className="text-primary font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button asChild variant="outline">
                    <Link href="/menu">View Full Menu</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Reserve Your Experience"
        description="Join us for an unforgettable evening of authentic Indian flavors. Private dining rooms available for special occasions. Open Tuesday - Sunday, 5:00 PM - 10:30 PM."
        button={{ label: "Book a Table", href: "/reservations" }}
        backgroundImage="/images/restaurant-interior.jpg"
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <TestimonialsGrid
            title="What Our Guests Say"
            subtitle="Average rating 4.9 from 847 reviews"
            testimonials={testimonials}
          />
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <GalleryMasonry title="A Feast for the Eyes" images={galleryImages} />
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <Card className="p-8 bg-card border-border">
              <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl">Visit Us</h2>
              <p className="mt-4 text-muted-foreground">428 Spice Lane, Downtown District, San Francisco, CA 94102</p>
              <p className="mt-2 text-muted-foreground">Phone: (415) 555-7890</p>
              <p className="mt-2 text-muted-foreground">Email: hello@saffronspicekitchen.com</p>
              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                {hours.map((item) => (
                  <div key={item.days} className="flex items-center justify-between">
                    <span>{item.days}</span>
                    <span>{item.time}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">Complimentary valet parking available.</p>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/contact">Get Directions</Link>
                </Button>
              </div>
            </Card>
            <div className="relative h-80 overflow-hidden rounded-2xl border border-border bg-muted">
              <Image src="/images/map-preview.jpg" alt="Map to Saffron Spice Kitchen" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
