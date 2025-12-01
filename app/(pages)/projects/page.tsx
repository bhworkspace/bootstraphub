// ============================================
// FILE: app/projects/page.tsx
// ============================================
import { projects } from '@/data/projects';
import { ExternalLink } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="py-20">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Our Projects
          </h1>
          <p className="mb-16 text-xl text-muted-foreground">
            Explore our portfolio of successful projects and case studies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg"
            >
              {/* Project Image */}
              <div className="aspect-video bg-linear-to-br from-primary/20 to-blue-500/20" />

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {project.category}
                  </span>
                  <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                <h2 className="mb-2 text-2xl font-bold">{project.title}</h2>
                <p className="mb-4 text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-muted px-2 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Problem & Solution */}
                <div className="space-y-3 border-t pt-4">
                  <div>
                    <h3 className="mb-1 text-sm font-semibold">Problem</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-semibold">Solution</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Coming */}
        <div className="mt-12 text-center">
          <div className="rounded-lg border border-dashed p-8">
            <p className="text-lg text-muted-foreground">
              More case studies coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}