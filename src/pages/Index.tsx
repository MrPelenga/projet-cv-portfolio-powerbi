import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProjectsList from '@/components/ProjectsList';
import CVPreview from '@/components/CVPreview';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const Index = () => {
  return <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-center mb-12">À Propos</h2>
            <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
              <p className="text-lg mb-6">Bienvenue sur mon portfolio professionnel. Je suis un spécialiste de l'analyse de données passionné par la création de tableaux de bord interactifs et percutants avec Power BI. Mon objectif principal est de transformer des données brutes et complexes en insights clairs et actionnables, permettant ainsi aux entreprises de prendre des décisions éclairées et stratégiques.</p>
              <p className="text-lg">Fort d'une expérience pratique acquise au fil de mes projets en alternance dans le domaine de la Business Intelligence, j'ai développé une expertise solide en visualisation de données, en identification de tendances clés et en analyses prédictives.</p>
            </div>
          </div>
        </section>
        
        {/* CV Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-center mb-4">Mon CV</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Voici un aperçu de mon parcours professionnel et de mes compétences en analyse de données.
            </p>
            
            <div className="mb-10">
              <CVPreview />
            </div>
            
            <div className="text-center">
              <Button asChild size="lg">
                <Link to="/cv">Voir CV Complet</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-center mb-4">Mes Projets</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Découvrez mes projets Power BI et autres réalisations en analyse de données.
            </p>
            
            <div className="mb-10">
              <ProjectsList limit={3} />
            </div>
            
            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/projets">Voir Tous Les Projets</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Contact CTA Section */}
        <section className="py-20 px-4 bg-primary text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Intéressé par mes services?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              N'hésitez pas à me contacter pour discuter de vos besoins en analyse de données 
              ou pour toute opportunité de collaboration.
            </p>
            <Button variant="secondary" size="lg">Me Contacter</Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default Index;