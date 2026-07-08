import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import logo from "@/assets/juniors-logo.jpeg";
export function Footer() {
  return (
    <footer className="relative mt-24 bg-[var(--ocean-deep)] text-white">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-1 h-24 -translate-y-full pointer-events-none"
      >
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="h-full w-full">
          <path
            d="M0,64 C240,16 480,96 720,48 C960,0 1200,64 1440,32 L1440,90 L0,90 Z"
            fill="var(--ocean-deep)"
          />
        </svg>
      </div>
      <div className="container-page relative py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src={logo} alt="Junior's Seafood Restaurant & Grill" className="h-16 w-auto rounded-md" />
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Fresh seafood, Southern hospitality, and family tradition — serving Northeast Florida since day one.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href="https://facebook.com" aria-label="Facebook" className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--coral)] transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--coral)] transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link to="/menu" className="hover:text-[var(--seafoam)]">Menu</Link></li>
            <li><Link to="/locations" className="hover:text-[var(--seafoam)]">Locations</Link></li>
            <li><Link to="/about" className="hover:text-[var(--seafoam)]">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--seafoam)]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Callahan</h4>
          <address className="not-italic space-y-2 text-sm text-white/75">
            <p className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[var(--seafoam)]" />450061 State Road 200<br />Callahan, FL 32011</p>
            <p><a href="tel:+19046280755" className="flex gap-2 hover:text-[var(--seafoam)]"><Phone className="h-4 w-4 mt-0.5 text-[var(--seafoam)]" />(904) 628-0755</a></p>
            <p className="pt-1 text-white/60">Sun–Thu · 11 AM – 9 PM<br />Fri–Sat · 11 AM – 10 PM</p>
          </address>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Jacksonville</h4>
          <address className="not-italic space-y-2 text-sm text-white/75">
            <p className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[var(--seafoam)]" />8110 Lem Turner Rd<br />Jacksonville, FL 32208</p>
            <p><a href="tel:+19047688484" className="flex gap-2 hover:text-[var(--seafoam)]"><Phone className="h-4 w-4 mt-0.5 text-[var(--seafoam)]" />(904) 768-8484</a></p>
            <p className="pt-1 text-white/60">Sun–Thu · 11 AM – 9 PM<br />Fri–Sat · 11 AM – 10 PM</p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Junior's Seafood Restaurant &amp; Grill. All rights reserved.</p>
          <p>Fresh seafood · Southern hospitality · Family tradition.</p>
        </div>
      </div>
    </footer>
  );
}
