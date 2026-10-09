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
    id: "30-minutes-par-jour-2026-10",
    url: "https://www.linkedin.com/feed/update/urn:li:share:7514210567641989120",
    embedUrn: "urn:li:share:7514210567641989120",
    date: "2026-10-09",
    title: "30 minutes par jour, ça ne ressemble à rien",
    excerpt: "30 minutes × 220 jours travaillés = 110 heures par an, soit près de 3 semaines de travail. Avant de parler d'IA ou d'outils, un exercice tout bête change déjà le regard : pendant une semaine, noter chaque tâche qu'on fait pour la deuxième fois exactement de la même manière.",
    tags: ["Automatisation", "Productivité", "Data", "Process"],
    title_en: "30 minutes a day looks like nothing",
    excerpt_en: "30 minutes × 220 working days = 110 hours a year, or nearly 3 weeks of work. Before talking about AI or tools, a very simple exercise already changes the way you look at things: for a week, note down every task you do for the second time in exactly the same way.",
  },
  {
      
    id: "reporting-du-lundi-2026-10",
    url: "https://www.linkedin.com/feed/update/urn:li:share:7513614753588543490",
    embedUrn: "urn:li:share:7513614753588543490",
    date: "2026-10-07",
    title: "Et si personne ne lisait votre reporting du lundi ?",
    excerpt: "Avant de chercher à l'automatiser, il y a une question plus simple à poser aux destinataires : « Quelle est la dernière décision que vous avez prise grâce à ce document ? » Automatiser un reporting que personne n'utilise, c'est produire de l'inutile plus efficacement.",
    tags: ["Data", "Reporting", "Automatisation", "Business Intelligence"],
    title_en: "What if nobody read your Monday report?",
    excerpt_en: "Before trying to automate it, there is a simpler question to ask the recipients: \"What is the last decision you made thanks to this document?\" Automating a report that nobody uses means producing something useless more efficiently.",
  },
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
