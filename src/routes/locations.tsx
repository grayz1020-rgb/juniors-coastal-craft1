import { createFileRoute } from "@tanstack/react-router";
import { Car, Clock, MapPin, Navigation, Phone } from "lucide-react";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations | Junior's Seafood Restaurant & Grill" },
      { name: "description", content: "Visit Junior's Seafood in Callahan or Jacksonville, Florida. Hours, phone numbers, directions, and parking." },
      { property: "og:title", content: "Locations | Junior's Seafood" },
      { property: "og:description", content: "Two Northeast Florida locations serving fresh seafood daily." },
      { property: "og:url", content: "/locations" },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
  }),
  component: LocationsPage,
});

type Location = {
  name: string;
  address: string;
  city: string;
  phone: string;
  telHref: string;
  mapsQuery: string;
  hours: { days: string; time: string }[];
};

const LOCATIONS: Location[] = [
  {
    name: "Callahan",
    address: "450061 State Road 200",
    city: "Callahan, FL 32011",
    phone: "(904) 628-0755",
    telHref: "tel:+19046280755",
    mapsQuery: "Junior's Seafood Restaurant 450061 State Road 200 Callahan FL 32011",
    hours: [
      { days: "Sunday – Thursday", time: "11:00 AM – 9:00 PM" },
      { days: "Friday – Saturday", time: "11:00 AM – 10:00 PM" },
    ],
  },
  {
    name: "Jacksonville",
    address: "8110 Lem Turner Rd",
    city: "Jacksonville, FL 32208",
    phone: "(904) 768-8484",
    telHref: "tel:+19047688484",
    mapsQuery: "Junior's Seafood Restaurant 8110 Lem Turner Rd Jacksonville FL 32208",
    hours: [
      { days: "Sunday – Thursday", time: "11:00 AM – 9:00 PM" },
      { days: "Friday – Saturday", time: "11:00 AM – 10:00 PM" },
    ],
  },
];

function LocationsPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[var(--ocean-deep)] via-[var(--ocean)] to-[oklch(0.6_0.16_220)] text-white">
        <div className="container-page pt-20 pb-16 md:pt-28 md:pb-20 text-center">
          <p className="eyebrow !text-[var(--seafoam)]">Visit Us</p>
          <h1 className="font-display font-bold text-5xl md:text-6xl mt-3">Two Florida homes.<br className="hidden sm:block" /> Same family recipes.</h1>
          <p className="mt-4 text-white/85 max-w-xl mx-auto">
            Whether you're near Callahan or Jacksonville — we're saving you a seat.
          </p>
        </div>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block h-[60px] w-full sm:h-[90px]" aria-hidden>
          <path d="M0,32 C240,80 480,0 720,32 C960,64 1200,96 1440,48 L1440,90 L0,90 Z" fill="var(--color-background)" />
        </svg>
      </section>

      <section className="container-page py-16 md:py-24 grid gap-10 lg:grid-cols-2">
        {LOCATIONS.map((loc) => (
          <article key={loc.name} className="card-elevated overflow-hidden">
            <div className="aspect-[16/10] w-full bg-muted">
              <iframe
                title={`Map of Junior's Seafood ${loc.name}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(loc.mapsQuery)}&output=embed`}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 w-full h-full"
              />
            </div>
            <div className="p-7 md:p-9">
              <p className="eyebrow">Junior's Seafood</p>
              <h2 className="font-display font-bold text-3xl mt-1">{loc.name}</h2>

              <div className="mt-6 space-y-4 text-sm">
                <p className="flex gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-[var(--ocean)]" />
                  <span>
                    {loc.address}<br />{loc.city}
                  </span>
                </p>
                <p className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-[var(--ocean)]" />
                  <a href={loc.telHref} className="hover:text-[var(--coral)] font-medium">{loc.phone}</a>
                </p>
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-[var(--ocean)] mt-0.5" />
                  <div>
                    {loc.hours.map((h) => (
                      <div key={h.days} className="flex flex-col sm:flex-row sm:gap-3">
                        <span className="font-medium">{h.days}</span>
                        <span className="text-muted-foreground">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="flex gap-3 text-muted-foreground">
                  <Car className="h-5 w-5 shrink-0 text-[var(--ocean)]" />
                  Parking available on-site
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.mapsQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <Navigation className="h-4 w-4" /> Directions
                </a>
                <a href={loc.telHref} className="btn-coral">
                  <Phone className="h-4 w-4" /> Call
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
