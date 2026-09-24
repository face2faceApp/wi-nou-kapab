import type { PageContent, PageSlug, Pillar } from "../types";

export const pillars: Pillar[] = [
  {
    id: "former",
    title: "FORMER",
    summary:
      "Former des citoyens et des responsables capables de servir le pays, développer les compétences et renforcer l'éducation civique et professionnelle.",
  },
  {
    id: "organiser",
    title: "ORGANISER",
    summary:
      "Construire une organisation sérieuse, structurée et présente dans les dix départements d'Haïti.",
  },
  {
    id: "servir",
    title: "SERVIR",
    summary:
      "Être proche des communautés et apporter, selon les moyens disponibles, des réponses concrètes aux besoins prioritaires.",
  },
  {
    id: "reconstruire",
    title: "RECONSTRUIRE",
    summary:
      "Participer à la construction d'une Haïti plus juste, plus forte, plus indépendante et plus solidaire.",
  },
];

export const pages: Record<PageSlug, PageContent> = {
  home: {
    slug: "home",
    title: "WI NOU KAPAB",
    lead: "Ensemble pour rebâtir Haïti sur la justice, l'unité et le progrès.",
    blocks: [
      {
        heading: "Programme 2026–2027",
        body: [
          "Donner aux citoyens les moyens d'apprendre, de travailler, d'entreprendre et de participer à la vie nationale.",
        ],
      },
    ],
  },
  programme: {
    slug: "programme",
    title: "Programme de reconstruction",
    lead: "Cadre d'orientation WI NOU KAPAB pour 2026–2027 — citoyenneté responsable, travail, solidarité, production nationale et diaspora.",
    blocks: [
      {
        heading: "Résumé exécutif",
        body: [
          "Ce projet de reconstruction d'une nation constitue un cadre d'orientation pour WI NOU KAPAB. Il vise une Haïti plus juste, plus forte, plus indépendante et plus solidaire, en rapprochant l'action politique des besoins concrets des citoyens.",
          "Il repose sur quatre grandes actions : FORMER, ORGANISER, SERVIR et RECONSTRUIRE. La démarche privilégie des mesures réalistes, progressives et conformes aux lois haïtiennes.",
        ],
      },
      {
        heading: "Principes directeurs",
        body: [
          "Unité patriotique · Citoyenneté responsable · Travail · Solidarité · Reconstruction.",
          "Engagement : ne pas promettre ce qui ne peut pas être réalisé ; commencer par ce qui est possible ; progresser étape par étape.",
        ],
      },
    ],
  },
  contexte: {
    slug: "contexte",
    title: "Contexte et justification",
    lead: "La reconstruction d'Haïti exige la participation des citoyens, des institutions, des acteurs économiques et de la diaspora.",
    blocks: [
      {
        body: [
          "WI NOU KAPAB souhaite réunir un réseau de formateurs, enseignants, entrepreneurs, professionnels, juristes, économistes, informaticiens, responsables communautaires et personnes expérimentées de la diaspora.",
          "Ces compétences doivent accompagner les jeunes, former les membres, renforcer les communautés et aider les citoyens à réaliser leurs projets.",
          "Une politique utile doit donner aux citoyens les moyens d'apprendre, de travailler, d'entreprendre et de participer à la vie nationale.",
        ],
      },
    ],
  },
  vision: {
    slug: "vision",
    title: "Vision et valeurs",
    lead: "Une Haïti où le citoyen connaît ses droits et respecte ses devoirs ; où le jeune peut apprendre, travailler et entreprendre.",
    blocks: [
      {
        body: [
          "Nous voulons une Haïti où la femme participe pleinement à la vie nationale ; où le leader sert le peuple ; où les institutions respectent la Constitution et les lois ; et où les Haïtiens de l'intérieur et de la diaspora travaillent ensemble.",
          "Valeurs : unité patriotique, citoyenneté responsable, travail, solidarité, justice, transparence, responsabilité, respect des lois et reconstruction nationale.",
          "Principe directeur : « Ensemble pour rebâtir Haïti sur la justice, l'unité et le progrès. »",
        ],
      },
    ],
  },
  actions: {
    slug: "actions",
    title: "Les quatre grandes actions",
    lead: "FORMER, ORGANISER, SERVIR et RECONSTRUIRE — complémentaires pour 2026–2027.",
    blocks: [
      {
        heading: "FORMER",
        body: [
          "Former des citoyens et des responsables capables de servir le pays, développer les compétences et renforcer l'éducation civique et professionnelle.",
        ],
      },
      {
        heading: "ORGANISER",
        body: [
          "Construire une organisation sérieuse, structurée et présente dans les dix départements d'Haïti, avec une présence réelle auprès des communautés.",
        ],
      },
      {
        heading: "SERVIR",
        body: [
          "Être proche des communautés et apporter, dans la mesure des moyens disponibles, des réponses concrètes aux besoins prioritaires.",
        ],
      },
      {
        heading: "RECONSTRUIRE",
        body: [
          "Participer à la construction d'une Haïti plus juste, plus forte, plus indépendante et plus solidaire.",
          "La formation crée les compétences ; l'organisation coordonne les efforts ; le service répond aux besoins ; la reconstruction transforme les efforts en résultats durables.",
        ],
      },
    ],
  },
  economie: {
    slug: "economie",
    title: "Inclusion financière et entrepreneuriat",
    lead: "Donner à chaque citoyen la possibilité de travailler, d'entreprendre et de vivre dignement de son travail.",
    blocks: [
      {
        heading: "Inclusion financière",
        body: [
          "Favoriser le dialogue entre banques, microfinance, coopératives et entrepreneurs pour faciliter l'accès au crédit agricole, commercial, artisanal et aux petites entreprises.",
          "Encourager le microcrédit et les coopératives d'épargne et de crédit, dans le respect des lois haïtiennes.",
          "Construire une économie qui produit davantage de ce qu'elle consomme et valorise les ressources du pays.",
        ],
      },
      {
        heading: "Entrepreneuriat et production locale",
        body: [
          "Encourager l'entrepreneuriat agricole, commercial, industriel, artisanal, numérique, culturel, social, féminin et celui des jeunes.",
          "Soutenir les jeunes entreprises par la formation, le conseil, le mentorat et la recherche de financement.",
          "Chaque petite entreprise qui crée un emploi, chaque agriculteur qui produit, chaque artisan qui travaille participe à la reconstruction du pays.",
        ],
      },
    ],
  },
  citoyennete: {
    slug: "citoyennete",
    title: "Formation, organisation et participation",
    lead: "Développer des citoyens et des responsables capables de servir le pays avec compétence et sens de l'intérêt général.",
    blocks: [
      {
        body: [
          "Le projet encourage un réseau de personnes-ressources : formateurs, enseignants, entrepreneurs, professionnels et membres expérimentés de la diaspora.",
          "L'organisation doit être sérieuse, transparente et présente dans les dix départements. Des structures locales doivent écouter les communautés et coordonner les initiatives.",
          "L'éducation citoyenne rappelle les droits et devoirs, le respect de la Constitution et des lois, le dialogue et la participation à la vie nationale.",
        ],
      },
    ],
  },
  solidarite: {
    slug: "solidarite",
    title: "Urgence et solidarité",
    lead: "Réduire la souffrance des personnes les plus vulnérables, sans discrimination, selon les moyens disponibles.",
    blocks: [
      {
        heading: "Éducation",
        body: [
          "Parrainage scolaire, professionnel et universitaire ; aide pour la rentrée et fournitures scolaires.",
        ],
      },
      {
        heading: "Alimentation",
        body: [
          "Soutien aux cantines scolaires, aide alimentaire d'urgence et soutien aux enfants en situation difficile.",
        ],
      },
      {
        heading: "Santé",
        body: [
          "Assistance sanitaire de base, sensibilisation, orientation vers les centres de santé.",
        ],
      },
      {
        heading: "Protection",
        body: [
          "Promouvoir la dignité, l'écoute, le respect de la personne et l'accès aux services disponibles. L'action sociale doit être conduite avec transparence.",
        ],
      },
    ],
  },
  partenariats: {
    slug: "partenariats",
    title: "Partenariats stratégiques",
    lead: "Travailler avec les institutions publiques, le privé, les banques, les coopératives, les universités, la société civile et la diaspora.",
    blocks: [
      {
        body: [
          "Les partenariats peuvent porter sur la formation, le financement, l'accompagnement des entrepreneurs, les programmes sociaux, l'éducation, la santé, la production locale et le développement communautaire.",
          "Ils devront respecter la loi, la transparence, l'indépendance politique, la responsabilité et l'intérêt général.",
          "La coopération avec la diaspora favorise le transfert de compétences, les investissements productifs et la mise en relation internationale.",
        ],
      },
    ],
  },
  "mise-en-oeuvre": {
    slug: "mise-en-oeuvre",
    title: "Cadre de mise en œuvre 2026–2027",
    lead: "Cinq phases : structuration, formation, actions communautaires, accompagnement économique, évaluation.",
    blocks: [
      {
        heading: "Phases",
        body: [
          "Phase 1 — Structuration : responsables, équipes, priorités départementales, coordination.",
          "Phase 2 — Formation : activités civiques, professionnelles et organisationnelles.",
          "Phase 3 — Actions communautaires : besoins prioritaires et initiatives réalistes.",
          "Phase 4 — Accompagnement économique : partenariats banques, coopératives, microfinance, diaspora.",
          "Phase 5 — Évaluation : résultats, comptes rendus, correction et renforcement.",
        ],
      },
      {
        heading: "Indicateurs",
        body: [
          "Personnes formées ; activités communautaires ; jeunes et femmes accompagnés ; partenariats ; projets économiques ; couverture des dix départements ; transparence financière.",
        ],
      },
      {
        heading: "Notre engagement",
        body: [
          "Un Haïtien qui travaille est une force. Un jeune qui entreprend est une richesse. WI NOU KAPAB — Ensemble, nous pouvons reconstruire Haïti.",
        ],
      },
    ],
  },
  contact: {
    slug: "contact",
    title: "Contact",
    lead: "Écrivez-nous, appelez ou discutez sur WhatsApp.",
    blocks: [],
  },
};
