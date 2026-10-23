import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

interface ProjectExternalLinksProps {
  appUrl?: string;
  sourceUrl?: string;
}

export default function ProjectExternalLinks({ appUrl, sourceUrl }: ProjectExternalLinksProps) {
  const { language } = useTranslation();
  if (!appUrl && !sourceUrl) return null;
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4">
      {appUrl && <div className="w-full sm:w-auto min-w-0">
        <Button asChild className="w-full gap-2">
          <a href={appUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} />{language === 'en' ? 'View the app' : "Voir l'application"}</a>
        </Button>
        <p className="mt-2 text-xs text-muted-foreground">{language === 'en' ? 'First load: about 30 seconds' : 'Premier chargement : environ 30 secondes'}</p>
      </div>}
      {sourceUrl && <Button asChild variant="outline" className="w-full sm:w-auto gap-2">
        <a href={sourceUrl} target="_blank" rel="noopener noreferrer"><Github size={16} />{language === 'en' ? 'View the code' : 'Voir le code'}</a>
      </Button>}
    </div>
  );
}