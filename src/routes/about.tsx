import { createFileRoute, Link } from "@tanstack/react-router";
import { ChefHat, Fish, HandHeart, Heart, Star, Users } from "lucide-react";
import interior from "@/assets/restaurant-interior.jpg";
import shrimpGrits from "@/assets/shrimp-grits.jpeg";
import seafoodFeast from "@/assets/seafood-feast.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story | Junior's Seafood Restaurant & Grill" },
      { name: "description", content: "The story of Junior's Seafood — a family-owned Northeast Florida seafood restaurant serving fresh, Southern-style seafood in Callahan and Jacksonville." },
      { property: "og:title", content: "Our Story | Junior's Seafood" },
      { property: "og:description", content: "Family-owned. Fresh seafood. Southern hospitality." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Fish, title: "Fresh Ingredients", copy: "We source seafood daily and cook everything to order — nothing sits, nothing shortcuts." },
  { icon: Users, title: "Family Atmosphere", copy: "Our dining rooms are built for everyone — grandparents, grandkids, first dates, and Sunday dinners." },
  { icon: HandHeart, title: "Southern Hospitality", copy: "We know most of our guests by name — and we like it that way." },
  { icon: ChefHat, title: "Quality Seafood", copy: "From Gulf shrimp to farm-raised catfish, we choose quality first, always." },
];

function AboutPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[var(--ocean-deep)] via-[var(--ocean)] to-[oklch(0.6_0.16_220)] text-white">
        <div className="container-page pt-20 pb-16 md:pt-28 md:pb-20 text-center">
          <p className="eyebrow !text-[var(--seafoam)]">Our Story</p>
          <h1 className="font-display font-bold text-5xl md:text-6xl mt-3">Family recipes.<br className="hidden sm:block" /> Fresh from the coast.</h1>
        </div>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block h-[60px] w-full sm:h-[90px]" aria-hidden>
          <path d="M0,32 C240,80 480,0 720,32 C960,64 1200,96 1440,48 L1440,90 L0,90 Z" fill="var(--color-background)" />
        </svg>
      </section>

      <section className="container-page py-16 md:py-24 grid gap-12 md:grid-cols-5 items-center">
        <div className="md:col-span-3 space-y-5 text-foreground/85 leading-relaxed">
          <p className="eyebrow">Where we started</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground">A little seafood joint with a big Southern heart.</h2>
          <p>
            Junior's Seafood Restaurant & Grill began as a family dream: a place where Northeast Florida neighbors could gather for fresh seafood without the fancy-restaurant fuss. We opened our doors with a handful of recipes, a stack of cast-iron skillets, and a promise — cook every plate the way we'd cook it for our own family.
          </p>
          <p>
            Years later, that promise hasn't budged. Our shrimp still gets hand-breaded in-house. Our grits still cook low and slow. Our hush puppies still come out of the fryer golden. And the folks behind the counter still know your Uncle Ray's usual.
          </p>
        </div>
        <div className="md:col-span-2 relative">
          <img src={interior} alt="Junior's dining room" loading="lazy" className="rounded-3xl shadow-[var(--shadow-elevated)] aspect-[4/5] object-cover w-full" />
        </div>
      </section>

      <section className="bg-[var(--sand-deep)]/60 py-20 md:py-24">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">What we stand for</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">The Junior's way.</h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="card-elevated p-7">
                <div className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--seafoam)] to-[var(--ocean)] text-white shadow-md">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl mt-5">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24 grid gap-6 md:grid-cols-3">
        <img src={shrimpGrits.url} alt="Shrimp and grits" loading="lazy" className="rounded-3xl aspect-square object-cover w-full md:col-span-1 md:row-span-2 md:aspect-[3/4]" />
        <div className="md:col-span-2 flex flex-col justify-center">
          <p className="eyebrow">Mission</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">Great seafood, honest prices, and time you'll remember.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We believe a seafood dinner shouldn't require a fancy price tag. We keep our portions huge, our seafood fresh, and our doors open seven days a week — so your family can make memories here as often as you like.
          </p>
        </div>
        <img src={seafoodFeast} alt="Seafood feast" loading="lazy" className="rounded-3xl aspect-video md:aspect-square object-cover w-full md:col-span-2" />
      </section>

      <section className="container-page pb-24">
        <div className="rounded-3xl bg-[var(--ocean-deep)] text-white p-10 md:p-14 text-center">
          <div className="flex justify-center gap-1 text-[var(--coral)] mb-4">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`h-5 w-5 ${i < 4 ? "fill-current" : "fill-current opacity-60"}`} />)}
          </div>
          <p className="font-display text-3xl md:text-4xl max-w-3xl mx-auto leading-tight">
            "You feel like family here. And the food… the food is unreal."
          </p>
          <p className="mt-4 text-white/70 text-sm">4.5/5 across 800+ Google reviews.</p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link to="/menu" className="btn-coral">See the menu</Link>
            <Link to="/locations" className="btn-ghost !text-white !border-white/40 hover:!bg-white/10 flex items-center gap-2"><Heart className="h-4 w-4" /> Visit us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
