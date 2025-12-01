// ============================================
// FILE: components/home/why-choose-us.tsx
// ============================================
import { CheckCircle, Zap, Shield, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'We deliver quality projects on time, every time.',
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality checks ensure excellence.',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our priority. We listen and adapt.',
    },
    {
      icon: CheckCircle,
      title: 'Proven Track Record',
      description: 'Successfully delivered 50+ projects for satisfied clients.',
    },
  ];

  return (
    <section className="border-y bg-muted/30 py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose BootstrapHub?
          </h2>
          <p className="mb-16 text-lg text-muted-foreground">
            We combine technical expertise with a commitment to your success
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="text-center">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}