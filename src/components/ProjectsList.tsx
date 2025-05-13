
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { allProjects } from '@/data/projects';

// Types for our projects
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  screenshots?: string[];
  logo?: string;
  description_extended?: string;
  objectives?: string[];
  technologies?: string[];
  client?: string;
  period?: string;
}

// Export the projects data from our organized files
export const projectsData = allProjects;

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
              className={project.id === '2' ? "w-full h-full object-contain p-4" : "w-full h-full object-cover"}
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
