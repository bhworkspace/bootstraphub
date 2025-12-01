// ============================================
// FILE: app/contact/page.tsx
// ============================================
"use client";

import { useState } from 'react';
import { Mail, MessageCircle, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { submitContactForm } from '@/app/actions/contact';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);

    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      alert('Failed to submit. Please try again or contact us via WhatsApp.');
    }
  }

  const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(
    "Hello, I'd like to discuss a project with BootstrapHub."
  )}`;

  return (
    <div className="py-20">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mb-16 text-xl text-muted-foreground">
            Have a project in mind? Let's talk about how we can help
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
            {submitted && (
              <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 234 567 8900"
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="mt-1.5"
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">Other Ways to Reach Us</h2>
            <div className="space-y-6">
              {/* Email */}
              <div className="rounded-lg border p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Email Us</h3>
                <p className="mb-4 text-muted-foreground">
                  Prefer email? Send us a message directly
                </p>
                <a
                  href="mailto:hello@bootstraphub.com"
                  className="font-medium text-primary hover:underline"
                >
                  hello@bootstraphub.com
                </a>
              </div>

              {/* WhatsApp */}
              <div className="rounded-lg border p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 text-green-600">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">WhatsApp</h3>
                <p className="mb-4 text-muted-foreground">
                  Chat with us instantly on WhatsApp
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Open WhatsApp
                  </a>
                </Button>
              </div>

              {/* Response Time */}
              <div className="rounded-lg bg-muted/50 p-6">
                <h3 className="mb-2 font-semibold">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24 hours during business days.
                  For urgent inquiries, WhatsApp is the fastest way to reach us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}