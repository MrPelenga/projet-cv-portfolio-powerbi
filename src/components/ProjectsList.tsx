import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ExternalLink, Eye } from 'lucide-react';
import { allProjects } from '@/data/projects';
import { useTranslation } from '@/hooks/useTranslation';

export interface Project {
  id: string;
  title: string;
  description: string;
  description_en?: string;
  image: string;
  tags: string[];
  tags_en?: string[];
  link: string;
  screenshots?: string[];
  logo?: string;
  description_extended?: string;
  description_extended_en?: string;
  objectives?: string[];
  objectives_en?: string[];
  technologies?: string[];
  client?: string;
  period?: string;
  period_en?: string;
}

export const projectsData = allProjects;

interface ProjectsListProps {
  limit?: number;
  projects?: Project[];
}

const ProjectsList = ({ limit, projects }: ProjectsListProps) => {
  const listRef = useRef<HTMLDivElement>(null);
  const { language, t } = useTranslation();
  
  const displayedProjects = projects || projectsData;
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
  
  const getDescription = (project: Project) => 
    language === 'en' && project.description_en ? project.description_en : project.description;

  const getTags = (project: Project) =>
    language === 'en' && project.tags_en ? project.tags_en : project.tags;

  return (
    <div ref={listRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProjects.map((project) => (
        <Card key={project.id} className="overflow-hidden card-hover project-card-animated opacity-0 border-2 border-border">
          <div className="h-48 bg-muted relative overflow-hidden group">
            <img 
              src={project.image} 
              alt={project.title} 
              className={`w-full h-full ${project.id === '2' ? 'object-contain p-4' : 'object-cover'} transition-transform duration-500 group-hover:scale-105`}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71';
              }}
            />
            <div className="absolute inset-0 bg-primary/70 opacity-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100">
              <Button variant="secondary" size="sm" className="mr-2" asChild>
                <Link to={project.link}>
                  <Eye className="mr-1" size={16} />
                  {t('projects.view.short')}
                </Link>
              </Button>
              {project.link.startsWith('http') && (
                <Button variant="secondary" size="sm" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1" size={16} />
                    {t('projects.open')}
                  </a>
                </Button>
              )}
            </div>
          </div>
          
          <CardHeader>
            <CardTitle className="text-xl font-bold line-clamp-1">{project.title}</CardTitle>
            <CardDescription className="line-clamp-2">{getDescription(project)}</CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {getTags(project).map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">{tag}</Badge>
              ))}
            </div>
          </CardContent>
          
          <CardFooter>
            <Button asChild className="w-full">
              <Link to={project.link}>{t('projects.view')}</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProjectsList;
