
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CVPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Curriculum Vitae</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mon parcours professionnel, mes compétences et ma formation en détail
            </p>
          </div>
          
          <div className="flex justify-end mb-6">
            <Button>Télécharger CV (PDF)</Button>
          </div>
          
          <Card className="p-8 mb-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="bg-gray-100 rounded-full p-1 w-40 h-40 mx-auto mb-6 overflow-hidden">
                  {/* Placeholder pour photo de profil */}
                  <svg className="h-full w-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14.25c-4.65 0-8.25 1.83-8.25 4.15V20h16.5v-1.6c0-2.32-3.6-4.15-8.25-4.15ZM12 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z" />
                  </svg>
                </div>
                
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold">John Doe</h2>
                  <p className="text-primary font-medium">Data Analyst</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Contact</h3>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center">
                        <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        +33 6 12 34 56 78
                      </p>
                      <p className="flex items-center">
                        <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        john.doe@example.com
                      </p>
                      <p className="flex items-center">
                        <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        Paris, France
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Langues</h3>
                    <div className="space-y-1">
                      <div>
                        <span className="font-medium">Français</span>
                        <span className="text-gray-500"> - Natif</span>
                      </div>
                      <div>
                        <span className="font-medium">Anglais</span>
                        <span className="text-gray-500"> - Courant</span>
                      </div>
                      <div>
                        <span className="font-medium">Espagnol</span>
                        <span className="text-gray-500"> - Intermédiaire</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Liens</h3>
                    <div className="space-y-1">
                      <a href="#" className="text-primary hover:underline flex items-center">
                        <svg className="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                      <a href="#" className="text-primary hover:underline flex items-center">
                        <svg className="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        GitHub
                      </a>
                      <a href="#" className="text-primary hover:underline flex items-center">
                        <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Portfolio
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <Tabs defaultValue="profil">
                  <TabsList className="mb-6 grid w-full grid-cols-3">
                    <TabsTrigger value="profil">Profil</TabsTrigger>
                    <TabsTrigger value="experience">Expérience</TabsTrigger>
                    <TabsTrigger value="formation">Formation</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="profil" className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Profil Professionnel</h3>
                      <p className="mb-4">
                        Data Analyst avec plus de 5 ans d'expérience dans la transformation de données complexes 
                        en insights actionnables. Expert en Power BI et en visualisation de données, avec une 
                        solide formation en statistiques et analyse de données.
                      </p>
                      <p>
                        Passionné par l'optimisation des processus décisionnels grâce à l'analyse de données, 
                        je m'efforce de créer des solutions élégantes et intuitives qui permettent aux entreprises
                        de mieux comprendre leurs données et d'en tirer une valeur stratégique.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Compétences</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Outils d'Analyse</h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="bg-blue-50">Power BI</Badge>
                            <Badge variant="outline" className="bg-blue-50">Tableau</Badge>
                            <Badge variant="outline" className="bg-blue-50">Excel</Badge>
                            <Badge variant="outline" className="bg-blue-50">SQL</Badge>
                            <Badge variant="outline" className="bg-blue-50">R</Badge>
                            <Badge variant="outline" className="bg-blue-50">Python</Badge>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Compétences Techniques</h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="bg-blue-50">Data Visualization</Badge>
                            <Badge variant="outline" className="bg-blue-50">Data Modeling</Badge>
                            <Badge variant="outline" className="bg-blue-50">ETL</Badge>
                            <Badge variant="outline" className="bg-blue-50">Dashboard Design</Badge>
                            <Badge variant="outline" className="bg-blue-50">Statistical Analysis</Badge>
                            <Badge variant="outline" className="bg-blue-50">Data Cleaning</Badge>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Soft Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="bg-blue-50">Communication</Badge>
                            <Badge variant="outline" className="bg-blue-50">Problem Solving</Badge>
                            <Badge variant="outline" className="bg-blue-50">Team Collaboration</Badge>
                            <Badge variant="outline" className="bg-blue-50">Time Management</Badge>
                            <Badge variant="outline" className="bg-blue-50">Critical Thinking</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="experience" className="space-y-8">
                    <div className="border-l-2 border-primary pl-6 relative">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                      <h3 className="text-xl font-bold">Data Analyst</h3>
                      <p className="text-primary font-medium">Entreprise ABC</p>
                      <p className="text-sm text-gray-500 mb-3">Janvier 2020 - Présent</p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Développement de tableaux de bord Power BI pour suivre les KPIs commerciaux et financiers</li>
                        <li>Extraction, transformation et analyse de données à partir de sources variées</li>
                        <li>Présentation des résultats d'analyse aux équipes de direction</li>
                        <li>Optimisation des processus analytiques et automatisation des rapports</li>
                        <li>Formation des équipes à l'utilisation des outils d'analyse</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-2 border-primary pl-6 relative">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                      <h3 className="text-xl font-bold">Analyste Business Intelligence</h3>
                      <p className="text-primary font-medium">Société XYZ</p>
                      <p className="text-sm text-gray-500 mb-3">Juin 2018 - Décembre 2019</p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Conception et mise en œuvre de solutions de Business Intelligence</li>
                        <li>Développement de modèles de données pour l'analyse commerciale</li>
                        <li>Création de rapports et tableaux de bord avec Tableau</li>
                        <li>Collaboration avec les équipes techniques pour l'intégration de données</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-2 border-primary pl-6 relative">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                      <h3 className="text-xl font-bold">Stagiaire Analyste de Données</h3>
                      <p className="text-primary font-medium">Entreprise DEF</p>
                      <p className="text-sm text-gray-500 mb-3">Janvier 2018 - Mai 2018</p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Analyse des données marketing et support à la prise de décision</li>
                        <li>Création de rapports Excel automatisés pour le suivi des campagnes</li>
                        <li>Participation à des projets d'analyse de données clients</li>
                      </ul>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="formation" className="space-y-8">
                    <div className="border-l-2 border-primary pl-6 relative">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                      <h3 className="text-xl font-bold">Master en Data Science</h3>
                      <p className="text-primary font-medium">Université de Paris</p>
                      <p className="text-sm text-gray-500 mb-3">2016 - 2018</p>
                      <p className="text-gray-700">
                        Formation approfondie en analyse de données, statistiques, machine learning
                        et visualisation de données. Projet de fin d'études sur l'analyse prédictive
                        appliquée au marketing digital.
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-primary pl-6 relative">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                      <h3 className="text-xl font-bold">Licence en Statistiques</h3>
                      <p className="text-primary font-medium">Université de Lyon</p>
                      <p className="text-sm text-gray-500 mb-3">2013 - 2016</p>
                      <p className="text-gray-700">
                        Formation en statistiques appliquées, analyse de données et méthodes quantitatives.
                        Spécialisation en analyse exploratoire des données.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Certifications</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border p-4 rounded-md">
                          <h4 className="font-bold">Microsoft Power BI Data Analyst Associate</h4>
                          <p className="text-gray-600">Microsoft - 2022</p>
                        </div>
                        <div className="border p-4 rounded-md">
                          <h4 className="font-bold">Data Analysis with Python</h4>
                          <p className="text-gray-600">IBM - 2021</p>
                        </div>
                        <div className="border p-4 rounded-md">
                          <h4 className="font-bold">SQL Advanced Certification</h4>
                          <p className="text-gray-600">Oracle - 2019</p>
                        </div>
                        <div className="border p-4 rounded-md">
                          <h4 className="font-bold">Tableau Desktop Specialist</h4>
                          <p className="text-gray-600">Tableau - 2020</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CVPage;
