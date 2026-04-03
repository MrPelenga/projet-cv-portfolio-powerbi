
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import CVHeader from '@/components/CV/CVHeader';
import ProfileSection from '@/components/CV/ProfileSection';
import CVTabsSection from '@/components/CV/CVTabsSection';

const CVPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <CVHeader />
          
          <Card className="p-4 sm:p-8 mb-10 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8">
              <ProfileSection />
              <CVTabsSection />
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CVPage;
