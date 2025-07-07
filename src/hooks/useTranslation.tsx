import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.cv': 'CV',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Business Analyst & Spécialiste Power BI',
    'hero.subtitle': 'Passionné par la transformation des données en insights stratégiques pour optimiser les performances business et automatiser les processus.',
    'hero.cta.cv': 'Découvrir mon CV',
    'hero.cta.projects': 'Voir mes projets',
    
    // About Section
    'about.title': 'À Propos',
    'about.description1': 'Bienvenue sur mon portfolio professionnel. Je suis un spécialiste de l\'analyse de données passionné par la création de tableaux de bord interactifs et percutants avec Power BI. Mon objectif principal est de transformer des données brutes et complexes en insights clairs et actionnables, permettant ainsi aux entreprises de prendre des décisions éclairées et stratégiques.',
    'about.description2': 'Au cours de mes différentes expériences, j\'ai développé une maîtrise approfondie de Power BI et des outils d\'automatisation, me permettant de générer des visualisations percutantes et de concevoir des solutions qui libèrent les équipes des tâches répétitives. Mon objectif est d\'accompagner les entreprises dans leur prise de décision grâce à des analyses prédictives fiables et des processus optimisés.',
    
    // CV Section
    'cv.title': 'Mon CV',
    'cv.subtitle': 'Voici un aperçu de mon parcours professionnel et de mes compétences en analyse de données.',
    'cv.cta': 'Voir CV Complet',
    
    // Projects Section
    'projects.title': 'Mes Projets',
    'projects.subtitle': 'Découvrez mes projets Power BI et autres réalisations en analyse de données.',
    'projects.cta': 'Voir Tous Les Projets',
    
    // Contact CTA
    'contact.title': 'Intéressé par mes services?',
    'contact.subtitle': 'N\'hésitez pas à me contacter pour discuter de vos besoins en analyse de données ou pour toute opportunité de collaboration.',
    'contact.cta': 'Me Contacter',
    
    // Footer
    'footer.rights': 'Portfolio Professionnel. Tous droits réservés.',
    
    // CV Profile
    'profile.name': 'Gabriel PELENGA MANGI',
    'profile.title': 'Business Analyst',
    'profile.phone': '06.72.62.01.65',
    'profile.email': 'gabrielpelenga@gmail.com',
    'profile.status': 'En recherche d\'alternance pour Septembre 2025',
    'profile.contact': 'Contact',
    'profile.languages': 'Langues',
    'profile.french': 'Français',
    'profile.french.level': 'Natif',
    'profile.english': 'Anglais',
    'profile.english.level': 'Professionnel',
    'profile.spanish': 'Espagnol',
    'profile.spanish.level': 'Intermédiaire',
    'profile.interests': 'Centres d\'intérêt',
    'profile.sports': 'Sports (Basketball, Football, Boxe Anglaise)',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.cv': 'Resume',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Business Analyst & Power BI Specialist',
    'hero.subtitle': 'Passionate about transforming data into strategic insights to optimize business performance and automate processes.',
    'hero.cta.cv': 'Discover my Resume',
    'hero.cta.projects': 'View my projects',
    
    // About Section
    'about.title': 'About',
    'about.description1': 'Welcome to my professional portfolio. I am a data analysis specialist passionate about creating interactive and compelling dashboards with Power BI. My main objective is to transform raw and complex data into clear and actionable insights, enabling companies to make informed and strategic decisions.',
    'about.description2': 'Throughout my various experiences, I have developed an in-depth mastery of Power BI and automation tools, allowing me to generate compelling visualizations and design solutions that free teams from repetitive tasks. My goal is to support companies in their decision-making through reliable predictive analysis and optimized processes.',
    
    // CV Section
    'cv.title': 'My Resume',
    'cv.subtitle': 'Here is an overview of my professional background and data analysis skills.',
    'cv.cta': 'View Full Resume',
    
    // Projects Section
    'projects.title': 'My Projects',
    'projects.subtitle': 'Discover my Power BI projects and other data analysis achievements.',
    'projects.cta': 'View All Projects',
    
    // Contact CTA
    'contact.title': 'Interested in my services?',
    'contact.subtitle': 'Feel free to contact me to discuss your data analysis needs or any collaboration opportunity.',
    'contact.cta': 'Contact Me',
    
    // Footer
    'footer.rights': 'Professional Portfolio. All rights reserved.',
    
    // CV Profile
    'profile.name': 'Gabriel PELENGA MANGI',
    'profile.title': 'Business Analyst',
    'profile.phone': '06.72.62.01.65',
    'profile.email': 'gabrielpelenga@gmail.com',
    'profile.status': 'Looking for an apprenticeship for September 2025',
    'profile.contact': 'Contact',
    'profile.languages': 'Languages',
    'profile.french': 'French',
    'profile.french.level': 'Native',
    'profile.english': 'English',
    'profile.english.level': 'Professional',
    'profile.spanish': 'Spanish',
    'profile.spanish.level': 'Intermediate',
    'profile.interests': 'Interests',
    'profile.sports': 'Sports (Basketball, Football, Boxing)',
  }
};

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};