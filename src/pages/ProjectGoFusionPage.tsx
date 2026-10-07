
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslation } from '@/hooks/useTranslation';

const ProjectGoFusionPage = () => {
  const { language } = useTranslation();

  const screenshots = [
    '/lovable-uploads/8dd28d84-ffbf-4033-b95a-c923bf8eec21.png',
    '/lovable-uploads/258bfcae-02ac-4615-aa7d-2b85de87455f.png',
    '/lovable-uploads/d533ed2d-dfd2-40a6-8fa7-e2ee98933758.png',
    '/lovable-uploads/e8e183ec-d9c6-4565-b923-f22434466752.png',
    '/lovable-uploads/0c0c76c8-eaf8-476d-ad96-973ce30af4e4.png',
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16 max-w-5xl">
        <Link to="/projets">
          <Button variant="ghost" className="mb-6 gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" />
            {language === 'en' ? '← Back to Projects' : '← Retour aux projets'}
          </Button>
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Go Fusion - {language === 'en' ? 'Automated EcoWatch' : 'EcoVeille Automatisée'}
        </h1>
        <p className="text-muted-foreground mb-6 text-lg">
          {language === 'en'
            ? 'Make scenario automating the collection of environmental information to generate content for the Gofusion blog.'
            : 'Scénario Make automatisant la collecte d\'informations environnementales pour générer du contenu pour le blog de Gofusion.'}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {(language === 'en' ? ['Make (Integromat)', 'API', 'SEO Tools'] : ['Make (Integromat)', 'API', 'Outils SEO']).map(t => (
            <Badge key={t} variant="secondary" className="bg-primary/10 text-primary">{t}</Badge>
          ))}
        </div>

        {/* Case Study */}
        <section className="mb-10 space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-2">{language === 'en' ? 'Business Context' : 'Contexte métier'}</h2>
            <p className="text-foreground/90">
              {language === 'en'
                ? 'Gofusion needed to continuously monitor environmental news (EcoWatch) for its SEO strategy and positioning, but manual monitoring and article writing were too time-consuming for the teams.'
                : 'Gofusion avait besoin de surveiller en permanence l\'actualité environnementale (EcoVeille) pour sa stratégie SEO et son positionnement, mais la veille manuelle et la rédaction d\'articles prenaient trop de temps aux équipes.'}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">{language === 'en' ? 'The Solution' : 'La Solution'}</h2>
            <p className="text-foreground/90">
              {language === 'en'
                ? 'Creation of a complete automation scenario on Make. The system collects information daily via various news APIs, filters relevant data, and pre-generates SEO-optimized content ready to be published.'
                : 'Création d\'un scénario d\'automatisation complet sur Make. Le système collecte quotidiennement des informations via diverses API d\'actualités, filtre les données pertinentes, et pré-génère des contenus optimisés pour le SEO prêts à être publiés.'}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">{language === 'en' ? 'Impact (ROI)' : 'Impact (ROI)'}</h2>
            <ul className="space-y-3 text-foreground/90">
              <li>⏱️ <strong className="text-foreground">{language === 'en' ? 'Productivity:' : 'Productivité :'}</strong> {language === 'en' ? 'Saved 4 hours of research and structuring per week for the team.' : 'Économie de 4 heures de recherche et de structuration par semaine pour l\'équipe.'}</li>
              <li><strong className="text-foreground">{language === 'en' ? 'Data volume:' : 'Volume de données :'}</strong> {language === 'en' ? 'Automated processing of 20 sources of information per day.' : 'Traitement automatisé de 20 sources d\'informations par jour.'}</li>
              <li><strong className="text-foreground">{language === 'en' ? 'Performance:' : 'Performance :'}</strong> {language === 'en' ? '17% increase in organic SEO traffic on environmental topics.' : 'Augmentation du trafic organique SEO de 17% sur les thématiques environnementales.'}</li>
            </ul>
          </div>
        </section>

        {/* Gallery */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">{language === 'en' ? 'Gallery / Screenshots' : 'Galerie / Captures d\'écran'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {screenshots.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-border shadow-md">
                <img src={src} alt={`GoFusion screenshot ${i + 1}`} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectGoFusionPage;
