
import { Project } from '@/components/ProjectsList';

export const project1: Project = {
  id: '1',
  title: 'Dashboard NBA Stats',
  description: 'Tableau de bord Power BI présentant les statistiques des stars de la NBA pour la saison 2023-2024 avec visualisations interactives.',
  image: '/lovable-uploads/7daacdd5-4076-4c9d-b6ad-a88f7af23b74.png',
  tags: ['Power BI', 'Data Analysis', 'Dashboard', 'NBA'],
  link: '/projets/1',
  screenshots: [
    "/lovable-uploads/7daacdd5-4076-4c9d-b6ad-a88f7af23b74.png", 
    "/lovable-uploads/dbf798b8-ca51-4501-8ccc-ce557c7d069b.png", 
    "/lovable-uploads/654a5bfc-a418-4c15-b506-4a58c490231c.png"
  ],
  logo: "/lovable-uploads/1e3f2b15-068d-4a4e-be9e-fbafda62442b.png",
  description_extended: `Ce tableau de bord Power BI présente les statistiques des stars de la NBA pour la saison 2023-2024. Il offre une visualisation interactive des performances des joueurs, permettant aux utilisateurs d'explorer et d'analyser les données de manière intuitive. Les visualisations comprennent des statistiques clés comme les points par match, les rebonds, les passes décisives et les pourcentages de tir.`,
  objectives: [
    "Créer un tableau de bord interactif pour visualiser les statistiques des joueurs NBA",
    "Permettre des comparaisons de performances entre différents joueurs",
    "Offrir des filtres dynamiques pour personnaliser l'analyse",
    "Présenter les données de façon claire et visuellement attrayante"
  ],
  technologies: [
    "Power Bi",
    "DAX",
    "NBA Stats",
    "Power Query"
  ],
  client: "Freelance",
  period: "Saison 2023-2024"
};
