
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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-50 w-full backdrop-blur-md border-b border-border transition-all duration-300 ${
      scrolled ? 'bg-card/95 shadow-md' : 'bg-card/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <span className="text-primary font-bold text-xl sm:text-2xl lg:text-3xl relative group-hover:text-primary/80 transition-colors">
                Automate & Analyze
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </div>
          
          {/* Desktop nav */}
          <div className="hidden sm:flex sm:items-center sm:space-x-2 lg:space-x-4">
            <Link to="/" className={`px-3 py-2 font-medium nav-link whitespace-nowrap ${isActive('/') ? 'text-primary after:w-full' : 'text-foreground hover:text-primary'}`}>
              🏠 {t('nav.home')}
            </Link>
            <Link to="/cv" className={`px-3 py-2 font-medium nav-link whitespace-nowrap ${isActive('/cv') ? 'text-primary after:w-full' : 'text-foreground hover:text-primary'}`}>
              📄 {t('nav.cv')}
            </Link>
            <Link to="/projets" className={`px-3 py-2 font-medium nav-link whitespace-nowrap ${isActive('/projets') ? 'text-primary after:w-full' : 'text-foreground hover:text-primary'}`}>
              💼 {t('nav.projects')}
            </Link>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleTheme}
              className="hover:bg-primary/10"
              title={theme === 'light' ? 'Dark mode' : 'Light mode'}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="hover:bg-primary/10"
              title={language === 'fr' ? 'Switch to English' : 'Passer en français'}
            >
              <Languages size={20} />
              <span className="ml-1 text-sm font-medium">
                {language === 'fr' ? 'EN' : 'FR'}
              </span>
            </Button>
            <Button asChild variant="outline" className="hover:bg-primary/10 border-2 whitespace-nowrap">
              <Link to="/contact">✉️ {t('nav.contact')}</Link>
            </Button>
          </div>

          {/* Mobile button */}
          <div className="flex items-center sm:hidden">
            <Button variant="ghost" size="sm" className="text-foreground" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-card/95 shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-primary bg-primary/10' : 'text-foreground hover:bg-accent'}`} onClick={toggleMenu}>
              🏠 {t('nav.home')}
            </Link>
            <Link to="/cv" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/cv') ? 'text-primary bg-primary/10' : 'text-foreground hover:bg-accent'}`} onClick={toggleMenu}>
              📄 {t('nav.cv')}
            </Link>
            <Link to="/projets" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/projets') ? 'text-primary bg-primary/10' : 'text-foreground hover:bg-accent'}`} onClick={toggleMenu}>
              💼 {t('nav.projects')}
            </Link>
            <button onClick={toggleTheme} className="flex items-center px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent w-full text-left">
              {theme === 'light' ? <Moon size={20} className="mr-2" /> : <Sun size={20} className="mr-2" />}
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
            <button onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')} className="flex items-center px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent w-full text-left">
              <Languages size={20} className="mr-2" />
              {language === 'fr' ? 'English' : 'Français'}
            </button>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent" onClick={toggleMenu}>
              ✉️ {t('nav.contact')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
