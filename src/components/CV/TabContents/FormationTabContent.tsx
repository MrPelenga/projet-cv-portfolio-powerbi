
import React from 'react';

const FormationTabContent = () => {
  return (
    <div className="space-y-8">
      <div className="border-l-2 border-primary pl-6 relative">
        <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
        <h3 className="text-xl font-bold">MSc Analytics for Business</h3>
        <p className="text-primary font-medium">Eugenia School (Paris 10)</p>
        <p className="text-sm text-gray-500 mb-3">2024 - 2026</p>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Cours principaux : </span>
          Récolte, visualisation et analyse de données, Code, Stratégie, Finance, Marketing
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Langages et outils : </span>
          Python, SQL, PowerBI, Méthode Agile, Databriks, Tableau, Target Process
        </p>
      </div>
      
      <div className="border-l-2 border-primary pl-6 relative">
        <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
        <h3 className="text-xl font-bold">Bachelor Responsable Marketing Commercial</h3>
        <p className="text-primary font-medium">CFA Codis (Paris 10)</p>
        <p className="text-sm text-gray-500 mb-3">2022 - 2023</p>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Cours principaux : </span>
          Marketing, Statistiques, Communication, Négociation, Management, E-commerce
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Langages et outils : </span>
          Python, Excel, PowerPoint, Canva, SEO/SEA, SQL
        </p>
      </div>
      
      <div className="border-l-2 border-primary pl-6 relative">
        <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
        <h3 className="text-xl font-bold">BTS Négociations Digitalisation de la Relation Client</h3>
        <p className="text-primary font-medium">Lycée Van Gogh (Paris 10)</p>
        <p className="text-sm text-gray-500 mb-3">2020 - 2022</p>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Cours principaux : </span>
          Marketing, Négociation, Communication, E-commerce
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Langages et outils : </span>
          Excel, PowerPoint, Canva, PrestaShop, WordPress
        </p>
      </div>
    </div>
  );
};

export default FormationTabContent;
