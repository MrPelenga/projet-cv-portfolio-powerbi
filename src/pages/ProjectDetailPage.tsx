import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProjectById, getRelatedProjects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useTranslation } from '@/hooks/useTranslation';

const ProjectDetailPage = () => {
  const { t, language } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const project = getProjectById(id || '');
  if (!project) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">{t('project.detail.not.found.title')}</h1>
            <p className="mb-6 text-muted-foreground">{t('project.detail.not.found.description')}</p>
            <Button asChild>
              <Link to="/projets">{t('project.detail.back')}</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProjects = getRelatedProjects(project.id);

  const description = language === 'en' && project.description_extended_en ? project.description_extended_en : project.description_extended;
  const objectives = language === 'en' && project.objectives_en ? project.objectives_en : project.objectives;
  const tags = language === 'en' && project.tags_en ? project.tags_en : project.tags;
  const captions = language === 'en' && project.screenshotCaptions_en ? project.screenshotCaptions_en : project.screenshotCaptions;
  const period = language === 'en' && project.period_en ? project.period_en : project.period;
  const relatedDescription = (p: typeof project) => 
    language === 'en' && p.description_en ? p.description_en : p.description;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <div className="hero-gradient border-b border-border py-12 md:py-16">
          <div className="page-shell">
            <div className="flex flex-wrap items-center justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold mb-4">{language === 'en' && project.title_en ? project.title_en : project.title}</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </div>
              <Button asChild variant="outline">
                <Link to="/projets">{t('project.detail.back')}</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="page-shell py-12">
          {project.logo && (
            <div className="mb-10 flex justify-center">
              <div className="max-w-2xl w-full">
                <AspectRatio ratio={16 / 9} className="bg-card rounded-lg shadow-md overflow-hidden">
                  <img src={project.logo} alt={`Logo ${project.title}`} className="w-full h-full object-contain p-6" />
                </AspectRatio>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">{t('project.detail.description.title')}</h2>
              <div className="prose max-w-none">
                <p className="mb-4">{description}</p>
                
                {objectives && objectives.length > 0 && (
                  <>
                    <h3 className="text-xl font-bold mt-6 mb-2">{t('project.detail.objectives.title')}</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      {objectives.map((objective, index) => <li key={index}>{objective}</li>)}
                    </ul>
                  </>
                )}
                
                {project.technologies && project.technologies.length > 0 && (
                  <>
                    <h3 className="text-xl font-bold mt-6 mb-2">{t('project.detail.technologies.title')}</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      {project.technologies.map((tech, index) => <li key={index}>{tech}</li>)}
                    </ul>
                  </>
                )}
              </div>
            </div>
            
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{t('project.detail.info.title')}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-muted-foreground">{t('project.detail.client.label')}</h4>
                      <p>{project.client || 'Freelance'}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-muted-foreground">{t('project.detail.period.label')}</h4>
                      <p>{period || 'N/A'}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-muted-foreground">{t('project.detail.category.label')}</h4>
                      <p>{tags.join(', ')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{t('project.detail.screenshots.title')}</h2>
              <div className={`grid grid-cols-1 gap-6 ${project.id === '5' ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
                {project.screenshots.map((imgSrc, index) => (
                  <figure key={index} className="min-w-0">
                    <div className={`aspect-video rounded-md overflow-hidden shadow-lg border border-border ${project.id === '2' && index === 0 ? "flex items-center justify-center bg-card" : ""}`}>
                      <img src={imgSrc} alt={`${project.title} capture ${index + 1}`} className={project.id === '2' && index === 0 ? "w-3/4 h-auto object-contain" : "w-full h-full object-cover"} />
                    </div>
                    {captions && captions[index] && (
                      <figcaption className="mt-2 text-sm text-muted-foreground text-center">{captions[index]}</figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          )}
          
          <div>
            <h2 className="text-2xl font-bold mb-6">{t('project.detail.related.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map(relatedProject => (
                <Card key={relatedProject.id} className="overflow-hidden card-hover">
                  <div className="h-48 overflow-hidden">
                    <img src={relatedProject.image} alt={relatedProject.title} className="w-full h-full object-cover" onError={e => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71';
                    }} />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-1">{relatedProject.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {relatedDescription(relatedProject).substring(0, 60)}...
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to={relatedProject.link}>{t('project.detail.view.button')}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
