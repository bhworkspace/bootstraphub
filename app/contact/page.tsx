import type { Metadata } from "next";
import { Mail, Linkedin, Twitter } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Bootstrap Hub.",
};

export default function ContactPage() {
  return (
    <div className="container py-16 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Contact Us
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Have a question or want to work with us? Reach out and we&apos;ll get
        back to you.
      </p>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        {/* Contact Form */}
        <div>
          <h2 className="text-lg font-semibold">Send a Message</h2>
          <form
            action="mailto:bootstraphubworkspace@gmail.com"
            method="POST"
            encType="text/plain"
            className="mt-6 space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-foreground/30 focus:ring-1 focus:ring-ring"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-foreground/30 focus:ring-1 focus:ring-ring"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 w-full resize-none rounded-md border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-foreground/30 focus:ring-1 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold">Email</h2>
            <a
              href="mailto:bootstraphubworkspace@gmail.com"
              className="mt-2 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              bootstraphubworkspace@gmail.com
            </a>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Location</h2>
            <p className="mt-2 text-muted-foreground">India</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Connect</h2>
            <div className="mt-3 flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Twitter className="h-4 w-4" />
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
