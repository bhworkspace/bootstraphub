// /app/page.tsx
import Hero from '@/components/home/hero';
import ServicesSection from '@/components/home/service-section';
import ProjectsSection from '@/components/home/projects-section';
import TechStack from '@/components/home/tech-stack';
import WhyChooseUs from '@/components/home/why-choose-us';
import Testimonials from '@/components/home/testimonials';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ServicesSection />
      <TechStack />
      <ProjectsSection />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}