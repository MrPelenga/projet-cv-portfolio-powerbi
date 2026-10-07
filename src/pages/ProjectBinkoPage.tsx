
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslation } from '@/hooks/useTranslation';

const ProjectBinkoPage = () => {
  const { language } = useTranslation();

  const screenshots = [
    '/lovable-uploads/7312361a-3e1e-43ea-874a-18d04ffb1b42.png',
    '/lovable-uploads/0e9c1b08-6fac-4e9d-b81d-08b8de55d8a1.png',
    '/lovable-uploads/0b5c67d1-9484-47f2-8666-b1e11e8fd1db.png',
    '/lovable-uploads/e6f102ef-cb75-4076-b158-3be1635dc501.png',
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
          Binko - {language === 'en' ? 'Automated AI Generation' : 'Génération Automatisée pour l\'IA'}
        </h1>
        <p className="text-muted-foreground mb-6 text-lg">
          {language === 'en'
            ? 'Automated image generation solution to train Binko\'s AI.'
            : 'Solution de génération automatisée d\'images pour entraîner l\'IA de Binko.'}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {(language === 'en' ? ['Python', 'API', 'AI Tools'] : ['Python', 'API', 'Outils IA']).map(t => (
            <Badge key={t} variant="secondary" className="bg-primary/10 text-primary">{t}</Badge>
          ))}
        </div>

        {/* Case Study */}
        <section className="mb-10 space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-2">{language === 'en' ? 'Business Context' : 'Contexte métier'}</h2>
            <p className="text-foreground/90">
              {language === 'en'
                ? 'Training Binko\'s AI model required a massive volume of visual data. Manual collection and classification of these images was too time-consuming and limited the model\'s learning capacity.'
                : 'L\'entraînement du modèle d\'Intelligence Artificielle de Binko nécessitait un volume massif de données visuelles. La collecte et la classification manuelles de ces images étaient trop chronophages et limitaient la capacité d\'apprentissage du modèle.'}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">{language === 'en' ? 'The Solution' : 'La Solution'}</h2>
            <p className="text-foreground/90">
              {language === 'en'
                ? 'Development of an automated generation pipeline via API. The script dynamically queries AI models to generate targeted synthetic images, formats them, and injects them directly into the training database.'
                : 'Développement d\'un pipeline de génération automatisée via API. Le script interroge dynamiquement les modèles d\'IA pour générer des images synthétiques ciblées, les formate, et les injecte directement dans la base de données d\'entraînement.'}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">{language === 'en' ? 'Impact (ROI)' : 'Impact (ROI)'}</h2>
            <ul className="space-y-3 text-foreground/90">
              <li>⏱️ <strong className="text-foreground">{language === 'en' ? 'Time saved:' : 'Gain de temps :'}</strong> {language === 'en' ? 'Automation of a task that took several hours per week.' : 'Automatisation d\'une tâche qui prenait plusieurs heures par semaine.'}</li>
              <li><strong className="text-foreground">{language === 'en' ? 'Volume:' : 'Volume :'}</strong> {language === 'en' ? 'Generation of over 1,000 images per month.' : 'Génération de plus de 1 000 images par mois.'}</li>
              <li><strong className="text-foreground">{language === 'en' ? 'Quality:' : 'Qualité :'}</strong> {language === 'en' ? 'Improved Binko\'s AI accuracy through dataset diversity.' : 'Amélioration de la précision de l\'IA de Binko grâce à la diversité du dataset.'}</li>
            </ul>
          </div>
        </section>

        {/* Gallery */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">{language === 'en' ? 'Gallery / Screenshots' : 'Galerie / Captures d\'écran'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {screenshots.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-border shadow-md">
                <img src={src} alt={`Binko screenshot ${i + 1}`} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectBinkoPage;
