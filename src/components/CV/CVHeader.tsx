
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const CVHeader = () => {
  const handleDownloadCV = () => {
    // Création d'une nouvelle URL pour télécharger le CV
    const pdfUrl = '/lovable-uploads/a167674d-bdc0-45b1-ac29-1e814ff4fe44.png';
    
    // Tentative de téléchargement en ouvrant dans une nouvelle fenêtre
    const newWindow = window.open(pdfUrl, '_blank');
    
    // Message de confirmation
    toast({
      title: "Téléchargement du CV",
      description: "Le CV s'ouvre dans un nouvel onglet. Vous pouvez l'enregistrer depuis votre navigateur.",
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
          Curriculum Vitae
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/20 rounded-full"></span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Mon parcours professionnel, mes compétences et ma formation en détail
        </p>
      </div>
      
      <div className="flex justify-end mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <Button 
          onClick={handleDownloadCV}
          className="shadow-md hover:shadow-lg transition-all duration-300"
        >
          <Download className="mr-2 h-4 w-4" />
          Télécharger CV (PDF)
        </Button>
      </div>
    </>
  );
};

export default CVHeader;
