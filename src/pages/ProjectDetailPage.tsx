import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProjectById, getRelatedProjects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
const ProjectDetailPage = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();

  // Find the project based on ID using our new helper function
  const project = getProjectById(id || '');
  if (!project) {
    return <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Projet non trouvé</h1>
            <p className="mb-6 text-gray-600">Le projet que vous recherchez n'existe pas.</p>
            <Button asChild>
              <Link to="/projets">Retour aux projets</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>;
  }

  // Get related projects using our new helper function
  const relatedProjects = getRelatedProjects(project.id);
  return <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-primary text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </div>
              <Button asChild variant="secondary">
                <Link to="/projets">Retour aux projets</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Project Logo (if available) */}
          {project.logo && <div className="mb-10 flex justify-center">
              <div className="max-w-2xl w-full">
                <AspectRatio ratio={16 / 9} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={project.logo} alt={`Logo ${project.title}`} className="w-full h-full object-contain p-6" />
                </AspectRatio>
              </div>
            </div>}
          
          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Description du projet</h2>
              <div className="prose max-w-none">
                <p className="mb-4">{project.description_extended}</p>
                
                {project.objectives && project.objectives.length > 0 && <>
                    <h3 className="text-xl font-bold mt-6 mb-2">Objectifs</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      {project.objectives.map((objective, index) => <li key={index}>{objective}</li>)}
                    </ul>
                  </>}
                
                {project.technologies && project.technologies.length > 0 && <>
                    <h3 className="text-xl font-bold mt-6 mb-2">Technologies utilisées</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      {project.technologies.map((tech, index) => <li key={index}>{tech}</li>)}
                    </ul>
                  </>}
              </div>
            </div>
            
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Informations</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-600">Client</h4>
                      <p>{project.client || 'Freelance'}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-600">Période</h4>
                      <p>{project.period || 'N/A'}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-600">Catégorie</h4>
                      <p className="">{project.tags.join(', ')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Gallery - Show screenshots if available */}
          {project.screenshots && project.screenshots.length > 0 && <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Captures d'écran</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.screenshots.map((imgSrc, index) => <div key={index} className={`aspect-video rounded-md overflow-hidden shadow-lg border border-gray-200 ${project.id === '2' && index === 0 ? "flex items-center justify-center bg-white" : ""}`}>
                    <img src={imgSrc} alt={`${project.title} capture ${index + 1}`} className={project.id === '2' && index === 0 ? "w-3/4 h-auto object-contain" : "w-full h-full object-cover"} />
                  </div>)}
              </div>
            </div>}
          
          {/* Related Projects */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Projets similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map(relatedProject => <Card key={relatedProject.id} className="overflow-hidden card-hover">
                  <div className="h-48 overflow-hidden">
                    <img src={relatedProject.image} alt={relatedProject.title} className="w-full h-full object-cover" onError={e => {
                  // Fallback on error
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://www.onpointbasketball.com/wp-content/uploads/2023/04/NBA-logo-white-background.png';
                }} />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-1">{relatedProject.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {relatedProject.description.substring(0, 60)}...
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to={relatedProject.link}>Voir le projet</Link>
                    </Button>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default ProjectDetailPage;