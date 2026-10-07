import { Project } from '@/components/ProjectsList';
import shot1 from '@/assets/lead-engine-1.webp';
import shot2 from '@/assets/lead-engine-2.webp';
import shot3 from '@/assets/lead-engine-3.webp';
import shot4 from '@/assets/lead-engine-4.webp';

const cover = '/projects/lead-engine-cover.svg';

export const project5: Project = {
  id: '5',
  title: 'Lead Engine : scoring et routage des leads',
  title_en: 'Lead Engine: Lead Scoring & Routing',
  description: "Application RevOps qui score chaque lead entrant, l'assigne automatiquement au bon commercial et pilote le funnel : speed-to-lead, taux d'acceptation et conversion par grade.",
  description_en: 'RevOps app that scores every inbound lead, automatically routes it to the right rep, and tracks the funnel: speed-to-lead, acceptance rate and conversion by grade.',
  image: pilotage,
  tags: ['Python', 'Streamlit', 'Lead Scoring', 'RevOps', 'SQLite', 'Data Viz'],
  tags_en: ['Python', 'Streamlit', 'Lead Scoring', 'RevOps', 'SQLite', 'Data Viz'],
  link: '/projets/5',
  screenshots: [shot1.url, shot2.url, shot3.url, shot4.url],
  screenshotCaptions: [
    'Accueil et circuit du lead',
    'Simulateur de scoring et décision de routage',
    'Tableau de pilotage avant / après',
    'Test sur un fichier de 200 leads',
  ],
  screenshotCaptions_en: [
    'Home and lead journey',
    'Scoring simulator and routing decision',
    'Before / after performance dashboard',
    'Test on a 200-lead file',
  ],
  description_extended: `Les leads entrants étaient répartis à la main depuis un tableur marketing. Les leads chauds étaient contactés le lendemain, deux commerciaux recevaient la moitié du volume, et des leads hors cible encombraient les files de travail. Résultat : des deals qualifiés perdus dès l'entrée du pipeline.

Lead Engine est une application en 7 modules : BDR Targeter, scoring explicable (fit firmographique /50 + engagement /50, grades A à D), moteur d'assignation (sourcing, compte, segment, territoire, Round Robin pondéré), files de travail avec SLA, tableau de pilotage, documentation SLA générée automatiquement et import/diagnostic d'exports CRM.`,
  description_extended_en: `Inbound leads were distributed by hand from a marketing spreadsheet. Hot leads were contacted the next day, two reps received half of the volume, and off-target leads cluttered the work queues. The result: qualified deals lost at the very top of the pipeline.

Lead Engine is a 7-module app: BDR Targeter, explainable scoring (firmographic fit /50 + engagement /50, grades A to D), routing engine (sourcing, account, segment, territory, weighted Round Robin), work queues with SLA, performance dashboard, auto-generated SLA documentation and CRM export import/diagnostic.`,
  objectives: [
    'Prioriser les leads selon leur probabilité de conversion',
    'Garantir un premier contact en 15 minutes pour les leads A',
    'Répartir la charge équitablement entre SDR et AE',
    'Formaliser le SLA marketing-ventes',
    "Mesurer l'impact avec un tableau de pilotage",
  ],
  objectives_en: [
    'Prioritize leads by likelihood to convert',
    'Guarantee first contact within 15 minutes for A leads',
    'Distribute workload fairly across SDRs and AEs',
    'Formalize the marketing-sales SLA',
    'Measure impact with a performance dashboard',
  ],
  technologies: ['Python', 'Streamlit', 'Pandas', 'SQLite', 'Altair', 'Graphviz', 'API Hunter / Apollo / Lusha / Kaspr', 'Gemini'],
  client: 'Projet personnel - Portfolio RevOps',
  period: '2026',
  period_en: '2026',
  logo: cover,
};
