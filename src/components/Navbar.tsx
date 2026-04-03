
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Languages, Sun, Moon } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useTheme } from '@/hooks/useTheme';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

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
              {t('nav.home')}
            </Link>
            <Link to="/cv" className={`px-3 py-2 font-medium nav-link ${isActive('/cv') ? 'text-primary after:w-full' : 'text-gray-700 hover:text-primary'}`}>
              {t('nav.cv')}
            </Link>
            <Link to="/projets" className={`px-3 py-2 font-medium nav-link ${isActive('/projets') ? 'text-primary after:w-full' : 'text-gray-700 hover:text-primary'}`}>
              {t('nav.projects')}
            </Link>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleTheme}
              className="ml-2 hover:bg-primary/10"
              title={theme === 'light' ? 'Dark mode' : 'Light mode'}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="ml-2 hover:bg-primary/10"
              title={language === 'fr' ? 'Switch to English' : 'Passer en français'}
            >
              <Languages size={20} />
              <span className="ml-1 text-sm font-medium">
                {language === 'fr' ? 'EN' : 'FR'}
              </span>
            </Button>
            <Button asChild variant="outline" className="ml-4 hover:bg-primary/10 border-2">
              <Link to="/contact">{t('nav.contact')}</Link>
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
              {t('nav.home')}
            </Link>
            <Link 
              to="/cv" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/cv') ? 'text-primary bg-primary/10' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={toggleMenu}
            >
              {t('nav.cv')}
            </Link>
            <Link 
              to="/projets" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/projets') ? 'text-primary bg-primary/10' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={toggleMenu}
            >
              {t('nav.projects')}
            </Link>
            <button 
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <Languages size={20} className="mr-2" />
              {language === 'fr' ? 'English' : 'Français'}
            </button>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
