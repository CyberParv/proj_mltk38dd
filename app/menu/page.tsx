import HeroImage from "@/components/HeroImage";
import CTABanner from "@/components/CTABanner";
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "Menu | Saffron Spice Kitchen",
  description: "Explore the full menu at Saffron Spice Kitchen, featuring tandoor specialties, regional curries, biryanis, and handcrafted desserts.",
};

const menuCategories = [
  {
    name: "Appetizers",
    description: "Begin your journey with these traditional starters",
    items: [
      {
        name: "Samosa Chaat",
        description: "Crispy pastries filled with spiced potatoes, topped with chickpeas, yogurt, and chutneys",
        price: "$12",
        dietary: ["vegetarian"],
      },
      {
        name: "Tandoori Prawns",
        description: "Jumbo prawns marinated in yogurt and spices, charred in our tandoor",
        price: "$18",
        dietary: ["gluten-free"],
      },
      {
        name: "Aloo Tikki",
        description: "Golden potato patties with mint chutney and tamarind",
        price: "$10",
        dietary: ["vegetarian", "vegan"],
      },
      {
        name: "Chicken Tikka",
        description: "Boneless chicken marinated in aromatic spices, grilled to perfection",
        price: "$14",
        dietary: ["gluten-free"],
      },
      {
        name: "Vegetable Pakoras",
        description: "Assorted vegetables in chickpea batter, served with mint chutney",
        price: "$11",
        dietary: ["vegetarian", "vegan"],
      },
    ],
  },
  {
    name: "Tandoor Specialties",
    description: "From our traditional clay oven, heated to 900°F",
    items: [
      {
        name: "Tandoori Chicken",
        description: "Half chicken marinated overnight in yogurt and Kashmiri spices",
        price: "$24",
        dietary: ["gluten-free"],
      },
      {
        name: "Seekh Kebab",
        description: "Minced lamb with fresh herbs and spices, skewered and grilled",
        price: "$22",
        dietary: ["gluten-free"],
      },
      {
        name: "Paneer Tikka",
        description: "Cottage cheese cubes marinated in spiced yogurt, chargrilled",
        price: "$18",
        dietary: ["vegetarian", "gluten-free"],
      },
      {
        name: "Mixed Grill Platter",
        description: "Chef's selection of tandoori chicken, seekh kebab, and prawns",
        price: "$38",
        dietary: ["gluten-free"],
      },
    ],
  },
  {
    name: "Curries & Main Courses",
    description: "Slow-cooked with authentic spice blends",
    items: [
      {
        name: "Butter Chicken",
        description: "Tandoori chicken in velvety tomato-cream sauce with fenugreek",
        price: "$24",
        dietary: ["gluten-free"],
      },
      {
        name: "Lamb Rogan Josh",
        description: "Slow-braised lamb in aromatic Kashmiri spices with saffron",
        price: "$28",
        dietary: ["gluten-free"],
      },
      {
        name: "Chicken Tikka Masala",
        description: "Grilled chicken in rich onion-tomato gravy",
        price: "$24",
        dietary: ["gluten-free"],
      },
      {
        name: "Goan Fish Curry",
        description: "Fresh catch in tangy coconut curry with kokum",
        price: "$28",
        dietary: ["gluten-free"],
      },
      {
        name: "Lamb Vindaloo",
        description: "Fiery Goan curry with tender lamb and potatoes",
        price: "$26",
        dietary: ["gluten-free", "spicy"],
      },
      {
        name: "Prawn Malabari",
        description: "Tiger prawns in creamy coconut curry from Kerala",
        price: "$30",
        dietary: ["gluten-free"],
      },
    ],
  },
  {
    name: "Vegetarian Mains",
    description: "Celebrating India's rich vegetarian heritage",
    items: [
      {
        name: "Paneer Tikka Masala",
        description: "Chargrilled cottage cheese in rich onion-tomato gravy",
        price: "$22",
        dietary: ["vegetarian", "gluten-free"],
      },
      {
        name: "Dal Makhani",
        description: "Black lentils slow-cooked overnight with cream and butter",
        price: "$18",
        dietary: ["vegetarian", "gluten-free"],
      },
      {
        name: "Palak Paneer",
        description: "Cottage cheese in creamy spinach sauce",
        price: "$20",
        dietary: ["vegetarian", "gluten-free"],
      },
      {
        name: "Chana Masala",
        description: "Chickpeas in tangy tomato-onion gravy",
        price: "$18",
        dietary: ["vegetarian", "vegan", "gluten-free"],
      },
      {
        name: "Baingan Bharta",
        description: "Smoky roasted eggplant mashed with onions and spices",
        price: "$18",
        dietary: ["vegetarian", "vegan", "gluten-free"],
      },
    ],
  },
  {
    name: "Biryani & Rice",
    description: "Fragrant basmati rice dishes",
    items: [
      {
        name: "Chicken Biryani",
        description: "Layered basmati rice with spiced chicken, saffron, and fried onions",
        price: "$26",
        dietary: ["gluten-free"],
      },
      {
        name: "Lamb Biryani",
        description: "Tender lamb with aromatic rice, served with raita",
        price: "$28",
        dietary: ["gluten-free"],
      },
      {
        name: "Vegetable Biryani",
        description: "Seasonal vegetables with fragrant basmati and whole spices",
        price: "$22",
        dietary: ["vegetarian", "gluten-free"],
      },
      {
        name: "Jeera Rice",
        description: "Basmati rice tempered with cumin seeds",
        price: "$6",
        dietary: ["vegetarian", "vegan", "gluten-free"],
      },
    ],
  },
  {
    name: "Breads",
    description: "Fresh from our tandoor",
    items: [
      {
        name: "Plain Naan",
        description: "Traditional leavened bread",
        price: "$4",
        dietary: ["vegetarian"],
      },
      {
        name: "Garlic Naan",
        description: "Topped with fresh garlic and cilantro",
        price: "$5",
        dietary: ["vegetarian"],
      },
      {
        name: "Peshawari Naan",
        description: "Stuffed with coconut, raisins, and almonds",
        price: "$7",
        dietary: ["vegetarian"],
      },
      {
        name: "Tandoori Roti",
        description: "Whole wheat bread from the clay oven",
        price: "$4",
        dietary: ["vegetarian", "vegan"],
      },
      {
        name: "Paratha",
        description: "Flaky layered whole wheat bread",
        price: "$5",
        dietary: ["vegetarian"],
      },
    ],
  },
  {
    name: "Desserts",
    description: "Sweet endings to your meal",
    items: [
      {
        name: "Gulab Jamun",
        description: "Soft milk dumplings in rose-cardamom syrup",
        price: "$9",
        dietary: ["vegetarian"],
      },
      {
        name: "Mango Kulfi",
        description: "Traditional Indian ice cream with Alphonso mango",
        price: "$10",
        dietary: ["vegetarian", "gluten-free"],
      },
      {
        name: "Kheer",
        description: "Creamy rice pudding with cardamom and pistachios",
        price: "$9",
        dietary: ["vegetarian", "gluten-free"],
      },
      {
        name: "Rasmalai",
        description: "Cottage cheese patties in saffron-cardamom cream",
        price: "$11",
        dietary: ["vegetarian", "gluten-free"],
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="flex flex-col">
      <HeroImage
        title="Our Menu"
        subtitle="A celebration of India's diverse culinary traditions, from the royal kitchens of Lucknow to the coastal flavors of Kerala"
        imageUrl="/images/spices-hero.jpg"
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          {menuCategories.map((category, index) => (
            <div key={category.name} className={index % 2 === 0 ? "bg-muted/50 rounded-2xl p-8" : "bg-background rounded-2xl p-8 border border-border"}>
              <div className="mb-8">
                <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl">{category.name}</h2>
                <p className="mt-2 text-muted-foreground">{category.description}</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {category.items.map((item) => (
                  <Card key={item.name} className="p-6 bg-card border-border">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-[var(--font-heading)] text-2xl">{item.name}</h3>
                        <p className="mt-2 text-muted-foreground">{item.description}</p>
                      </div>
                      <span className="text-primary font-semibold">{item.price}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.dietary.map((tag) => (
                        <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Ready to Dine?"
        description="Reserve your table and experience these flavors in person."
        button={{ label: "Make a Reservation", href: "/reservations" }}
        backgroundImage="/images/restaurant-interior.jpg"
      />
    </div>
  );
}
