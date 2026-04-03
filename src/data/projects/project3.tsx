import { Project } from '@/components/ProjectsList';

export const project3: Project = {
  id: '3',
  title: 'Automated Generation',
  description: 'Solution de génération automatisée d\'images pour entraîner l\'IA de Binko.',
  description_en: 'Automated image generation solution to train Binko\'s AI.',
  image: '/lovable-uploads/7312361a-3e1e-43ea-874a-18d04ffb1b42.png',
  tags: ['API', 'Programmation', 'IA'],
  tags_en: ['API', 'Programming', 'AI'],
  link: '/projets/3',
  screenshots: [
    '/lovable-uploads/7312361a-3e1e-43ea-874a-18d04ffb1b42.png',
    '/lovable-uploads/0e9c1b08-6fac-4e9d-b81d-08b8de55d8a1.png',
    '/lovable-uploads/0b5c67d1-9484-47f2-8666-b1e11e8fd1db.png',
    '/lovable-uploads/e6f102ef-cb75-4076-b158-3be1635dc501.png'
  ],
  description_extended: `Ce projet innovant vise à développer une solution de génération automatisée d'images de haute qualité pour entraîner l'intelligence artificielle de l'application Binko, spécialisée dans le tri des déchets.`,
  description_extended_en: `This innovative project aims to develop an automated high-quality image generation solution to train the AI of the Binko application, specialized in waste sorting. The solution leverages AI-powered image generation tools, including Ideogram 2.0.`,
  objectives: [
    "Améliorer la précision de reconnaissance de l'IA",
    "Diminuer le temps d'intervention humaine",
    "Optimiser la génération en masse d'images",
    "Établir un pipeline robuste et évolutif"
  ],
  objectives_en: [
    "Improve AI recognition accuracy",
    "Reduce human intervention time",
    "Optimize mass image generation",
    "Establish a robust and scalable pipeline"
  ],
  technologies: ["Python", "Google Colab", "Ideogram 2.0", "API"],
  client: "Binko",
  period: "Décembre 2024",
  period_en: "December 2024",
  logo: '/lovable-uploads/7312361a-3e1e-43ea-874a-18d04ffb1b42.png'
};
