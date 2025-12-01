import { PricingEstimate, QuoteFormData } from '@/types';

/**
 * Calculate project pricing estimate based on requirements
 */
export function calculatePricing(data: QuoteFormData): PricingEstimate {
  let basePrice = 0;
  let complexityMultiplier = 1;
  let estimatedWeeks = 2;
  let complexity: PricingEstimate['complexity'] = 'low';

  // Base pricing by project type
  const projectTypePricing: Record<string, number> = {
    'Website': 2000,
    'Landing Page': 1000,
    'Mobile App': 5000,
    'eCommerce': 4000,
    'SaaS': 8000,
    'Automation': 3000,
    'Other': 2000,
  };

  // Calculate base price from project types
  data.projectType.forEach(type => {
    basePrice += projectTypePricing[type] || 2000;
  });

  // Adjust for number of pages
  const pagesMultiplier: Record<string, number> = {
    'Single Landing Page': 1,
    '1-3 pages': 1.2,
    '4-7 pages': 1.5,
    '8-15 pages': 2,
    '15+ pages': 2.5,
    'Custom': 2,
  };
  
  complexityMultiplier *= pagesMultiplier[data.pagesNeeded] || 1;

  // Adjust for features
  const featureCount = data.features.length;
  if (featureCount >= 8) {
    complexityMultiplier *= 1.8;
    complexity = 'enterprise';
    estimatedWeeks = 12;
  } else if (featureCount >= 5) {
    complexityMultiplier *= 1.5;
    complexity = 'high';
    estimatedWeeks = 8;
  } else if (featureCount >= 3) {
    complexityMultiplier *= 1.3;
    complexity = 'medium';
    estimatedWeeks = 4;
  } else {
    complexity = 'low';
    estimatedWeeks = 2;
  }

  // Adjust for integrations (if multiple mentioned)
  if (data.integrations && data.integrations.split(',').length > 2) {
    complexityMultiplier *= 1.2;
    estimatedWeeks += 1;
  }

  // Calculate final price range
  const finalBase = basePrice * complexityMultiplier;
  const min = Math.round(finalBase * 0.8);
  const max = Math.round(finalBase * 1.3);

  // Adjust timeline based on user preference
  const timelineAdjustment: Record<string, number> = {
    'ASAP (1-2 weeks)': 1.3,
    'Normal (3-4 weeks)': 1,
    'Flexible (1-2 months)': 0.9,
    'No rush (2+ months)': 0.85,
  };

  const adjustedMin = Math.round(min * (timelineAdjustment[data.timeline] || 1));
  const adjustedMax = Math.round(max * (timelineAdjustment[data.timeline] || 1));

  return {
    min: adjustedMin,
    max: adjustedMax,
    projectType: data.projectType.join(' + '),
    complexity,
    estimatedWeeks,
  };
}

/**
 * Get complexity badge color
 */
export function getComplexityColor(complexity: PricingEstimate['complexity']): string {
  const colors = {
    low: 'bg-green-500/10 text-green-700 dark:text-green-400',
    medium: 'bg-blue-500/10 text-blue-700 dark:text-blue-400',
    high: 'bg-orange-500/10 text-orange-700 dark:text-orange-400',
    enterprise: 'bg-purple-500/10 text-purple-700 dark:text-purple-400',
  };
  
  return colors[complexity];
}