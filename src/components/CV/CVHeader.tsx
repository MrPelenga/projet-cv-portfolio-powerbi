
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const CVHeader = () => {
  const handleDownloadCV = () => {
    // Ouverture du CV mis à jour de Gabriel PELENGA MANGI
    const pdfUrl = '/lovable-uploads/8f18a883-91d4-447a-a066-f93e101c9f43.png';
    
    // Tentative de téléchargement en ouvrant dans une nouvelle fenêtre
    const newWindow = window.open(pdfUrl, '_blank');
    
    // Message de confirmation
    toast({
      title: "Téléchargement du CV - Gabriel PELENGA MANGI",
      description: "CV étudiant Mastère Data Science in Business - Le CV s'ouvre dans un nouvel onglet.",
      duration: 5000,
    });
    
    // Si le blocage de popup empêche l'ouverture, proposer un lien direct
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      toast({
        title: "Problème d'ouverture",
        description: "Votre navigateur a bloqué l'ouverture. Utilisez le bouton à nouveau en autorisant les popups.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <>
      <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
          Curriculum Vitae - Gabriel PELENGA MANGI
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/20 rounded-full"></span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Étudiant Mastère Data Science in Business - Alternance 3 jours/semaine
        </p>
        <div className="mt-4 space-y-2">
          <p className="text-lg text-gray-700">📱 06.72.62.01.65 | 📧 gabrielpelenga@gmail.com</p>
          <p className="text-sm text-blue-600">🌐 Portfolio: gabriel-pelenga-mangi-portfolio.lovable.app</p>
        </div>
      </div>
      
      <div className="flex justify-end mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <Button 
          onClick={handleDownloadCV}
          className="shadow-md hover:shadow-lg transition-all duration-300 bg-primary hover:bg-primary/90"
        >
          <Download className="mr-2 h-4 w-4" />
          Télécharger CV Gabriel PELENGA MANGI
        </Button>
      </div>
    </>
  );
};

export default CVHeader;
