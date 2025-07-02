
import React from 'react';

const ExperienceTabContent = () => {
  return (
    <div className="space-y-8">
      <div className="border-l-2 border-primary pl-6 relative">
        <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
        <h3 className="text-xl font-bold">Analyst BI & Analyst Performance commerciales</h3>
        <p className="text-primary font-medium">Vérisure</p>
        <p className="text-sm text-gray-500 mb-3">Septembre 2024 - Janvier 2025</p>
        <p className="text-sm text-blue-600 mb-2">Rythme : 3 jours en entreprise / 2 jours école</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Gestion de données commerciales</li>
          <li>Rapport d'analyse (performance commerciales)</li>
          <li>Analyses des KPI commerciales</li>
          <li>Récupération de données commerciales</li>
        </ul>
      </div>
      
      <div className="border-l-2 border-primary pl-6 relative">
        <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
        <h3 className="text-xl font-bold">Chef de projet & Business Analyst</h3>
        <p className="text-primary font-medium">Greenflex / Total Energie</p>
        <p className="text-sm text-gray-500 mb-3">Avril 2024 - Septembre 2024</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Gestion de paramétrage de données clients</li>
          <li>Gestion et Pilotage de projet en agilité</li>
          <li>Animation de réunion commerciale</li>
          <li>Animation de Webinaire clients</li>
        </ul>
      </div>
      
      <div className="border-l-2 border-primary pl-6 relative">
        <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
        <h3 className="text-xl font-bold">Business Analyst & Business Developer</h3>
        <p className="text-primary font-medium">Koésio Corporate IT</p>
        <p className="text-sm text-gray-500 mb-3">Novembre 2023 - Octobre 2023</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Gestion de la clientèle (65 clients dont 3 grands comptes)</li>
          <li>Reportings de KPI commerciaux : taux de clic, retour sur investissement, CA généré</li>
          <li>Prospection Téléphonique (30 appels par jours)</li>
          <li>Rendez-vous en clientèle (présentation des solutions)</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Expérience Associative</h3>
        <div className="space-y-4">
          <div className="border-l-2 border-gray-300 pl-4">
            <h4 className="font-bold">Boxing Club Poissy</h4>
            <p className="text-gray-600">2022 - 2023 (1 an)</p>
          </div>
          <div className="border-l-2 border-gray-300 pl-4">
            <h4 className="font-bold">Basketball</h4>
            <p className="text-gray-600">2014 - 2022 (7 ans)</p>
            <p className="text-primary">Capitaine des U-19</p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
              <li>Support du coach dans les diverses opérations de communication et de management de l'équipe</li>
              <li>Vainqueurs de la coupe régionale en 2018 et 2020</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTabContent;
