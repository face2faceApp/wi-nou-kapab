import type { PageContent, PageSlug, Pillar } from "../types";

export const pillars: Pillar[] = [
  {
    id: "former",
    title: "TRAIN",
    summary:
      "Train citizens and leaders able to serve the country, build skills, and strengthen civic and professional education.",
  },
  {
    id: "organiser",
    title: "ORGANIZE",
    summary:
      "Build a serious, structured organization present in all ten departments of Haiti.",
  },
  {
    id: "servir",
    title: "SERVE",
    summary:
      "Stay close to communities and deliver concrete responses to priority needs, within available means.",
  },
  {
    id: "reconstruire",
    title: "REBUILD",
    summary:
      "Help build a Haiti that is fairer, stronger, more independent, and more solidary.",
  },
];

export const pages: Record<PageSlug, PageContent> = {
  home: {
    slug: "home",
    title: "WI NOU KAPAB",
    lead: "Together to rebuild Haiti on justice, unity, and progress.",
    blocks: [
      {
        heading: "2026–2027 Program",
        body: [
          "Give citizens the means to learn, work, start businesses, and take part in national life.",
        ],
      },
    ],
  },
  programme: {
    slug: "programme",
    title: "Reconstruction program",
    lead: "WI NOU KAPAB orientation framework for 2026–2027 — responsible citizenship, work, solidarity, national production, and the diaspora.",
    blocks: [
      {
        heading: "Executive summary",
        body: [
          "This national reconstruction project is WI NOU KAPAB's orientation framework. It aims for a Haiti that is fairer, stronger, more independent, and more solidary — bringing political action closer to citizens' real needs.",
          "It rests on four pillars: TRAIN, ORGANIZE, SERVE, and REBUILD. The approach favors realistic, progressive measures consistent with Haitian law.",
        ],
      },
      {
        heading: "Guiding principles",
        body: [
          "Patriotic unity · Responsible citizenship · Work · Solidarity · Reconstruction.",
          "Commitment: do not promise what cannot be delivered; start with what is possible; advance step by step.",
        ],
      },
    ],
  },
  contexte: {
    slug: "contexte",
    title: "Context and rationale",
    lead: "Rebuilding Haiti requires citizens, institutions, economic actors, and the diaspora.",
    blocks: [
      {
        body: [
          "WI NOU KAPAB seeks a network of trainers, teachers, entrepreneurs, professionals, lawyers, economists, IT specialists, community leaders, and experienced diaspora members.",
          "These skills should support youth, train members, strengthen communities, and help citizens realize their projects.",
          "Useful politics gives people the means to learn, work, start businesses, and participate in national life.",
        ],
      },
    ],
  },
  vision: {
    slug: "vision",
    title: "Vision and values",
    lead: "A Haiti where citizens know their rights and duties; where youth can learn, work, and build.",
    blocks: [
      {
        body: [
          "We want a Haiti where women fully participate; where leaders serve the people; where institutions respect the Constitution and the law; and where Haitians at home and in the diaspora work together.",
          "Values: patriotic unity, responsible citizenship, work, solidarity, justice, transparency, accountability, respect for the law, and national reconstruction.",
          "Guiding principle: “Together to rebuild Haiti on justice, unity, and progress.”",
        ],
      },
    ],
  },
  actions: {
    slug: "actions",
    title: "The four pillars",
    lead: "TRAIN, ORGANIZE, SERVE, and REBUILD — complementary for 2026–2027.",
    blocks: [
      {
        heading: "TRAIN",
        body: [
          "Train citizens and leaders able to serve the country, develop skills, and strengthen civic and professional education.",
        ],
      },
      {
        heading: "ORGANIZE",
        body: [
          "Build a serious organization present in all ten Haitian departments, with real community presence.",
        ],
      },
      {
        heading: "SERVE",
        body: [
          "Stay close to communities and provide concrete answers to priority needs within available means.",
        ],
      },
      {
        heading: "REBUILD",
        body: [
          "Help build a Haiti that is fairer, stronger, more independent, and more solidary.",
          "Training builds skills; organization coordinates effort; service meets needs; reconstruction turns effort into lasting results.",
        ],
      },
    ],
  },
  economie: {
    slug: "economie",
    title: "Financial inclusion and entrepreneurship",
    lead: "Give every citizen the chance to work, start a business, and live with dignity from their labor.",
    blocks: [
      {
        heading: "Financial inclusion",
        body: [
          "Foster dialogue among banks, microfinance, cooperatives, and entrepreneurs to ease credit for farming, trade, crafts, and small business.",
          "Encourage microcredit and savings-and-credit cooperatives under Haitian law.",
          "Build an economy that produces more of what it consumes and values national resources.",
        ],
      },
      {
        heading: "Entrepreneurship and local production",
        body: [
          "Encourage agricultural, commercial, industrial, craft, digital, cultural, social, women's, and youth entrepreneurship.",
          "Support young enterprises with training, advice, mentoring, and financing pathways.",
          "Every small business that creates a job, every farmer who produces, every artisan who works helps rebuild the country.",
        ],
      },
    ],
  },
  citoyennete: {
    slug: "citoyennete",
    title: "Training, organization, and participation",
    lead: "Develop citizens and leaders who serve with competence and a sense of the common good.",
    blocks: [
      {
        body: [
          "The project encourages a network of resource people: trainers, teachers, entrepreneurs, professionals, and experienced diaspora members.",
          "The organization must be serious, transparent, and present in all ten departments. Local structures should listen to communities and coordinate initiatives.",
          "Civic education recalls rights and duties, respect for the Constitution and the law, dialogue, and participation in national life.",
        ],
      },
    ],
  },
  solidarite: {
    slug: "solidarite",
    title: "Emergency and solidarity",
    lead: "Reduce suffering for the most vulnerable, without discrimination, within available means.",
    blocks: [
      {
        heading: "Education",
        body: [
          "School, professional, and university sponsorship; back-to-school support and supplies.",
        ],
      },
      {
        heading: "Food",
        body: [
          "Support for school canteens, emergency food aid, and help for children in difficulty.",
        ],
      },
      {
        heading: "Health",
        body: [
          "Basic health assistance, awareness, and referral to health centers.",
        ],
      },
      {
        heading: "Protection",
        body: [
          "Promote dignity, listening, respect for the person, and access to available services. Social action must be transparent.",
        ],
      },
    ],
  },
  partenariats: {
    slug: "partenariats",
    title: "Strategic partnerships",
    lead: "Work with public institutions, the private sector, banks, cooperatives, universities, civil society, and the diaspora.",
    blocks: [
      {
        body: [
          "Partnerships may cover training, financing, entrepreneur support, social programs, education, health, local production, and community development.",
          "They must respect the law, transparency, political independence, accountability, and the public interest.",
          "Diaspora cooperation supports skills transfer, productive investment, and international networking.",
        ],
      },
    ],
  },
  "mise-en-oeuvre": {
    slug: "mise-en-oeuvre",
    title: "Implementation framework 2026–2027",
    lead: "Five phases: structure, train, community action, economic support, evaluate.",
    blocks: [
      {
        heading: "Phases",
        body: [
          "Phase 1 — Structure: leaders, teams, departmental priorities, coordination.",
          "Phase 2 — Training: civic, professional, and organizational activities.",
          "Phase 3 — Community actions: priority needs and realistic initiatives.",
          "Phase 4 — Economic support: banks, cooperatives, microfinance, diaspora.",
          "Phase 5 — Evaluation: results, reports, correction, and strengthening.",
        ],
      },
      {
        heading: "Indicators",
        body: [
          "People trained; community activities; youth and women supported; partnerships; economic projects; coverage of ten departments; financial transparency.",
        ],
      },
      {
        heading: "Our commitment",
        body: [
          "A Haitian who works is a force. A young person who builds is wealth. WI NOU KAPAB — Together, we can rebuild Haiti.",
        ],
      },
    ],
  },
  contact: {
    slug: "contact",
    title: "Contact",
    lead: "Write to us, call, or chat on WhatsApp.",
    blocks: [],
  },
};
