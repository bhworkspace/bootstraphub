// ============================================
// FILE: app/quote/page.tsx
// ============================================
import QuoteWizard from '@/components/quote/quote-wizard';

export default function QuotePage() {
  return (
    <div className="py-20">
      <div className="container max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Get Your Project Quote
          </h1>
          <p className="text-xl text-muted-foreground">
            Tell us about your project and receive an instant estimate
          </p>
        </div>
        <QuoteWizard />
      </div>
    </div>
  );
}