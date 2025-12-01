import { TechStack } from '@/types';

export const techStack: TechStack[] = [
  {
    category: 'Frontend',
    tools: [
      { name: 'Next.js', icon: '⚡' },
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Tailwind CSS', icon: '🎨' }
    ]
  },
  {
    category: 'Backend',
    tools: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Python', icon: '🐍' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' }
    ]
  },
  {
    category: 'AI & Automation',
    tools: [
      { name: 'OpenAI', icon: '🤖' },
      { name: 'LangChain', icon: '🔗' },
      { name: 'TensorFlow', icon: '🧠' },
      { name: 'n8n', icon: '⚙️' }
    ]
  },
  {
    category: 'eCommerce',
    tools: [
      { name: 'Shopify', icon: '🛍️' },
      { name: 'Stripe', icon: '💳' },
      { name: 'WooCommerce', icon: '🛒' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    tools: [
      { name: 'Vercel', icon: '▲' },
      { name: 'Azure', icon: '☁️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'VPS', icon: '🔄' }
    ]
  }
];