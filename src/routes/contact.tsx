import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Junior's Seafood Restaurant & Grill" },
      { name: "description", content: "Get in touch with Junior's Seafood — phone, email, hours, and directions to our Callahan and Jacksonville, Florida locations." },
      { property: "og:title", content: "Contact | Junior's Seafood" },
      { property: "og:description", content: "Reach out, book a party, or say hello." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-[var(--ocean-deep)] via-[var(--ocean)] to-[oklch(0.6_0.16_220)] text-white">
        <div className="container-page pt-20 pb-16 md:pt-28 md:pb-20 text-center">
          <p className="eyebrow !text-[var(--seafoam)]">Say Hello</p>
          <h1 className="font-display font-bold text-5xl md:text-6xl mt-3">We'd love to hear from you.</h1>
          <p className="mt-4 text-white/85 max-w-xl mx-auto">Questions, catering, private parties, or a friendly hello — drop us a line.</p>
        </div>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block h-[60px] w-full sm:h-[90px]" aria-hidden>
          <path d="M0,32 C240,80 480,0 720,32 C960,64 1200,96 1440,48 L1440,90 L0,90 Z" fill="var(--color-background)" />
        </svg>
      </section>

      <section className="container-page py-16 md:py-24 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3 card-elevated p-7 md:p-10">
          <h2 className="font-display text-3xl">Send us a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">We usually get back within one business day.</p>

          {sent ? (
            <div className="mt-8 rounded-2xl bg-[var(--seafoam)]/15 border border-[var(--seafoam)]/40 p-6 text-center">
              <p className="font-display text-2xl text-[var(--ocean-deep)]">Thanks — message received!</p>
              <p className="mt-2 text-sm text-muted-foreground">We'll be in touch shortly. Meanwhile, come see us in Callahan or Jacksonville.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-sm font-medium">Name</span>
                <input required name="name" className="rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-[var(--ocean)] transition" />
              </label>
              <label className="grid gap-1.5">
                <span className="text-sm font-medium">Email</span>
                <input required type="email" name="email" className="rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-[var(--ocean)] transition" />
              </label>
              <label className="grid gap-1.5 sm:col-span-2">
                <span className="text-sm font-medium">Phone <span className="text-muted-foreground font-normal">(optional)</span></span>
                <input type="tel" name="phone" className="rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-[var(--ocean)] transition" />
              </label>
              <label className="grid gap-1.5 sm:col-span-2">
                <span className="text-sm font-medium">Subject</span>
                <select name="subject" className="rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-[var(--ocean)] transition">
                  <option>General question</option>
                  <option>Catering / Private party</option>
                  <option>Feedback</option>
                  <option>Employment</option>
                </select>
              </label>
              <label className="grid gap-1.5 sm:col-span-2">
                <span className="text-sm font-medium">Message</span>
                <textarea required name="message" rows={5} className="rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-[var(--ocean)] transition resize-y" />
              </label>
              <div className="sm:col-span-2 flex justify-end">
                <button type="submit" className="btn-primary">Send Message</button>
              </div>
            </form>
          )}
        </div>

        <aside className="lg:col-span-2 space-y-6">
          <div className="card-elevated p-7">
            <h3 className="font-display text-2xl">Reach us</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-[var(--ocean)] shrink-0" />
                <div>
                  <p className="font-semibold">Callahan</p>
                  <a href="tel:+19046280755" className="text-muted-foreground hover:text-[var(--coral)]">(904) 628-0755</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-[var(--ocean)] shrink-0" />
                <div>
                  <p className="font-semibold">Jacksonville</p>
                  <a href="tel:+19047688484" className="text-muted-foreground hover:text-[var(--coral)]">(904) 768-8484</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-[var(--ocean)] shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:hello@juniorsseafood.com" className="text-muted-foreground hover:text-[var(--coral)]">hello@juniorsseafood.com</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="card-elevated p-7">
            <h3 className="font-display text-2xl flex items-center gap-2"><Clock className="h-5 w-5 text-[var(--ocean)]" /> Hours</h3>
            <dl className="mt-5 text-sm space-y-2">
              <div className="flex justify-between"><dt>Sunday – Thursday</dt><dd className="text-muted-foreground">11 AM – 9 PM</dd></div>
              <div className="flex justify-between"><dt>Friday – Saturday</dt><dd className="text-muted-foreground">11 AM – 10 PM</dd></div>
            </dl>
          </div>

          <div className="card-elevated p-7">
            <h3 className="font-display text-2xl flex items-center gap-2"><MapPin className="h-5 w-5 text-[var(--ocean)]" /> Find us</h3>
            <p className="mt-3 text-sm"><span className="font-semibold">Callahan:</span> 450061 State Road 200, Callahan, FL 32011</p>
            <p className="mt-2 text-sm"><span className="font-semibold">Jacksonville:</span> 8110 Lem Turner Rd, Jacksonville, FL 32208</p>
          </div>

          <div className="card-elevated p-7">
            <h3 className="font-display text-2xl">Follow along</h3>
            <div className="mt-4 flex gap-3">
              <a href="https://facebook.com" aria-label="Facebook" className="grid place-items-center w-11 h-11 rounded-full bg-[var(--ocean)]/10 text-[var(--ocean)] hover:bg-[var(--ocean)] hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="grid place-items-center w-11 h-11 rounded-full bg-[var(--coral)]/10 text-[var(--coral)] hover:bg-[var(--coral)] hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </aside>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-3xl overflow-hidden aspect-[16/7] shadow-[var(--shadow-soft)]">
          <iframe
            title="Junior's Seafood — Callahan map"
            src="https://www.google.com/maps?q=Junior%27s+Seafood+Restaurant+450061+State+Road+200+Callahan+FL+32011&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0 w-full h-full"
          />
        </div>
      </section>
    </>
  );
}
