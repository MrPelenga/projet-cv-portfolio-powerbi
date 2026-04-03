import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

const CVPreview = () => {
  const { t } = useTranslation();

  const skills = [
    'Python', 'SQL', 'Power BI', 'Excel', 'Tableau', 'Databricks', 'KPI', 'Agile', 'Automation'
  ];
  
  const experiences = [
    {
      title: 'Business Analyst & Data Quality Analyst',
      company: 'Partoo',
      period: 'September 2025 - September 2026',
      description: t('cv.exp.partoo.tasks.1')
    },
    {
      title: 'BI Analyst & Commercial Performance Analyst',
      company: 'Vérisure',
      period: 'September 2024 - January 2025',
      description: t('cv.exp.verisure.tasks.1')
    },
    {
      title: 'Project Manager & Business Analyst',
      company: 'Greenflex / Total Energie',
      period: 'April 2024 - September 2024',
      description: t('cv.exp.greenflex.tasks.1')
    }
  ];
  
  const education = [
    {
      degree: 'MSc Analytics for Business',
      school: 'Eugenia School (Paris 10)',
      year: '2024 - 2026'
    },
    {
      degree: 'Bachelor in Commercial Marketing Management',
      school: 'CFA Codis (Paris 10)',
      year: '2022 - 2023'
    }
  ];
  
  return (
    <Card className="p-6 shadow-md">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Gabriel PELENGA MANGI</h2>
        <h3 className="text-xl text-primary mb-2">{t('cv.preview.subtitle')}</h3>
        <p className="text-primary font-semibold mb-2">{t('cv.preview.current')}</p>
        <p className="text-muted-foreground mb-4">{t('cv.preview.description')}</p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="min-w-0">
            <p className="flex items-center text-sm text-muted-foreground">
              <svg className="mr-2 h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              06.72.62.01.65
            </p>
            <p className="flex items-center text-sm text-muted-foreground mt-1">
              <svg className="mr-2 h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              gabrielpelenga@gmail.com
            </p>
            <p className="flex items-center text-sm text-muted-foreground mt-1">
              <svg className="mr-2 h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              {t('cv.preview.status')}
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <Button asChild className="w-full sm:w-auto">
              <Link to="/cv">{t('cv.preview.view')}</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold border-b pb-2 mb-4">{t('cv.preview.skills')}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="bg-primary/5">{skill}</Badge>
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold border-b pb-2 mb-4">{t('cv.preview.experience')}</h3>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary pl-4 ml-2">
              <h4 className="font-bold">{exp.title}</h4>
              <p className="text-primary font-medium">{exp.company}</p>
              <p className="text-sm text-muted-foreground">{exp.period}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold border-b pb-2 mb-4">{t('cv.preview.education')}</h3>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-muted pl-4 ml-2">
              <h4 className="font-bold">{edu.degree}</h4>
              <p className="text-muted-foreground">{edu.school}</p>
              <p className="text-sm text-muted-foreground">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CVPreview;
