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
  // French-only post body, shown in the static look-alike card when LinkedIn refuses the embed.
  embedText?: string;
}
// One entry = one real post. Keep dates in ISO format, newest first.
export const linkedinPosts: LinkedInPost[] = [
  {
    id: "clients-actifs-trois-definitions-2026-11",
    url: "https://www.linkedin.com/feed/update/urn:li:share:7526229760809631744",
    embedUrn: "urn:li:share:7526229760809631744",
    embedText: "« On a combien de clients actifs ? »\n\nTrois services, trois réponses. 🤷🏾‍♂️\n\nExemple fictif, mais la scène est classique.\n\nLes ventes disent 412 : les comptes avec un contrat signé dans Salesforce.\nLa finance dit 368 : ceux qui ont payé une facture sur les 12 derniers mois.\nLe marketing dit 530 : tous les contacts qui ont acheté au moins une fois.\n\nPersonne ne ment. Personne ne s'est trompé dans ses formules.\nIls ne comptent simplement pas la même chose.\n\nEt la réunion se passe à défendre son chiffre plutôt qu'à décider.\n\nAucun dashboard ne règle ça tout seul. Le problème n'est pas technique, il est dans la définition.\n\nCe que je ferais avant de construire le moindre rapport : 📖\n\n→ écrire chaque indicateur en une phrase : ce qu'on compte, depuis quelle source, sur quelle période\n→ le faire valider une fois par un responsable\n→ le traduire en une seule mesure Power BI, réutilisée dans tous les rapports\n→ donner un autre nom aux variantes : « clients payants 12 mois », « clients CRM »\n\nTrois définitions, ça peut se défendre.\nTrois chiffres sous le même nom, non. 🎯\n\n#Data #BusinessIntelligence #PowerBI #SalesOps #DataGovernance",
    date: "2026-11-11",
    title: "« On a combien de clients actifs ? » Trois services, trois réponses",
    excerpt: "Personne ne ment, ils ne comptent simplement pas la même chose. Avant de construire le moindre rapport, j'écrirais chaque indicateur en une phrase, je le ferais valider, puis je le traduirais en une seule mesure Power BI réutilisée dans tous les rapports. Trois définitions, ça peut se défendre. Trois chiffres sous le même nom, non.",
    tags: ["Data", "Business Intelligence", "Power BI", "Data Governance"],
    title_en: "\"How many active customers do we have?\" Three departments, three answers",
    excerpt_en: "Nobody is lying, they simply aren't counting the same thing. Before building any report, I would write each indicator in one sentence, have it validated, then translate it into a single Power BI measure reused across all reports. Three definitions can be defended. Three numbers under the same name cannot.",
  },
  {
    id: "tester-ia-50-cas-2026-11",
    url: "https://www.linkedin.com/feed/update/urn:li:share:7525459686926696449",
    embedUrn: "urn:li:share:7525459686926696449",
    embedText: "50 demandes, un tableur et une après-midi. C'est le test que je ferais passer à n'importe quelle IA avant de l'automatiser. 🧪\n\nExemple fictif : on veut qu'un modèle de langage trie les demandes du formulaire de contact en 4 catégories. Prospect, partenaire, candidature, spam.\n\nLa démo est bluffante. Mais une démo, ce sont trois exemples bien choisis.\n\nLe test, en 4 étapes :\n\n1. Prendre 50 demandes déjà traitées, dont on connaît la bonne catégorie. Colonne A : le texte. Colonne B : la bonne réponse.\n\n2. Les faire passer dans le modèle, via Make, avec le prompt prévu. Sa réponse va en colonne C.\n\n3. Colonne D : =SI(B2=C2;1;0). On fait la somme.\n\n4. Lire les erreurs une par une. C'est là qu'est l'information. 🔍\n\nDisons 46 sur 50. 46 ÷ 50 = 92 %. Ça a l'air très bien.\n\nSauf si les 4 erreurs sont des prospects classés en spam. Ce sont précisément les demandes qu'on ne peut pas se permettre de perdre.\n\nDans ce cas : une catégorie « incertain » qui part chez un humain, un prompt corrigé, et on relance sur les mêmes 50. Même jeu de test, sinon la comparaison ne veut rien dire.\n\n⚠️ Limite : 50 cas, c'est un premier filtre, pas une preuve. Et on refait le test à chaque changement de prompt ou de modèle.\n\nUne IA ne se juge pas sur sa démo. Elle se juge sur ses erreurs.\n\n#IA #Automatisation #SalesOps #Make #Data",
    date: "2026-11-09",
    title: "Tester une IA sur 50 cas avant de l'automatiser",
    excerpt: "50 demandes, un tableur et une après-midi : c'est le test que je ferais passer à n'importe quelle IA avant de l'automatiser. Une IA ne se juge pas sur sa démo, elle se juge sur ses erreurs.",
    tags: ["IA", "Automatisation", "SalesOps", "Make"],
    title_en: "Testing an AI on 50 cases before automating it",
    excerpt_en: "50 requests, a spreadsheet and an afternoon: that's the test I would put any AI through before automating it. An AI is not judged on its demo, it is judged on its errors.",
  },
  {
    id: "panier-moyen-vs-mediane-2026-10",
    url: "https://www.linkedin.com/feed/update/urn:li:share:7521163935643938817",
    embedUrn: "urn:li:share:7521163935643938817",
    embedText: "Le panier moyen de cette équipe est de 14 000 €. Aucun de ses clients n'a payé ce prix. 🧾\n\nExemple fictif, mais le piège est classique.\n\n10 contrats signés ce trimestre :\n→ 9 à 5 000 €\n→ 1 gros compte à 95 000 €\n\nTotal : 140 000 €. Divisé par 10 : 14 000 € de panier « moyen ».\n\nSauf que 9 clients sur 10 ont payé 5 000 €. La médiane est à 5 000 €.\n\nCe n'est pas un débat de statisticien. Avec 14 000 € en tête, on fixe des objectifs trop hauts, on surestime le pipe, et on conclut que l'équipe « sous-performe » le trimestre où le gros compte ne revient pas. 📉\n\nCe que je regarde avant de présenter une moyenne : 🔍\n- la médiane juste à côté\n- le minimum et le maximum\n- la moyenne recalculée sans la plus grosse valeur\n\nIci, sans le gros compte : 45 000 € ÷ 9 = 5 000 €.\n\nLe contrat à 95 000 € n'est pas une tendance. C'est un événement, et il mérite sa propre ligne dans le reporting.\n\nLa bonne nouvelle : c'est une seule fonction. MEDIAN() en DAX dans Power BI, MEDIANE() dans Excel en français.\n\n#Data #Analytics #PowerBI #SalesOps #Excel",
    date: "2026-10-28",
    title: "Le panier moyen de cette équipe est de 14 000 €. Aucun de ses clients n'a payé ce prix",
    excerpt: "Sur 10 contrats, 9 à 5 000 € et 1 gros compte à 95 000 € donnent un panier « moyen » de 14 000 €, alors que la médiane est à 5 000 €. Avant de présenter une moyenne, je regarde la médiane juste à côté, le minimum et le maximum, et la moyenne recalculée sans la plus grosse valeur.",
    tags: ["Data", "Analytics", "Power BI", "SalesOps"],
    title_en: "This team's average basket is €14,000. None of its clients paid that price",
    excerpt_en: "Out of 10 contracts, 9 at €5,000 and 1 large account at €95,000 give an \"average\" basket of €14,000, while the median is €5,000. Before presenting an average, I look at the median right next to it, the minimum and maximum, and the average recalculated without the largest value.",
  },
  {
    id: "dashboard-25-kpi-2026-10",
    url: "https://www.linkedin.com/feed/update/urn:li:share:7518695109606014978",
    embedUrn: "urn:li:share:7518695109606014978",
    embedText: "Un dashboard à 25 KPI, c'est un dashboard à 0 KPI. 📊\n\nExemple fictif, mais tout le monde l'a déjà croisé : une page Power BI avec 6 graphiques, 12 cartes de chiffres, 4 filtres et un tableau en bas « au cas où ».\n\nTout y est. Et personne ne sait où regarder.\n\nLe test que j'applique à chaque indicateur :\n\n« Si ce chiffre change demain, qui fait quoi ? »\n\nSi la réponse est « personne, rien », il sort de la page principale. Il n'est pas faux, il est seulement décoratif.\n\nCe qui reste tient souvent en 4 ou 5 indicateurs. Le reste va dans une page de détail, pour ceux qui veulent creuser.\n\nUn bon dashboard ne montre pas tout ce qu'on sait. Il montre ce sur quoi on doit agir. 🎯\n\n#DataViz #PowerBI #Tableau #BusinessIntelligence",
    date: "2026-10-21",
    title: "Un dashboard à 25 KPI, c'est un dashboard à 0 KPI",
    excerpt: "Le test que j'applique à chaque indicateur : « Si ce chiffre change demain, qui fait quoi ? » Si la réponse est « personne, rien », il sort de la page principale. Un bon dashboard ne montre pas tout ce qu'on sait, il montre ce sur quoi on doit agir.",
    tags: ["Data", "Power BI", "DataViz", "Business Intelligence"],
    title_en: "A 25-KPI dashboard is a 0-KPI dashboard",
    excerpt_en: "The test I apply to every indicator: \"If this number changes tomorrow, who does what?\" If the answer is \"nobody, nothing\", it leaves the main page. A good dashboard doesn't show everything we know, it shows what we need to act on.",
  },
  {
    id: "make-ou-zapier-2026-10",
    url: "https://www.linkedin.com/feed/update/urn:li:share:7517974107049771008",
    embedUrn: "urn:li:share:7517974107049771008",
    embedText: "Make ou Zapier ? On me pose souvent la question comme s'il y avait un gagnant. 🤔\n\nJ'utilise les deux, et je ne choisis pas sur les fonctionnalités. Je choisis sur la forme du workflow.\n\n➡️ Si c'est une ligne droite (« quand il se passe A, fais B »), Zapier. C'est rapide à monter, et quelqu'un d'autre pourra le reprendre sans explication.\n\n🔀 Dès qu'il y a des branches, des boucles sur une liste ou des cas d'erreur à traiter, je préfère Make. On voit tout le scénario d'un coup d'œil et on garde la main sur chaque étape.\n\nLes limites, parce qu'il y en a :\n\n- Les deux se paient à l'usage. Avec du volume, la facture monte vite, il faut faire le calcul avant.\n\n- Un workflow que personne n'a documenté devient une dette, le jour où il casse et que son auteur est parti.\n\n-Au-delà d'une certaine complexité (gros volumes, logique métier lourde, besoin de supervision), ce n'est plus le bon outil. C'est là que je regarde plutôt du côté d'Azure Logic Apps ou d'Azure Functions.\n\nL'outil compte moins que la question de départ : est-ce que ce processus mérite d'exister tel quel avant d'être automatisé ?\n\nVous êtes plutôt de quelle équipe ? ✋🏾\n\n#Automatisation #NoCode #Make #Zapier",
    date: "2026-10-19",
    title: "Make ou Zapier ? On me pose souvent la question comme s'il y avait un gagnant",
    excerpt: "J'utilise les deux, et je ne choisis pas sur les fonctionnalités. Je choisis sur la forme du workflow : une ligne droite pour Zapier, des branches, des boucles et des cas d'erreur pour Make.",
    tags: ["Automatisation", "NoCode", "Make", "Zapier"],
    title_en: "Make or Zapier? I'm often asked as if there were a winner",
    excerpt_en: "I use both, and I don't choose based on features. I choose based on the shape of the workflow: a straight line for Zapier, branches, loops and error cases for Make.",
  },
  {
    id: "enrichissement-leads-2026-10",
    url: "https://www.linkedin.com/feed/update/urn:li:share:7516758595875651584",
    embedUrn: "urn:li:share:7516758595875651584",
    embedText: "Un commercial ne devrait jamais chercher un email à la main. 🙅🏾‍♂️\n\nPourtant, c'est souvent ce qui se passe :\n\nRepérer un prospect sur Sales Navigator.\nOuvrir un autre onglet pour trouver son email.\nCopier. Coller dans Salesforce.\nCompléter le poste, l'entreprise, la taille.\nRecommencer 40 fois.\n\nAucune de ces étapes ne demande de réfléchir. C'est justement le signe qu'elles n'ont rien à faire dans la journée d'un humain.\n\nLe workflow que je monte pour ce genre de cas, avec Make : ⚙️\n\n1. Un nouveau lead arrive dans Salesforce (nom + entreprise, rien d'autre)\n2. Make appelle l'API d'Apollo ou de Hunter pour trouver l'email et les infos société\n3. La fiche est complétée automatiquement\n4. Si l'API ne trouve rien, le lead part dans une liste « à vérifier » au lieu de rester à moitié vide\n\nL'étape 4 est celle qu'on oublie le plus. Un workflow qui marche quand tout va bien, c'est facile. Ce qui compte, c'est ce qu'il fait quand la donnée manque.\n\n⚠️ Deux limites à connaître : les API d'enrichissement ne trouvent pas tout, et la donnée qu'elles renvoient n'est pas toujours à jour. Il faut garder un œil humain sur la qualité.\n\nQuelle est l'étape de votre prospection que vous faites encore en copier-coller ? 👇🏾\n\n#Automatisation #SalesOps #Make #CRM",
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
    embedText: "Le fichier s'appelle « Reporting_V7_final_OK_2.xlsx ». 📁\n\nEt toute l'équipe en dépend.\n\nQuelques signes qu'un fichier Excel est devenu quelque chose qu'il n'aurait jamais dû être :\n\n→ Une seule personne sait le mettre à jour\n→ Il circule par mail, donc il en existe plusieurs versions\n→ Il contient des formules que plus personne n'ose toucher\n→ Sa mise à jour consiste à coller des exports dans un onglet\n→ En réunion, on débat du chiffre au lieu de débattre de la décision\n\nJe n'ai rien contre Excel, je m'en sers tous les jours. Le problème commence quand un même fichier sert à la fois de base de données, d'outil de reporting et de source de vérité.\n\nÀ ce stade, le brancher sur Power BI avec une actualisation automatique n'est pas un luxe technique. C'est ce qui permet que tout le monde regarde le même chiffre au même moment.\n\nC'est quoi, le nom du vôtre ? 😅\n\n#Excel #PowerBI #Data #BusinessIntelligence",
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
    embedText: "30 minutes par jour, ça ne ressemble à rien. ⏱️\n\nJ'ai quand même fait le calcul.\n\n30 minutes × 220 jours travaillés = 110 heures par an.\nSoit près de 3 semaines de travail.\n\nTrois semaines à copier-coller des chiffres d'un fichier à l'autre, à relancer les mêmes mails, à remettre en forme le même reporting.\n\nCe qui me frappe, c'est que personne ne décide vraiment de faire ces tâches à la main. Elles sont juste là, et on les fait parce qu'on les a toujours faites comme ça.\n\nEt comme chacune est trop petite pour qu'on s'y arrête, elle ne remonte jamais en haut de la liste.\n\nAvant de parler d'IA ou d'outils, je trouve qu'un exercice tout bête change déjà le regard : pendant une semaine, noter chaque tâche qu'on fait pour la deuxième fois exactement de la même manière. ✍🏾\n\nPas pour tout automatiser, juste pour voir. En général, la liste est plus longue que prévu.\n\nCe serait quoi, la première ligne de la vôtre ? 👇🏾\n\n#Automatisation #Productivite #Data #Process",
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
    embedText: "Et si personne ne lisait votre reporting du lundi ? 📊\n\nJe pose la question sérieusement.\n\nDans beaucoup d'équipes, il y a un reporting qui part chaque semaine. Quelqu'un y passe du temps : exporter, coller, mettre en forme, envoyer.\n\nEt en face, souvent : un « merci », parfois rien, rarement une décision.\n\nAvant de chercher à l'automatiser, il y a une question plus simple à poser aux destinataires :\n\n« Quelle est la dernière décision que vous avez prise grâce à ce document ? »\n\nTrois réponses possibles.\n\n✅ Une réponse précise → le reporting est utile. Il mérite d'être automatisé, pour arriver plus vite et sans erreur.\n\n✂️ « Je regarde surtout deux chiffres » → il mérite d'être réduit à ces deux chiffres.\n\n🤷🏾‍♂️ Un silence → il faut se demander à qui il sert encore.\n\nAutomatiser un reporting que personne n'utilise, c'est produire de l'inutile plus efficacement.\n\nC'est la question que j'aime poser avant d'ouvrir Power BI ou Make : à quoi sert ce qu'on produit ?\n\nVous l'avez déjà posée dans votre équipe ? 👇🏾\n\n#Data #Reporting #Automatisation #BusinessIntelligence",
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
