
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CVPreview = () => {
  const skills = [
    'Power BI', 'Excel', 'SQL', 'Data Analysis', 'Tableau', 'Python', 'R', 'Data Visualization'
  ];
  
  const experiences = [
    {
      title: 'Data Analyst',
      company: 'Entreprise ABC',
      period: '2020 - Présent',
      description: 'Analyse de données et création de tableaux de bord Power BI pour le suivi des KPIs.'
    },
    {
      title: 'Analyste Business Intelligence',
      company: 'Société XYZ',
      period: '2018 - 2020',
      description: 'Développement de solutions BI et analyse de données commerciales.'
    }
  ];
  
  const education = [
    {
      degree: 'Master en Data Science',
      school: 'Université de Paris',
      year: '2018'
    },
    {
      degree: 'Licence en Statistiques',
      school: 'Université de Lyon',
      year: '2016'
    }
  ];
  
  return (
    <Card className="p-6 shadow-md">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">John Doe</h2>
        <h3 className="text-xl text-primary mb-2">Data Analyst</h3>
        <p className="text-gray-600 mb-4">
          Passionné par l'analyse de données et la création de visualisations percutantes pour faciliter la prise de décision.
        </p>
        <div className="flex justify-between items-center">
          <div>
            <p className="flex items-center text-sm text-gray-600">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              +33 6 12 34 56 78
            </p>
            <p className="flex items-center text-sm text-gray-600 mt-1">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              john.doe@example.com
            </p>
          </div>
          <div>
            <Button>Télécharger CV</Button>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold border-b border-gray-200 pb-2 mb-4">Compétences</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="bg-blue-50">{skill}</Badge>
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold border-b border-gray-200 pb-2 mb-4">Expérience Professionnelle</h3>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary pl-4 ml-2">
              <h4 className="font-bold">{exp.title}</h4>
              <p className="text-primary font-medium">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.period}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold border-b border-gray-200 pb-2 mb-4">Formation</h3>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-gray-300 pl-4 ml-2">
              <h4 className="font-bold">{edu.degree}</h4>
              <p className="text-gray-600">{edu.school}</p>
              <p className="text-sm text-gray-500">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CVPreview;
