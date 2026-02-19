import HeroImage from "@/components/HeroImage";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "Contact | Saffron Spice Kitchen",
  description: "Get in touch with Saffron Spice Kitchen for reservations, private events, catering, and general inquiries.",
};

const hours = [
  { days: "Tuesday - Thursday", time: "5:00 PM - 10:00 PM" },
  { days: "Friday - Saturday", time: "5:00 PM - 11:00 PM" },
  { days: "Sunday", time: "4:00 PM - 9:00 PM" },
  { days: "Monday", time: "Closed" },
];

const faqs = [
  {
    question: "Do you accommodate dietary restrictions?",
    answer: "Absolutely! We offer many vegetarian, vegan, and gluten-free options. Please inform your server of any allergies, and our kitchen will accommodate your needs.",
  },
  {
    question: "Is there parking available?",
    answer: "Yes, we offer complimentary valet parking for all dinner guests. Street parking and nearby garages are also available.",
  },
  {
    question: "Do you offer takeout or delivery?",
    answer: "Yes, we offer takeout for pickup. You can order through our website or by calling us directly. We also partner with DoorDash and Uber Eats for delivery.",
  },
  {
    question: "Can you accommodate large groups?",
    answer: "Yes! Our private dining room seats up to 24 guests. For parties of 8 or more in our main dining room, please call us to make arrangements.",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <HeroImage
        title="Get in Touch"
        subtitle="We'd love to hear from you. Whether you have a question, feedback, or want to plan a special event."
        imageUrl="/images/contact-hero.jpg"
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <Card className="p-8 bg-card border-border">
            <h2 className="font-[var(--font-heading)] text-3xl">Contact Information</h2>
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
            <div className="mt-6 text-sm text-muted-foreground">
              <p>Instagram: @saffronspicekitchen</p>
              <p>Facebook: SaffronSpiceKitchenSF</p>
              <p>Twitter: @saborspice</p>
            </div>
          </Card>

          <ContactForm
            title="Send Us a Message"
            description="For reservations, catering, press, or feedback, reach out and we'll respond within 24 hours."
            contactInfo={{
              address: "428 Spice Lane, San Francisco, CA",
              phone: "(415) 555-7890",
              email: "hello@saffronspicekitchen.com",
            }}
            subjects={[
              "General Inquiry",
              "Reservation Question",
              "Private Events",
              "Catering",
              "Feedback",
              "Press/Media",
              "Careers",
            ]}
          />
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Card className="p-8 bg-card border-border">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl">Find Us in Downtown San Francisco</h2>
            <p className="mt-4 text-muted-foreground">
              Located in the heart of Downtown San Francisco, just two blocks from Union Square. BART: Powell Street Station. Parking: Complimentary valet available.
            </p>
            <div className="mt-6 h-72 w-full rounded-xl border border-border bg-muted flex items-center justify-center text-sm text-muted-foreground">
              Map preview — 37.7849, -122.4094
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Frequently Asked Questions</p>
            <h2 className="mt-4 font-[var(--font-heading)] text-3xl md:text-5xl">We’re here to help</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <Card key={faq.question} className="p-6 bg-card border-border">
                <h3 className="font-[var(--font-heading)] text-2xl">{faq.question}</h3>
                <p className="mt-2 text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
