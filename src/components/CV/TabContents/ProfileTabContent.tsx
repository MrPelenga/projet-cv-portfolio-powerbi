
import React from 'react';

const ProfileTabContent = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Profil Professionnel</h3>
        <p className="mb-4">
          Spécialiste en analyse de données commerciales qui combine expertise 
          technique et vision stratégique pour transformer les données en décisions pertinentes.
        </p>
        <p>
          Professionnel polyvalent avec une solide expérience en gestion de projets et 
          analyse commerciale, cherchant à déployer ses compétences en data science et 
          business intelligence dans un environnement stimulant.
        </p>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4">En bref</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="bg-primary/10 p-2 rounded-full">
              <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-medium">Business Analyst avec expertise BI</h4>
              <p className="text-sm text-gray-600">Analyse de données et visualisation</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="bg-primary/10 p-2 rounded-full">
              <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-medium">En recherche d'alternance</h4>
              <p className="text-sm text-gray-600">Pour Septembre 2025 (4j entreprise, 1j école)</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="bg-primary/10 p-2 rounded-full">
              <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-medium">Leadership et esprit d'équipe</h4>
              <p className="text-sm text-gray-600">Capitaine d'équipe sportive, gestion de projets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTabContent;
