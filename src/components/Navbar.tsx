
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`sticky top-0 z-50 w-full backdrop-blur-md border-b border-border transition-all duration-300 ${
      scrolled ? 'bg-card/95 shadow-md' : 'bg-card/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <span className="text-primary font-bold text-3xl text-center relative group-hover:text-primary/80 transition-colors">
                Automate & Analyze
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link to="/" className={`px-3 py-2 font-medium nav-link ${isActive('/') ? 'text-primary after:w-full' : 'text-gray-700 hover:text-primary'}`}>
              Accueil
            </Link>
            <Link to="/cv" className={`px-3 py-2 font-medium nav-link ${isActive('/cv') ? 'text-primary after:w-full' : 'text-gray-700 hover:text-primary'}`}>
              CV
            </Link>
            <Link to="/projets" className={`px-3 py-2 font-medium nav-link ${isActive('/projets') ? 'text-primary after:w-full' : 'text-gray-700 hover:text-primary'}`}>
              Projets
            </Link>
            <Button asChild variant="outline" className="ml-4 hover:bg-primary/10 border-2">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          <div className="flex items-center sm:hidden">
            <Button variant="ghost" size="sm" className="text-gray-700" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-card/95 shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-primary bg-primary/10' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <Link 
              to="/cv" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/cv') ? 'text-primary bg-primary/10' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={toggleMenu}
            >
              CV
            </Link>
            <Link 
              to="/projets" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/projets') ? 'text-primary bg-primary/10' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={toggleMenu}
            >
              Projets
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
