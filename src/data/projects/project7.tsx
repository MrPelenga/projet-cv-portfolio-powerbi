import type { Project } from '@/components/ProjectsList';
import { summary } from '@/data/polymarket/summary';

const fr = (v: number, d = 0) => new Intl.NumberFormat('fr-FR', { maximumFractionDigits: d, minimumFractionDigits: d }).format(v);
const en = (v: number, d = 0) => new Intl.NumberFormat('en-US', { maximumFractionDigits: d, minimumFractionDigits: d }).format(v);

const res = Object.fromEntries(summary.resultats.map(r => [r.strategie, r]));
const momentum = res.momentum;
const kelly = res.momentum_kelly_plein;
const rnd = summary.aleatoire;
const collect = summary.collecte;
const meteoGap = summary.ecarts_calibration_test.find(g => g.categorie === 'Météo')?.ecart_max_points ?? 0;

export const project7: Project = {
  id: '7',
  title: 'Une IA peut-elle transformer 50\u00a0$ en 5\u00a0000\u00a0$ sur Polymarket\u00a0? Backtest et dashboard',
  title_en: 'Can an AI Turn $50 into $5,000 on Polymarket? Backtest & Dashboard',
  description: `Backtest d'une stratégie de paris virale sur ${fr(summary.volumes.marches_avec_prix)} marchés Polymarket réels, avec un dashboard qui compare la stratégie au hasard.`,
  description_en: `Backtest of a viral betting strategy on ${en(summary.volumes.marches_avec_prix)} real Polymarket markets, with a dashboard comparing it to pure chance.`,
  image: '/projects/polymarket-backtest.png',
  tags: ['Power BI', 'Python', 'API', 'Backtest', 'React', 'Data Viz'],
  tags_en: ['Power BI', 'Python', 'API', 'Backtest', 'React', 'Data Viz'],
  technologies: ['Python', 'Pandas', 'API Polymarket (Gamma, CLOB)', 'pytest', 'GitHub Actions', 'Power BI', 'DAX', 'React', 'Recharts'],
  technologies_en: ['Python', 'Pandas', 'Polymarket API (Gamma, CLOB)', 'pytest', 'GitHub Actions', 'Power BI', 'DAX', 'React', 'Recharts'],
  client: 'Projet personnel - Portfolio Data',
  client_en: 'Personal project - Data Portfolio',
  period: '2026',
  period_en: '2026',
  link: '/projets/7',
  sourceUrl: 'https://github.com/MrPelenga/polymarket-backtest',
};

type Rules = typeof summary.regles;

const shared = {
  rules: {
    fr: (r: Rules): [string, string][] => [
      ['Cagnotte de départ', `${fr(r.cagnotte)} $`],
      ['Écart minimal', `${fr(r.ecart_min_points)} points`],
      ['Mise', `Kelly × ${fr(r.kelly, 1)}, plafond ${fr(r.plafond_pct)} %`],
      ['Paris ouverts', `${r.max_ouverts} maximum`],
      ['Arrêt', `−${fr(r.stop_pct)} % depuis le plus haut`],
      ['Décision', `${r.decision_heures} h avant la clôture`],
      ['Glissement', `+${fr(r.glissement_points)} point`],
      ['Mise minimale', `${fr(r.mise_min)} $`],
    ],
    en: (r: Rules): [string, string][] => [
      ['Starting bankroll', `$${en(r.cagnotte)}`],
      ['Minimum edge', `${en(r.ecart_min_points)} points`],
      ['Stake', `Kelly × ${en(r.kelly, 1)}, capped at ${en(r.plafond_pct)}%`],
      ['Open bets', `${r.max_ouverts} maximum`],
      ['Stop', `−${en(r.stop_pct)}% from peak`],
      ['Decision', `${r.decision_heures} h before close`],
      ['Slippage', `+${en(r.glissement_points)} point`],
      ['Minimum stake', `$${en(r.mise_min)}`],
    ],
  },
};

export const project7Copy = {
  fr: {
    eyebrow: 'Python · Power BI · Backtest',
    lead: `Un post viral affirme qu'un agent IA a transformé 50 $ en 5 273 $ en deux jours sur Polymarket, avec des règles de mise simples. Aucun relevé ne le prouve. J'ai rejoué ces règles sur l'historique réel de ${fr(summary.volumes.marches_avec_prix)} marchés pour mesurer ce qu'elles donnent vraiment.`,
    codeLink: 'Voir le code et les données',
    reportTitle: 'Backtest Polymarket · 2026',
    reportMeta: (date: string, n: number) =>
      `${fr(n)} marchés clos en 2026 · données extraites le ${new Date(date).toLocaleDateString('fr-FR')}`,
    tabs: ['Vue globale', 'Par catégorie', 'Calibration', 'Le hasard'],
    kpi: {
      final: 'Cagnotte finale', start: 'Départ : 50 $', roi: 'Rendement', bets: 'Paris joués', hit: 'Paris gagnés',
      dd: 'Pire baisse', stopped: (d: string) => `Arrêt à −40 % le ${d}`, noStop: "Pas d'arrêt déclenché",
    },
    curveTitle: 'Évolution de la cagnotte en 2026',
    curveSubtitle: 'Les quatre stratégies, semaine par semaine. Ligne pointillée : les 50 $ de départ.',
    verdictTitle: 'Verdict',
    verdict: `Aucune stratégie ne gagne. La calibration ne trouve jamais l'écart de 8 points exigé et ne parie pas. Le momentum gagne ${fr(momentum.taux_reussite_pct ?? 0)} % de ses paris mais finit à ${fr(momentum.cagnotte_finale, 2)} $ : il gagne souvent, sur des favoris qui rapportent peu. Sans garde-fous, la même stratégie tombe à ${fr(kelly.cagnotte_finale, 2)} $.`,
    brierTitle: 'Précision du marché par catégorie',
    brierSubtitle: 'Score de Brier du prix la veille de la clôture (plus bas = plus précis). Une partie de l’écart vient de marchés plus ou moins incertains.',
    gapTitle: 'Plus grand écart exploitable en 2026',
    gapSubtitle: 'Écart maximal entre prix et fréquence réelle, par tranche d’au moins 30 marchés. Il faudrait dépasser la ligne des 8 points.',
    gapLabel: 'Écart maximal',
    catTableTitle: 'Détail par catégorie',
    catSmall: (n: number) => `* Moins de ${n} paris : rendement donné à titre indicatif, l'échantillon est trop petit pour conclure.`,
    catTableHead: ['Catégorie', 'Marchés étudiés', 'Brier', 'Paris Momentum', 'Rendement par $ misé'],
    catNote: `Le pivot météo de l'article : en 2026, la tranche de prix météo la plus mal calibrée ne s'écarte que de ${fr(meteoGap, 1)} points. Le seul écart qui franchit 8 points (en sport) n'est visible qu'après coup, il n'existait pas dans les données 2025.`,
    calTitle: 'Le prix annonce-t-il la bonne probabilité ?',
    calSubtitle: 'Chaque point est une tranche de 10 points de prix (taille = nombre de marchés). Sur la diagonale, le marché a raison.',
    calX: 'Prix moyen', calY: 'Fréquence réelle', calN: 'Marchés', calTrain: '2025 (apprentissage)', calTest: '2026 (test)',
    calReadTitle: 'Lecture',
    calRead: [
      "Les points collent à la diagonale : un pari coté 25 % se réalise environ 25 % du temps.",
      "En 2025, aucune tranche ne s'écarte de plus de 4 points. Une correction statistique ne peut donc jamais atteindre les 8 points exigés : la stratégie Calibration n'a parié aucune fois.",
      `Le score de Brier du marché en 2026 est de ${fr(summary.brier_test, 3)}. À titre de repère, annoncer 50 % partout donnerait 0,25.`,
    ],
    rnd: {
      runs: 'Tirages aléatoires', winners: 'Tirages gagnants', median: 'Cagnotte médiane', best: 'Meilleur tirage',
      bestPeak: (v: string) => `Plus haut atteint en cours de route : ${v}`,
      title: 'Cagnotte finale de 300 stratégies au hasard',
      subtitle: 'Mêmes règles de mise, sens du pari tiré à pile ou face. Une barre verte signalerait un tirage au-dessus de 50 $.',
      count: 'Tirages', readTitle: 'Pourquoi c’est important',
      read: [
        `Sur ${fr(rnd.tirages)} tirages, aucun ne finit au-dessus de 50 $. Le glissement d'un point et l'arrêt à −40 % suffisent à rendre l'espérance négative.`,
        `Le meilleur tirage a pourtant affiché ${fr(rnd.meilleur_plus_haut, 2)} $ à un moment. Une capture d'écran prise au bon moment ferait croire à une stratégie gagnante.`,
        'C’est le biais du survivant : sur des milliers de comptes qui testent, on ne voit passer que les captures spectaculaires.',
      ],
    },
    sections: [
      {
        title: 'Le contexte',
        paragraphs: [
          "En septembre 2026, un post X affirme qu'un agent IA, lâché avec 50 $ sur Polymarket (un site de paris sur des événements réels), affichait 5 273 $ deux jours plus tard. L'agent suit des règles simples : parier seulement quand son estimation s'écarte du prix d'au moins 8 points, miser la moitié du critère de Kelly plafonnée à 6 % de la cagnotte, et tout arrêter à −40 %.",
          "Plutôt que de croire ou rejeter ce chiffre, j'ai posé une question mesurable : sur les vrais marchés, ces règles produisent-elles un gain ?",
        ],
      },
      {
        title: 'La démarche',
        items: [
          `Collecte de ${fr(collect.marches_recus)} marchés clos entre janvier 2025 et octobre 2026 via l'API publique de Polymarket, puis de l'historique de prix de ${fr(collect.marches_echantillon)} d'entre eux, ouverts au moins 2,5 jours.`,
          "Trois façons d'estimer une probabilité, faute de pouvoir rejouer ce que l'IA lisait sur X : corriger les erreurs régulières du marché apprises sur 2025, suivre la tendance du prix, ou tirer à pile ou face.",
          "Simulation chronologique de la cagnotte en 2026 : argent bloqué jusqu'à la résolution, 1 point de glissement, toutes les règles de l'article. 20 tests unitaires vérifient les règles de mise.",
          'Pipeline automatisé sur GitHub Actions, export en schéma en étoile et rapport Power BI de quatre pages, reproduit ici en React.',
        ],
      },
      {
        title: 'Les limites',
        items: [
          "Une seule décision par marché, la veille de la clôture, et sortie à la résolution : l'agent de l'article pouvait sortir plus tôt.",
          "La liquidité à l'instant T n'est pas dans l'historique : le volume total sert de filtre.",
          "Ces résultats ne prouvent pas qu'aucune IA ne bat le marché. Ils montrent que les règles de mise ne créent pas d'avantage à elles seules, et qu'un écart de 8 points est rare sur des marchés aussi bien calibrés.",
          "Aucun pari réel n'a été placé : Polymarket est bloqué en France depuis juillet 2026 (source : Siècle Digital, 20 juillet 2026). Le projet n'utilise que des données publiques.",
        ],
      },
    ],
    rulesTitle: "Règles de l'article testées",
    rules: shared.rules.fr,
    stackTitle: 'Outils',
    disclaimer: "Projet d'analyse de données. Rien ici n'est un conseil en investissement.",
  },
  en: {
    eyebrow: 'Python · Power BI · Backtest',
    lead: `A viral post claims an AI agent turned $50 into $5,273 in two days on Polymarket, using simple staking rules. Nothing proves it. I replayed those rules on the real history of ${en(summary.volumes.marches_avec_prix)} markets to measure what they actually deliver.`,
    codeLink: 'View code and data',
    reportTitle: 'Polymarket backtest · 2026',
    reportMeta: (date: string, n: number) =>
      `${en(n)} markets closed in 2026 · data extracted on ${new Date(date).toLocaleDateString('en-US')}`,
    tabs: ['Overview', 'By category', 'Calibration', 'Pure chance'],
    kpi: {
      final: 'Final bankroll', start: 'Start: $50', roi: 'Return', bets: 'Bets placed', hit: 'Bets won',
      dd: 'Worst drawdown', stopped: (d: string) => `Stopped at −40% on ${d}`, noStop: 'Stop never triggered',
    },
    curveTitle: 'Bankroll over 2026',
    curveSubtitle: 'All four strategies, week by week. Dashed line: the starting $50.',
    verdictTitle: 'Verdict',
    verdict: `No strategy wins. Calibration never finds the required 8-point edge and never bets. Momentum wins ${en(momentum.taux_reussite_pct ?? 0)}% of its bets but ends at $${en(momentum.cagnotte_finale, 2)}: it wins often, on favorites that pay little. Without safeguards, the same strategy drops to $${en(kelly.cagnotte_finale, 2)}.`,
    brierTitle: 'Market accuracy by category',
    brierSubtitle: 'Brier score of the price the day before close (lower = more accurate). Part of the gap comes from markets being more or less uncertain.',
    gapTitle: 'Largest exploitable gap in 2026',
    gapSubtitle: 'Largest gap between price and actual frequency, per bucket of at least 30 markets. It would need to cross the 8-point line.',
    gapLabel: 'Largest gap',
    catTableTitle: 'Details by category',
    catSmall: (n: number) => `* Fewer than ${n} bets: return shown for reference only, the sample is too small to conclude.`,
    catTableHead: ['Category', 'Markets studied', 'Brier', 'Momentum bets', 'Return per $ staked'],
    catNote: `The article's weather pivot: in 2026, the worst-calibrated weather price bucket is off by only ${en(meteoGap, 1)} points. The only gap above 8 points (in sports) is visible only in hindsight; it did not exist in the 2025 data.`,
    calTitle: 'Does the price state the right probability?',
    calSubtitle: 'Each dot is a 10-point price bucket (size = number of markets). On the diagonal, the market is right.',
    calX: 'Average price', calY: 'Actual frequency', calN: 'Markets', calTrain: '2025 (training)', calTest: '2026 (test)',
    calReadTitle: 'How to read it',
    calRead: [
      'The dots hug the diagonal: a bet priced at 25% happens about 25% of the time.',
      'In 2025, no bucket is off by more than 4 points. A statistical correction can never reach the required 8 points, so the Calibration strategy never placed a bet.',
      `The market's Brier score in 2026 is ${en(summary.brier_test, 3)}. For reference, always saying 50% would score 0.25.`,
    ],
    rnd: {
      runs: 'Random runs', winners: 'Winning runs', median: 'Median bankroll', best: 'Best run',
      bestPeak: (v: string) => `Peak reached along the way: ${v}`,
      title: 'Final bankroll of 300 random strategies',
      subtitle: 'Same staking rules, bet side decided by a coin flip. A green bar would mean a run above $50.',
      count: 'Runs', readTitle: 'Why it matters',
      read: [
        `Out of ${en(rnd.tirages)} runs, none ends above $50. One point of slippage and the −40% stop are enough to make the expected value negative.`,
        `Yet the best run showed $${en(rnd.meilleur_plus_haut, 2)} at one point. A screenshot taken at the right moment would suggest a winning strategy.`,
        'That is survivorship bias: out of thousands of accounts trying, only the spectacular screenshots get shared.',
      ],
    },
    sections: [
      {
        title: 'Context',
        paragraphs: [
          'In September 2026, a post on X claimed that an AI agent, given $50 on Polymarket (a site for betting on real-world events), showed $5,273 two days later. The agent follows simple rules: bet only when its estimate differs from the price by at least 8 points, stake half the Kelly criterion capped at 6% of the bankroll, and stop everything at −40%.',
          'Rather than believe or dismiss the figure, I asked a measurable question: on real markets, do these rules produce a gain?',
        ],
      },
      {
        title: 'Approach',
        items: [
          `Collected ${en(collect.marches_recus)} markets closed between January 2025 and October 2026 through Polymarket's public API, then the price history of ${en(collect.marches_echantillon)} of them, open for at least 2.5 days.`,
          'Three ways to estimate a probability, since what the AI read on X cannot be replayed: correct the market’s regular errors learned on 2025, follow the price trend, or flip a coin.',
          'Chronological bankroll simulation over 2026: money locked until resolution, 1 point of slippage, all the article’s rules. 20 unit tests check the staking rules.',
          'Automated pipeline on GitHub Actions, star-schema export and a four-page Power BI report, reproduced here in React.',
        ],
      },
      {
        title: 'Limitations',
        items: [
          "One decision per market, the day before close, held to resolution: the article's agent could exit earlier.",
          'Liquidity at a given moment is not in the history: total volume is used as a filter.',
          'These results do not prove that no AI can beat the market. They show that the staking rules create no edge on their own, and that an 8-point gap is rare in markets this well calibrated.',
          'No real bet was placed: Polymarket has been blocked in France since July 2026 (source: Siècle Digital, 20 July 2026). The project only uses public data.',
        ],
      },
    ],
    rulesTitle: "The article's rules, as tested",
    rules: shared.rules.en,
    stackTitle: 'Tools',
    disclaimer: 'Data analysis project. Nothing here is investment advice.',
  },
};
