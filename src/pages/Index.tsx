
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProjectsList from '@/components/ProjectsList';
import CVPreview from '@/components/CVPreview';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ScrollSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const Index = () => {
  const { t } = useTranslation();
  
  return <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* About Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <ScrollSection>
              <h2 className="section-title text-center mb-12">{t('about.title')}</h2>
            </ScrollSection>
            <ScrollSection delay={150}>
              <div className="bg-card rounded-xl shadow-md p-8 max-w-3xl mx-auto">
                <p className="text-lg mb-6">{t('about.description1')}</p>
                <p className="text-lg">{t('about.description2')}</p>
              </div>
            </ScrollSection>
          </div>
        </section>
        
        {/* CV Section */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <ScrollSection>
              <h2 className="section-title text-center mb-4">{t('cv.title')}</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                {t('cv.subtitle')}
              </p>
            </ScrollSection>
            
            <ScrollSection delay={200}>
              <div className="mb-10">
                <CVPreview />
              </div>
            </ScrollSection>
            
            <ScrollSection delay={300}>
              <div className="text-center">
                <Button asChild size="lg">
                  <Link to="/cv">{t('cv.cta')}</Link>
                </Button>
              </div>
            </ScrollSection>
          </div>
        </section>
        
        {/* Projects Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <ScrollSection>
              <h2 className="section-title text-center mb-4">{t('projects.title')}</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                {t('projects.subtitle')}
              </p>
            </ScrollSection>
            
            <ScrollSection delay={200}>
              <div className="mb-10">
                <ProjectsList limit={3} />
              </div>
            </ScrollSection>
            
            <ScrollSection delay={300}>
              <div className="text-center">
                <Button asChild variant="outline" size="lg">
                  <Link to="/projets">{t('projects.cta')}</Link>
                </Button>
              </div>
            </ScrollSection>
          </div>
        </section>
        
        {/* Contact CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto text-center">
            <ScrollSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('contact.title')}</h2>
            </ScrollSection>
            <ScrollSection delay={150}>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                {t('contact.subtitle')}
              </p>
            </ScrollSection>
            <ScrollSection delay={300}>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">{t('contact.cta')}</Link>
              </Button>
            </ScrollSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default Index;
