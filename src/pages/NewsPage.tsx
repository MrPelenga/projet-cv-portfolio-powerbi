import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LinkedInFollow, LinkedInPostList } from '@/components/LinkedInPosts';
import { getLinkedInPosts } from '@/data/linkedinPosts';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
const NewsPage = () => { const { language } = useTranslation(); const [tag, setTag] = useState<string | null>(null); const posts = getLinkedInPosts(); const tags = [...new Set(posts.flatMap(post => post.tags))]; return <div id="top" className="min-h-screen flex flex-col"><Navbar /><main className="page-shell w-full flex-1 py-16"><div className="flex flex-wrap justify-between items-end gap-6 mb-12"><div><p className="eyebrow">LinkedIn</p><h1 className="text-4xl sm:text-5xl font-semibold">{language === 'fr' ? 'Actualités' : 'News'}</h1></div>{posts.length > 0 && <LinkedInFollow />}</div>{tags.length > 0 && <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label={language === 'fr' ? 'Filtrer par tag' : 'Filter by tag'}><Button variant={tag === null ? 'default' : 'outline'} onClick={() => setTag(null)} aria-pressed={tag === null}>{language === 'fr' ? 'Tous' : 'All'}</Button>{tags.map(item => <Button key={item} variant={tag === item ? 'default' : 'outline'} onClick={() => setTag(item)} aria-pressed={tag === item}>{item}</Button>)}</div>}<LinkedInPostList posts={posts.filter(post => !tag || post.tags.includes(tag))} /></main><Footer /></div>; };
export default NewsPage;
