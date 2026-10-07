import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Linkedin, Phone, Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { profile, localized } from '@/data/profile';
import { Availability } from '@/components/ProfileSections';

const ContactPage = () => {
  const { t, language } = useTranslation();
  const rows = [
    { icon: Mail, label: t('contact.email.label'), value: profile.email, href: `mailto:${profile.email}`, external: false },
    { icon: Phone, label: t('contact.phone.label'), value: profile.phone, href: profile.phoneHref, external: false },
    { icon: Linkedin, label: t('contact.linkedin.label'), value: profile.name, href: profile.links.linkedin, external: true },
  ];

  return (
    <div id="top" className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <header className="hero-gradient border-b border-border">
          <div className="page-shell py-14 md:py-20">
            <Availability />
            <p className="eyebrow mt-7">Contact</p>
            <h1 className="text-4xl sm:text-5xl font-semibold">{language === 'fr' ? 'Échangeons' : "Let's talk"}</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">{t('contact.subtitle')}</p>
          </div>
        </header>
        <div className="page-shell grid gap-8 py-14 md:grid-cols-2 md:gap-12">
          <section className="surface p-6 sm:p-8 h-fit">
            <h2 className="text-2xl font-semibold mb-6">{t('contact.info.title')}</h2>
            <div className="space-y-5">
              {rows.map(({ icon: Icon, label, value, href, external }) => (
                <a key={label} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="group flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/5"><Icon className="h-5 w-5 text-primary" /></span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">{label}</span>
                    <span className="flex items-center gap-1 font-medium break-all group-hover:text-primary">{value}{external && <ArrowUpRight className="h-4 w-4 shrink-0" />}</span>
                  </span>
                </a>
              ))}
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/5"><MapPin className="h-5 w-5 text-primary" /></span>
                <span>
                  <span className="block text-xs text-muted-foreground">{language === 'fr' ? 'Localisation' : 'Location'}</span>
                  <span className="font-medium">{localized(profile.location, language)}</span>
                </span>
              </div>
            </div>
            <div className="mt-8 border-t border-border pt-6">
              <Button asChild size="lg" className="w-full">
                <a href={profile.links.calendly} target="_blank" rel="noopener noreferrer"><Calendar />{t('hero.cta.calendly')}</a>
              </Button>
            </div>
          </section>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
