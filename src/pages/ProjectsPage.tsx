
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectsList, { projectsData } from '@/components/ProjectsList';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  // Extract all unique tags from projects
  const allTags = Array.from(
    new Set(projectsData.flatMap(project => project.tags))
  );
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-primary text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Mes Projets</h1>
            <p className="text-xl max-w-2xl">
              Découvrez mon portfolio de projets Power BI et d'analyses de données
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-2/3">
                <Input 
                  type="text" 
                  placeholder="Rechercher un projet..." 
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full"
                />
              </div>
              <div className="w-full md:w-1/3">
                <Button variant="outline" className="w-full">Filtrer</Button>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Filtrer par catégorie</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge key={tag} variant="outline" className="px-3 py-1 cursor-pointer hover:bg-gray-100">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Tous les projets</h2>
            <p className="text-gray-600 mb-6">
              Voici l'ensemble de mes projets et réalisations professionnelles
            </p>
            <ProjectsList />
          </div>
        </div>
        
        <div className="bg-gray-100 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Vous avez un projet en tête ?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Je suis disponible pour des missions freelance et des collaborations.
              N'hésitez pas à me contacter pour discuter de votre projet.
            </p>
            <Button size="lg">Me Contacter</Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
