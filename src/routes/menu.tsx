import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { menu } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Junior's Seafood Restaurant & Grill" },
      { name: "description", content: "Explore Junior's Seafood full menu — captain's platters, shrimp & grits, fried seafood, po'boys, salads, kids menu, desserts, and more." },
      { property: "og:title", content: "Menu | Junior's Seafood" },
      { property: "og:description", content: "Fresh seafood, Southern favorites, generous portions." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!query) return menu;
    return menu
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (i) =>
            i.name.toLowerCase().includes(query) ||
            (i.description ?? "").toLowerCase().includes(query),
        ),
      }))
      .filter((c) => c.items.length > 0);
  }, [query]);

  return (
    <>
      {/* Header */}
      <section className="relative bg-gradient-to-b from-[var(--sand)] to-[var(--cream)]">
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(circle_at_15%_20%,rgba(104,200,232,0.35),transparent_55%),radial-gradient(circle_at_85%_80%,rgba(242,140,56,0.25),transparent_55%)]" />
        <div className="container-page relative pt-16 pb-14 md:pt-24 md:pb-20 text-center">
          <p className="eyebrow">Our Menu</p>
          <h1 className="font-display font-bold text-5xl md:text-6xl mt-3 text-[var(--ocean-deep)]">
            Cooked to order. <span className="text-[var(--sunset)]">Plated with love.</span>
          </h1>
          <p className="mt-4 text-[var(--ocean-deep)]/70 max-w-2xl mx-auto">
            Fresh seafood, Southern favorites, and family recipes — organized so you can find your next favorite dish fast.
          </p>

          <div className="mt-10 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--ocean-deep)]/50" />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search dishes, ingredients…"
                aria-label="Search the menu"
                className="w-full rounded-full bg-white/90 backdrop-blur border border-[var(--sand-deep)] focus:border-[var(--sunset)] focus:bg-white outline-none pl-12 pr-5 py-3.5 text-[var(--ocean-deep)] placeholder:text-[var(--ocean-deep)]/40 transition shadow-sm"
              />
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block h-[60px] w-full sm:h-[90px]" aria-hidden>
          <path d="M0,32 C240,80 480,0 720,32 C960,64 1200,96 1440,48 L1440,90 L0,90 Z" fill="var(--color-background)" />
        </svg>
      </section>

      {/* Anchor nav */}
      {!query && (
        <nav aria-label="Menu categories" className="sticky top-[72px] md:top-[88px] z-30 bg-[var(--cream)]/95 backdrop-blur border-b border-[var(--sand-deep)]">
          <div className="container-page overflow-x-auto scrollbar-none">
            <ul className="flex gap-1 py-3 whitespace-nowrap">
              {menu.map((c) => (
                <li key={c.name}>
                  <a
                    href={`#${slug(c.name)}`}
                    className="inline-flex px-4 py-2 rounded-full text-sm font-semibold text-[var(--ocean-deep)]/75 hover:text-[var(--sunset)] hover:bg-[var(--sunset)]/10 transition-colors"
                  >
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}

      {/* Menu */}
      <section className="container-page py-16 md:py-20">
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-24">No dishes match "{q}". Try another word.</p>
        ) : (
          <div className="space-y-20">
            {filtered.map((cat) => (
              <div key={cat.name} id={slug(cat.name)} className="scroll-mt-40">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[var(--palm)]/12 text-[var(--palm)] px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.2em]">
                    {cat.name}
                  </span>
                  <h2 className="font-display font-bold text-3xl md:text-4xl mt-3 text-[var(--ocean-deep)]">
                    {cat.name}
                  </h2>
                  {cat.blurb && <p className="mt-2 text-[var(--ocean-deep)]/70">{cat.blurb}</p>}
                  <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[var(--sunset)] to-[var(--coral)]" />
                </div>

                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {cat.items.map((item) => (
                    <li key={item.name} className="bg-white rounded-2xl p-5 border border-[var(--sand-deep)]/60 shadow-[0_2px_10px_-4px_rgba(24,50,74,0.08)] hover:shadow-[var(--shadow-soft)] hover:border-[var(--sunset)]/40 transition-all">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-display text-lg leading-tight text-[var(--ocean-deep)]">{item.name}</h3>
                        {item.price && (
                          <span className="font-bold text-[var(--sunset)] whitespace-nowrap">{item.price}</span>
                        )}
                      </div>
                      {item.description && (
                        <p className="mt-1.5 text-sm text-[var(--ocean-deep)]/65 leading-relaxed">{item.description}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <p className="mt-16 text-xs text-muted-foreground/80 text-center max-w-2xl mx-auto">
          Menu items, availability, and prices are subject to change. Please call your local Junior's for daily specials and dietary questions.
        </p>
      </section>
    </>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
