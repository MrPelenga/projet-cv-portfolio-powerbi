import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
const HeroSection = () => {
  return <div className="hero-gradient py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="block">Gabriel PELENGA MANGI</span>
              <span className="block text-primary mt-1 text-left text-4xl">Business Data Analyst</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">Je délivre des insights clairs et automatisés à partir de vos données, grâce à une maîtrise avancée de Power BI et de la visualisation, automatisation de process orienté données.</p>
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
            <div className="bg-card rounded-full p-1 shadow-xl">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
                <img src="/lovable-uploads/a800ede8-6357-4e94-b0f9-df456a52625c.png" alt="Gabriel PELENGA MANGI" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default HeroSection;