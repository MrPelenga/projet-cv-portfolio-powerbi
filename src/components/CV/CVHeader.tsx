
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const CVHeader = () => {
  const handleDownloadCV = () => {
    // Create a link to download the CV PDF file
    const link = document.createElement('a');
    link.href = '/lovable-uploads/a167674d-bdc0-45b1-ac29-1e814ff4fe44.png';
    link.download = 'Gabriel_PELENGA_MANGI_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Curriculum Vitae</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Mon parcours professionnel, mes compétences et ma formation en détail
        </p>
      </div>
      
      <div className="flex justify-end mb-6">
        <Button onClick={handleDownloadCV}>
          <Download className="mr-2 h-4 w-4" />
          Télécharger CV (PDF)
        </Button>
      </div>
    </>
  );
};

export default CVHeader;
