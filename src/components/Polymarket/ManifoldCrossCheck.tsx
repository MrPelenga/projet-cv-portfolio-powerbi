import { useQuery } from '@tanstack/react-query';
import { CartesianGrid, Legend, ReferenceLine, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from 'recharts';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { summary } from '@/data/polymarket/summary';
import { MANIFOLD_SUMMARY_URL, manifoldSummaryFallback, type ManifoldSummary } from '@/data/manifold/summaryFallback';

const METHOD_URL = 'https://github.com/MrPelenga/polymarket-backtest#contre-épreuve-manifold-mise-à-jour-quotidienne';

async function fetchManifold(): Promise<ManifoldSummary> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 8000);
  try {
    const res = await fetch(MANIFOLD_SUMMARY_URL, { signal: ctrl.signal, cache: 'no-cache' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!data || !Array.isArray(data.calibration)) throw new Error('Invalid data');
    return data as ManifoldSummary;
  } finally {
    clearTimeout(timer);
  }
}

const copy = {
  fr: {
    title: 'Contre-épreuve : Manifold, mis à jour chaque jour',
    intro: "Polymarket est-il bien calibré parce que de l'argent réel est en jeu ? Même mesure sur Manifold, un marché de prédiction en monnaie fictive.",
    fallback: 'Données en direct indisponibles : dernière version connue',
    brierM: 'Score de Brier Manifold',
    brierMHint: (n: string) => `sur ${n} marchés résolus en 2026`,
    brierP: 'Score de Brier Polymarket (2026)',
    note: 'Plus le score est bas, plus les prévisions sont justes.',
    chart: 'Calibration de Manifold', perfect: 'Calibration parfaite',
    x: 'Prix moyen', y: 'Fréquence réelle', n: 'Marchés', bucket: 'Tranche',
    manifold: 'Manifold', poly: 'Polymarket 2026',
    readTitle: 'À lire avant de comparer',
    read1: 'Le score de Brier dépend du type de questions : Polymarket est dominé par le sport, le moins prévisible ; les deux scores ne se comparent pas directement.',
    read2: (n: string) => `Échantillon en cours de constitution : ${n} marchés traités à ce jour, les plus récents d'abord ; il grossit chaque jour.`,
    footer: (d: string) => `Données : Manifold Markets · Mis à jour le ${d}`,
    method: 'Voir la méthode',
  },
  en: {
    title: 'Cross-check: Manifold, updated daily',
    intro: 'Is Polymarket well calibrated because real money is at stake? Same measurement on Manifold, a prediction market using play money.',
    fallback: 'Live data unavailable: showing last known version',
    brierM: 'Manifold Brier score',
    brierMHint: (n: string) => `on ${n} markets resolved in 2026`,
    brierP: 'Polymarket Brier score (2026)',
    note: 'The lower the score, the more accurate the forecasts.',
    chart: 'Manifold calibration', perfect: 'Perfect calibration',
    x: 'Average price', y: 'Actual frequency', n: 'Markets', bucket: 'Bucket',
    manifold: 'Manifold', poly: 'Polymarket 2026',
    readTitle: 'Read before comparing',
    read1: 'The Brier score depends on the type of questions: Polymarket is dominated by sports, the least predictable; the two scores cannot be compared directly.',
    read2: (n: string) => `Sample still being built: ${n} markets processed so far, most recent first; it grows every day.`,
    footer: (d: string) => `Data: Manifold Markets · Updated on ${d}`,
    method: 'View the method',
  },
};

type Pt = { x: number; y: number; n: number; tranche: string; px: number; fr: number };
const toPoints = (rows: { tranche: string; n: number; prix_moyen: number; freq_reelle: number }[]): Pt[] =>
  rows.map(r => ({ x: +(r.prix_moyen * 100).toFixed(1), y: +(r.freq_reelle * 100).toFixed(1), n: r.n, tranche: r.tranche, px: r.prix_moyen, fr: r.freq_reelle }));

export default function ManifoldCrossCheck() {
  const { language } = useTranslation();
  const lang = language === 'en' ? 'en' : 'fr';
  const t = copy[lang];
  const locale = lang === 'fr' ? 'fr-FR' : 'en-US';
  const { data: live, isError } = useQuery({ queryKey: ['manifold-summary'], queryFn: fetchManifold, staleTime: 60 * 60 * 1000, retry: 2 });
  const data = live ?? manifoldSummaryFallback;
  const fmt = (v: number, d = 0) => new Intl.NumberFormat(locale, { minimumFractionDigits: d, maximumFractionDigits: d }).format(v);
  const pct = (v: number) => (lang === 'fr' ? `${fmt(v, 1)} %` : `${fmt(v, 1)}%`);
  const updated = (() => {
    const d = new Date(data.derniere_reussite);
    if (isNaN(d.getTime())) return data.derniere_reussite;
    return lang === 'fr'
      ? new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }).format(d).replace(',', '')
      : new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Paris', dateStyle: 'medium', timeStyle: 'short' }).format(d) + ' (Paris)';
  })();
  const manifoldPts = toPoints(data.calibration ?? []);
  const polyPts = toPoints(summary.calibration_test);

  const TooltipBody = ({ active, payload }: { active?: boolean; payload?: { payload: Pt }[] }) => {
    if (!active || !payload?.length) return null;
    const p = payload[0].payload;
    return (
      <div className="rounded-md border border-border bg-popover p-2 text-xs text-popover-foreground shadow-sm">
        <p className="font-semibold">{t.bucket} {p.tranche}</p>
        <p>{t.n} : {fmt(p.n)}</p>
        <p>{t.x} : {pct(p.px * 100)}</p>
        <p>{t.y} : {pct(p.fr * 100)}</p>
      </div>
    );
  };

  return (
    <section className="mt-4 rounded-lg border border-border bg-card p-4 min-w-0" aria-labelledby="manifold-title">
      <h3 id="manifold-title" className="text-base font-semibold text-foreground">{t.title}</h3>
      {data.statut === 'echec' && data.message && <p className="mt-1 text-xs text-destructive">{data.message}</p>}
      {isError && !live && <p className="mt-1 text-xs text-muted-foreground">{t.fallback}</p>}
      <p className="mt-2 text-sm text-foreground/90">{t.intro}</p>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-4 min-w-0">
          <p className="text-xs font-medium text-muted-foreground">{t.brierM}</p>
          <p className="mt-1 text-2xl font-semibold tabular-nums text-foreground">{fmt(data.brier_manifold, 3)}</p>
          <p className="mt-1 text-xs text-muted-foreground">{t.brierMHint(fmt(data.marches_avec_prix_j1))}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 min-w-0">
          <p className="text-xs font-medium text-muted-foreground">{t.brierP}</p>
          <p className="mt-1 text-2xl font-semibold tabular-nums text-foreground">{fmt(data.brier_polymarket_test, 3)}</p>
        </div>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">{t.note}</p>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 min-w-0">
          <h4 className="text-sm font-semibold text-foreground">{t.chart}</h4>
          <div className="mt-2 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" dataKey="x" domain={[0, 100]} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} tickFormatter={v => `${v} %`} name={t.x} />
                <YAxis type="number" dataKey="y" domain={[0, 100]} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} width={44} tickFormatter={v => `${v} %`} name={t.y} />
                <ZAxis type="number" dataKey="n" range={[40, 400]} />
                <ReferenceLine segment={[{ x: 0, y: 0 }, { x: 100, y: 100 }]} stroke="hsl(var(--muted-foreground))" strokeDasharray="4 4"
                  label={{ value: t.perfect, position: 'insideTopLeft', fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
                <Tooltip content={<TooltipBody />} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Scatter name={t.manifold} data={manifoldPts} fill="hsl(var(--primary))" isAnimationActive={false} />
                <Scatter name={t.poly} data={polyPts} fill="#94A3B8" isAnimationActive={false} />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
        <aside className="rounded-lg border border-border bg-muted p-4 text-sm text-foreground/90">
          <h4 className="text-sm font-semibold text-foreground">{t.readTitle}</h4>
          <ul className="mt-2 list-disc space-y-2 pl-4">
            <li>{t.read1}</li>
            <li>{t.read2(fmt(data.marches_traites))}</li>
          </ul>
        </aside>
      </div>

      <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
        <span>{t.footer(updated)}</span>
        <a href={METHOD_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
          {t.method} <ExternalLink className="h-3 w-3" aria-hidden />
        </a>
      </p>
    </section>
  );
}
