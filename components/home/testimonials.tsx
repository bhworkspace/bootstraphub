// ============================================
// FILE: components/home/testimonials.tsx
// ============================================
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, ALMA Perfumes',
      content: 'BootstrapHub transformed our vision into a beautiful, functional eCommerce platform. Sales increased by 200% in the first quarter!',
    },
    {
      name: 'Michael Chen',
      role: 'Founder, Skroub',
      content: 'The team delivered a complex SaaS platform ahead of schedule. Their technical expertise and communication were outstanding.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      content: 'Their AI automation solutions saved us countless hours of manual work. Highly recommend for any business looking to scale.',
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mb-16 text-lg text-muted-foreground">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-lg border bg-card p-8"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/20" />
              <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}