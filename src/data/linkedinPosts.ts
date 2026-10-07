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
  {
    id: "partoo-fin-de-chapitre-2026-09",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7508053996058632192/",
    embedUrn: "urn:li:activity:7508053996058632192",
    date: "2026-09-22",
    title: "Une page se tourne chez Partoo",
    excerpt: "Après une année intense, riche en apprentissages et en projets au cœur des équipes, je ferme ce chapitre avec beaucoup de fierté et de gratitude. Aujourd'hui, je suis plus que prêt à affronter de nouveaux défis.",
    tags: ["Partoo", "Sales Operations", "Data Operations"],
    title_en: "Closing a chapter at Partoo",
    excerpt_en: "After an intense year, full of learning and projects at the heart of the teams, I am closing this chapter with a lot of pride and gratitude. Today I am more than ready to take on new challenges.",
  },
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
