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
    'hero.cta.calendly': 'Prendre un RDV de 30 min',
    
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
    'profile.status': 'En recherche d\'un CDI/CDD pour Octobre 2026',
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
    
    // Projects Page
    'projects.page.title': 'Mes Projets',
    'projects.page.subtitle': 'Découvrez mon portfolio de projets Power BI et d\'analyses de données',
    'projects.powerbi.title': 'Dashboards Power BI',
    'projects.powerbi.description': 'Découvrez mes créations de dashboards interactifs avec des visualisations avancées et des analyses de données en temps réel.',
    'projects.search.placeholder': 'Rechercher un projet...',
    'projects.filter.button': 'Filtrer',
    'projects.filter.title': 'Filtrer par catégorie',
    'projects.filtered.title': 'Projets filtrés',
    'projects.all.title': 'Tous les projets',
    'projects.none.found': 'Aucun projet trouvé',
    'projects.reset.filters': 'Réinitialiser les filtres',
    'projects.no.results': 'Aucun projet ne correspond à votre recherche. Essayez d\'autres termes ou filtres.',
    'projects.cta.title': 'Vous avez un projet en tête ?',
    'projects.cta.description': 'Je suis disponible pour des missions freelance et des collaborations. N\'hésitez pas à me contacter pour discuter de votre projet.',
    'projects.cta.button': 'Me Contacter',
    
    // Contact Page
    'contact.page.title': 'Contact',
    'contact.info.title': 'Mes Coordonnées',
    'contact.email.label': 'Email',
    'contact.linkedin.label': 'LinkedIn',
    'contact.phone.label': 'Téléphone',
    'contact.form.title': 'M\'envoyer un message',
    'contact.form.name': 'Nom',
    'contact.form.name.placeholder': 'Votre nom',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'votre.email@exemple.com',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Votre message...',
    'contact.form.submit': 'Envoyer',
    'contact.form.sending': 'Envoi en cours...',
    'contact.form.success.title': 'Message envoyé !',
    'contact.form.success.description': 'Merci de m\'avoir contacté. Je vous répondrai dans les plus brefs délais.',
    'contact.form.error.title': 'Erreur',
    'contact.form.error.description': 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.',
    'contact.form.name.required': 'Le nom est requis',
    'contact.form.email.required': 'L\'email est requis',
    'contact.form.email.invalid': 'Adresse email invalide',
    'contact.form.message.required': 'Le message est requis',
    
    // Project Detail Page
    'project.detail.back': 'Retour aux projets',
    'project.detail.not.found.title': 'Projet non trouvé',
    'project.detail.not.found.description': 'Le projet que vous recherchez n\'existe pas.',
    'project.detail.description.title': 'Description du projet',
    'project.detail.objectives.title': 'Objectifs',
    'project.detail.technologies.title': 'Technologies utilisées',
    'project.detail.info.title': 'Informations',
    'project.detail.client.label': 'Client',
    'project.detail.period.label': 'Période',
    'project.detail.category.label': 'Catégorie',
    'project.detail.screenshots.title': 'Captures d\'écran',
    'project.detail.related.title': 'Projets similaires',
    'project.detail.view.button': 'Voir le projet',

    // CV Header
    'cv.header.title': 'Curriculum Vitae - Gabriel PELENGA MANGI',
    'cv.header.subtitle': 'Diplômé du Mastère Data Science in Business, en recherche d\'un CDI/CDD pour Octobre 2026',
    'cv.header.current': 'Actuellement : Business Analyst & Data Quality Analyst chez Partoo',
    'cv.header.download': 'Télécharger CV Gabriel PELENGA MANGI',
    'cv.header.download.toast.title': 'Téléchargement du CV - Gabriel PELENGA MANGI',
    'cv.header.download.toast.description': 'Le CV s\'ouvre dans un nouvel onglet.',
    'cv.header.popup.title': 'Problème d\'ouverture',
    'cv.header.popup.description': 'Votre navigateur a bloqué l\'ouverture. Utilisez le bouton à nouveau en autorisant les popups.',

    // CV Tabs
    'cv.tab.profile': 'Profil',
    'cv.tab.experience': 'Expérience',
    'cv.tab.education': 'Formation',
    'cv.tab.skills': 'Compétences',

    // Profile Tab
    'cv.profile.title': 'Profil Professionnel',
    'cv.profile.description1': 'Spécialiste en analyse de données commerciales qui combine expertise technique et vision stratégique pour transformer les données en décisions pertinentes.',
    'cv.profile.description2': 'Professionnel polyvalent avec une solide expérience en gestion de projets, analyse commerciale et automatisation de process et de données, cherchant à déployer ses compétences en data science et business intelligence dans un environnement stimulant.',
    'cv.profile.brief': 'En bref',
    'cv.profile.brief.analyst': 'Business Analyst avec expertise BI',
    'cv.profile.brief.analyst.desc': 'Analyse de données, visualisation et automatisation',
    'cv.profile.brief.status': 'En recherche d\'un CDI/CDD',
    'cv.profile.brief.status.desc': 'Pour Octobre 2026',
    'cv.profile.brief.leadership': 'Leadership et esprit d\'équipe',
    'cv.profile.brief.leadership.desc': 'Capitaine d\'équipe sportive, gestion de projets',

    // Experience Tab
    'cv.exp.partoo.tasks.1': 'Gestion de portefeuille par marché (Europe, Moyen-Orient, Amérique Latine)',
    'cv.exp.partoo.tasks.2': 'Reportings de KPI commerciaux : CA généré par les équipes, Nombre de RDV fixés',
    'cv.exp.partoo.tasks.3': 'Nettoyage du CRM & Portefeuille',
    'cv.exp.partoo.tasks.4': 'Création de Dashboard Streamlit & SalesForce',
    'cv.exp.verisure.tasks.1': 'Gestion de données commerciales',
    'cv.exp.verisure.tasks.2': 'Rapport d\'analyse (performance commerciales)',
    'cv.exp.verisure.tasks.3': 'Analyses des KPI commerciales',
    'cv.exp.verisure.tasks.4': 'Récupération de données commerciales',
    'cv.exp.greenflex.tasks.1': 'Gestion de paramétrage de données clients',
    'cv.exp.greenflex.tasks.2': 'Gestion et Pilotage de projet en agilité',
    'cv.exp.greenflex.tasks.3': 'Animation de réunion commerciale',
    'cv.exp.greenflex.tasks.4': 'Animation de Webinaire clients',
    'cv.exp.koesio.tasks.1': 'Gestion de la clientèle (65 clients dont 3 grands comptes)',
    'cv.exp.koesio.tasks.2': 'Reportings de KPI commerciaux : taux de clic, retour sur investissement, CA généré',
    'cv.exp.koesio.tasks.3': 'Prospection Téléphonique (30 appels par jours)',
    'cv.exp.koesio.tasks.4': 'Rendez-vous en clientèle (présentation des solutions)',
    'cv.exp.associative': 'Expérience Associative',
    'cv.exp.basketball.captain': 'Capitaine des U-19',
    'cv.exp.basketball.tasks.1': 'Support du coach dans les diverses opérations de communication et de management de l\'équipe',
    'cv.exp.basketball.tasks.2': 'Vainqueurs de la coupe régionale en 2018 et 2020',

    // Formation Tab
    'cv.edu.main.courses': 'Cours principaux : ',
    'cv.edu.tools': 'Langages et outils : ',

    // Competences Tab
    'cv.skills.data': 'Analyse de Données',
    'cv.skills.bi': 'Business Intelligence',
    'cv.skills.bi.kpi': 'KPI commerciaux',
    'cv.skills.bi.reporting': 'Reporting',
    'cv.skills.bi.performance': 'Analyse de performance',
    'cv.skills.bi.data.management': 'Gestion de données',
    'cv.skills.bi.visualization': 'Visualisation de données',
    'cv.skills.management': 'Gestion & Communication',
    'cv.skills.management.agile': 'Méthode Agile',
    'cv.skills.management.project': 'Gestion de projet',
    'cv.skills.management.meetings': 'Animation de réunions',
    'cv.skills.management.webinars': 'Webinaires',
    'cv.skills.management.client': 'Présentation client',
    'cv.skills.languages': 'Langues',

    // CV Preview
    'cv.preview.subtitle': 'Diplômé du Mastère Data Science in Business | En recherche d\'un CDI/CDD pour Octobre 2026',
    'cv.preview.current': 'Actuellement : Business Analyst & Data Quality Analyst chez Partoo',
    'cv.preview.description': 'Spécialiste en analyse de données commerciales qui combine expertise technique, vision stratégique et automatisation de process pour transformer les données en décisions pertinentes.',
    'cv.preview.status': 'En recherche d\'un CDI/CDD pour Octobre 2026',
    'cv.preview.skills': 'Compétences',
    'cv.preview.experience': 'Expérience Professionnelle',
    'cv.preview.education': 'Formation',
    'cv.preview.view': 'Voir CV Complet',

    // Project button
    'projects.view': 'Voir le projet',
    'projects.view.short': 'Voir',
    'projects.open': 'Ouvrir',
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
    'profile.status': 'Seeking a permanent (CDI) or fixed-term (CDD) contract for October 2026',
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
    
    // Projects Page
    'projects.page.title': 'My Projects',
    'projects.page.subtitle': 'Discover my portfolio of Power BI projects and data analysis',
    'projects.powerbi.title': 'Power BI Dashboards',
    'projects.powerbi.description': 'Discover my interactive dashboard creations with advanced visualizations and real-time data analysis.',
    'projects.search.placeholder': 'Search for a project...',
    'projects.filter.button': 'Filter',
    'projects.filter.title': 'Filter by category',
    'projects.filtered.title': 'Filtered projects',
    'projects.all.title': 'All projects',
    'projects.none.found': 'No projects found',
    'projects.reset.filters': 'Reset filters',
    'projects.no.results': 'No projects match your search. Try other terms or filters.',
    'projects.cta.title': 'Have a project in mind?',
    'projects.cta.description': 'I am available for freelance missions and collaborations. Feel free to contact me to discuss your project.',
    'projects.cta.button': 'Contact Me',
    
    // Contact Page
    'contact.page.title': 'Contact',
    'contact.info.title': 'My Contact Information',
    'contact.email.label': 'Email',
    'contact.linkedin.label': 'LinkedIn',
    'contact.phone.label': 'Phone',
    'contact.form.title': 'Send me a message',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your.email@example.com',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Your message...',
    'contact.form.submit': 'Send',
    'contact.form.sending': 'Sending...',
    'contact.form.success.title': 'Message sent!',
    'contact.form.success.description': 'Thank you for reaching out. I will get back to you as soon as possible.',
    'contact.form.error.title': 'Error',
    'contact.form.error.description': 'An error occurred while sending your message. Please try again.',
    'contact.form.name.required': 'Name is required',
    'contact.form.email.required': 'Email is required',
    'contact.form.email.invalid': 'Invalid email address',
    'contact.form.message.required': 'Message is required',
    
    // Project Detail Page
    'project.detail.back': 'Back to projects',
    'project.detail.not.found.title': 'Project not found',
    'project.detail.not.found.description': 'The project you are looking for does not exist.',
    'project.detail.description.title': 'Project description',
    'project.detail.objectives.title': 'Objectives',
    'project.detail.technologies.title': 'Technologies used',
    'project.detail.info.title': 'Information',
    'project.detail.client.label': 'Client',
    'project.detail.period.label': 'Period',
    'project.detail.category.label': 'Category',
    'project.detail.screenshots.title': 'Screenshots',
    'project.detail.related.title': 'Similar projects',
    'project.detail.view.button': 'View project',

    // CV Header
    'cv.header.title': 'Resume - Gabriel PELENGA MANGI',
    'cv.header.subtitle': "Master's Graduate in Data Science in Business, seeking a permanent (CDI) or fixed-term (CDD) contract for October 2026",
    'cv.header.current': 'Currently: Business Analyst & Data Quality Analyst at Partoo',
    'cv.header.download': 'Download Resume - Gabriel PELENGA MANGI',
    'cv.header.download.toast.title': 'Downloading Resume - Gabriel PELENGA MANGI',
    'cv.header.download.toast.description': 'The resume is opening in a new tab.',
    'cv.header.popup.title': 'Opening issue',
    'cv.header.popup.description': 'Your browser blocked the opening. Try again and allow popups.',

    // CV Tabs
    'cv.tab.profile': 'Profile',
    'cv.tab.experience': 'Experience',
    'cv.tab.education': 'Education',
    'cv.tab.skills': 'Skills',

    // Profile Tab
    'cv.profile.title': 'Professional Profile',
    'cv.profile.description1': 'Commercial data analysis specialist combining technical expertise and strategic vision to transform data into relevant decisions.',
    'cv.profile.description2': 'Versatile professional with solid experience in project management, business analysis and process & data automation, seeking to deploy data science and business intelligence skills in a stimulating environment.',
    'cv.profile.brief': 'At a glance',
    'cv.profile.brief.analyst': 'Business Analyst with BI expertise',
    'cv.profile.brief.analyst.desc': 'Data analysis, visualization and automation',
    'cv.profile.brief.status': 'Seeking a permanent/fixed-term contract',
    'cv.profile.brief.status.desc': 'For October 2026',
    'cv.profile.brief.leadership': 'Leadership and team spirit',
    'cv.profile.brief.leadership.desc': 'Sports team captain, project management',

    // Experience Tab
    'cv.exp.partoo.tasks.1': 'Portfolio management by market (Europe, Middle East, Latin America)',
    'cv.exp.partoo.tasks.2': 'Commercial KPI reporting: revenue generated by teams, number of meetings scheduled',
    'cv.exp.partoo.tasks.3': 'CRM & Portfolio cleanup',
    'cv.exp.partoo.tasks.4': 'Streamlit & SalesForce Dashboard creation',
    'cv.exp.verisure.tasks.1': 'Commercial data management',
    'cv.exp.verisure.tasks.2': 'Analysis reports (commercial performance)',
    'cv.exp.verisure.tasks.3': 'Commercial KPI analysis',
    'cv.exp.verisure.tasks.4': 'Commercial data retrieval',
    'cv.exp.greenflex.tasks.1': 'Client data configuration management',
    'cv.exp.greenflex.tasks.2': 'Agile project management and steering',
    'cv.exp.greenflex.tasks.3': 'Commercial meeting facilitation',
    'cv.exp.greenflex.tasks.4': 'Client webinar facilitation',
    'cv.exp.koesio.tasks.1': 'Client management (65 clients including 3 key accounts)',
    'cv.exp.koesio.tasks.2': 'Commercial KPI reporting: click rate, ROI, revenue generated',
    'cv.exp.koesio.tasks.3': 'Phone prospecting (30 calls per day)',
    'cv.exp.koesio.tasks.4': 'Client meetings (solution presentations)',
    'cv.exp.associative': 'Volunteer Experience',
    'cv.exp.basketball.captain': 'U-19 Captain',
    'cv.exp.basketball.tasks.1': 'Supporting the coach in team communication and management operations',
    'cv.exp.basketball.tasks.2': 'Regional cup winners in 2018 and 2020',

    // Formation Tab
    'cv.edu.main.courses': 'Main courses: ',
    'cv.edu.tools': 'Languages and tools: ',

    // Competences Tab
    'cv.skills.data': 'Data Analysis',
    'cv.skills.bi': 'Business Intelligence',
    'cv.skills.bi.kpi': 'Commercial KPIs',
    'cv.skills.bi.reporting': 'Reporting',
    'cv.skills.bi.performance': 'Performance Analysis',
    'cv.skills.bi.data.management': 'Data Management',
    'cv.skills.bi.visualization': 'Data Visualization',
    'cv.skills.management': 'Management & Communication',
    'cv.skills.management.agile': 'Agile Methodology',
    'cv.skills.management.project': 'Project Management',
    'cv.skills.management.meetings': 'Meeting Facilitation',
    'cv.skills.management.webinars': 'Webinars',
    'cv.skills.management.client': 'Client Presentations',
    'cv.skills.languages': 'Languages',

    // CV Preview
    'cv.preview.subtitle': "Master's Graduate in Data Science in Business | Seeking a permanent (CDI) or fixed-term (CDD) contract for October 2026",
    'cv.preview.current': 'Currently: Business Analyst & Data Quality Analyst at Partoo',
    'cv.preview.description': 'Commercial data analysis specialist combining technical expertise, strategic vision and process automation to transform data into relevant decisions.',
    'cv.preview.status': 'Seeking a permanent (CDI) or fixed-term (CDD) contract for October 2026',
    'cv.preview.skills': 'Skills',
    'cv.preview.experience': 'Professional Experience',
    'cv.preview.education': 'Education',
    'cv.preview.view': 'View Full Resume',

    // Project button
    'projects.view': 'View project',
    'projects.view.short': 'View',
    'projects.open': 'Open',
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
