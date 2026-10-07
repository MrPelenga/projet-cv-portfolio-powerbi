export interface LinkedInPost {
  id: string;
  url: string;
  embedUrn?: string;
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
  title_en?: string;
  excerpt_en?: string;
}
// One entry = one real post. Keep dates in ISO format, newest first.
export const linkedinPosts: LinkedInPost[] = [
  /* {
    id: "unique-post-id",
    url: "https://www.linkedin.com/posts/PASTE_REAL_POST_URL",
    // embedUrn: "urn:li:share:REAL_POST_ID",
    date: "2026-10-07",
    title: "Titre de votre publication réelle",
    excerpt: "Extrait de votre publication réelle",
    tags: ["Power BI"],
    title_en: "English title",
    excerpt_en: "English excerpt",
  }, */
];
export const getLinkedInPosts = () => [...linkedinPosts].sort((a, b) => b.date.localeCompare(a.date));
