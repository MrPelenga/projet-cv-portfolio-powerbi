
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-gradient py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="block">Gabriel PELENGA MANGI</span>
              <span className="block text-primary mt-1">Data Analyst</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
              Spécialiste en analyse de données avec expertise en Power BI et visualisation de données
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/cv">Mon CV</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/projets">Mes Projets</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="bg-white rounded-full p-1 shadow-xl">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gray-300 overflow-hidden">
                {/* Placeholder pour photo de profil - remplacez par votre photo */}
                <svg className="h-full w-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14.25c-4.65 0-8.25 1.83-8.25 4.15V20h16.5v-1.6c0-2.32-3.6-4.15-8.25-4.15ZM12 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
