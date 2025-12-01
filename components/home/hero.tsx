// ============================================
// FILE: components/home/hero.tsx
// ============================================
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b bg-linear-to-b from-muted/50 to-background py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border bg-muted px-4 py-1.5 text-sm">
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            <span className="font-medium">Building the future, one project at a time</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            BootstrapHub <span className="text-primary">Workspace</span>
          </h1>
          
          <p className="mb-4 text-xl text-muted-foreground md:text-2xl">
            Freelance engineering • SaaS products • AI automation
          </p>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
            We build exceptional web applications, eCommerce platforms, and intelligent automation solutions that help businesses thrive in the digital age.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/quote">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient blobs */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
    </section>
  );
}