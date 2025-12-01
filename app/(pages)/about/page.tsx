// ============================================
// FILE: app/about/page.tsx
// ============================================
import { Target, Eye, Zap, Users } from 'lucide-react';

export default function AboutPage() {
  const timeline = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'Started as a freelance development studio with a vision to build exceptional digital products.',
    },
    {
      year: '2021',
      title: 'First SaaS',
      description: 'Launched our first internal SaaS product, marking our entry into product development.',
    },
    {
      year: '2022',
      title: 'Growth',
      description: 'Expanded services to include AI automation and served 20+ satisfied clients.',
    },
    {
      year: '2023',
      title: 'Innovation',
      description: 'Launched Skroub and began development of AI-powered Shopify apps.',
    },
    {
      year: '2024',
      title: 'Today',
      description: 'Now serving clients globally with a full suite of development and automation services.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower businesses with cutting-edge technology solutions that drive growth and innovation.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the go-to partner for businesses seeking to transform their digital presence.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver modern, future-proof solutions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with clients as partners, not just service providers.',
    },
  ];

  return (
    <div className="py-20">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            About BootstrapHub
          </h1>
          <p className="mb-16 text-xl text-muted-foreground">
            Building the future, one project at a time
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                BootstrapHub started with a simple idea: businesses deserve
                world-class digital solutions without the enterprise price tag.
                What began as a freelance development studio has grown into a
                full-service digital agency and product workspace.
              </p>
              <p>
                We've successfully delivered over 50 projects ranging from
                eCommerce stores to complex SaaS platforms, helping businesses
                of all sizes achieve their digital goals. Our expertise spans
                web development, mobile apps, AI automation, and everything in
                between.
              </p>
              <p>
                Today, we're not just building for clients – we're also creating
                our own suite of SaaS products, including Skroub (social
                listening tool) and AI-powered marketing automation apps for
                Shopify merchants.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Our Mission & Values
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Journey</h2>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="mt-2 w-0.5 flex-1 bg-border" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="mb-1 text-sm font-semibold text-primary">
                      {item.year}
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What We've Built */}
        <div className="rounded-2xl border bg-muted/50 p-8 text-center md:p-12">
          <h2 className="mb-4 text-3xl font-bold">What We've Built</h2>
          <div className="mt-8 grid gap-6 text-center md:grid-cols-4">
            <div>
              <div className="mb-2 text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">
                Projects Delivered
              </div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-primary">30+</div>
              <div className="text-sm text-muted-foreground">
                Happy Clients
              </div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">
                SaaS Products
              </div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}