
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectsList, { projectsData } from '@/components/ProjectsList';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

const ProjectsPage = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Séparer les projets Power BI des autres
  const powerBIProjects = projectsData.filter(project => 
    project.tags.includes('Power BI') || project.tags.includes('Dashboard')
  );
  const otherProjects = projectsData.filter(project => 
    !project.tags.includes('Power BI') && !project.tags.includes('Dashboard')
  );

  // Extract all unique tags from projects
  const allTags = Array.from(new Set(projectsData.flatMap(project => project.tags)));
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };
  
  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTags = selectedTags.length === 0 || 
                        selectedTags.some(tag => project.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });

  useEffect(() => {
    // Add animation classes when component mounts
    const elements = document.querySelectorAll('.animate-on-mount');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-fade-in');
      }, index * 100);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-primary text-white py-12 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-50" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 1.79-4 4 1.79 4 4 4z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in" style={{animationDelay: '0.1s'}}>{t('projects.page.title')}</h1>
            <p className="max-w-2xl text-xl text-center font-normal mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              {t('projects.page.subtitle')}
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Section Power BI spéciale */}
          {powerBIProjects.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="text-primary" size={32} />
                <h2 className="text-3xl font-bold text-primary">{t('projects.powerbi.title')}</h2>
              </div>
              <p className="text-gray-600 mb-6 max-w-3xl">
                {t('projects.powerbi.description')}
              </p>
              <ProjectsList projects={powerBIProjects} />
            </div>
          )}

          <div className="mb-10 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-2/3 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder={t('projects.search.placeholder')} 
                  value={searchTerm} 
                  onChange={handleSearchChange} 
                  className="w-full pl-10 border-2 focus:border-primary"
                />
              </div>
              <div className="w-full md:w-1/3">
                <Button 
                  variant="outline" 
                  className="w-full border-2 hover:bg-primary/10 flex items-center justify-center gap-2"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter size={18} />
                  {t('projects.filter.button')}
                </Button>
              </div>
            </div>
          </div>
          
          {showFilters && (
            <div className="mb-8 bg-card p-6 rounded-lg shadow-md border border-border animate-fade-in">
              <h3 className="text-xl font-semibold mb-4">{t('projects.filter.title')}</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <Badge 
                    key={tag} 
                    variant={selectedTags.includes(tag) ? "default" : "outline"} 
                    className={`px-3 py-1 cursor-pointer ${
                      selectedTags.includes(tag) 
                        ? "bg-primary text-white hover:bg-primary/80" 
                        : "hover:bg-primary/10"
                    }`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {filteredProjects.length > 0 
                  ? selectedTags.length > 0 
                    ? `${t('projects.filtered.title')} (${filteredProjects.length})` 
                    : t('projects.all.title')
                  : t('projects.none.found')}
              </h2>
              
              {selectedTags.length > 0 && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSelectedTags([])}
                  className="text-primary hover:text-primary/80"
                >
                  {t('projects.reset.filters')}
                </Button>
              )}
            </div>
            
            {filteredProjects.length > 0 ? (
              <ProjectsList projects={filteredProjects} />
            ) : (
              <div className="text-center py-12 bg-card rounded-lg border border-border">
                <p className="text-lg text-gray-600">
                  {t('projects.no.results')}
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-primary/10 py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-70" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{t('projects.cta.title')}</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('projects.cta.description')}
            </p>
            <Button 
              size="lg" 
              className="shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg"
              asChild
            >
              <Link to="/contact">{t('projects.cta.button')}</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
