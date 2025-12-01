import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Website & Mobile App Development',
    description: 'Custom web and mobile applications built with modern frameworks. From landing pages to complex dashboards.',
    icon: 'Code2',
    features: [
      'Next.js & React applications',
      'Shopify eCommerce stores',
      'Custom dashboards & admin panels',
      'Progressive Web Apps (PWA)',
      'Mobile-first responsive design',
      'API integration & development'
    ]
  },
  {
    id: 'saas-engineering',
    title: 'SaaS Product Engineering',
    description: 'End-to-end SaaS product development from concept to launch and beyond.',
    icon: 'Rocket',
    features: [
      'Full-stack SaaS development',
      'Multi-tenant architecture',
      'Subscription & payment integration',
      'User management & authentication',
      'Analytics & reporting dashboards',
      'Scalable cloud infrastructure'
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI Automation & Agents',
    description: 'Intelligent automation solutions powered by AI to streamline your business operations.',
    icon: 'Brain',
    features: [
      'Custom AI chatbots & assistants',
      'Workflow automation',
      'Data processing & analysis',
      'API integrations',
      'Social media listening tools',
      'Intelligent document processing'
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'Ongoing support and maintenance to keep your applications running smoothly.',
    icon: 'Settings',
    features: [
      'Bug fixes & updates',
      'Performance optimization',
      'Security patches',
      'Feature enhancements',
      'Technical support',
      'Monitoring & reporting'
    ]
  }
];