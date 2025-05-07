
import React from 'react';

const CompetencesTabContent = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-600 border-b pb-2">Analyse de Données</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-primary mr-2">•</span> Python
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">•</span> SQL
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">•</span> Power BI
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">•</span> Databricks
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">•</span> Tableau
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">•</span> Excel
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-600 border-b pb-2">Business Intelligence</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-primary mr-2">•</span> KPI commerciaux
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">•</span> Reporting
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">•</span> Analyse de performance
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">•</span> Gestion de données
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">•</span> Visualisation de données
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-600 border-b pb-2">Gestion & Communication</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-primary mr-2">•</span> Méthode Agile
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">•</span> Gestion de projet
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">•</span> Animation de réunions
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">•</span> Webinaires
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">•</span> Présentation client
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">•</span> Target Process
            </li>
          </ul>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Langues</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="border p-4 rounded-lg">
            <h4 className="font-bold text-lg">Français</h4>
            <p>Natif</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h4 className="font-bold text-lg">Anglais</h4>
            <p>Professionnel</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h4 className="font-bold text-lg">Espagnol</h4>
            <p>Intermédiaire</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetencesTabContent;
