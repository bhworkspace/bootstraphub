import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Products",
  description:
    "SaaS products and digital tools built and launched by Bootstrap Hub.",
};

const products = [
  {
    name: "Syncqer",
    description:
      "A SaaS product designed to streamline and synchronise your workflows. Built to help teams and individuals stay in sync across tools and processes.",
    url: "https://syncqer.com",
    status: "Live" as const,
  },
];

export default function ProductsPage() {
  return (
    <div className="container py-16 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Products
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        SaaS products and digital tools we&apos;re building and shipping.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {products.map((product) => (
          <a
            key={product.name}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border bg-card p-6 transition-colors hover:border-foreground/20"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                {product.status}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>
            <div className="mt-4 flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
              Visit {product.name}
              <ExternalLink className="h-3.5 w-3.5" />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-16 rounded-lg border border-dashed p-8 text-center">
        <p className="text-muted-foreground">
          More products coming soon. We&apos;re always building.
        </p>
      </div>
    </div>
  );
}
