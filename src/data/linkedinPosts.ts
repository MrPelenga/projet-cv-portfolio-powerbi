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
    id: "enrichissement-leads-2026-10",
    url: "https://www.linkedin.com/feed/update/urn:li:share:7516758595875651584",
    embedUrn: "urn:li:share:7516758595875651584",
    date: "2026-10-16",
    title: "Un commercial ne devrait jamais chercher un email à la main",
    excerpt: "Un workflow avec Make complète automatiquement la fiche d'un nouveau lead Salesforce via l'API d'Apollo ou de Hunter. Si l'API ne trouve rien, le lead part dans une liste « à vérifier » au lieu de rester à moitié vide.",
    tags: ["Automatisation", "SalesOps", "Make", "CRM"],
    title_en: "A salesperson should never have to look up an email by hand",
    excerpt_en: "A Make workflow automatically completes the record of a new Salesforce lead through the Apollo or Hunter API. If the API finds nothing, the lead goes into a \"to verify\" list instead of staying half empty.",
  },
  {
    id: "reporting-v7-final-ok-2-2026-10",
    url: "https://www.linkedin.com/feed/update/urn:li:share:7516041370545836032",
    embedUrn: "urn:li:share:7516041370545836032",
    date: "2026-10-14",
    title: "Le fichier s'appelle « Reporting_V7_final_OK_2.xlsx »",
    excerpt: "Je n'ai rien contre Excel, je m'en sers tous les jours. Le problème commence quand un même fichier sert à la fois de base de données, d'outil de reporting et de source de vérité.",
    tags: ["Excel", "Power BI", "Data", "Business Intelligence"],
    title_en: "The file is called \"Reporting_V7_final_OK_2.xlsx\"",
    excerpt_en: "I have nothing against Excel, I use it every day. The problem starts when a single file serves as a database, a reporting tool and a source of truth all at once.",
  },
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
    id: "big-bpifrance-accor-arena-2026-10",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7513997972746137600/",
    embedUrn: "urn:li:activity:7513997972746137600",
    date: "2026-10-08",
    title: "À BIG, l'événement de Bpifrance : rendre les chiffres clairs pour mieux décider",
    excerpt: "J'étais à BIG, l'événement de Bpifrance, avec une idée simple : écouter des gens qui dirigent des entreprises parler de leurs vrais problèmes. Derrière chaque décision d'investissement, il y a des chiffres à lire et à expliquer simplement, et c'est là que je me reconnais.",
    tags: ["Bpifrance", "Data", "IA", "Entrepreneuriat"],
    title_en: "At BIG, Bpifrance's event: making numbers clear to make better decisions",
    excerpt_en: "I was at BIG, Bpifrance's event, with a simple idea: listen to people who run companies talk about their real problems. Behind every investment decision, there are numbers to read and explain simply, and that is where I see myself.",
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
