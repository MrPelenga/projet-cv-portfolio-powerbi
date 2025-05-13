
import { Project } from '@/components/ProjectsList';

export const project2: Project = {
  id: '2',
  title: 'Gofusion EcoVeille',
  description: 'Scénario Make automatisant la collecte d\'informations environnementales pour générer du contenu pour le blog de Gofusion.',
  image: '/lovable-uploads/8dd28d84-ffbf-4033-b95a-c923bf8eec21.png',
  tags: ['Make', 'API', 'SEO'],
  link: '/projets/2',
  screenshots: [
    "/lovable-uploads/8dd28d84-ffbf-4033-b95a-c923bf8eec21.png", 
    "/lovable-uploads/258bfcae-02ac-4615-aa7d-2b85de87455f.png", 
    "/lovable-uploads/d533ed2d-dfd2-40a6-8fa7-e2ee98933758.png", 
    "/lovable-uploads/e8e183ec-d9c6-4565-b923-f22434466752.png"
  ],
  description_extended: `Ce scénario Make automatise la collecte d'informations provenant de sites web spécialisés dans l'environnement et le développement durable. L'objectif est de générer du contenu pertinent et actualisé pour le blog de l'entreprise Gofusion. Ce processus permet d'assurer une veille informative efficace sur les thématiques environnementales, facilitant ainsi la création régulière d'articles de qualité alignés avec les valeurs et l'expertise de Gofusion`,
  objectives: [
    "Automatiser la veille informationnelle sur les thématiques environnementales et de développement durable",
    "Gagner du temps dans le processus de création de contenu pour le blog",
    "Alimenter le blog de Gofusion avec du contenu pertinent et à jour",
    "Collecter régulièrement des informations actualisées depuis des sources spécialisées fiables"
  ],
  technologies: [
    "MAKE",
    "GSheet",
    "API",
    "SEranking"
  ],
  client: "Freelance",
  period: "Saison 2023-2024"
};
