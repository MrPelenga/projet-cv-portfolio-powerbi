import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const CompetencesTabContent = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary border-b pb-2">{t('cv.skills.data')}</h3>
          <ul className="space-y-2">
            <li className="flex items-center"><span className="text-primary mr-2">•</span> Python</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span> SQL</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span> Power BI</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span> Databricks</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span> Tableau</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span> Excel</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary border-b pb-2">{t('cv.skills.bi')}</h3>
          <ul className="space-y-2">
            <li className="flex items-center"><span className="text-primary mr-2">•</span> {t('cv.skills.bi.kpi')}</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span> {t('cv.skills.bi.reporting')}</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span> {t('cv.skills.bi.performance')}</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span> {t('cv.skills.bi.data.management')}</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span> {t('cv.skills.bi.visualization')}</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary border-b pb-2">{t('cv.skills.management')}</h3>
          <ul className="space-y-2">
            <li className="flex items-center"><span className="text-primary mr-2">•</span> {t('cv.skills.management.agile')}</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span> {t('cv.skills.management.project')}</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span> {t('cv.skills.management.meetings')}</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span> {t('cv.skills.management.webinars')}</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span> {t('cv.skills.management.client')}</li>
            <li className="flex items-center"><span className="text-primary mr-2">•</span> Target Process</li>
          </ul>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4">{t('cv.skills.languages')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="border p-4 rounded-lg">
            <h4 className="font-bold text-lg">{t('profile.french')}</h4>
            <p>{t('profile.french.level')}</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h4 className="font-bold text-lg">{t('profile.english')}</h4>
            <p>{t('profile.english.level')}</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h4 className="font-bold text-lg">{t('profile.spanish')}</h4>
            <p>{t('profile.spanish.level')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetencesTabContent;
