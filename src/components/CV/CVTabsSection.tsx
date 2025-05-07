
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProfileTabContent from './TabContents/ProfileTabContent';
import ExperienceTabContent from './TabContents/ExperienceTabContent';
import FormationTabContent from './TabContents/FormationTabContent';
import CompetencesTabContent from './TabContents/CompetencesTabContent';

const CVTabsSection = () => {
  return (
    <div className="md:w-2/3">
      <Tabs defaultValue="profil">
        <TabsList className="mb-6 grid w-full grid-cols-4">
          <TabsTrigger value="profil">Profil</TabsTrigger>
          <TabsTrigger value="experience">Expérience</TabsTrigger>
          <TabsTrigger value="formation">Formation</TabsTrigger>
          <TabsTrigger value="competences">Compétences</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profil">
          <ProfileTabContent />
        </TabsContent>
        
        <TabsContent value="experience">
          <ExperienceTabContent />
        </TabsContent>
        
        <TabsContent value="formation">
          <FormationTabContent />
        </TabsContent>
        
        <TabsContent value="competences">
          <CompetencesTabContent />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CVTabsSection;
