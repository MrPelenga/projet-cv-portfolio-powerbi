import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projectsData } from '@/components/ProjectsList';
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

  // NBA player images for project ID 1
  const nbaPlayerImages = id === "1" ? ["/lovable-uploads/7daacdd5-4076-4c9d-b6ad-a88f7af23b74.png", "/lovable-uploads/dbf798b8-ca51-4501-8ccc-ce557c7d069b.png", "/lovable-uploads/654a5bfc-a418-4c15-b506-4a58c490231c.png"] : [];

  // Gofusion EcoVeille images for project ID 2
  const gofusionImages = id === "2" ? ["/lovable-uploads/8dd28d84-ffbf-4033-b95a-c923bf8eec21.png", "/lovable-uploads/258bfcae-02ac-4615-aa7d-2b85de87455f.png", "/lovable-uploads/d533ed2d-dfd2-40a6-8fa7-e2ee98933758.png", "/lovable-uploads/e8e183ec-d9c6-4565-b923-f22434466752.png"] : [];
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
          {/* NBA Logo added at the top of the page for project ID 1 */}
          {id === "1" && <div className="mb-10 flex justify-center">
              <div className="max-w-2xl w-full">
                <AspectRatio ratio={16 / 9} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="/lovable-uploads/1e3f2b15-068d-4a4e-be9e-fbafda62442b.png" alt="Logo NBA" className="w-full h-full object-contain p-6" />
                </AspectRatio>
              </div>
            </div>}
          
          {/* Project Image */}
          <div className="mb-10">
            
          </div>
          
          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Description du projet</h2>
              <div className="prose max-w-none">
                {id === "2" ? <>
                    <p className="mb-4">Ce scénario Make automatise la collecte d'informations provenant de sites web spécialisés dans l'environnement et le développement durable. L'objectif est de générer du contenu pertinent et actualisé pour le blog de l'entreprise Gofusion. Ce processus permet d'assurer une veille informative efficace sur les thématiques environnementales, facilitant ainsi la création régulière d'articles de qualité alignés avec les valeurs et l'expertise de Gofusion</p>
                    <h3 className="text-xl font-bold mt-6 mb-2">Objectifs</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li>Automatiser la veille informationnelle sur les thématiques environnementales et de développement durable</li>
                      <li>Gagner du temps dans le processus de création de contenu pour le blog</li>
                      <li>Alimenter le blog de Gofusion avec du contenu pertinent et à jour</li>
                      <li>Collecter régulièrement des informations actualisées depuis des sources spécialisées fiables</li>
                    </ul>
                    <h3 className="text-xl font-bold mt-6 mb-2">Technologies utilisées</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li>MAKE</li>
                      <li>GSheet</li>
                      <li>API</li>
                      <li>SEranking</li>
                    </ul>
                  </> :
              // Pour le projet NBA (ID 1), restaurer la description originale avec objectifs et technologies
              <>
                    <p className="mb-4">Ce tableau de bord Power BI présente les statistiques des stars de la NBA pour la saison 2023-2024. Il offre une visualisation interactive des performances des joueurs, permettant aux utilisateurs d'explorer et d'analyser les données de manière intuitive. Les visualisations comprennent des statistiques clés comme les points par match, les rebonds, les passes décisives et les pourcentages de tir.</p>
                    <h3 className="text-xl font-bold mt-6 mb-2">Objectifs</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li>Créer un tableau de bord interactif pour visualiser les statistiques des joueurs NBA</li>
                      <li>Permettre des comparaisons de performances entre différents joueurs</li>
                      <li>Offrir des filtres dynamiques pour personnaliser l'analyse</li>
                      <li>Présenter les données de façon claire et visuellement attrayante</li>
                    </ul>
                    <h3 className="text-xl font-bold mt-6 mb-2">Technologies utilisées</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li>Power BI</li>
                      <li>DAX</li>
                      <li>API NBA Stats</li>
                      <li>Power Query</li>
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
                      <p>Gofusion</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-600">Période</h4>
                      <p>Mars 2025</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-600">Catégorie</h4>
                      <p className="">{project.tags.join(', ')}</p>
                    </div>
                    <div className="pt-4">
                      
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Gallery - Use specific NBA images for project with ID 1 or Gofusion images for project with ID 2 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Captures d'écran</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {id === "1" ? nbaPlayerImages.map((imgSrc, index) => <div key={index} className="aspect-video rounded-md overflow-hidden shadow-lg border border-gray-200">
                  <img src={imgSrc} alt={`Dashboard NBA Statistiques ${index + 1}`} className="w-full h-full object-cover" />
                </div>) : id === "2" ? gofusionImages.map((imgSrc, index) => <div key={index} className={`aspect-video rounded-md overflow-hidden shadow-lg border border-gray-200 ${index === 0 ? "flex items-center justify-center bg-white" : ""}`}>
                  <img src={imgSrc} alt={`Gofusion EcoVeille ${index + 1}`} className={index === 0 ? "w-3/4 h-auto object-contain" : "w-full h-full object-cover"} />
                </div>) : [1, 2, 3].map(i => <div key={i} className="aspect-[4/3] rounded-md overflow-hidden shadow-sm">
                  <img src={`https://www.onpointbasketball.com/wp-content/uploads/2023/04/NBA-logo-white-background.png`} alt={`Capture d'écran ${i}`} className="w-full h-full object-cover" />
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
                  target.src = 'https://www.onpointbasketball.com/wp-content/uploads/2023/04/NBA-logo-white-background.png';
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