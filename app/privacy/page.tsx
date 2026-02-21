import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Bootstrap Hub and bhworkspace.com.",
};

export default function PrivacyPage() {
  return (
    <div className="container py-16 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: February 2025
      </p>

      <div className="prose-sm mt-10 max-w-3xl space-y-8 text-muted-foreground [&_h2]:text-foreground [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:mt-0">
        <section>
          <h2>Introduction</h2>
          <p>
            Bootstrap Hub (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
            operates the website bhworkspace.com. This Privacy Policy explains
            how we collect, use, and protect information when you visit our
            website or use our products.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <p>
            We may collect information you voluntarily provide, such as your
            name and email address when you use our contact form. We do not
            collect personal information automatically through cookies or
            tracking scripts unless explicitly stated.
          </p>
        </section>

        <section>
          <h2>How We Use Information</h2>
          <p>Any information collected is used solely to:</p>
          <ul className="ml-4 mt-2 list-disc space-y-1">
            <li>Respond to your enquiries</li>
            <li>Provide and improve our products and services</li>
            <li>Communicate updates about our products</li>
          </ul>
        </section>

        <section>
          <h2>Data Sharing</h2>
          <p>
            We do not sell, rent, or share your personal information with third
            parties, except as required by law or to protect our legal rights.
          </p>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>
            Our products may integrate with third-party services. Each product
            will have its own privacy disclosures regarding third-party data
            handling. This policy covers only bhworkspace.com.
          </p>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>
            We take reasonable measures to protect your information. However, no
            method of electronic transmission or storage is 100% secure.
          </p>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at{" "}
            <a
              href="mailto:bootstraphubworkspace@gmail.com"
              className="text-foreground underline"
            >
              bootstraphubworkspace@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
