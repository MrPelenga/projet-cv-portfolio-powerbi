import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const ExperienceTabContent = () => {
  const { t } = useTranslation();

  return <div className="space-y-8">
    <div className="border-l-2 border-primary pl-6 relative">
      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
      <h3 className="text-xl font-bold">Business Analyst & Data Quality Analyst</h3>
      <p className="text-primary font-medium">Partoo</p>
      <p className="text-sm text-muted-foreground mb-3">September 2025 - September 2026</p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>{t('cv.exp.partoo.tasks.1')}</li>
        <li>{t('cv.exp.partoo.tasks.2')}</li>
        <li>{t('cv.exp.partoo.tasks.3')}</li>
        <li>{t('cv.exp.partoo.tasks.4')}</li>
      </ul>
    </div>

    <div className="border-l-2 border-primary pl-6 relative">
      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
      <h3 className="text-xl font-bold">BI Analyst & Commercial Performance Analyst</h3>
      <p className="text-primary font-medium">Vérisure</p>
      <p className="text-sm text-muted-foreground mb-3">September 2024 - January 2025</p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>{t('cv.exp.verisure.tasks.1')}</li>
        <li>{t('cv.exp.verisure.tasks.2')}</li>
        <li>{t('cv.exp.verisure.tasks.3')}</li>
        <li>{t('cv.exp.verisure.tasks.4')}</li>
      </ul>
    </div>
    
    <div className="border-l-2 border-primary pl-6 relative">
      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
      <h3 className="text-xl font-bold">Project Manager & Business Analyst</h3>
      <p className="text-primary font-medium">Greenflex / Total Energie</p>
      <p className="text-sm text-muted-foreground mb-3">April 2024 - September 2024</p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>{t('cv.exp.greenflex.tasks.1')}</li>
        <li>{t('cv.exp.greenflex.tasks.2')}</li>
        <li>{t('cv.exp.greenflex.tasks.3')}</li>
        <li>{t('cv.exp.greenflex.tasks.4')}</li>
      </ul>
    </div>
    
    <div className="border-l-2 border-primary pl-6 relative">
      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
      <h3 className="text-xl font-bold">Business Analyst & Business Developer</h3>
      <p className="text-primary font-medium">Koésio Corporate IT</p>
      <p className="text-sm text-muted-foreground mb-3">November 2022 - October 2023</p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>{t('cv.exp.koesio.tasks.1')}</li>
        <li>{t('cv.exp.koesio.tasks.2')}</li>
        <li>{t('cv.exp.koesio.tasks.3')}</li>
        <li>{t('cv.exp.koesio.tasks.4')}</li>
      </ul>
    </div>

    <div className="space-y-6">
      <h3 className="text-xl font-semibold">{t('cv.exp.associative')}</h3>
      <div className="space-y-4">
        <div className="border-l-2 border-muted pl-4">
          <h4 className="font-bold">Boxing Club Poissy</h4>
          <p className="text-muted-foreground">2022 - 2023 (1 year)</p>
        </div>
        <div className="border-l-2 border-muted pl-4">
          <h4 className="font-bold">Basketball</h4>
          <p className="text-muted-foreground">2014 - 2022 (7 years)</p>
          <p className="text-primary">{t('cv.exp.basketball.captain')}</p>
          <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground">
            <li>{t('cv.exp.basketball.tasks.1')}</li>
            <li>{t('cv.exp.basketball.tasks.2')}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>;
};

export default ExperienceTabContent;
