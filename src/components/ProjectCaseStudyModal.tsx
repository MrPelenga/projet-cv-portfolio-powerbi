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
    '5': '/projets/5',
  };

  if (!projectId) return null;

  const caseStudies: Record<string, { fr: React.ReactNode; en: React.ReactNode }> = {
    '5': {
      fr: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">🎯 Contexte métier</h3>
            <p className="text-foreground/90">Les leads entrants étaient répartis à la main depuis un tableur marketing. Les leads chauds étaient contactés le lendemain, deux commerciaux recevaient la moitié du volume, et des leads hors cible encombraient les files de travail. Résultat : des deals qualifiés perdus dès l'entrée du pipeline.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">🛠️ Outils utilisés</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Streamlit', 'SQLite', 'Pandas', 'API d'enrichissement', ].map(t => (
                <Badge key={t} variant="secondary" className="bg-primary/10 text-primary">{t}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">💡 La Solution</h3>
            <p className="text-foreground/90 mb-2">Une application en 7 modules :</p>
            <ol className="list-decimal pl-5 space-y-2 text-foreground/90">
              <li>Un BDR Targeter qui identifie les décideurs d'un compte via Hunter, Apollo et Lusha, avec suivi d'appels.</li>
              <li>Un modèle de scoring explicable : fit firmographique sur 50 (nombre d'établissements, secteur, séniorité, signaux techniques) et engagement comportemental sur 50 (démo, page tarifs, contenus, webinars), avec pénalités et décroissance, qui classe chaque lead en A, B, C ou D.</li>
              <li>Un moteur d'assignation : propriété du sourcing, rattachement au compte, segment SMB / Mid-Market / Enterprise, territoire, puis Round Robin pondéré par la disponibilité et la capacité de chaque commercial, avec une trace qui explique chaque décision.</li>
              <li>Des files de travail avec compte à rebours SLA et une vue manager qui réassigne les leads en retard.</li>
              <li>Un tableau de pilotage.</li>
              <li>Une documentation SLA marketing-ventes générée depuis la configuration du moteur.</li>
              <li>Un module d'import qui diagnostique un export CRM existant et le rejoue dans le moteur.</li>
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">📊 Impact</h3>
            <p className="text-sm text-muted-foreground mb-2">Mesuré sur 6 mois de données de démonstration, avant / après mise en production du moteur :</p>
            <ul className="space-y-3 text-foreground/90">
              <li>⏱️ <strong className="text-foreground">Speed-to-lead :</strong> premier contact des leads A passé d'environ 20 h à 8 minutes (médiane).</li>
              <li>✅ <strong className="text-foreground">SLA :</strong> 82 % des leads A et B contactés dans les délais, contre 8 % avant.</li>
              <li>🎯 <strong className="text-foreground">Qualité :</strong> taux d'acceptation par les ventes passé de 40 % à 75 %, et plus aucun lead C ou D envoyé aux commerciaux.</li>
              <li>⚖️ <strong className="text-foreground">Équité :</strong> dispersion de la charge entre commerciaux divisée par trois (0,67 à 0,20).</li>
              <li>🧪 <strong className="text-foreground">Test sur un fichier réel de 200 leads :</strong> le diagnostic a révélé que seuls 27 % des leads A étaient contactés en 15 minutes et que 22 comptes sur 25 avaient un segment incohérent.</li>
            </ul>
            <p className="mt-4 text-xs italic text-muted-foreground">Chiffres issus de données synthétiques générées par l'application ; le scoring et le routage sont ceux du moteur réel.</p>
          </div>
        </div>
      ),
      en: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">🎯 Business Context</h3>
            <p className="text-foreground/90">Inbound leads were distributed by hand from a marketing spreadsheet. Hot leads were contacted the next day, two reps received half of the volume, and off-target leads cluttered the work queues. The result: qualified deals lost at the very top of the pipeline.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">🛠️ Tools Used</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Streamlit', 'SQLite', 'Pandas', 'Enrichment APIs', ].map(t => (
                <Badge key={t} variant="secondary" className="bg-primary/10 text-primary">{t}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">💡 The Solution</h3>
            <p className="text-foreground/90 mb-2">A 7-module application:</p>
            <ol className="list-decimal pl-5 space-y-2 text-foreground/90">
              <li>A BDR Targeter that identifies an account's decision-makers via Hunter, Apollo and Lusha, with call tracking.</li>
              <li>An explainable scoring model: firmographic fit out of 50 (number of locations, industry, seniority, technical signals) and behavioral engagement out of 50 (demo, pricing page, content, webinars), with penalties and decay, grading each lead A, B, C or D.</li>
              <li>A routing engine: sourcing ownership, account matching, SMB / Mid-Market / Enterprise segment, territory, then Round Robin weighted by each rep's availability and capacity, with a trace explaining every decision.</li>
              <li>Work queues with an SLA countdown and a manager view that reassigns overdue leads.</li>
              <li>A performance dashboard.</li>
              <li>Marketing-sales SLA documentation generated from the engine's configuration.</li>
              <li>An import module that diagnoses an existing CRM export and replays it through the engine.</li>
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">📊 Impact</h3>
            <p className="text-sm text-muted-foreground mb-2">Measured on 6 months of demo data, before / after the engine went live:</p>
            <ul className="space-y-3 text-foreground/90">
              <li>⏱️ <strong className="text-foreground">Speed-to-lead:</strong> first contact for A leads dropped from about 20 hours to 8 minutes (median).</li>
              <li>✅ <strong className="text-foreground">SLA:</strong> 82% of A and B leads contacted on time, versus 8% before.</li>
              <li>🎯 <strong className="text-foreground">Quality:</strong> sales acceptance rate rose from 40% to 75%, and no C or D leads are sent to reps anymore.</li>
              <li>⚖️ <strong className="text-foreground">Fairness:</strong> workload dispersion across reps divided by three (0.67 to 0.20).</li>
              <li>🧪 <strong className="text-foreground">Test on a real file of 200 leads:</strong> the diagnostic revealed that only 27% of A leads were contacted within 15 minutes and that 22 out of 25 accounts had an inconsistent segment.</li>
            </ul>
            <p className="mt-4 text-xs italic text-muted-foreground">Figures based on synthetic data generated by the app; scoring and routing are performed by the actual engine.</p>
          </div>
        </div>
      ),
    },
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
    '1': {
      fr: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">🎯 Contexte métier</h3>
            <p className="text-foreground/90">
              Ce tableau de bord Power BI présente les statistiques des stars de la NBA pour la saison 2023-2024.
              Il offre une visualisation interactive des performances des joueurs, permettant aux utilisateurs d'explorer et d'analyser les données de manière intuitive.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">🛠️ Outils utilisés</h3>
            <div className="flex flex-wrap gap-2">
              {['Power BI', 'DAX', 'Power Query'].map(t => (
                <Badge key={t} variant="secondary" className="bg-primary/10 text-primary">{t}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">📊 Impact</h3>
            <ul className="space-y-3 text-foreground/90">
              <li>📈 <strong className="text-foreground">Visualisation :</strong> Statistiques clés (points, rebonds, passes décisives, % de tir).</li>
              <li>🔍 <strong className="text-foreground">Filtres dynamiques :</strong> Comparaison entre joueurs en temps réel.</li>
              <li>🎨 <strong className="text-foreground">Design :</strong> Présentation claire et visuellement attrayante.</li>
            </ul>
          </div>
        </div>
      ),
      en: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">🎯 Business Context</h3>
            <p className="text-foreground/90">
              This Power BI dashboard presents NBA star statistics for the 2023-2024 season.
              It offers an interactive visualization of player performance, allowing users to explore and analyze data intuitively.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">🛠️ Tools Used</h3>
            <div className="flex flex-wrap gap-2">
              {['Power BI', 'DAX', 'Power Query'].map(t => (
                <Badge key={t} variant="secondary" className="bg-primary/10 text-primary">{t}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">📊 Impact</h3>
            <ul className="space-y-3 text-foreground/90">
              <li>📈 <strong className="text-foreground">Visualization:</strong> Key stats (points, rebounds, assists, shooting %).</li>
              <li>🔍 <strong className="text-foreground">Dynamic filters:</strong> Real-time player comparisons.</li>
              <li>🎨 <strong className="text-foreground">Design:</strong> Clear and visually appealing presentation.</li>
            </ul>
          </div>
        </div>
      ),
    },
  };

  const study = caseStudies[projectId];
  if (!study) return null;

  const titles: Record<string, { fr: string; en: string }> = {
    '1': { fr: 'Dashboard NBA Stats', en: 'NBA Stats Dashboard' },
    '3': { fr: 'Binko - Génération Automatisée pour l\'IA', en: 'Binko - Automated AI Generation' },
    '2': { fr: 'Go Fusion - EcoVeille Automatisée', en: 'Go Fusion - Automated EcoWatch' },
    '5': { fr: 'Lead Engine : scoring et routage des leads', en: 'Lead Engine: Lead Scoring & Routing' },
  };

  const handleViewFullPage = () => {
    onClose();
    const route = fullPageRoutes[projectId];
    if (route) navigate(route);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-foreground">
            {language === 'en' ? titles[projectId]?.en : titles[projectId]?.fr}
          </DialogTitle>
          <DialogDescription>
            {language === 'en' ? 'Case Study' : 'Étude de cas'}
          </DialogDescription>
        </DialogHeader>
        {language === 'en' ? study.en : study.fr}
        {fullPageRoutes[projectId] && (
          <div className="pt-4 border-t border-border">
            <Button onClick={handleViewFullPage} className="w-full gap-2">
              <ExternalLink className="w-4 h-4" />
              {language === 'en' ? 'View full page' : 'Voir la page du projet'}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCaseStudyModal;
