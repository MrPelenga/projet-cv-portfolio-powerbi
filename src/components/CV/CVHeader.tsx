
import React from 'react';
import { Button } from '@/components/ui/button';

const CVHeader = () => {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Curriculum Vitae</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Mon parcours professionnel, mes compétences et ma formation en détail
        </p>
      </div>
      
      <div className="flex justify-end mb-6">
        <Button>Télécharger CV (PDF)</Button>
      </div>
    </>
  );
};

export default CVHeader;
