
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

// Types for our projects
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

// Sample projects data
export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Dashboard NBA Stats',
    description: 'Tableau de bord Power BI présentant les statistiques des stars de la NBA pour la saison 2023-2024 avec visualisations interactives.',
    image: '/lovable-uploads/7daacdd5-4076-4c9d-b6ad-a88f7af23b74.png',
    tags: ['Power BI', 'Data Analysis', 'Dashboard', 'NBA'],
    link: '/projets/1'
  },
  {
    id: '2',
    title: 'Gofusion EcoVeille',
    description: 'Scénario Make automatisant la collecte d\'informations environnementales pour générer du contenu pour le blog de Gofusion.',
    image: '/lovable-uploads/258bfcae-02ac-4615-aa7d-2b85de87455f.png',
    tags: ['Make', 'API', 'SEO'],
    link: '/projets/2'
  },
  {
    id: '3',
    title: 'Marketing Analytics',
    description: 'Analyse des performances de campagnes marketing et ROI.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    tags: ['Marketing', 'Analytics', 'Data Visualization'],
    link: '/projets/3'
  }
];

interface ProjectsListProps {
  limit?: number;
}

const ProjectsList = ({ limit }: ProjectsListProps) => {
  // If limit is provided, only show that many projects
  const displayedProjects = limit ? projectsData.slice(0, limit) : projectsData;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayedProjects.map((project) => (
        <Card key={project.id} className="overflow-hidden card-hover">
          <div className="h-48 bg-gray-100 relative overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback on error
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71';
              }}
            />
          </div>
          
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </CardContent>
          
          <CardFooter>
            <Button asChild>
              <Link to={project.link}>Voir le projet</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProjectsList;
