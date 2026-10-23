import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import type { Project } from '@/components/ProjectsList';

interface ProjectExternalLinksProps {
  project: Project;
}

export default function ProjectExternalLinks({ project }: ProjectExternalLinksProps) {
  const { language } = useTranslation();
  const { appUrl, sourceUrl } = project;
  if (!appUrl && !sourceUrl) return null;

  const pick = (fr?: string, en?: string) => (language === 'en' && en ? en : fr);
  const appLabel = pick(project.appLabel, project.appLabel_en) ?? (language === 'en' ? 'View the app' : "Voir l'application");
  const sourceLabel = pick(project.sourceLabel, project.sourceLabel_en) ?? (language === 'en' ? 'View the code' : 'Voir le code');
  const loadingNote = pick(project.loadingNote, project.loadingNote_en);

  return (
    <div className="flex flex-col sm:flex-row items-start gap-4">
      {appUrl && <div className="w-full sm:w-auto min-w-0">
        <Button asChild className="w-full gap-2">
          <a href={appUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} />{appLabel}</a>
        </Button>
        {loadingNote && <p className="mt-2 text-xs text-muted-foreground">{loadingNote}</p>}
      </div>}
      {sourceUrl && <Button asChild variant="outline" className="w-full sm:w-auto gap-2">
        <a href={sourceUrl} target="_blank" rel="noopener noreferrer"><Github size={16} />{sourceLabel}</a>
      </Button>}
    </div>
  );
}
