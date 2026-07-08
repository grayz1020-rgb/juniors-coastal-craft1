import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, MapPin, Star, Fish, Users, ChefHat, Anchor, HandHeart, Shell } from "lucide-react";
import { featuredDishes, galleryImages } from "@/lib/dishes";
import { WaveDivider } from "@/components/site/WaveDivider";
import { Lightbox } from "@/components/site/Lightbox";
import interior from "@/assets/restaurant-interior.jpg";
import heroImg from "@/assets/hero-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Junior's Seafood Restaurant & Grill | Northeast Florida" },
      { name: "description", content: "Fresh seafood, Southern hospitality, and family tradition in Callahan and Jacksonville, Florida. Shrimp & grits, captain's platters, and more." },
      { property: "og:title", content: "Junior's Seafood Restaurant & Grill" },
      { property: "og:description", content: "Fresh Seafood. Southern Hospitality. Family Tradition." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const REASONS = [
  { icon: Fish, title: "Fresh Seafood Daily", copy: "Sourced fresh and cooked to order — never frozen shortcuts." },
  { icon: Users, title: "Family Friendly", copy: "A warm dining room where everyone from grandma to the little ones is welcome." },
  { icon: ChefHat, title: "Homemade Southern Cooking", copy: "Recipes passed down for generations, made from scratch every day." },
  { icon: Shell, title: "Huge Portions", copy: "Come hungry. Our plates are legendary in Nassau County." },
  { icon: HandHeart, title: "Great Service", copy: "Friendly faces who remember your name and your usual order." },
  { icon: Anchor, title: "Honest Prices", copy: "Great seafood shouldn't break the bank — and here, it doesn't." },
];

const REVIEWS = [
  { quote: "The shrimp and grits are absolutely amazing! Best I've had anywhere in Florida.", name: "Karen M.", rating: 5 },
  { quote: "Hands down the best seafood around Callahan. We drive 30 minutes just for the captain's platter.", name: "Robert D.", rating: 5 },
  { quote: "Excellent service every single visit. The staff feels like family now.", name: "Latoya S.", rating: 5 },
  { quote: "Huge portions, great prices, and everything tastes homemade. Our new favorite.", name: "Mike & Sarah T.", rating: 5 },
  { quote: "Fresh, hot, and cooked to perfection. The fried shrimp is out of this world.", name: "Denise W.", rating: 5 },
  { quote: "Southern hospitality at its finest. You feel welcome the moment you walk in.", name: "James P.", rating: 5 },
];

function Home() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      {/* HERO — split layout */}
      <section className="relative bg-[var(--cream)]">
        <div className="container-page pt-8 pb-16 md:pt-16 md:pb-24">
          <div className="grid gap-10 md:gap-14 md:grid-cols-2 items-center">
            {/* Image first on mobile, right on desktop */}
            <div className="order-1 md:order-2 relative">
              <div className="relative overflow-hidden rounded-lg shadow-[0_20px_50px_-20px_rgba(22,58,95,0.35)]">
                <img
                  src={heroImg}
                  alt="Inside Junior's Seafood Restaurant & Grill"
                  width={1600}
                  height={1200}
                  className="w-full h-[300px] sm:h-[420px] md:h-[540px] object-cover"
                />
              </div>
              <div className="hidden md:block absolute -bottom-5 -left-5 bg-white border border-[var(--border)] rounded-md px-5 py-3 shadow-sm">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--seafoam)]">Since day one</p>
                <p className="font-display text-xl text-[var(--ocean)] leading-tight">Family owned<br/>& operated</p>
              </div>
            </div>

            {/* Text left on desktop, below image on mobile */}
            <div className="order-2 md:order-1 max-w-xl animate-fade-up">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--seafoam)]">
                Northeast Florida · Est. Family Owned
              </p>
              <h1 className="font-display font-semibold text-4xl md:text-5xl leading-[1.1] mt-4 text-[var(--ocean)]">
                Fresh Seafood.<br/>
                <span className="italic font-normal">Southern Hospitality.</span>
              </h1>
              <p className="mt-5 text-[var(--ink)]/75 leading-relaxed max-w-md">
                A locally loved seafood house serving Callahan and Jacksonville — where the shrimp is fresh, the portions are generous, and every guest leaves like family.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/menu" className="btn-sunset">View Menu <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/locations" className="btn-ghost">
                  <MapPin className="h-4 w-4" /> Find a Location
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-3 text-[var(--ink)]/75">
                <div className="flex text-[var(--sunset)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-current" : "fill-current opacity-40"}`} />
                  ))}
                </div>
                <span className="text-sm font-semibold text-[var(--ocean)]">4.5</span>
                <span className="text-sm">· 800+ Google reviews across our locations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED FAVORITES */}
      <section className="container-page py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">Featured Favorites</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">
            The dishes locals drive for.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Made from scratch, in generous portions, plated like the coast we're proud of.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDishes.map((d, i) => (
            <article
              key={d.name}
              className="card-elevated overflow-hidden group"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{d.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.tagline}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/menu" className="btn-primary">Explore the full menu <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative bg-[var(--sand-deep)]/60">
        <WaveDivider flip fill="var(--color-background)" className="-mt-1" />
        <div className="container-page py-20 md:py-28 grid gap-12 md:grid-cols-2 items-center">
          <div className="relative">
            <img
              src={interior}
              alt="Inside Junior's Seafood Restaurant"
              loading="lazy"
              width={1600}
              height={1000}
              className="rounded-3xl shadow-[0_25px_60px_-20px_oklch(0.35_0.08_240/0.28)] aspect-[5/4] object-cover w-full"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-[var(--coral)] text-white rounded-2xl px-6 py-4 shadow-xl font-display">
              <div className="text-3xl font-bold leading-none">30+</div>
              <div className="text-xs uppercase tracking-widest opacity-90 mt-1">Years of tradition</div>
            </div>
          </div>
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">
              A hometown seafood house you can taste the love in.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Junior's Seafood Restaurant & Grill has been a Northeast Florida gathering place for as long as folks around here can remember. We started with a simple idea: serve the freshest seafood possible, in generous portions, with Southern hospitality that makes strangers feel like neighbors.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every plate that leaves our kitchen — from the shrimp and grits to the captain's platter — is made from recipes we've carried in the family for years. Come in hungry, leave happy, and count on us to be here the next time you crave it.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="flex gap-2"><span className="text-[var(--seafoam)]">●</span> Fresh seafood daily</div>
              <div className="flex gap-2"><span className="text-[var(--seafoam)]">●</span> Family-friendly</div>
              <div className="flex gap-2"><span className="text-[var(--seafoam)]">●</span> Huge portions</div>
              <div className="flex gap-2"><span className="text-[var(--seafoam)]">●</span> Southern cooking</div>
              <div className="flex gap-2"><span className="text-[var(--seafoam)]">●</span> Homemade recipes</div>
              <div className="flex gap-2"><span className="text-[var(--seafoam)]">●</span> A local favorite</div>
            </div>
            <Link to="/about" className="btn-primary mt-8">Read our story <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
        <WaveDivider fill="var(--color-background)" />
      </section>

      {/* WHY PEOPLE LOVE */}
      <section className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Why Families Choose Junior's</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mt-3 text-[var(--ocean)]">
            A neighborhood tradition, plate after plate.
          </h2>
          <p className="mt-3 text-[var(--ink)]/70 max-w-lg">
            Six reasons Northeast Florida keeps coming back to our table.
          </p>
        </div>

        <div className="mt-10 md:mt-12 grid gap-3 md:gap-4 sm:grid-cols-2">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="group flex gap-4 rounded-md bg-[var(--sand)]/35 border border-[var(--border)] hover:border-[var(--sunset)]/50 hover:bg-[var(--sand)]/55 transition-colors p-5 md:p-6"
            >
              <div className="shrink-0 pt-0.5">
                <div className="flex items-center justify-center h-10 w-10 rounded-full border border-[var(--ocean)]/25 bg-white text-[var(--ocean)] group-hover:text-[var(--sunset)] group-hover:border-[var(--sunset)]/40 transition-colors">
                  <r.icon className="h-4.5 w-4.5" strokeWidth={1.6} />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-lg leading-snug text-[var(--ocean)]">
                  {r.title}
                </h3>
                <div className="mt-1.5 h-px w-8 bg-[var(--sunset)]/60" />
                <p className="mt-2.5 text-sm text-[var(--ink)]/70 leading-relaxed">
                  {r.copy}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center border-t border-[var(--border)] pt-8">
          <div className="flex text-[var(--sunset)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-current" : "fill-current opacity-40"}`} />
            ))}
          </div>
          <span className="font-display text-lg text-[var(--ocean)]">4.5 / 5</span>
          <span className="text-sm text-[var(--ink)]/65">From 800+ Google reviews across our locations</span>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="relative bg-[var(--sand-deep)]/60">
        <WaveDivider flip />
        <div className="container-page py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow">Guest Reviews</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">
              What guests are saying.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <figure key={i} className="card-elevated p-7">
                <div className="flex gap-1 text-[var(--coral)]">
                  {Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 font-display text-lg leading-snug text-foreground/90">
                  "{r.quote}"
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">— {r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <WaveDivider />
      </section>

      {/* GALLERY */}
      <section id="gallery" className="container-page py-20 md:py-28 scroll-mt-24">

        <div className="max-w-2xl">
          <p className="eyebrow">The Gallery</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">Straight from the plate.</h2>
          <p className="mt-4 text-muted-foreground">Real dishes, real photos — click any image to view larger.</p>
        </div>

        <div className="mt-12 grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 [grid-auto-flow:dense]">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setLightbox({ src: img.src, alt: img.alt })}
              className={`relative overflow-hidden rounded-2xl group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ocean)] ${i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--ocean)] via-[var(--ocean-deep)] to-[oklch(0.28_0.12_260)] text-white p-10 md:p-16 shadow-[0_30px_80px_-30px_oklch(0.35_0.15_260/0.55)]">
          <div className="absolute inset-0 opacity-20 mix-blend-screen bg-[radial-gradient(circle_at_20%_20%,var(--seafoam),transparent_60%),radial-gradient(circle_at_80%_80%,var(--coral),transparent_60%)]" />
          <div className="relative max-w-2xl">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
              Come as you are.<br />Leave a little happier.
            </h2>
            <p className="mt-5 text-white/85">
              Two Northeast Florida locations, seven days a week. We'll save you a seat.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/locations" className="btn-coral">Find a location</Link>
              <a href="tel:+19046280755" className="btn-ghost !text-white !border-white/40 hover:!bg-white/10">Call Callahan</a>
              <a href="tel:+19047688484" className="btn-ghost !text-white !border-white/40 hover:!bg-white/10">Call Jacksonville</a>
            </div>
          </div>
        </div>
      </section>

      <Lightbox src={lightbox?.src ?? null} alt={lightbox?.alt} onClose={() => setLightbox(null)} />
    </>
  );
}
