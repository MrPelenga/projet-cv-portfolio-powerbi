
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

  const powerBIProjects = projectsData.filter(project => 
    project.tags.includes('Power BI') || project.tags.includes('Dashboard')
  );
  const otherProjects = projectsData.filter(project => 
    !project.tags.includes('Power BI') && !project.tags.includes('Dashboard')
  );

  const allTags = Array.from(new Set(projectsData.flatMap(project => project.tags)));
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
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
        <div className="bg-primary text-primary-foreground py-12 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-50" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in" style={{animationDelay: '0.1s'}}>{t('projects.page.title')}</h1>
            <p className="max-w-2xl text-xl text-center font-normal mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              {t('projects.page.subtitle')}
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-12">
          {powerBIProjects.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="text-primary" size={32} />
                <h2 className="text-3xl font-bold text-primary">{t('projects.powerbi.title')}</h2>
              </div>
              <p className="text-muted-foreground mb-6 max-w-3xl">
                {t('projects.powerbi.description')}
              </p>
              <ProjectsList projects={powerBIProjects} />
            </div>
          )}

          <div className="mb-10 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-2/3 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
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
              <h3 className="text-xl font-semibold mb-4 text-foreground">{t('projects.filter.title')}</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <Badge 
                    key={tag} 
                    variant={selectedTags.includes(tag) ? "default" : "outline"} 
                    className={`px-3 py-1 cursor-pointer ${
                      selectedTags.includes(tag) 
                        ? "bg-primary text-primary-foreground hover:bg-primary/80" 
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
              <h2 className="text-2xl font-bold text-foreground">
                {filteredProjects.length > 0 
                  ? selectedTags.length > 0 
                    ? `${t('projects.filtered.title')} (${filteredProjects.length})` 
                    : t('projects.all.title')
                  : t('projects.none.found')}
              </h2>
              
              {selectedTags.length > 0 && (
                <Button variant="ghost" size="sm" onClick={() => setSelectedTags([])} className="text-primary hover:text-primary/80">
                  {t('projects.reset.filters')}
                </Button>
              )}
            </div>
            
            {filteredProjects.length > 0 ? (
              <ProjectsList projects={filteredProjects} />
            ) : (
              <div className="text-center py-12 bg-card rounded-lg border border-border">
                <p className="text-lg text-muted-foreground">{t('projects.no.results')}</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-primary/10 py-16 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-foreground">{t('projects.cta.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('projects.cta.description')}
            </p>
            <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg" asChild>
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
