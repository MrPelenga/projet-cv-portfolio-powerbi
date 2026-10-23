import type { Project } from '@/components/ProjectsList';
import carte from '@/assets/dpe-carte.jpg.asset.json';
import analyse from '@/assets/dpe-analyse.jpg.asset.json';
import simulateur from '@/assets/dpe-simulateur.jpg.asset.json';

export const project6: Project = {
  id: '6',
  title: 'Passoires thermiques en Île-de-France : carte et simulateur de rénovation',
  title_en: 'Energy-Inefficient Housing in Île-de-France: Map & Renovation Simulator',
  description: "Application qui cartographie les passoires thermiques à partir de 3,4 millions de DPE de l'ADEME, et simule les économies et le retour sur investissement d'une rénovation.",
  description_en: 'App that maps energy-inefficient housing from 3.4 million ADEME energy performance certificates (DPE), and simulates the savings and payback period of a renovation.',
  image: carte.url,
  screenshots: [carte.url, analyse.url, simulateur.url],
  screenshotCaptions: ['Carte des passoires par commune', 'Analyse : quels logements sont concernés ?', 'Simulateur : économies et retour sur investissement'],
  screenshotCaptions_en: ['Map of inefficient housing by municipality', 'Analysis: which homes are affected?', 'Simulator: savings and payback period'],
  tags: ['Python', 'SQL', 'DuckDB', 'Streamlit', 'Data Viz', 'Open Data'],
  tags_en: ['Python', 'SQL', 'DuckDB', 'Streamlit', 'Data Viz', 'Open Data'],
  technologies: ['Python', 'SQL (DuckDB)', 'Pandas', 'Streamlit', 'Plotly', 'pydeck', 'API ADEME', 'API Géo', 'pytest'],
  technologies_en: ['Python', 'SQL (DuckDB)', 'Pandas', 'Streamlit', 'Plotly', 'pydeck', 'ADEME API', 'Géo API', 'pytest'],
  client: 'Projet personnel - Portfolio Data',
  client_en: 'Personal project - Data Portfolio',
  period: '2026',
  period_en: '2026',
  link: '/projets/6',
  appUrl: 'https://projet-r-novation-nerg-tique-dv4jewyjntnejthixcmblb.streamlit.app/',
  sourceUrl: 'https://github.com/MrPelenga/Projet-r-novation-nerg-tique',
  loadingNote: 'Premier chargement : environ 30 secondes',
  loadingNote_en: 'First load: about 30 seconds',
  description_extended: "Application qui cartographie les passoires thermiques à partir de 3,4 millions de DPE de l'ADEME, et simule les économies et le retour sur investissement d'une rénovation.",
  description_extended_en: 'App that maps energy-inefficient housing from 3.4 million ADEME energy performance certificates (DPE), and simulates the savings and payback period of a renovation.',
  objectives: [
    'Mesurer la part de logements F et G en Île-de-France, commune par commune',
    'Identifier les profils de logements les plus concernés (âge, chauffage, type, surface)',
    "Estimer le coût et le retour sur investissement d'une rénovation",
    'Rendre chaque chiffre traçable : requêtes SQL et hypothèses sourcées',
  ],
  objectives_en: [
    'Measure the share of F and G homes in Île-de-France, municipality by municipality',
    'Identify the most affected housing profiles (age, heating, type, size)',
    'Estimate the cost and payback period of a renovation',
    'Make every figure traceable: SQL queries and sourced assumptions',
  ],
};

export const project6CaseStudy = {
  fr: {
    context: "La loi Climat et Résilience interdit progressivement de louer les logements les moins performants : étiquette G depuis 2025, F en 2028, E en 2034. Pour une collectivité ou un acteur de la rénovation, trois questions se posent : combien de logements sont concernés en Île-de-France, lesquels, et une rénovation est-elle rentable pour leur propriétaire ?",
    tools: ['Python', 'SQL (DuckDB)', 'Streamlit', 'Plotly', 'pydeck', 'API ADEME', 'pytest'],
    solution: [
      "Collecte des 3,4 millions de DPE franciliens via l'API de l'ADEME, avec contrôle du nombre de lignes reçues.",
      'Nettoyage écrit en SQL, une règle par étape avec un journal chiffré (doublons, valeurs aberrantes, fusions de communes).',
      "Dix requêtes d'analyse SQL, des graphiques et des phrases d'insight calculées automatiquement, qui s'adaptent aux filtres.",
      'Une carte interactive de la part de passoires commune par commune.',
      'Un simulateur de rénovation calibré sur les vrais DPE franciliens, avec des hypothèses sourcées et modifiables, et 31 tests unitaires.',
    ],
    impact: [
      { label: 'Ampleur :', text: '11,4 % des logements diagnostiqués sont des passoires (F ou G), soit 357 140 logements.' },
      { label: 'Profil type :', text: "les logements d'avant 1975 de moins de 50 m² représentent 26 % des DPE mais 55 % des passoires." },
      { label: 'Géographie :', text: 'Paris concentre 37 % des passoires de la région ; en proportion, les communes les plus touchées sont rurales (89 des 151 communes au-dessus de 25 % sont en Seine-et-Marne).' },
      { label: 'Fiabilité :', text: 'un dédoublonnage réfléchi a évité de gonfler le taux de passoires à 14,5 % ; une règle naïve aurait supprimé 34 % des données.' },
    ],
    note: 'Données ADEME extraites le 22/10/2026. Le simulateur est une estimation pédagogique, il ne remplace pas un audit énergétique.',
  },
  en: {
    context: "France's Climate and Resilience Act is gradually banning the rental of the least energy-efficient homes: G-rated since 2025, F in 2028, E in 2034. For a local authority or a renovation company, three questions arise: how many homes are affected in Île-de-France, which ones, and is a renovation profitable for their owner?",
    tools: ['Python', 'SQL (DuckDB)', 'Streamlit', 'Plotly', 'pydeck', 'ADEME API', 'pytest'],
    solution: [
      'Collection of 3.4 million Île-de-France DPE certificates through the ADEME API, with a check on the number of rows received.',
      'Data cleaning written in SQL, one rule per step with a quantified log (duplicates, outliers, municipality mergers).',
      'Ten SQL analysis queries, charts and automatically computed insight sentences that adapt to the filters.',
      'An interactive map of the share of inefficient homes, municipality by municipality.',
      'A renovation simulator calibrated on real Île-de-France DPE data, with sourced and editable assumptions, and 31 unit tests.',
    ],
    impact: [
      { label: 'Scale:', text: '11.4% of assessed homes are energy-inefficient (F or G), i.e. 357,140 homes.' },
      { label: 'Typical profile:', text: 'homes built before 1975 and smaller than 50 m² account for 26% of certificates but 55% of inefficient homes.' },
      { label: 'Geography:', text: "Paris holds 37% of the region's inefficient homes; proportionally, the most affected municipalities are rural (89 of the 151 municipalities above 25% are in Seine-et-Marne)." },
      { label: 'Reliability:', text: 'a careful deduplication avoided inflating the inefficiency rate to 14.5%; a naive rule would have deleted 34% of the data.' },
    ],
    note: 'ADEME data extracted on 22/10/2026. The simulator is an educational estimate and does not replace an energy audit.',
  },
};