import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const FormationTabContent = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <div className="border-l-2 border-primary pl-6 relative">
        <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
        <h3 className="text-xl font-bold">MSc Analytics for Business</h3>
        <p className="text-primary font-medium">Eugenia School (Paris 10)</p>
        <p className="text-sm text-muted-foreground mb-3">2024 - 2026</p>
        <p className="text-muted-foreground mb-2">
          <span className="font-medium">{t('cv.edu.main.courses')}</span>
          Data collection, visualization and analysis, Programming, Strategy, Finance, Marketing
        </p>
        <p className="text-muted-foreground">
          <span className="font-medium">{t('cv.edu.tools')}</span>
          Python, SQL, PowerBI, Agile Methodology, Databricks, Tableau, Target Process
        </p>
      </div>
      
      <div className="border-l-2 border-primary pl-6 relative">
        <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
        <h3 className="text-xl font-bold">Bachelor in Commercial Marketing Management</h3>
        <p className="text-primary font-medium">CFA Codis (Paris 10)</p>
        <p className="text-sm text-muted-foreground mb-3">2022 - 2023</p>
        <p className="text-muted-foreground mb-2">
          <span className="font-medium">{t('cv.edu.main.courses')}</span>
          Marketing, Statistics, Communication, Negotiation, Management, E-commerce
        </p>
        <p className="text-muted-foreground">
          <span className="font-medium">{t('cv.edu.tools')}</span>
          Python, Excel, PowerPoint, Canva, SEO/SEA, SQL
        </p>
      </div>
      
      <div className="border-l-2 border-primary pl-6 relative">
        <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
        <h3 className="text-xl font-bold">BTS in Digital Client Relationship & Negotiation</h3>
        <p className="text-primary font-medium">Lycée Van Gogh (Paris 10)</p>
        <p className="text-sm text-muted-foreground mb-3">2020 - 2022</p>
        <p className="text-muted-foreground mb-2">
          <span className="font-medium">{t('cv.edu.main.courses')}</span>
          Marketing, Negotiation, Communication, E-commerce
        </p>
        <p className="text-muted-foreground">
          <span className="font-medium">{t('cv.edu.tools')}</span>
          Excel, PowerPoint, Canva, PrestaShop, WordPress
        </p>
      </div>
    </div>
  );
};

export default FormationTabContent;
