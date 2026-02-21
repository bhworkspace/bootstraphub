import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const products = [
  {
    name: "Syncqer",
    description:
      "A SaaS product designed to streamline and synchronise your workflows.",
    url: "https://syncqer.com",
    status: "Live" as const,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="container">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Bootstrap Hub
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Building digital products from India. We design, develop, and launch
            SaaS products and digital tools that solve real problems.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Our Products
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="border-t py-16">
        <div className="container">
          <h2 className="text-2xl font-semibold tracking-tight">Products</h2>
          <p className="mt-2 text-muted-foreground">
            What we&apos;re building and shipping.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border bg-card p-6 transition-colors hover:border-foreground/20"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    {product.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                  Visit {product.name}
                  <ExternalLink className="h-3.5 w-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="border-t py-16">
        <div className="container">
          <h2 className="text-2xl font-semibold tracking-tight">
            About Bootstrap Hub
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Bootstrap Hub is an MSME-registered Indian company focused on
            building and launching SaaS products and digital tools. We operate as
            a lean, product-first company — shipping software that works.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium hover:underline"
          >
            Learn more about us
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
