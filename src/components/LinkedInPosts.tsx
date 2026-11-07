import { ArrowUpRight, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getLinkedInPosts, type LinkedInPost } from '@/data/linkedinPosts';
import { profile } from '@/data/profile';
import { useTranslation } from '@/hooks/useTranslation';

export const LinkedInFollow = () => { const { language } = useTranslation(); return <Button asChild variant="outline"><a href={profile.links.activity} target="_blank" rel="noopener noreferrer"><Linkedin />{language === 'fr' ? 'Me suivre sur LinkedIn' : 'Follow me on LinkedIn'}<ArrowUpRight /></a></Button>; };

const relativeDate = (iso: string, language: string) => {
  const days = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 86400000));
  if (days === 0) return language === 'fr' ? "Aujourd'hui" : 'Today';
  if (days === 1) return language === 'fr' ? 'Hier' : 'Yesterday';
  return language === 'fr' ? `Il y a ${days} j` : `${days} days ago`;
};

// LinkedIn refuses to embed some posts: this static look-alike mimics the embed
// (avatar, name, headline, logo, post text) and links to the real post.
const StaticLinkedInCard = ({ post }: { post: LinkedInPost }) => {
  const { language } = useTranslation();
  const headline = language === 'en' ? profile.title.en : profile.title.fr;
  return (
    <a href={post.url} target="_blank" rel="noopener noreferrer" className="flex h-[420px] flex-col border-b border-border bg-card transition-colors hover:bg-muted/40">
      <div className="flex items-start gap-3 p-4 pb-0">
        <img src={profile.photo} alt={profile.name} className="h-12 w-12 shrink-0 rounded-full object-cover" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-foreground">Gabriel Pelenga-Mangi</p>
          <p className="truncate text-xs text-muted-foreground">{headline}</p>
          <p className="text-xs text-muted-foreground">{relativeDate(post.date, language)}</p>
        </div>
        <Linkedin className="h-5 w-5 shrink-0 text-[#0A66C2]" />
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-3">
        <p className="whitespace-pre-line text-sm leading-relaxed text-foreground">{post.embedText || post.excerpt}</p>
      </div>
      <div className="flex items-center gap-1 border-t border-border px-4 py-2.5 text-xs font-medium text-primary">
        {language === 'fr' ? 'Voir sur LinkedIn' : 'View on LinkedIn'}<ArrowUpRight className="h-3.5 w-3.5" />
      </div>
    </a>
  );
};

const LinkedInPostCard = ({ post }: { post: LinkedInPost }) => {
  const { language } = useTranslation();
  const title = language === 'en' ? post.title_en || post.title : post.title;
  const excerpt = language === 'en' ? post.excerpt_en || post.excerpt : post.excerpt;
  const date = new Intl.DateTimeFormat(language === 'fr' ? 'fr-FR' : 'en-GB', { dateStyle: 'medium' }).format(new Date(post.date));
  return <article className="surface overflow-hidden flex flex-col">
    {post.embedUrn
      ? <iframe title={post.title} loading="lazy" src={`https://www.linkedin.com/embed/feed/update/${post.embedUrn}`} className="w-full h-[420px] border-0" />
      : <StaticLinkedInCard post={post} />}
    <div className="flex-1 p-6">
      <time dateTime={post.date} className="text-xs text-muted-foreground">{date}</time>
      <h3 className="font-semibold mt-4 text-xl">{title}</h3>
      <p className="mt-5 leading-relaxed text-muted-foreground text-sm">{excerpt}</p>
      <div className="flex flex-wrap gap-2 mt-4">{post.tags.map(tag => <span key={tag} className="text-primary bg-primary/5 rounded-md text-xs px-2 py-1">{tag}</span>)}</div>
    </div>
    <div className="p-6 pt-0"><Button asChild variant="link" className="p-0"><a href={post.url} target="_blank" rel="noopener noreferrer">{language === 'fr' ? 'Lire sur LinkedIn' : 'Read on LinkedIn'}<ArrowUpRight /></a></Button></div>
  </article>;
};

const LinkedInEmpty = () => { const { language } = useTranslation(); return <div className="surface p-7 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6"><div className="flex items-start gap-5"><Linkedin className="h-9 w-9 shrink-0 text-primary" /><h3 className="text-xl sm:text-2xl font-semibold">{language === 'fr' ? 'Suivez mon actualité sur LinkedIn' : 'Follow my updates on LinkedIn'}</h3></div><LinkedInFollow /></div>; };

export const LinkedInPostList = ({ posts }: { posts: LinkedInPost[] }) => posts.length ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{posts.map(post => <LinkedInPostCard key={post.id} post={post} />)}</div> : <LinkedInEmpty />;

export const LinkedInNews = () => { const { language } = useTranslation(); const posts = getLinkedInPosts().slice(0,3); return <><div className="flex flex-wrap items-end justify-between gap-5 mb-8"><div><p className="eyebrow">06 — {language === 'fr' ? 'Actualités' : 'News'}</p><h2 className="section-title mb-0">{language === 'fr' ? 'Actualités LinkedIn' : 'LinkedIn updates'}</h2></div>{posts.length > 0 && <LinkedInFollow />}</div><LinkedInPostList posts={posts} /><Button asChild variant="link" className="mt-5 p-0"><Link to="/actualites">{language === 'fr' ? 'Toutes les actualités' : 'All updates'}<ArrowUpRight /></Link></Button></>; };
