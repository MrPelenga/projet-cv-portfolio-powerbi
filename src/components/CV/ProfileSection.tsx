
import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const ProfileSection = () => {
  const { t } = useTranslation();
  
  return (
    <div className="md:w-1/3">
      <div className="bg-muted rounded-full p-1 w-40 h-40 mx-auto mb-6 overflow-hidden">
        <svg className="h-full w-full text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14.25c-4.65 0-8.25 1.83-8.25 4.15V20h16.5v-1.6c0-2.32-3.6-4.15-8.25-4.15ZM12 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z" />
        </svg>
      </div>
      
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground">{t('profile.name')}</h2>
        <p className="text-primary font-medium">{t('profile.title')}</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2 text-foreground">{t('profile.contact')}</h3>
          <div className="space-y-2 text-sm text-foreground">
            <p className="flex items-center">
              <span className="mr-2">📞</span>
              {t('profile.phone')}
            </p>
            <p className="flex items-center">
              <span className="mr-2">📧</span>
              {t('profile.email')}
            </p>
            <p className="flex items-center">
              <span className="mr-2">📍</span>
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
          <h3 className="font-semibold mb-2 text-foreground">{t('profile.languages')}</h3>
          <div className="space-y-1 text-foreground">
            <div>
              <span className="font-medium">{t('profile.french')}</span>
              <span className="text-muted-foreground"> - {t('profile.french.level')}</span>
            </div>
            <div>
              <span className="font-medium">{t('profile.english')}</span>
              <span className="text-muted-foreground"> - {t('profile.english.level')}</span>
            </div>
            <div>
              <span className="font-medium">{t('profile.spanish')}</span>
              <span className="text-muted-foreground"> - {t('profile.spanish.level')}</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2 text-foreground">{t('profile.interests')}</h3>
          <div className="space-y-1 text-foreground">
            <p>{t('profile.sports')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
