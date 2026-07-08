import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <>
      <Header />
      <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <p className="eyebrow">404</p>
          <h1 className="font-display text-5xl mt-2 text-foreground">Off the map</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            This page swam away. Let's get you back to shore.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/" className="btn-primary">Back home</Link>
            <Link to="/menu" className="btn-ghost">See the menu</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Please try again.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Junior's Seafood Restaurant & Grill | Callahan & Jacksonville, FL" },
      {
        name: "description",
        content:
          "Family-owned seafood restaurant serving Northeast Florida. Fresh seafood, Southern cooking, and hometown hospitality in Callahan and Jacksonville.",
      },
      { name: "theme-color", content: "#0D6EFD" },
      { property: "og:site_name", content: "Junior's Seafood Restaurant & Grill" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Junior's Seafood Restaurant & Grill" },
      { property: "og:description", content: "Fresh seafood. Southern hospitality. Family tradition." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Junior's Seafood Restaurant & Grill",
          servesCuisine: ["Seafood", "Southern"],
          priceRange: "$$",
          telephone: "+1-904-628-0755",
          areaServed: ["Callahan, FL", "Jacksonville, FL", "Nassau County, FL"],
          location: [
            {
              "@type": "Place",
              name: "Junior's Seafood — Callahan",
              address: {
                "@type": "PostalAddress",
                streetAddress: "450061 State Road 200",
                addressLocality: "Callahan",
                addressRegion: "FL",
                postalCode: "32011",
                addressCountry: "US",
              },
              telephone: "+1-904-628-0755",
            },
            {
              "@type": "Place",
              name: "Junior's Seafood — Jacksonville",
              address: {
                "@type": "PostalAddress",
                streetAddress: "8110 Lem Turner Rd",
                addressLocality: "Jacksonville",
                addressRegion: "FL",
                postalCode: "32208",
                addressCountry: "US",
              },
              telephone: "+1-904-768-8484",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
