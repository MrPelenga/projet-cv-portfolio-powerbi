import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ExperienceTimeline, EducationCards } from './ProfileSections';
import { profile, localized } from '@/data/profile';
import { useTranslation } from '@/hooks/useTranslation';
const CVPreview = () => { const { language } = useTranslation(); return <><p className="mb-8 text-sm text-muted-foreground">{localized(profile.qualification, language)}</p><ExperienceTimeline /><h3 className="mt-12 mb-6 text-2xl font-semibold">{language === 'fr' ? 'Formations' : 'Education'}</h3><EducationCards /><Button asChild variant="link" className="p-0 mt-7"><Link to="/cv">{language === 'fr' ? 'Voir le CV complet' : 'View full CV'}<ArrowUpRight /></Link></Button></>; };
export default CVPreview;
