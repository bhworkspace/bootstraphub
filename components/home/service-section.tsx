// ============================================
// FILE: components/home/services-section.tsx
// ============================================
import Link from 'next/link';
import { Code2, Rocket, Brain, Settings, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const iconMap = {
  Code2,
  Rocket,
  Brain,
  Settings,
};

export default function ServicesSection() {
  const services = [
    {
      icon: 'Code2',
      title: 'Web & Mobile Development',
      description: 'Custom websites, eCommerce stores, and mobile apps built with modern technologies.',
    },
    {
      icon: 'Rocket',
      title: 'SaaS Engineering',
      description: 'End-to-end SaaS product development from concept to launch and beyond.',
    },
    {
      icon: 'Brain',
      title: 'AI Automation',
      description: 'Intelligent automation solutions to streamline your business operations.',
    },
    {
      icon: 'Settings',
      title: 'Maintenance & Support',
      description: 'Ongoing support to keep your applications running smoothly.',
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            What We Do
          </h2>
          <p className="mb-16 text-lg text-muted-foreground">
            We provide comprehensive digital solutions to help your business succeed online
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}