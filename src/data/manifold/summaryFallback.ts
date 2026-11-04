export type ManifoldSummary = {
  statut: string;
  message: string | null;
  source: string;
  derniere_reussite: string;
  derniere_tentative: string;
  periode: string;
  marches_traites: number;
  marches_avec_prix_j1: number;
  brier_manifold: number;
  brier_polymarket_test: number;
  ecart_max_points: number;
  calibration: { tranche: string; n: number; prix_moyen: number; freq_reelle: number }[];
  regles: { decision_heures: number; parieurs_min: number; duree_min_jours: number };
};

export const MANIFOLD_SUMMARY_URL =
  'https://raw.githubusercontent.com/MrPelenga/polymarket-backtest/main/data/manifold/summary.json';

export const manifoldSummaryFallback: ManifoldSummary = {"statut":"ok","message":null,"source":"Données : Manifold Markets (api.manifold.markets)","derniere_reussite":"2026-11-04T21:19:32Z","derniere_tentative":"2026-11-04T21:19:32Z","periode":"marchés résolus depuis le 2026-01-01","marches_traites":1500,"marches_avec_prix_j1":1490,"brier_manifold":0.1141,"brier_polymarket_test":0.1345,"ecart_max_points":10.7,"calibration":[{"tranche":"0-10 %","n":389,"prix_moyen":0.0384,"freq_reelle":0.0283},{"tranche":"10-20 %","n":142,"prix_moyen":0.1431,"freq_reelle":0.1127},{"tranche":"20-30 %","n":113,"prix_moyen":0.2553,"freq_reelle":0.2124},{"tranche":"30-40 %","n":89,"prix_moyen":0.3466,"freq_reelle":0.3596},{"tranche":"40-50 %","n":98,"prix_moyen":0.4538,"freq_reelle":0.3469},{"tranche":"50-60 %","n":112,"prix_moyen":0.5507,"freq_reelle":0.5089},{"tranche":"60-70 %","n":99,"prix_moyen":0.6484,"freq_reelle":0.6566},{"tranche":"70-80 %","n":84,"prix_moyen":0.7476,"freq_reelle":0.7143},{"tranche":"80-90 %","n":108,"prix_moyen":0.8486,"freq_reelle":0.8889},{"tranche":"90-100 %","n":256,"prix_moyen":0.9669,"freq_reelle":0.9805}],"regles":{"decision_heures":24,"parieurs_min":10,"duree_min_jours":2.5}};
