// ============================================
// FILE: components/quote/quote-wizard.tsx
// ============================================
"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Loader2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { QuoteFormData } from '@/types';
import { submitQuote } from '@/app/actions/quote';
import { calculatePricing, getComplexityColor } from '@/lib/pricing';

export default function QuoteWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [estimate, setEstimate] = useState<any>(null);
  const [formData, setFormData] = useState<Partial<QuoteFormData>>({
    projectType: [],
    features: [],
  });

  const totalSteps = 6;
  const progress = (currentStep / totalSteps) * 100;

  const updateFormData = (data: Partial<QuoteFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Calculate estimate
    const pricing = calculatePricing(formData as QuoteFormData);
    setEstimate(pricing);

    // Submit to backend
    await submitQuote(formData as QuoteFormData, pricing);
    
    setIsSubmitting(false);
    setCurrentStep(totalSteps + 1); // Move to success screen
  };

  const projectTypes = [
    'Website',
    'Landing Page',
    'Mobile App',
    'eCommerce',
    'SaaS',
    'Automation',
    'Other',
  ];

  const featureOptions = [
    'User Authentication',
    'Payment Integration',
    'Admin Dashboard',
    'Email Notifications',
    'Search Functionality',
    'Social Media Integration',
    'Analytics & Reporting',
    'API Integration',
    'Multi-language Support',
    'Mobile Responsive',
    'Dark Mode',
    'Real-time Updates',
  ];

  const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(
    `Hi! I just received a quote for my project. Here are the details:\n\nProject: ${formData.projectType?.join(', ')}\nBudget Range: ${formData.budgetRange}\n\nI'd like to discuss next steps.`
  )}`;

  // Success Screen
  if (currentStep === totalSteps + 1 && estimate) {
    return (
      <Card className="border-2">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-600">
            <Check className="h-8 w-8" />
          </div>
          <CardTitle className="text-2xl">Quote Generated Successfully!</CardTitle>
          <CardDescription>
            Here's your estimated project cost based on your requirements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg bg-muted/50 p-6 text-center">
            <div className="mb-2 text-sm font-medium text-muted-foreground">
              Estimated Cost
            </div>
            <div className="text-4xl font-bold text-primary">
              ${estimate.min.toLocaleString()} - ${estimate.max.toLocaleString()}
            </div>
            <div className="mt-4 flex items-center justify-center gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Timeline:</span>{' '}
                <span className="font-semibold">{estimate.estimatedWeeks} weeks</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div>
                <span className="text-muted-foreground">Complexity:</span>{' '}
                <span className={`font-semibold ${getComplexityColor(estimate.complexity)}`}>
                  {estimate.complexity}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3 rounded-lg border p-4">
            <h3 className="font-semibold">Project Summary</h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-muted-foreground">Project Type:</span>{' '}
                <span className="font-medium">{formData.projectType?.join(', ')}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Pages:</span>{' '}
                <span className="font-medium">{formData.pagesNeeded}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Features:</span>{' '}
                <span className="font-medium">{formData.features?.length} selected</span>
              </div>
              <div>
                <span className="text-muted-foreground">Timeline:</span>{' '}
                <span className="font-medium">{formData.timeline}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm text-muted-foreground">
              This is an estimated range based on your requirements. The final quote
              will be determined after a detailed consultation.
            </p>
          </div>

          <div className="space-y-3">
            <Button size="lg" className="w-full" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Continue on WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full"
              onClick={() => {
                setCurrentStep(1);
                setFormData({ projectType: [], features: [] });
                setEstimate(null);
              }}
            >
              Start New Quote
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="font-medium">Step {currentStep} of {totalSteps}</span>
          <span className="text-muted-foreground">{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} />
      </div>

      <Card>
        <CardContent className="pt-6">
          {/* Step 1: Personal Info */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-2xl font-bold">Personal Information</h2>
                <p className="text-muted-foreground">
                  Let's start with your contact details
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name || ''}
                    onChange={(e) => updateFormData({ name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => updateFormData({ email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone || ''}
                    onChange={(e) => updateFormData({ phone: e.target.value })}
                    placeholder="+1 234 567 8900"
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="whatsapp">WhatsApp Number (Optional)</Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    value={formData.whatsapp || ''}
                    onChange={(e) => updateFormData({ whatsapp: e.target.value })}
                    placeholder="+1 234 567 8900"
                    className="mt-1.5"
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    We'll use this to send you quick updates
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Business Info */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-2xl font-bold">Business Information</h2>
                <p className="text-muted-foreground">
                  Tell us about your business
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="businessName">Business Name *</Label>
                  <Input
                    id="businessName"
                    value={formData.businessName || ''}
                    onChange={(e) => updateFormData({ businessName: e.target.value })}
                    placeholder="Acme Inc."
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="businessType">Business Type *</Label>
                  <Input
                    id="businessType"
                    value={formData.businessType || ''}
                    onChange={(e) => updateFormData({ businessType: e.target.value })}
                    placeholder="E.g., Retail, SaaS, Consulting"
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="productsServices">Products/Services *</Label>
                  <Textarea
                    id="productsServices"
                    value={formData.productsServices || ''}
                    onChange={(e) =>
                      updateFormData({ productsServices: e.target.value })
                    }
                    placeholder="Brief description of what you sell or offer"
                    required
                    rows={3}
                    className="mt-1.5"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Do you have a domain name?</Label>
                  <RadioGroup
                    value={formData.hasDomain ? 'yes' : 'no'}
                    onValueChange={(value) =>
                      updateFormData({ hasDomain: value === 'yes' })
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="domain-yes" />
                      <Label htmlFor="domain-yes" className="font-normal">
                        Yes, I have a domain
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="domain-no" />
                      <Label htmlFor="domain-no" className="font-normal">
                        No, I need help with this
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.hasDomain && (
                  <div>
                    <Label htmlFor="domainName">Domain Name</Label>
                    <Input
                      id="domainName"
                      value={formData.domainName || ''}
                      onChange={(e) =>
                        updateFormData({ domainName: e.target.value })
                      }
                      placeholder="example.com"
                      className="mt-1.5"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Project Type */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-2xl font-bold">Project Type</h2>
                <p className="text-muted-foreground">
                  What type of project do you need? (Select all that apply)
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {projectTypes.map((type) => (
                  <div
                    key={type}
                    className="flex items-start space-x-3 rounded-lg border p-4"
                  >
                    <Checkbox
                      id={type}
                      checked={formData.projectType?.includes(type)}
                      onCheckedChange={(checked) => {
                        const current = formData.projectType || [];
                        if (checked) {
                          updateFormData({ projectType: [...current, type] });
                        } else {
                          updateFormData({
                            projectType: current.filter((t) => t !== type),
                          });
                        }
                      }}
                    />
                    <Label htmlFor={type} className="font-normal">
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Requirements */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-2xl font-bold">Project Requirements</h2>
                <p className="text-muted-foreground">
                  Help us understand your project scope
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label>Number of Pages/Screens *</Label>
                  <RadioGroup
                    value={formData.pagesNeeded || ''}
                    onValueChange={(value) =>
                      updateFormData({ pagesNeeded: value })
                    }
                    className="mt-2"
                  >
                    {[
                      'Single Landing Page',
                      '1-3 pages',
                      '4-7 pages',
                      '8-15 pages',
                      '15+ pages',
                      'Custom',
                    ].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`pages-${option}`} />
                        <Label htmlFor={`pages-${option}`} className="font-normal">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label>Features Required</Label>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {featureOptions.map((feature) => (
                      <div key={feature} className="flex items-start space-x-2">
                        <Checkbox
                          id={feature}
                          checked={formData.features?.includes(feature)}
                          onCheckedChange={(checked) => {
                            const current = formData.features || [];
                            if (checked) {
                              updateFormData({ features: [...current, feature] });
                            } else {
                              updateFormData({
                                features: current.filter((f) => f !== feature),
                              });
                            }
                          }}
                        />
                        <Label htmlFor={feature} className="text-sm font-normal">
                          {feature}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="integrations">
                    Third-party Integrations
                  </Label>
                  <Input
                    id="integrations"
                    value={formData.integrations || ''}
                    onChange={(e) =>
                      updateFormData({ integrations: e.target.value })
                    }
                    placeholder="E.g., Stripe, Mailchimp, Google Analytics"
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label>Budget Range *</Label>
                  <RadioGroup
                    value={formData.budgetRange || ''}
                    onValueChange={(value) =>
                      updateFormData({ budgetRange: value })
                    }
                    className="mt-2"
                  >
                    {[
                      '$1,000 - $3,000',
                      '$3,000 - $7,000',
                      '$7,000 - $15,000',
                      '$15,000 - $30,000',
                      '$30,000+',
                      'Not sure',
                    ].map((range) => (
                      <div key={range} className="flex items-center space-x-2">
                        <RadioGroupItem value={range} id={`budget-${range}`} />
                        <Label htmlFor={`budget-${range}`} className="font-normal">
                          {range}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Timeline */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-2xl font-bold">Timeline Preference</h2>
                <p className="text-muted-foreground">
                  When do you need your project completed?
                </p>
              </div>

              <RadioGroup
                value={formData.timeline || ''}
                onValueChange={(value) => updateFormData({ timeline: value })}
                className="space-y-3"
              >
                {[
                  {
                    value: 'ASAP (1-2 weeks)',
                    label: 'ASAP (1-2 weeks)',
                    desc: 'Rush delivery - may include additional fees',
                  },
                  {
                    value: 'Normal (3-4 weeks)',
                    label: 'Normal (3-4 weeks)',
                    desc: 'Standard timeline for most projects',
                  },
                  {
                    value: 'Flexible (1-2 months)',
                    label: 'Flexible (1-2 months)',
                    desc: 'Ideal timeline with room for revisions',
                  },
                  {
                    value: 'No rush (2+ months)',
                    label: 'No rush (2+ months)',
                    desc: 'Long-term project with no urgency',
                  },
                ].map((option) => (
                  <div
                    key={option.value}
                    className="flex items-start space-x-3 rounded-lg border p-4"
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <div className="flex-1">
                      <Label htmlFor={option.value} className="font-medium">
                        {option.label}
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        {option.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step 6: Inspiration */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-2xl font-bold">
                  Inspiration & References
                </h2>
                <p className="text-muted-foreground">
                  Share any websites or designs you like (optional)
                </p>
              </div>

              <div>
                <Label htmlFor="inspirationLinks">
                  Inspiration Links or Notes
                </Label>
                <Textarea
                  id="inspirationLinks"
                  value={formData.inspirationLinks || ''}
                  onChange={(e) =>
                    updateFormData({ inspirationLinks: e.target.value })
                  }
                  placeholder="Share links to websites you like or describe your vision..."
                  rows={6}
                  className="mt-1.5"
                />
                <p className="mt-2 text-sm text-muted-foreground">
                  This helps us understand your aesthetic preferences and
                  functional requirements better
                </p>
              </div>

              <div className="rounded-lg bg-muted/50 p-4">
                <p className="text-sm text-muted-foreground">
                  You're almost done! Review your information and click "Get My
                  Quote" to receive your instant estimate.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between gap-4">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1 || isSubmitting}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button onClick={nextStep} disabled={!canProceed()}>
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={isSubmitting || !canProceed()}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Get My Quote'
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  function canProceed() {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.phone;
      case 2:
        return (
          formData.businessName &&
          formData.businessType &&
          formData.productsServices &&
          formData.hasDomain !== undefined
        );
      case 3:
        return formData.projectType && formData.projectType.length > 0;
      case 4:
        return formData.pagesNeeded && formData.budgetRange;
      case 5:
        return formData.timeline;
      case 6:
        return true;
      default:
        return false;
    }
  }
}