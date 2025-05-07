
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
                  <h2 className="text-2xl font-bold">Gabriel PELENGA MANGI</h2>
                  <p className="text-primary font-medium">Business Analyst</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Contact</h3>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center">
                        <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        06.72.62.01.65
                      </p>
                      <p className="flex items-center">
                        <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        gabrielpelenga@gmail.com
                      </p>
                      <p className="flex items-center">
                        <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                        En recherche d'alternance pour Septembre 2025
                      </p>
                      <p className="flex items-center">
                        <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
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
                        <span className="text-gray-500"> - Professionnel</span>
                      </div>
                      <div>
                        <span className="font-medium">Espagnol</span>
                        <span className="text-gray-500"> - Intermédiaire</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Centres d'intérêt</h3>
                    <div className="space-y-1">
                      <p>Sports (Basketball, Football, Boxe Anglaise)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <Tabs defaultValue="profil">
                  <TabsList className="mb-6 grid w-full grid-cols-4">
                    <TabsTrigger value="profil">Profil</TabsTrigger>
                    <TabsTrigger value="experience">Expérience</TabsTrigger>
                    <TabsTrigger value="formation">Formation</TabsTrigger>
                    <TabsTrigger value="competences">Compétences</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="profil" className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Profil Professionnel</h3>
                      <p className="mb-4">
                        Spécialiste en analyse de données commerciales qui combine expertise 
                        technique et vision stratégique pour transformer les données en décisions pertinentes.
                      </p>
                      <p>
                        Professionnel polyvalent avec une solide expérience en gestion de projets et 
                        analyse commerciale, cherchant à déployer ses compétences en data science et 
                        business intelligence dans un environnement stimulant.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">En bref</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Business Analyst avec expertise BI</h4>
                            <p className="text-sm text-gray-600">Analyse de données et visualisation</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">En recherche d'alternance</h4>
                            <p className="text-sm text-gray-600">Pour Septembre 2025 (4j entreprise, 1j école)</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Leadership et esprit d'équipe</h4>
                            <p className="text-sm text-gray-600">Capitaine d'équipe sportive, gestion de projets</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="experience" className="space-y-8">
                    <div className="border-l-2 border-primary pl-6 relative">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                      <h3 className="text-xl font-bold">Analyst BI & Analyst Performance commerciales</h3>
                      <p className="text-primary font-medium">Vérisure</p>
                      <p className="text-sm text-gray-500 mb-3">Septembre 2024 - Présent</p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Gestion de données commerciales</li>
                        <li>Rapport d'analyse (performance commerciales)</li>
                        <li>Analyses des KPI commerciales</li>
                        <li>Récupération de données commerciales</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-2 border-primary pl-6 relative">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                      <h3 className="text-xl font-bold">Chef de projet & Business Analyst</h3>
                      <p className="text-primary font-medium">Greenflex / Total Energie</p>
                      <p className="text-sm text-gray-500 mb-3">Avril 2024 - Septembre 2024</p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Gestion de paramétrage de données clients</li>
                        <li>Gestion et Pilotage de projet en agilité</li>
                        <li>Animation de réunion commerciale</li>
                        <li>Animation de Webinaire clients</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-2 border-primary pl-6 relative">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                      <h3 className="text-xl font-bold">Business Analyst & Business Developer</h3>
                      <p className="text-primary font-medium">Koésio Corporate IT</p>
                      <p className="text-sm text-gray-500 mb-3">Novembre 2023 - Octobre 2023</p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Gestion de la clientèle (65 clients dont 3 grands comptes)</li>
                        <li>Reportings de KPI commerciaux : taux de clic, retour sur investissement, CA généré</li>
                        <li>Prospection Téléphonique (30 appels par jours)</li>
                        <li>Rendez-vous en clientèle (présentation des solutions)</li>
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">Expérience Associative</h3>
                      <div className="space-y-4">
                        <div className="border-l-2 border-gray-300 pl-4">
                          <h4 className="font-bold">Boxing Club Poissy</h4>
                          <p className="text-gray-600">2022 - 2023 (1 an)</p>
                        </div>
                        <div className="border-l-2 border-gray-300 pl-4">
                          <h4 className="font-bold">Basketball</h4>
                          <p className="text-gray-600">2014 - 2022 (7 ans)</p>
                          <p className="text-primary">Capitaine des U-19</p>
                          <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                            <li>Support du coach dans les diverses opérations de communication et de management de l'équipe</li>
                            <li>Vainqueurs de la coupe régionale en 2018 et 2020</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="formation" className="space-y-8">
                    <div className="border-l-2 border-primary pl-6 relative">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                      <h3 className="text-xl font-bold">MSc Analytics for Business</h3>
                      <p className="text-primary font-medium">Eugenia School (Paris 10)</p>
                      <p className="text-sm text-gray-500 mb-3">2024 - 2026</p>
                      <p className="text-gray-700 mb-2">
                        <span className="font-medium">Cours principaux : </span>
                        Récolte, visualisation et analyse de données, Code, Stratégie, Finance, Marketing
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Langages et outils : </span>
                        Python, SQL, PowerBI, Méthode Agile, Databriks, Tableau, Target Process
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-primary pl-6 relative">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                      <h3 className="text-xl font-bold">Bachelor Responsable Marketing Commercial</h3>
                      <p className="text-primary font-medium">CFA Codis (Paris 10)</p>
                      <p className="text-sm text-gray-500 mb-3">2022 - 2023</p>
                      <p className="text-gray-700 mb-2">
                        <span className="font-medium">Cours principaux : </span>
                        Marketing, Statistiques, Communication, Négociation, Management, E-commerce
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Langages et outils : </span>
                        Python, Excel, PowerPoint, Canva, SEO/SEA, SQL
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-primary pl-6 relative">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                      <h3 className="text-xl font-bold">BTS Négociations Digitalisation de la Relation Client</h3>
                      <p className="text-primary font-medium">Lycée Van Gogh (Paris 10)</p>
                      <p className="text-sm text-gray-500 mb-3">2020 - 2022</p>
                      <p className="text-gray-700 mb-2">
                        <span className="font-medium">Cours principaux : </span>
                        Marketing, Négociation, Communication, E-commerce
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Langages et outils : </span>
                        Excel, PowerPoint, Canva, PrestaShop, WordPress
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="competences" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-blue-600 border-b pb-2">Analyse de Données</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <span className="text-primary mr-2">•</span> Python
                          </li>
                          <li className="flex items-center">
                            <span className="text-primary mr-2">•</span> SQL
                          </li>
                          <li className="flex items-center">
                            <span className="text-primary mr-2">•</span> Power BI
                          </li>
                          <li className="flex items-center">
                            <span className="text-primary mr-2">•</span> Databricks
                          </li>
                          <li className="flex items-center">
                            <span className="text-primary mr-2">•</span> Tableau
                          </li>
                          <li className="flex items-center">
                            <span className="text-primary mr-2">•</span> Excel
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-blue-600 border-b pb-2">Business Intelligence</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <span className="text-primary mr-2">•</span> KPI commerciaux
                          </li>
                          <li className="flex items-center">
                            <span className="text-primary mr-2">•</span> Reporting
                          </li>
                          <li className="flex items-center">
                            <span className="text-primary mr-2">•</span> Analyse de performance
                          </li>
                          <li className="flex items-center">
                            <span className="text-primary mr-2">•</span> Gestion de données
                          </li>
                          <li className="flex items-center">
                            <span className="text-primary mr-2">•</span> Visualisation de données
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-blue-600 border-b pb-2">Gestion & Communication</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <span className="text-primary mr-2">•</span> Méthode Agile
                          </li>
                          <li className="flex items-center">
                            <span className="text-primary mr-2">•</span> Gestion de projet
                          </li>
                          <li className="flex items-center">
                            <span className="text-primary mr-2">•</span> Animation de réunions
                          </li>
                          <li className="flex items-center">
                            <span className="text-primary mr-2">•</span> Webinaires
                          </li>
                          <li className="flex items-center">
                            <span className="text-primary mr-2">•</span> Présentation client
                          </li>
                          <li className="flex items-center">
                            <span className="text-primary mr-2">•</span> Target Process
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Langues</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div className="border p-4 rounded-lg">
                          <h4 className="font-bold text-lg">Français</h4>
                          <p>Natif</p>
                        </div>
                        <div className="border p-4 rounded-lg">
                          <h4 className="font-bold text-lg">Anglais</h4>
                          <p>Professionnel</p>
                        </div>
                        <div className="border p-4 rounded-lg">
                          <h4 className="font-bold text-lg">Espagnol</h4>
                          <p>Intermédiaire</p>
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
