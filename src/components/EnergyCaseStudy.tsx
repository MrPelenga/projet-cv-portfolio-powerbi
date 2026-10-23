import { Badge } from '@/components/ui/badge';
import { project6CaseStudy } from '@/data/projects/project6';

export default function EnergyCaseStudy({ language }: { language: 'fr' | 'en' }) {
  const study = project6CaseStudy[language];
  const english = language === 'en';
  return <div className="space-y-6">
    <section>
      <h3 className="text-lg font-bold text-foreground mb-2">{english ? 'Business Context' : 'Contexte métier'}</h3>
      <p className="text-foreground/90">{study.context}</p>
    </section>
    <section>
      <h3 className="text-lg font-bold text-foreground mb-2">{english ? 'Tools Used' : 'Outils utilisés'}</h3>
      <div className="flex flex-wrap gap-2">{study.tools.map(tool => <Badge key={tool} variant="secondary" className="bg-primary/10 text-primary">{tool}</Badge>)}</div>
    </section>
    <section>
      <h3 className="text-lg font-bold text-foreground mb-2">{english ? 'The Solution' : 'La Solution'}</h3>
      <ol className="list-decimal pl-5 space-y-2 text-foreground/90">{study.solution.map(item => <li key={item}>{item}</li>)}</ol>
    </section>
    <section>
      <h3 className="text-lg font-bold text-foreground mb-2">Impact</h3>
      <ul className="list-disc pl-5 space-y-3 text-foreground/90">{study.impact.map(item => <li key={item.label}><strong className="text-foreground">{item.label}</strong> {item.text}</li>)}</ul>
      <p className="mt-4 text-xs italic text-muted-foreground">{study.note}</p>
    </section>
  </div>;
}