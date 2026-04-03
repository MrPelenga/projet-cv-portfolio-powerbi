
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Linkedin, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

const ContactPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">{t('contact.page.title')}</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6">{t('contact.info.title')}</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('contact.email.label')}</p>
                    <a href="mailto:gabrielpelenga@gmail.com" className="font-medium hover:text-primary transition-colors">
                      gabrielpelenga@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('contact.linkedin.label')}</p>
                    <a 
                      href="https://www.linkedin.com/in/gabriel-pelenga-mangi-820487182/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      Gabriel PELENGA MANGI
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('contact.phone.label')}</p>
                    <a href="tel:+33672620165" className="font-medium hover:text-primary transition-colors">
                      06 72 62 01 65
                    </a>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Button asChild size="lg" className="w-full rounded-full gap-2">
                    <a href="https://calendly.com/gabrielpelenga/30min" target="_blank" rel="noopener noreferrer">
                      <Calendar size={18} />
                      {t('hero.cta.calendly')}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Formulaire de contact */}
            <ContactForm />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
