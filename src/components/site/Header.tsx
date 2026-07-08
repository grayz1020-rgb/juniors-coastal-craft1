import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/juniors-logo.jpeg";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/locations", label: "Locations" },
  { to: "/about", label: "About" },
  { to: "/#gallery", label: "Gallery", hash: true },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--cream)]/95 backdrop-blur-lg shadow-[0_4px_20px_-8px_rgba(24,50,74,0.15)] border-b border-[var(--sand-deep)]/60"
          : "bg-[var(--cream)]/80 backdrop-blur-md"
      }`}
    >
      <div className="container-page flex items-center justify-between gap-4 py-4 md:py-5">
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Junior's Seafood Home">
          <img
            src={logo}
            alt="Junior's Seafood Restaurant & Grill"
            width={200}
            height={100}
            className="h-24 w-auto md:h-28 rounded-md"
          />
          <span className="sr-only">Junior's Seafood Restaurant &amp; Grill</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((item) =>
            "hash" in item ? (
              
                key={item.label}
                href={item.to}
                className="text-sm font-semibold text-[var(--ocean-deep)] hover:text-[var(--sunset)] transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-semibold text-[var(--ocean-deep)] hover:text-[var(--sunset)] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--sunset)] after:transition-all hover:after:w-full"
                activeProps={{ className: "text-[var(--sunset)] after:w-full" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+19046280755" className="text-sm font-semibold text-[var(--ocean-deep)]/80 hover:text-[var(--sunset)] transition-colors flex items-center gap-1.5">
            <Phone className="h-4 w-4" />
            (904) 628-0755
          </a>
          <Link to="/menu" className="btn-sunset !py-2.5 !px-5 !text-sm">
            Order Online
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-full w-10 h-10 bg-white/70 backdrop-blur border border-[var(--sand-deep)] text-[var(--ocean-deep)]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--sand-deep)] bg-[var(--cream)]/98 backdrop-blur-lg">
          <nav className="container-page py-4 flex flex-col gap-1">
            {NAV.map((item) =>
              "hash" in item ? (
                
                  key={item.label}
                  href={item.to}
                  onClick={() => setOpen(false)}
                  className="py-3 px-2 rounded-lg text-base font-semibold text-[var(--ocean-deep)] hover:bg-[var(--sunset)]/10"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-3 px-2 rounded-lg text-base font-semibold text-[var(--ocean-deep)] hover:bg-[var(--sunset)]/10"
                  activeProps={{ className: "text-[var(--sunset)] bg-[var(--sunset)]/10" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="flex flex-col gap-2 pt-3">
              <a href="tel:+19046280755" className="btn-ghost !py-2.5 !text-sm">
                <Phone className="h-4 w-4" /> Callahan · (904) 628-0755
              </a>
              <a href="tel:+19047688484" className="btn-ghost !py-2.5 !text-sm">
                <Phone className="h-4 w-4" /> Jacksonville · (904) 768-8484
              </a>
              <Link to="/menu" onClick={() => setOpen(false)} className="btn-sunset !py-2.5 !text-sm">
                Order Online
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
