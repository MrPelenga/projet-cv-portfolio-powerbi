import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useTranslation } from '@/hooks/useTranslation';

const CVHeader = () => {
  const { t } = useTranslation();

  const handleDownloadCV = () => {
    const pdfUrl = '/CV_Gabriel_PELENGA_MANGI.pdf';
    const newWindow = window.open(pdfUrl, '_blank');

    toast({
      title: t('cv.header.download.toast.title'),
      description: t('cv.header.download.toast.description'),
      duration: 5000
    });

    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      toast({
        title: t('cv.header.popup.title'),
        description: t('cv.header.popup.description'),
        variant: "destructive",
        duration: 5000
      });
    }
  };

  return <>
    <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <h1 className="text-4xl font-bold text-foreground mb-4 relative inline-block">
        {t('cv.header.title')}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/20 rounded-full"></span>
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t('cv.header.subtitle')}</p>
      <p className="text-lg text-primary font-semibold mt-2">{t('cv.header.current')}</p>
      <div className="mt-4 space-y-2">
        <p className="text-lg text-foreground">📱 06.72.62.01.65 | 📧 gabrielpelenga@gmail.com</p>
      </div>
    </div>
    
    <div className="flex justify-end mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <Button onClick={handleDownloadCV} className="shadow-md hover:shadow-lg transition-all duration-300 bg-primary hover:bg-primary/90">
        <Download className="mr-2 h-4 w-4" />
        {t('cv.header.download')}
      </Button>
    </div>
  </>;
};

export default CVHeader;
