// ============================================
// FILE: app/services/page.tsx
// ============================================
import Link from 'next/link';
import { Code2, Rocket, Brain, Settings, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';

const iconMap = {
  Code2,
  Rocket,
  Brain,
  Settings,
};

export default function ServicesPage() {
  return (
    <div className="py-20">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Our Services
          </h1>
          <p className="mb-16 text-xl text-muted-foreground">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h2 className="mb-4 text-3xl font-bold">{service.title}</h2>
                  <p className="mb-6 text-lg text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mb-8 space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button size="lg" asChild>
                    <Link href="/quote">
                      Get a Quotation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="flex-1">
                  <div className="aspect-video rounded-lg border-2 border-dashed bg-muted/50" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 rounded-2xl border bg-muted/50 p-8 text-center md:p-12">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Start Your Project?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Let's discuss how we can help bring your vision to life
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/quote">Request a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}