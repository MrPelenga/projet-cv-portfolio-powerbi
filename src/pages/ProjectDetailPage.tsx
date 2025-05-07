import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projectsData } from '@/components/ProjectsList';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
const ProjectDetailPage = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();

  // Find the project based on ID
  const project = projectsData.find(p => p.id === id);
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
          {/* Project Image */}
          <div className="mb-10">
            <div className="aspect-[16/9] overflow-hidden rounded-lg shadow-md">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" onError={e => {
              // Fallback on error
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71';
            }} />
            </div>
          </div>
          
          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Description du projet</h2>
              <div className="prose max-w-none">
                
                <p className="mb-4">Permettre à tous, connaisseurs comme novices, d'accéder facilement aux statistiques clés des meilleurs joueurs et de comparer leurs performances.</p>
                <h3 className="text-xl font-bold mt-6 mb-2">Objectifs</h3>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Centraliser les données de différentes sources en un tableau de bord unique</li>
                  <li>Permettre une analyse en temps réel des performances commerciales</li>
                  <li>Faciliter l'identification des tendances et des anomalies</li>
                  <li>Créer des visualisations interactives pour une meilleure prise de décision</li>
                </ul>
                <h3 className="text-xl font-bold mt-6 mb-2">Technologies utilisées</h3>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Microsoft Power BI</li>
                  <li>SQL Server pour l'extraction et la transformation des données</li>
                  <li>DAX pour les calculs avancés</li>
                  <li>Power Query pour le nettoyage et la préparation des données</li>
                </ul>
              </div>
            </div>
            
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Informations</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-600">Client</h4>
                      <p>Entreprise ABC</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-600">Période</h4>
                      <p>Janvier - Mars 2023</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-600">Catégorie</h4>
                      <p>{project.tags.join(', ')}</p>
                    </div>
                    <div className="pt-4">
                      <Button className="w-full">Voir la démo</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Gallery */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Captures d'écran</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map(i => <div key={i} className="aspect-[4/3] rounded-md overflow-hidden shadow-sm">
                  <img src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?h=300&w=400&fit=crop&q=80`} alt={`Capture d'écran ${i}`} className="w-full h-full object-cover" />
                </div>)}
            </div>
          </div>
          
          {/* Related Projects */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Projets similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projectsData.filter(p => p.id !== project.id).slice(0, 3).map(relatedProject => <Card key={relatedProject.id} className="overflow-hidden card-hover">
                  <div className="h-48 overflow-hidden">
                    <img src={relatedProject.image} alt={relatedProject.title} className="w-full h-full object-cover" onError={e => {
                  // Fallback on error
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71';
                }} />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-1">{relatedProject.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{relatedProject.description.substring(0, 60)}...</p>
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