import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CertificationCards } from '@/components/ProfileSections';
import { useTranslation } from '@/hooks/useTranslation';
const CertificationsPage = () => { const { language } = useTranslation(); return <div id="top" className="min-h-screen flex flex-col"><Navbar /><main className="flex-1"><header className="hero-gradient border-b border-border"><div className="page-shell py-14 md:py-20"><p className="eyebrow">{language === 'fr' ? 'Compétences validées' : 'Validated skills'}</p><h1 className="text-4xl sm:text-5xl font-semibold">Certifications</h1><p className="mt-4 text-muted-foreground max-w-2xl">{language === 'fr' ? 'Les certifications qui valident mes compétences en data, business intelligence et gestion de projet.' : 'Certifications that validate my skills in data, business intelligence and project management.'}</p></div></header><section className="page-shell py-14"><CertificationCards /></section></main><Footer /></div>; };
export default CertificationsPage;
