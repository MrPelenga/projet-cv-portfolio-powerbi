import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, ReferenceLine, ResponsiveContainer,
  Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis,
} from 'recharts';
import { ArrowLeft, Github } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { summary } from '@/data/polymarket/summary';
import { project7, project7Copy } from '@/data/projects/project7';

type StrategyKey = 'calibration' | 'momentum' | 'momentum_kelly_plein' | 'aleatoire';
type Lang = 'fr' | 'en';

const STRATEGIES: StrategyKey[] = ['calibration', 'momentum', 'momentum_kelly_plein', 'aleatoire'];
const COLORS: Record<StrategyKey, string> = {
  calibration: '#2563EB',
  momentum: '#0EA5A4',
  aleatoire: '#94A3B8',
  momentum_kelly_plein: '#F59E0B',
};
const NAMES: Record<StrategyKey, Record<Lang, string>> = {
  calibration: { fr: 'Calibration', en: 'Calibration' },
  momentum: { fr: 'Momentum', en: 'Momentum' },
  aleatoire: { fr: 'Aléatoire (médiane)', en: 'Random (median)' },
  momentum_kelly_plein: { fr: 'Momentum sans garde-fous', en: 'Momentum, no safeguards' },
};
const CATEGORY_EN: Record<string, string> = {
  'Météo': 'Weather', Crypto: 'Crypto', 'Économie': 'Economy', Politique: 'Politics', Sport: 'Sports',
  'Tech & IA': 'Tech & AI', Culture: 'Culture', Autre: 'Other',
};

const usd = (v: number, lang: Lang) =>
  new Intl.NumberFormat(lang === 'fr' ? 'fr-FR' : 'en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: v >= 1000 ? 0 : 2 }).format(v);
const num = (v: number, lang: Lang, d = 0) =>
  new Intl.NumberFormat(lang === 'fr' ? 'fr-FR' : 'en-US', { maximumFractionDigits: d, minimumFractionDigits: d }).format(v);
const pct = (v: number, lang: Lang, d = 1) => `${num(v, lang, d)} %`.replace(' %', lang === 'fr' ? ' %' : '%');

const axis = { fontSize: 11, fill: 'currentColor' };
const tooltipStyle = {
  contentStyle: { background: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))', borderRadius: 8, fontSize: 12 },
  labelStyle: { color: 'hsl(var(--foreground))', fontWeight: 600 },
  itemStyle: { color: 'hsl(var(--foreground))' },
};

function Kpi({ label, value, hint, tone }: { label: string; value: string; hint?: string; tone?: 'good' | 'bad' }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4 min-w-0">
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <p className={`mt-1 text-2xl font-semibold tabular-nums ${tone === 'good' ? 'text-emerald-600 dark:text-emerald-400' : tone === 'bad' ? 'text-red-600 dark:text-red-400' : 'text-foreground'}`}>{value}</p>
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

function Panel({ title, subtitle, children, className = '' }: { title: string; subtitle?: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`rounded-lg border border-border bg-card p-4 min-w-0 ${className}`}>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      {subtitle && <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>}
      <div className="mt-3 text-muted-foreground">{children}</div>
    </section>
  );
}

export default function PolymarketDashboard() {
  const { language } = useTranslation();
  const lang: Lang = language === 'en' ? 'en' : 'fr';
  const copy = project7Copy[lang];
  const [tab, setTab] = useState(0);
  const [strategy, setStrategy] = useState<StrategyKey>('calibration');

  const results = useMemo(() => Object.fromEntries(summary.resultats.map(r => [r.strategie, r])) as Record<StrategyKey, (typeof summary.resultats)[number]>, []);
  const selected = results[strategy];

  // Courbes hebdomadaires fusionnées sur un même axe de dates.
  const curves = useMemo(() => {
    const byDate = new Map<string, Record<string, number | string>>();
    STRATEGIES.forEach(k => (summary.courbes as Record<string, { date: string; cagnotte: number }[]>)[k]?.forEach(p => {
      const row = byDate.get(p.date) ?? { date: p.date };
      row[k] = p.cagnotte;
      byDate.set(p.date, row);
    }));
    return [...byDate.values()].sort((a, b) => String(a.date).localeCompare(String(b.date)));
  }, []);

  const categories = useMemo(() => {
    const bets = Object.fromEntries(summary.paris_par_categorie.filter(c => c.strategie === 'momentum').map(c => [c.categorie, c]));
    const gaps = Object.fromEntries(summary.ecarts_calibration_test.map(g => [g.categorie, g.ecart_max_points]));
    return summary.categories.map(c => ({
      ...c,
      label: lang === 'en' ? CATEGORY_EN[c.categorie] ?? c.categorie : c.categorie,
      gap: gaps[c.categorie] ?? null,
      nb_paris: bets[c.categorie]?.nb_paris ?? 0,
      roi: bets[c.categorie] && bets[c.categorie].mise > 0 ? (bets[c.categorie].gain / bets[c.categorie].mise) * 100 : null,
    }));
  }, [lang]);

  const calibration = useMemo(() => {
    const toPoints = (rows: { prix_moyen: number; freq_reelle: number; n: number; tranche: string }[]) =>
      rows.map(r => ({ x: +(r.prix_moyen * 100).toFixed(1), y: +(r.freq_reelle * 100).toFixed(1), n: r.n, tranche: r.tranche }));
    return { train: toPoints(summary.calibration_apprentissage), test: toPoints(summary.calibration_test) };
  }, []);

  const histogram = useMemo(() => summary.aleatoire.histogramme.map((count, i) => {
    const lo = summary.aleatoire.bornes[i];
    const hi = summary.aleatoire.bornes[i + 1];
    return { bin: `${Math.round(lo)}–${Math.round(hi)}`, count, mid: (lo + hi) / 2 };
  }), []);

  const tabs = copy.tabs;
  const roiTone = (v: number) => (v > 0 ? 'good' : v < 0 ? 'bad' : undefined);
  const dateFmt = (d: string) => new Date(d).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', { month: 'short', year: '2-digit' });

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <div className="hero-gradient border-b border-border py-10 md:py-14">
          <div className="page-shell">
            <Button asChild variant="ghost" size="sm" className="-ml-3 mb-4 gap-1">
              <Link to="/projets"><ArrowLeft size={16} />{lang === 'en' ? 'All projects' : 'Tous les projets'}</Link>
            </Button>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-foreground max-w-3xl">{lang === 'en' ? project7.title_en : project7.title}</h1>
            <p className="mt-4 max-w-3xl text-muted-foreground">{copy.lead}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {(lang === 'en' ? project7.tags_en ?? project7.tags : project7.tags).map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="gap-2">
                <a href={project7.sourceUrl} target="_blank" rel="noopener noreferrer"><Github size={16} />{copy.codeLink}</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="page-shell py-10">
          {/* Cadre du rapport, à la manière de Power BI */}
          <div className="overflow-hidden rounded-xl border border-border bg-muted/40 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-card px-4 py-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">{copy.reportTitle}</p>
                <p className="text-xs text-muted-foreground">{copy.reportMeta(summary.collecte.date_extraction, summary.volumes.test)}</p>
              </div>
              <Badge variant="outline" className="text-xs">{lang === 'en' ? 'Backtest, no real bets' : 'Backtest, aucun pari réel'}</Badge>
            </div>

            <div className="flex gap-1 overflow-x-auto border-b border-border bg-card px-2" role="tablist">
              {tabs.map((label, i) => (
                <button key={label} data-pbi-tab role="tab" aria-selected={tab === i} onClick={() => setTab(i)}
                  className={`whitespace-nowrap border-b-2 px-3 py-2.5 text-sm transition-colors ${tab === i ? 'border-primary font-semibold text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`}>
                  {label}
                </button>
              ))}
            </div>

            <div className="space-y-4 p-3 sm:p-5">
              {tab === 0 && <>
                <div className="flex flex-wrap gap-2" role="group" aria-label={lang === 'en' ? 'Strategy' : 'Stratégie'}>
                  {STRATEGIES.map(k => (
                    <button key={k} onClick={() => setStrategy(k)} aria-pressed={strategy === k}
                      className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${strategy === k ? 'border-foreground/30 bg-card text-foreground shadow-sm' : 'border-border bg-transparent text-muted-foreground hover:text-foreground'}`}>
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[k] }} />{NAMES[k][lang]}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
                  <Kpi label={copy.kpi.final} value={usd(selected.cagnotte_finale, lang)} hint={copy.kpi.start} />
                  <Kpi label={copy.kpi.roi} value={`${selected.roi_pct > 0 ? '+' : ''}${pct(selected.roi_pct, lang)}`} tone={roiTone(selected.roi_pct)} />
                  <Kpi label={copy.kpi.bets} value={num(selected.nb_paris, lang)} />
                  <Kpi label={copy.kpi.hit} value={selected.taux_reussite_pct == null ? '–' : pct(selected.taux_reussite_pct, lang)} />
                  <Kpi label={copy.kpi.dd} value={`−${pct(selected.drawdown_max_pct, lang)}`}
                    hint={selected.arret_date ? copy.kpi.stopped(new Date(selected.arret_date).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US')) : copy.kpi.noStop} />
                </div>
                <Panel title={copy.curveTitle} subtitle={copy.curveSubtitle}>
                  <div className="h-72 sm:h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={curves} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="date" tick={axis} tickFormatter={dateFmt} minTickGap={28} />
                        <YAxis tick={axis} width={48} tickFormatter={v => `${v} $`} />
                        <Tooltip {...tooltipStyle} labelFormatter={d => new Date(d).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US')}
                          formatter={(v: number, k: string) => [usd(v, lang), NAMES[k as StrategyKey][lang]]} />
                        <ReferenceLine y={50} stroke="hsl(var(--muted-foreground))" strokeDasharray="4 4" />
                        {STRATEGIES.map(k => (
                          <Line key={k} type="stepAfter" dataKey={k} stroke={COLORS[k]} dot={false} connectNulls
                            strokeWidth={strategy === k ? 2.75 : 1.5} strokeOpacity={strategy === k ? 1 : 0.35} isAnimationActive={false} />
                        ))}
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Panel>
                <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm text-foreground">
                  <p className="font-semibold">{copy.verdictTitle}</p>
                  <p className="mt-1 text-foreground/90">{copy.verdict}</p>
                </div>
              </>}

              {tab === 1 && <div className="grid gap-4 lg:grid-cols-2">
                <Panel title={copy.brierTitle} subtitle={copy.brierSubtitle}>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={categories} layout="vertical" margin={{ top: 4, right: 16, left: 8, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                        <XAxis type="number" tick={axis} />
                        <YAxis type="category" dataKey="label" tick={axis} width={78} />
                        <Tooltip {...tooltipStyle} formatter={(v: number) => [num(v, lang, 3), 'Brier']} />
                        <Bar dataKey="brier" fill="#2563EB" radius={[0, 4, 4, 0]} isAnimationActive={false} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Panel>
                <Panel title={copy.gapTitle} subtitle={copy.gapSubtitle}>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={categories.filter(c => c.gap !== null)} layout="vertical" margin={{ top: 4, right: 16, left: 8, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                        <XAxis type="number" tick={axis} domain={[0, 10]} tickFormatter={v => `${v} pts`} />
                        <YAxis type="category" dataKey="label" tick={axis} width={78} />
                        <ReferenceLine x={summary.regles.ecart_min_points} stroke="#DC2626" strokeDasharray="4 4"
                          label={{ value: '8 pts', position: 'top', fill: '#DC2626', fontSize: 11 }} />
                        <Tooltip {...tooltipStyle} formatter={(v: number) => [`${num(v, lang, 1)} pts`, copy.gapLabel]} />
                        <Bar dataKey="gap" radius={[0, 4, 4, 0]} isAnimationActive={false}>
                          {categories.filter(c => c.gap !== null).map(c => (
                            <Cell key={c.categorie} fill={c.categorie === 'Météo' ? '#0EA5A4' : (c.gap ?? 0) >= summary.regles.ecart_min_points ? '#F59E0B' : '#94A3B8'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Panel>
                <Panel title={copy.catTableTitle} className="lg:col-span-2">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[480px] text-sm">
                      <thead><tr className="border-b border-border text-left text-xs text-muted-foreground">
                        {copy.catTableHead.map(h => <th key={h} className="py-2 pr-3 font-medium">{h}</th>)}
                      </tr></thead>
                      <tbody>{categories.map(c => (
                        <tr key={c.categorie} className="border-b border-border/60 text-foreground">
                          <td className="py-2 pr-3">{c.label}</td>
                          <td className="py-2 pr-3 tabular-nums">{num(c.n, lang)}</td>
                          <td className="py-2 pr-3 tabular-nums">{num(c.brier, lang, 3)}</td>
                          <td className="py-2 pr-3 tabular-nums">{num(c.nb_paris, lang)}</td>
                          <td className={`py-2 pr-3 tabular-nums ${c.roi == null ? '' : c.roi >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>{c.roi == null ? '–' : pct(c.roi, lang)}</td>
                        </tr>))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-3 text-xs">{copy.catNote}</p>
                </Panel>
              </div>}

              {tab === 2 && <div className="grid gap-4 lg:grid-cols-3">
                <Panel title={copy.calTitle} subtitle={copy.calSubtitle} className="lg:col-span-2">
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <ScatterChart margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis type="number" dataKey="x" domain={[0, 100]} tick={axis} tickFormatter={v => `${v} %`} name={copy.calX} />
                        <YAxis type="number" dataKey="y" domain={[0, 100]} tick={axis} width={44} tickFormatter={v => `${v} %`} name={copy.calY} />
                        <ZAxis type="number" dataKey="n" range={[40, 400]} />
                        <ReferenceLine segment={[{ x: 0, y: 0 }, { x: 100, y: 100 }]} stroke="hsl(var(--muted-foreground))" strokeDasharray="4 4" />
                        <Tooltip {...tooltipStyle} formatter={(v: number, k: string) => [k === 'n' ? num(v, lang) : pct(v, lang), k === 'x' ? copy.calX : k === 'y' ? copy.calY : copy.calN]} />
                        <Legend wrapperStyle={{ fontSize: 12 }} />
                        <Scatter name={copy.calTrain} data={calibration.train} fill="#94A3B8" isAnimationActive={false} />
                        <Scatter name={copy.calTest} data={calibration.test} fill="#2563EB" isAnimationActive={false} />
                      </ScatterChart>
                    </ResponsiveContainer>
                  </div>
                </Panel>
                <Panel title={copy.calReadTitle}>
                  <div className="space-y-3 text-sm text-foreground/90">{copy.calRead.map(p => <p key={p}>{p}</p>)}</div>
                </Panel>
              </div>}

              {tab === 3 && <div className="grid gap-4 lg:grid-cols-3">
                <div className="grid grid-cols-2 gap-3 lg:col-span-3 lg:grid-cols-4">
                  <Kpi label={copy.rnd.runs} value={num(summary.aleatoire.tirages, lang)} />
                  <Kpi label={copy.rnd.winners} value={pct(summary.aleatoire.part_gagnants_pct, lang)} />
                  <Kpi label={copy.rnd.median} value={usd(summary.aleatoire.mediane, lang)} />
                  <Kpi label={copy.rnd.best} value={usd(summary.aleatoire.meilleur, lang)} hint={copy.rnd.bestPeak(usd(summary.aleatoire.meilleur_plus_haut, lang))} />
                </div>
                <Panel title={copy.rnd.title} subtitle={copy.rnd.subtitle} className="lg:col-span-2">
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={histogram} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                        <XAxis dataKey="bin" tick={{ ...axis, fontSize: 10 }} interval="preserveStartEnd" />
                        <YAxis tick={axis} width={36} allowDecimals={false} />
                        <Tooltip {...tooltipStyle} formatter={(v: number) => [num(v, lang), copy.rnd.count]} labelFormatter={l => `${l} $`} />
                        <Bar dataKey="count" radius={[4, 4, 0, 0]} isAnimationActive={false}>
                          {histogram.map(h => <Cell key={h.bin} fill={h.mid >= 50 ? '#16A34A' : '#94A3B8'} />)}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Panel>
                <Panel title={copy.rnd.readTitle}>
                  <div className="space-y-3 text-sm text-foreground/90">{copy.rnd.read.map(p => <p key={p}>{p}</p>)}</div>
                </Panel>
              </div>}
            </div>
          </div>

          {/* Méthode et limites */}
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2 space-y-8">
              {copy.sections.map(s => (
                <section key={s.title}>
                  <h2 className="text-xl font-semibold text-foreground mb-3">{s.title}</h2>
                  {s.paragraphs?.map(p => <p key={p} className="mb-3 text-foreground/90">{p}</p>)}
                  {s.items && <ul className="list-disc pl-5 space-y-2 text-foreground/90">{s.items.map(i => <li key={i}>{i}</li>)}</ul>}
                </section>
              ))}
            </div>
            <aside className="space-y-4">
              <div className="rounded-lg border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-3">{copy.rulesTitle}</h3>
                <dl className="space-y-2 text-sm">
                  {copy.rules(summary.regles).map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-3"><dt className="text-muted-foreground">{k}</dt><dd className="text-right font-medium text-foreground">{v}</dd></div>
                  ))}
                </dl>
              </div>
              <div className="rounded-lg border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-3">{copy.stackTitle}</h3>
                <div className="flex flex-wrap gap-2">{(project7.technologies ?? []).map(t => <Badge key={t} variant="secondary" className="bg-primary/10 text-primary">{t}</Badge>)}</div>
              </div>
              <p className="text-xs italic text-muted-foreground">{copy.disclaimer}</p>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
