import Image from "next/image";
import HeroImage from "@/components/HeroImage";
import CTABanner from "@/components/CTABanner";
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "About Us | Saffron Spice Kitchen",
  description: "Discover the story behind Saffron Spice Kitchen, our culinary team, and the values that guide every dish we serve.",
};

const teamMembers = [
  {
    name: "Chef Priya Sharma",
    role: "Executive Chef & Owner",
    bio: "20+ years of culinary experience, trained at the Oberoi Centre of Learning. James Beard Award nominee.",
    image: "/images/chef-priya.jpg",
  },
  {
    name: "Raj Malhotra",
    role: "Head Chef",
    bio: "Specializes in tandoor cooking and North Indian cuisine. Formerly at Taj Hotels.",
    image: "/images/chef-raj.jpg",
  },
  {
    name: "Ananya Desai",
    role: "Pastry Chef",
    bio: "Creates innovative Indian desserts blending traditional recipes with modern techniques.",
    image: "/images/chef-ananya.jpg",
  },
  {
    name: "Marcus Thompson",
    role: "General Manager",
    bio: "15 years in hospitality, ensuring every guest has an exceptional experience.",
    image: "/images/marcus.jpg",
  },
];

const values = [
  {
    title: "Authenticity",
    description: "We honor traditional recipes while embracing innovation. Our spices are imported directly from India.",
  },
  {
    title: "Quality",
    description: "We source the finest ingredients—organic produce, sustainable seafood, and humanely raised meats.",
  },
  {
    title: "Community",
    description: "We believe food brings people together. We support local farmers and give back to our community.",
  },
  {
    title: "Sustainability",
    description: "From composting to eco-friendly packaging, we're committed to reducing our environmental impact.",
  },
];

const awards = [
  {
    title: "James Beard Award Nominee",
    year: "2023",
    category: "Best Chef: West",
  },
  {
    title: "San Francisco Chronicle Top 100",
    year: "2022, 2023",
    category: "Restaurants",
  },
  {
    title: "Michelin Bib Gourmand",
    year: "2021-2024",
    category: "Quality Dining",
  },
  {
    title: "OpenTable Diners' Choice",
    year: "2020-2024",
    category: "Best Indian Restaurant",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <HeroImage
        title="Our Story"
        subtitle="A passion for authentic Indian cuisine, born from family traditions and a love for bringing people together"
        imageUrl="/images/about-hero.jpg"
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary">From Jaipur to San Francisco</p>
              <h2 className="mt-4 font-[var(--font-heading)] text-3xl md:text-5xl">A journey steeped in heritage</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Saffron Spice Kitchen was born from a simple dream: to share the authentic flavors of India that Chef Priya Sharma grew up with in her grandmother's kitchen in Jaipur.
                </p>
                <p>
                  In 2018, after years of training in India's finest hotels and restaurants across three continents, Chef Priya opened our doors in San Francisco's vibrant downtown district. What started as a small 40-seat restaurant has grown into one of the city's most beloved dining destinations.
                </p>
                <p>
                  Every dish we serve honors the regional diversity of Indian cuisine—from the rich, creamy curries of the North to the coconut-infused flavors of the South. We source our spices directly from family farms in India, ensuring authenticity in every bite.
                </p>
              </div>
            </div>
            <div className="relative h-96 w-full overflow-hidden rounded-2xl">
              <Image src="/images/restaurant-story.jpg" alt="Restaurant story" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Meet Our Team</p>
            <h2 className="mt-4 font-[var(--font-heading)] text-3xl md:text-5xl">The people behind the flavors</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {teamMembers.map((member) => (
              <Card key={member.name} className="p-6 bg-card border-border">
                <div className="flex gap-6 items-center">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] text-2xl">{member.name}</h3>
                    <p className="text-primary text-sm font-semibold">{member.role}</p>
                    <p className="mt-2 text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Our Philosophy</p>
            <h2 className="mt-4 font-[var(--font-heading)] text-3xl md:text-5xl">Values that guide every plate</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title} className="p-6 bg-card border-border">
                <h3 className="font-[var(--font-heading)] text-2xl">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Recognition</p>
            <h2 className="mt-4 font-[var(--font-heading)] text-3xl md:text-5xl">Award-winning hospitality</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {awards.map((award) => (
              <Card key={award.title} className="p-6 bg-card border-border">
                <h3 className="font-[var(--font-heading)] text-2xl">{award.title}</h3>
                <p className="mt-1 text-primary font-semibold">{award.year}</p>
                <p className="mt-2 text-muted-foreground">{award.category}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Experience Our Hospitality"
        description="We'd love to welcome you to our table."
        button={{ label: "Reserve a Table", href: "/reservations" }}
        secondaryButton={{ label: "View Our Menu", href: "/menu" }}
        backgroundImage="/images/restaurant-interior.jpg"
      />
    </div>
  );
}
