import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProfileTabContent from './TabContents/ProfileTabContent';
import ExperienceTabContent from './TabContents/ExperienceTabContent';
import FormationTabContent from './TabContents/FormationTabContent';
import CompetencesTabContent from './TabContents/CompetencesTabContent';
import { useTranslation } from '@/hooks/useTranslation';

const CVTabsSection = () => {
  const { t } = useTranslation();

  return (
    <div className="md:w-2/3">
      <Tabs defaultValue="profil">
        <TabsList className="mb-6 flex flex-wrap justify-center gap-2 h-auto w-full">
          <TabsTrigger value="profil">{t('cv.tab.profile')}</TabsTrigger>
          <TabsTrigger value="experience">{t('cv.tab.experience')}</TabsTrigger>
          <TabsTrigger value="formation">{t('cv.tab.education')}</TabsTrigger>
          <TabsTrigger value="competences">{t('cv.tab.skills')}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profil"><ProfileTabContent /></TabsContent>
        <TabsContent value="experience"><ExperienceTabContent /></TabsContent>
        <TabsContent value="formation"><FormationTabContent /></TabsContent>
        <TabsContent value="competences"><CompetencesTabContent /></TabsContent>
      </Tabs>
    </div>
  );
};

export default CVTabsSection;
