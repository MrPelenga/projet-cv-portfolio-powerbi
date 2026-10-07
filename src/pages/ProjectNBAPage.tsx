
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ZoomIn, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslation } from '@/hooks/useTranslation';

const screenshots = [
  "/lovable-uploads/7daacdd5-4076-4c9d-b6ad-a88f7af23b74.png",
  "/lovable-uploads/dbf798b8-ca51-4501-8ccc-ce557c7d069b.png",
  "/lovable-uploads/654a5bfc-a418-4c15-b506-4a58c490231c.png"
];

const ProjectNBAPage = () => {
  const { language } = useTranslation();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

        <h1 className="text-3xl md:text-4xl font-bold mb-2">Dashboard NBA Stats</h1>
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
            <h2 className="text-xl font-bold mb-2">{language === 'en' ? 'Business Context' : 'Contexte métier'}</h2>
            <p className="text-foreground/90">
              {language === 'en'
                ? 'This Power BI dashboard presents NBA star statistics for the 2023-2024 season. It offers an interactive visualization of player performance, allowing users to explore and analyze data intuitively.'
                : 'Ce tableau de bord Power BI présente les statistiques des stars de la NBA pour la saison 2023-2024. Il offre une visualisation interactive des performances des joueurs.'}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">{language === 'en' ? 'Tools Used' : 'Outils utilisés'}</h2>
            <div className="flex flex-wrap gap-2">
              {['Power BI', 'DAX', 'Power Query', 'NBA Stats API'].map(t => (
                <Badge key={t} variant="secondary" className="bg-primary/10 text-primary">{t}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">{language === 'en' ? 'Key Objectives' : 'Objectifs clés'}</h2>
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
          <h2 className="text-xl font-bold mb-4">{language === 'en' ? 'Interactive Dashboard' : 'Tableau de bord interactif'}</h2>
          <iframe
            title="Dasbord_NBA"
            src="https://app.powerbi.com/reportEmbed?reportId=95e8e56b-8a0a-4f68-9083-679aac8f2ac6&autoAuth=true&ctid=e065ecf4-22b4-4599-9daf-24c5cb5e12d3"
            frameBorder="0"
            allowFullScreen
            className="w-full min-h-[600px] rounded-lg shadow-md border border-border"
          />
        </section>

        {/* Static Fallback */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-2">
            {language === 'en' ? 'Static Overview (Fallback)' : 'Aperçu statique (Alternative)'}
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            {language === 'en'
              ? "If the interactive dashboard above doesn't load (Microsoft access restrictions), you can view the screenshots of my analyses below."
              : "Si le tableau de bord interactif ci-dessus ne s'affiche pas (restrictions d'accès Microsoft), vous pouvez consulter les captures d'écran de mes analyses ci-dessous."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {screenshots.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="group relative rounded-xl overflow-hidden shadow-md border border-border hover:shadow-xl transition-shadow cursor-pointer"
              >
                <img src={src} alt={`NBA Dashboard screenshot ${i + 1}`} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
      <Footer />

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setLightboxIndex(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={screenshots[lightboxIndex]}
            alt="Fullscreen view"
            className="max-w-full max-h-[90vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectNBAPage;
