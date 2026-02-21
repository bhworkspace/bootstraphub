import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Bootstrap Hub and bhworkspace.com.",
};

export default function TermsPage() {
  return (
    <div className="container py-16 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Terms &amp; Conditions
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: February 2025
      </p>

      <div className="prose-sm mt-10 max-w-3xl space-y-8 text-muted-foreground [&_h2]:text-foreground [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:mt-0">
        <section>
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using bhworkspace.com (&quot;the Website&quot;),
            operated by Bootstrap Hub, you agree to be bound by these Terms
            &amp; Conditions. If you do not agree, please do not use the
            Website.
          </p>
        </section>

        <section>
          <h2>About Bootstrap Hub</h2>
          <p>
            Bootstrap Hub is a sole proprietorship registered under UDYAM (MSME)
            in India, operating in the domain of computer programming and
            digital product development (NIC Code: 62012).
          </p>
        </section>

        <section>
          <h2>Use of the Website</h2>
          <p>
            This Website is provided for informational purposes. You may browse
            freely, but you agree not to:
          </p>
          <ul className="ml-4 mt-2 list-disc space-y-1">
            <li>Use the Website for any unlawful purpose</li>
            <li>Attempt to gain unauthorised access to any part of the Website</li>
            <li>
              Reproduce, duplicate, or copy any content without prior written
              consent
            </li>
          </ul>
        </section>

        <section>
          <h2>Products and Services</h2>
          <p>
            Bootstrap Hub develops and operates SaaS products and digital tools.
            Each product may have its own separate terms of service. The terms
            on this page apply to bhworkspace.com only.
          </p>
        </section>

        <section>
          <h2>Intellectual Property</h2>
          <p>
            All content on this Website — including text, logos, graphics, and
            design — is the intellectual property of Bootstrap Hub unless
            otherwise stated. Unauthorised use is prohibited.
          </p>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p>
            Bootstrap Hub provides this Website &quot;as is&quot; without
            warranties of any kind. We shall not be liable for any damages
            arising from your use of, or inability to use, this Website.
          </p>
        </section>

        <section>
          <h2>External Links</h2>
          <p>
            This Website may contain links to third-party websites. We are not
            responsible for the content, policies, or practices of any
            third-party sites.
          </p>
        </section>

        <section>
          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the
            laws of India. Any disputes shall be subject to the exclusive
            jurisdiction of the courts in Karnataka, India.
          </p>
        </section>

        <section>
          <h2>Changes to These Terms</h2>
          <p>
            We reserve the right to update these Terms at any time. Changes will
            be posted on this page with a revised date.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For questions about these Terms, contact us at{" "}
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
