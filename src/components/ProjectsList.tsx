
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ExternalLink, Eye } from 'lucide-react';
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
  projects?: Project[];
}

const ProjectsList = ({ limit, projects }: ProjectsListProps) => {
  const listRef = useRef<HTMLDivElement>(null);
  
  // If projects prop is provided, use it, otherwise use all projects
  const displayedProjects = projects || projectsData;
  
  // If limit is provided, only show that many projects
  const filteredProjects = limit ? displayedProjects.slice(0, limit) : displayedProjects;
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (listRef.current) {
      const cards = listRef.current.querySelectorAll('.project-card-animated');
      cards.forEach((card, index) => {
        // Set a delay based on the card's index
        card.setAttribute('style', `animation-delay: ${index * 100}ms`);
        observer.observe(card);
      });
    }

    return () => {
      if (listRef.current) {
        const cards = listRef.current.querySelectorAll('.project-card-animated');
        cards.forEach(card => observer.unobserve(card));
      }
    };
  }, [filteredProjects]);
  
  return (
    <div 
      ref={listRef} 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {filteredProjects.map((project) => (
        <Card 
          key={project.id} 
          className="overflow-hidden card-hover project-card-animated opacity-0 border-2 border-border"
        >
          <div className="h-48 bg-gray-100 relative overflow-hidden group">
            <img 
              src={project.image} 
              alt={project.title} 
              className={`w-full h-full ${project.id === '2' ? 'object-contain p-4' : 'object-cover'} transition-transform duration-500 group-hover:scale-105`}
              onError={(e) => {
                // Fallback on error
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71';
              }}
            />
            <div className="absolute inset-0 bg-primary/70 opacity-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100">
              <Button variant="secondary" size="sm" className="mr-2" asChild>
                <Link to={project.link}>
                  <Eye className="mr-1" size={16} />
                  Voir
                </Link>
              </Button>
              {project.link.startsWith('http') && (
                <Button variant="secondary" size="sm" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1" size={16} />
                    Ouvrir
                  </a>
                </Button>
              )}
            </div>
          </div>
          
          <CardHeader>
            <CardTitle className="text-xl font-bold line-clamp-1">{project.title}</CardTitle>
            <CardDescription className="line-clamp-2">{project.description}</CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">{tag}</Badge>
              ))}
            </div>
          </CardContent>
          
          <CardFooter>
            <Button asChild className="w-full">
              <Link to={project.link}>Voir le projet</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProjectsList;
