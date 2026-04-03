import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface ProjectCaseStudyModalProps {
  projectId: string | null;
  open: boolean;
  onClose: () => void;
}

const ProjectCaseStudyModal = ({ projectId, open, onClose }: ProjectCaseStudyModalProps) => {
  const { language } = useTranslation();
  const navigate = useNavigate();

  const fullPageRoutes: Record<string, string> = {
    '1': '/projects/nba',
    '3': '/projects/binko',
    '2': '/projects/gofusion',
  };

  if (!projectId) return null;

  const caseStudies: Record<string, { fr: React.ReactNode; en: React.ReactNode }> = {
    '3': {
      fr: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">🎯 Contexte métier</h3>
            <p className="text-foreground/90">
              L'entraînement du modèle d'Intelligence Artificielle de Binko nécessitait un volume massif de données visuelles.
              La collecte et la classification manuelles de ces images étaient trop chronophages et limitaient la capacité d'apprentissage du modèle.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">🛠️ Outils utilisés</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'API', 'Outils IA'].map(t => (
                <Badge key={t} variant="secondary" className="bg-primary/10 text-primary">{t}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">💡 La Solution</h3>
            <p className="text-foreground/90">
              Développement d'un pipeline de génération automatisée via API. Le script interroge dynamiquement les modèles d'IA
              pour générer des images synthétiques ciblées, les formate, et les injecte directement dans la base de données d'entraînement.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">📊 Impact (ROI)</h3>
            <ul className="space-y-3 text-foreground/90">
              <li>⏱️ <strong className="text-foreground">Gain de temps :</strong> Automatisation d'une tâche qui prenait plusieurs heures par semaine.</li>
              <li>📈 <strong className="text-foreground">Volume :</strong> Génération de plus de 1 000 images par mois.</li>
              <li>🎯 <strong className="text-foreground">Qualité :</strong> Amélioration de la précision de l'IA de Binko grâce à la diversité du dataset.</li>
            </ul>
          </div>
        </div>
      ),
      en: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">🎯 Business Context</h3>
            <p className="text-foreground/90">
              Training Binko's AI model required a massive volume of visual data.
              Manual collection and classification of these images was too time-consuming and limited the model's learning capacity.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">🛠️ Tools Used</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'API', 'AI Tools'].map(t => (
                <Badge key={t} variant="secondary" className="bg-primary/10 text-primary">{t}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">💡 The Solution</h3>
            <p className="text-foreground/90">
              Development of an automated generation pipeline via API. The script dynamically queries AI models
              to generate targeted synthetic images, formats them, and injects them directly into the training database.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">📊 Impact (ROI)</h3>
            <ul className="space-y-3 text-foreground/90">
              <li>⏱️ <strong className="text-foreground">Time saved:</strong> Automation of a task that took several hours per week.</li>
              <li>📈 <strong className="text-foreground">Volume:</strong> Generation of over 1,000 images per month.</li>
              <li>🎯 <strong className="text-foreground">Quality:</strong> Improved Binko's AI accuracy through dataset diversity.</li>
            </ul>
          </div>
        </div>
      ),
    },
    '2': {
      fr: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">🎯 Contexte métier</h3>
            <p className="text-foreground/90">
              Gofusion avait besoin de surveiller en permanence l'actualité environnementale (EcoVeille) pour sa stratégie SEO
              et son positionnement, mais la veille manuelle et la rédaction d'articles prenaient trop de temps aux équipes.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">🛠️ Outils utilisés</h3>
            <div className="flex flex-wrap gap-2">
              {['Make (Integromat)', 'API', 'Outils SEO'].map(t => (
                <Badge key={t} variant="secondary" className="bg-primary/10 text-primary">{t}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">💡 La Solution</h3>
            <p className="text-foreground/90">
              Création d'un scénario d'automatisation complet sur Make. Le système collecte quotidiennement des informations
              via diverses API d'actualités, filtre les données pertinentes, et pré-génère des contenus optimisés pour le SEO
              prêts à être publiés.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">📊 Impact (ROI)</h3>
            <ul className="space-y-3 text-foreground/90">
              <li>⏱️ <strong className="text-foreground">Productivité :</strong> Économie de <strong>4 heures</strong> de recherche et de structuration par semaine pour l'équipe.</li>
              <li>🌍 <strong className="text-foreground">Volume de données :</strong> Traitement automatisé de <strong>20 sources</strong> d'informations par jour.</li>
              <li>🚀 <strong className="text-foreground">Performance :</strong> Augmentation du trafic organique SEO de <strong>17%</strong> sur les thématiques environnementales.</li>
            </ul>
          </div>
        </div>
      ),
      en: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">🎯 Business Context</h3>
            <p className="text-foreground/90">
              Gofusion needed to continuously monitor environmental news (EcoWatch) for its SEO strategy
              and positioning, but manual monitoring and article writing were too time-consuming for the teams.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">🛠️ Tools Used</h3>
            <div className="flex flex-wrap gap-2">
              {['Make (Integromat)', 'API', 'SEO Tools'].map(t => (
                <Badge key={t} variant="secondary" className="bg-primary/10 text-primary">{t}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">💡 The Solution</h3>
            <p className="text-foreground/90">
              Creation of a complete automation scenario on Make. The system collects information daily
              via various news APIs, filters relevant data, and pre-generates SEO-optimized content
              ready to be published.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">📊 Impact (ROI)</h3>
            <ul className="space-y-3 text-foreground/90">
              <li>⏱️ <strong className="text-foreground">Productivity:</strong> Saved <strong>4 hours</strong> of research and structuring per week for the team.</li>
              <li>🌍 <strong className="text-foreground">Data volume:</strong> Automated processing of <strong>20 sources</strong> of information per day.</li>
              <li>🚀 <strong className="text-foreground">Performance:</strong> <strong>17% increase</strong> in organic SEO traffic on environmental topics.</li>
            </ul>
          </div>
        </div>
      ),
    },
  };

  const study = caseStudies[projectId];
  if (!study) return null;

  const titles: Record<string, { fr: string; en: string }> = {
    '3': { fr: 'Binko - Génération Automatisée pour l\'IA', en: 'Binko - Automated AI Generation' },
    '2': { fr: 'Go Fusion - EcoVeille Automatisée', en: 'Go Fusion - Automated EcoWatch' },
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-foreground">
            {language === 'en' ? titles[projectId].en : titles[projectId].fr}
          </DialogTitle>
          <DialogDescription>
            {language === 'en' ? 'Case Study' : 'Étude de cas'}
          </DialogDescription>
        </DialogHeader>
        {language === 'en' ? study.en : study.fr}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCaseStudyModal;
