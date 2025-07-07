
import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const ProfileSection = () => {
  const { t } = useTranslation();
  
  return (
    <div className="md:w-1/3">
      <div className="bg-gray-100 rounded-full p-1 w-40 h-40 mx-auto mb-6 overflow-hidden">
        {/* Placeholder pour photo de profil */}
        <svg className="h-full w-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14.25c-4.65 0-8.25 1.83-8.25 4.15V20h16.5v-1.6c0-2.32-3.6-4.15-8.25-4.15ZM12 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z" />
        </svg>
      </div>
      
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">{t('profile.name')}</h2>
        <p className="text-primary font-medium">{t('profile.title')}</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">{t('profile.contact')}</h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-center">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              {t('profile.phone')}
            </p>
            <p className="flex items-center">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              {t('profile.email')}
            </p>
            <p className="flex items-center">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              {t('profile.status')}
            </p>
            <a href="https://www.linkedin.com/in/gabriel-pelenga-mangi-820487182/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">{t('profile.languages')}</h3>
          <div className="space-y-1">
            <div>
              <span className="font-medium">{t('profile.french')}</span>
              <span className="text-gray-500"> - {t('profile.french.level')}</span>
            </div>
            <div>
              <span className="font-medium">{t('profile.english')}</span>
              <span className="text-gray-500"> - {t('profile.english.level')}</span>
            </div>
            <div>
              <span className="font-medium">{t('profile.spanish')}</span>
              <span className="text-gray-500"> - {t('profile.spanish.level')}</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">{t('profile.interests')}</h3>
          <div className="space-y-1">
            <p>{t('profile.sports')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
