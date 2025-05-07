import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const Navbar = () => {
  return <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-primary font-bold text-3xl text-center">Automate & Analyze</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-primary font-medium">
              Accueil
            </Link>
            <Link to="/cv" className="px-3 py-2 text-gray-700 hover:text-primary font-medium">
              CV
            </Link>
            <Link to="/projets" className="px-3 py-2 text-gray-700 hover:text-primary font-medium">
              Projets
            </Link>
            <Button asChild variant="outline" className="ml-4">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          <div className="flex items-center sm:hidden">
            <Button variant="ghost" size="sm" className="text-gray-700">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;