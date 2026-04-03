import { Project } from '@/components/ProjectsList';

export const project1: Project = {
  id: '1',
  title: 'Dashboard NBA Stats',
  description: 'Tableau de bord Power BI présentant les statistiques des stars de la NBA pour la saison 2023-2024 avec visualisations interactives.',
  description_en: 'Power BI dashboard presenting NBA star statistics for the 2023-2024 season with interactive visualizations.',
  image: '/lovable-uploads/7daacdd5-4076-4c9d-b6ad-a88f7af23b74.png',
  tags: ['Power BI', 'Data Analysis', 'Dashboard', 'NBA'],
  tags_en: ['Power BI', 'Data Analysis', 'Dashboard', 'NBA'],
  link: '/projets/1',
  screenshots: [
    "/lovable-uploads/7daacdd5-4076-4c9d-b6ad-a88f7af23b74.png", 
    "/lovable-uploads/dbf798b8-ca51-4501-8ccc-ce557c7d069b.png", 
    "/lovable-uploads/654a5bfc-a418-4c15-b506-4a58c490231c.png"
  ],
  logo: "/lovable-uploads/1e3f2b15-068d-4a4e-be9e-fbafda62442b.png",
  description_extended: `Ce tableau de bord Power BI présente les statistiques des stars de la NBA pour la saison 2023-2024. Il offre une visualisation interactive des performances des joueurs, permettant aux utilisateurs d'explorer et d'analyser les données de manière intuitive. Les visualisations comprennent des statistiques clés comme les points par match, les rebonds, les passes décisives et les pourcentages de tir.`,
  description_extended_en: `This Power BI dashboard presents NBA star statistics for the 2023-2024 season. It offers an interactive visualization of player performance, allowing users to explore and analyze data intuitively. Visualizations include key stats such as points per game, rebounds, assists, and shooting percentages.`,
  objectives: [
    "Créer un tableau de bord interactif pour visualiser les statistiques des joueurs NBA",
    "Permettre des comparaisons de performances entre différents joueurs",
    "Offrir des filtres dynamiques pour personnaliser l'analyse",
    "Présenter les données de façon claire et visuellement attrayante"
  ],
  objectives_en: [
    "Create an interactive dashboard to visualize NBA player statistics",
    "Enable performance comparisons between different players",
    "Provide dynamic filters for customized analysis",
    "Present data in a clear and visually appealing way"
  ],
  technologies: ["Power BI", "DAX", "NBA Stats", "Power Query"],
  client: "Freelance",
  period: "Saison 2023-2024",
  period_en: "2023-2024 Season"
};
