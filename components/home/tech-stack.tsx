// ============================================
// FILE: components/home/tech-stack.tsx
// ============================================
import { techStack } from '@/data/tech-stack';

export default function TechStack() {
  return (
    <section className="border-y bg-muted/30 py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Our Tech Stack
          </h2>
          <p className="mb-16 text-lg text-muted-foreground">
            We use cutting-edge technologies to build robust and scalable solutions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((category) => (
            <div key={category.category} className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-sm"
                  >
                    <span>{tool.icon}</span>
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}