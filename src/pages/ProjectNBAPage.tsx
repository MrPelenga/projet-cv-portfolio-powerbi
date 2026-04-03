
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslation } from '@/hooks/useTranslation';

const ProjectNBAPage = () => {
  const { language } = useTranslation();

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
          🏀 Dashboard NBA Stats
        </h1>
        <p className="text-muted-foreground mb-6 text-lg">
          {language === 'en'
            ? 'Power BI dashboard presenting NBA star statistics for the 2023-2024 season with interactive visualizations.'
            : 'Tableau de bord Power BI présentant les statistiques des stars de la NBA pour la saison 2023-2024 avec visualisations interactives.'}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {['Power BI', 'DAX', 'NBA Stats', 'Power Query'].map(t => (
            <Badge key={t} variant="secondary" className="bg-primary/10 text-primary">{t}</Badge>
          ))}
        </div>

        {/* Case Study */}
        <section className="mb-10 space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-2">🎯 {language === 'en' ? 'Business Context' : 'Contexte métier'}</h2>
            <p className="text-foreground/90">
              {language === 'en'
                ? 'This Power BI dashboard presents NBA star statistics for the 2023-2024 season. It offers an interactive visualization of player performance, allowing users to explore and analyze data intuitively.'
                : 'Ce tableau de bord Power BI présente les statistiques des stars de la NBA pour la saison 2023-2024. Il offre une visualisation interactive des performances des joueurs.'}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">🛠️ {language === 'en' ? 'Tools Used' : 'Outils utilisés'}</h2>
            <div className="flex flex-wrap gap-2">
              {['Power BI', 'DAX', 'Power Query', 'NBA Stats API'].map(t => (
                <Badge key={t} variant="secondary" className="bg-primary/10 text-primary">{t}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">📊 {language === 'en' ? 'Key Objectives' : 'Objectifs clés'}</h2>
            <ul className="space-y-2 text-foreground/90 list-disc list-inside">
              {(language === 'en'
                ? [
                    'Create an interactive dashboard to visualize NBA player statistics',
                    'Enable performance comparisons between different players',
                    'Provide dynamic filters for customized analysis',
                    'Present data in a clear and visually appealing way',
                  ]
                : [
                    "Créer un tableau de bord interactif pour visualiser les statistiques des joueurs NBA",
                    "Permettre des comparaisons de performances entre différents joueurs",
                    "Offrir des filtres dynamiques pour personnaliser l'analyse",
                    "Présenter les données de façon claire et visuellement attrayante",
                  ]
              ).map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Power BI Embed */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">📈 {language === 'en' ? 'Interactive Dashboard' : 'Tableau de bord interactif'}</h2>
          <div className="w-full rounded-xl overflow-hidden border border-border shadow-lg" style={{ aspectRatio: '16/9' }}>
            <iframe
              title="NBA Dashboard Power BI"
              src="https://app.powerbi.com/groups/me/reports/95e8e56b-8a0a-4f68-9083-679aac8f2ac6/d3d5cc90003b34b44e07?experience=power-bi"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectNBAPage;
