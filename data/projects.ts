import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'alma',
    title: 'ALMA',
    description: 'Premium perfume eCommerce platform with sophisticated product catalog and seamless checkout experience.',
    category: 'eCommerce',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    problem: 'Need for an elegant online presence to showcase premium perfume collections with rich product details and imagery.',
    solution: 'Built a custom Shopify store with enhanced product filtering, detailed fragrance notes display, and optimized mobile shopping experience.',
    imageUrl: '/images/projects/alma.jpg'
  },
  {
    id: 'novel',
    title: 'NOVEL',
    description: 'Baby and personal care eCommerce store focused on natural, safe products for families.',
    category: 'eCommerce',
    tech: ['Shopify', 'React', 'Tailwind CSS'],
    problem: 'Creating a trustworthy online store for parents looking for safe baby care products with detailed ingredient information.',
    solution: 'Developed a clean, informative Shopify store with educational content, ingredient transparency, and easy navigation for busy parents.',
    imageUrl: '/images/projects/novel.jpg'
  },
  {
    id: 'skroub',
    title: 'Skroub',
    description: 'Social listening SaaS tool for brands to monitor and analyze their online presence across platforms.',
    category: 'SaaS',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Python', 'AI/ML'],
    problem: 'Brands need to track mentions, sentiment, and engagement across multiple social media platforms in real-time.',
    solution: 'Built a comprehensive social listening platform with AI-powered sentiment analysis, real-time monitoring, and actionable insights dashboard.',
    imageUrl: '/images/projects/skroub.jpg'
  },
  {
    id: 'shopify-ai-app',
    title: 'Shopify AI Marketing App',
    description: 'AI-powered marketing automation app for Shopify stores to boost sales and engagement.',
    category: 'SaaS',
    tech: ['Next.js', 'TypeScript', 'Shopify API', 'OpenAI', 'PostgreSQL'],
    problem: 'Shopify store owners struggle with creating effective marketing campaigns and product descriptions at scale.',
    solution: 'Developing an AI app that generates marketing copy, product descriptions, and campaign ideas tailored to each store\'s brand voice.',
    imageUrl: '/images/projects/shopify-ai.jpg'
  }
];