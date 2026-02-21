import type { Metadata } from "next";
import { Building2, MapPin, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bootstrap Hub is an MSME-registered Indian digital product company building SaaS tools and software.",
};

export default function AboutPage() {
  return (
    <div className="container py-16 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        About Bootstrap Hub
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        We are an Indian digital product company focused on building and
        launching SaaS products and digital tools that solve real-world problems.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <Building2 className="h-6 w-6 text-muted-foreground" />
          <h2 className="mt-4 text-lg font-semibold">Who We Are</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Bootstrap Hub is a sole proprietorship registered under UDYAM (MSME)
            as a Micro Enterprise in India. We operate under the name
            &quot;Bootstrap Hub&quot; and are classified under NIC code 62012 —
            Webpage designing and computer programming activities.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <FileText className="h-6 w-6 text-muted-foreground" />
          <h2 className="mt-4 text-lg font-semibold">What We Do</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            We design, build, and ship software products — primarily SaaS tools
            and digital utilities. Our approach is lean and product-first: we
            focus on solving specific problems with clean, reliable software.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <MapPin className="h-6 w-6 text-muted-foreground" />
          <h2 className="mt-4 text-lg font-semibold">Where We Are</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Based in India. We build products for a global audience while
            operating as a registered Indian MSME (Micro, Small &amp; Medium
            Enterprise).
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="text-lg font-semibold text-muted-foreground">
            UDYAM
          </div>
          <h2 className="mt-4 text-lg font-semibold">Registration</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Registered under UDYAM with registration number UDYAM-KR-21-0041353.
            Enterprise type: Micro. Major activity: Services. Date of
            registration: 18 December 2024.
          </p>
        </div>
      </div>
    </div>
  );
}
