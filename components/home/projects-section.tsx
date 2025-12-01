// ============================================
// FILE: components/home/projects-section.tsx
// ============================================
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProjectsSection() {
  const featuredProjects = [
    {
      title: 'ALMA',
      description: 'Premium perfume eCommerce platform',
      category: 'eCommerce',
      tech: ['Shopify', 'JavaScript'],
    },
    {
      title: 'NOVEL',
      description: 'Baby & personal care store',
      category: 'eCommerce',
      tech: ['Shopify', 'React'],
    },
    {
      title: 'Skroub',
      description: 'Social listening SaaS tool',
      category: 'SaaS',
      tech: ['Next.js', 'AI/ML'],
    },
    {
      title: 'Shopify AI App',
      description: 'AI marketing automation',
      category: 'SaaS',
      tech: ['Next.js', 'OpenAI'],
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mb-16 text-lg text-muted-foreground">
            Some of the amazing projects we've delivered for our clients
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg"
            >
              <div className="aspect-video bg-linear-to-br from-primary/20 to-blue-500/20" />
              <div className="p-6">
                <div className="mb-2 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {project.category}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-muted px-2 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}