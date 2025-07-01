
import { Project } from '@/components/ProjectsList';

export const project4: Project = {
  id: '4',
  title: 'Dashboard Power BI - Sales KPI',
  description: 'Single Page Application (SPA) type dashboard Power BI pour analyser les performances commerciales avec graphiques interactifs et filtres dynamiques.',
  image: '/lovable-uploads/47e56869-f196-4f8f-ab58-de458a03262b.png',
  tags: ['Power BI', 'Dashboard', 'React', 'Charts', 'Analytics'],
  link: '/projets/4',
  screenshots: [
    '/lovable-uploads/47e56869-f196-4f8f-ab58-de458a03262b.png',
    '/lovable-uploads/b2d564c5-87c8-4e70-972b-141f1231f4a5.png',
    '/lovable-uploads/80056c20-8b08-4a78-838e-9b49425d1716.png'
  ],
  description_extended: `Cette Single Page Application (SPA) reproduit l'expérience d'un dashboard Power BI pour l'analyse des performances commerciales. Elle offre une interface intuitive avec des graphiques interactifs, des filtres dynamiques et une navigation fluide entre différentes vues analytiques.

Le dashboard présente des KPI essentiels comme le chiffre d'affaires total (10.03M€), le nombre de commandes (307) et le panier moyen (32.68K€). Les utilisateurs peuvent explorer les données à travers différents axes d'analyse : répartition des ventes par taille de deal, évolution temporelle, performance par catégorie de produits et analyse géographique avec le top 5 des pays.`,
  objectives: [
    "Créer une interface dashboard moderne et interactive",
    "Implémenter des graphiques dynamiques avec barres horizontales visibles",
    "Développer un système de filtres en temps réel par année et pays",
    "Assurer une navigation fluide entre les vues analytiques",
    "Reproduire l'expérience utilisateur Power BI avec des couleurs cohérentes"
  ],
  technologies: [
    "React",
    "TypeScript", 
    "Recharts",
    "Tailwind CSS",
    "Shadcn/ui"
  ],
  client: "Gabriel PELENGA MANGI - Portfolio",
  period: "2024-2025",
  logo: '/lovable-uploads/47e56869-f196-4f8f-ab58-de458a03262b.png'
};
