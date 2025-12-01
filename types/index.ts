// Core Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tech: string[];
  problem: string;
  solution: string;
  imageUrl: string;
}

export interface TechStack {
  category: string;
  tools: {
    name: string;
    icon: string;
  }[];
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface QuoteFormData {
  // Step 1: Personal Info
  name: string;
  email: string;
  phone: string;
  whatsapp?: string;
  
  // Step 2: Business Info
  businessName: string;
  businessType: string;
  productsServices: string;
  hasDomain: boolean;
  domainName?: string;
  
  // Step 3: Project Type
  projectType: string[];
  
  // Step 4: Requirements
  pagesNeeded: string;
  features: string[];
  integrations: string;
  budgetRange: string;
  
  // Step 5: Timeline
  timeline: string;
  
  // Step 6: Inspiration
  inspirationLinks?: string;
}

export interface PricingEstimate {
  min: number;
  max: number;
  projectType: string;
  complexity: 'low' | 'medium' | 'high' | 'enterprise';
  estimatedWeeks: number;
}