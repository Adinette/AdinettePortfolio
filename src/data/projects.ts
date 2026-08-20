export interface ProjectItem {
  titleFr: string;
  titleEn: string;
  subtitleFr?: string;
  subtitleEn?: string;
  techStack: string;
  descriptionFr: string;
  descriptionEn: string;
  highlightsFr?: string[];
  highlightsEn?: string[];
  ctaTextFr: string;
  ctaTextEn: string;
  ctaLink: string;
  badgeFr?: string;
  badgeEn?: string;
}

export const projects: ProjectItem[] = [
  {
    titleFr: "Financial Control",
    titleEn: "Financial Control",
    subtitleFr: "Gestion Financière Personnelle",
    subtitleEn: "Personal Finance & Budgeting App",
    techStack: "Vue.js 3 • Pinia • Axios • Node.js • Express",
    descriptionFr: "Application web complète de suivi et pilotage budgétaire quotidien. Analyse et catégorisation des flux financiers (revenus/dépenses), calcul automatique des soldes en temps réel et consommation sécurisée d'APIs REST avec intercepteurs Axios.",
    descriptionEn: "Web application for daily budget management and financial tracking. Categorization of revenue/expenses, automatic real-time balance calculations, and secure REST API requests via Axios interceptors.",
    highlightsFr: [
      "Gestion centralisée de l'état avec Pinia",
      "Sécurisation des requêtes API et résolution des CORS",
      "Interface réactive & responsive design"
    ],
    highlightsEn: [
      "Centralized state management with Pinia",
      "API request security & CORS handling",
      "Reactive & responsive user interface"
    ],
    ctaTextFr: "En savoir plus →",
    ctaTextEn: "Learn More →",
    ctaLink: "https://financial-control-pi-five.vercel.app/",
    badgeFr: "Full-Stack Vue.js",
    badgeEn: "Full-Stack Vue.js"
  },
  {
    titleFr: "Le Web Artisan Bénin",
    titleEn: "Le Web Artisan Benin",
    subtitleFr: "Plateforme Vitrine & Backoffice E-mail Pro",
    subtitleEn: "Pro Email Sales Showcase & Backoffice",
    techStack: "Next.js • JWT Auth • Meta Pixel • Plesk • PM2",
    descriptionFr: "Plateforme vitrine de vente et backoffice complet de gestion pour des services de messagerie professionnelle. Système d'authentification sécurisé (JWT), suivi des requêtes clients et compteur de visites natif.",
    descriptionEn: "Showcase sales platform and administrative backoffice for professional email hosting services. Integrated JWT authentication, request management system, and native visit counters.",
    highlightsFr: [
      "Module d'authentification JWT & sessions",
      "Tracking marketing avec Meta Pixel",
      "Déploiement production sur Plesk avec PM2"
    ],
    highlightsEn: [
      "JWT authentication & session module",
      "Meta Pixel marketing tracking",
      "Plesk production deployment with PM2"
    ],
    ctaTextFr: "En savoir plus →",
    ctaTextEn: "Learn More →",
    ctaLink: "#",
    badgeFr: "Next.js & Cloud",
    badgeEn: "Next.js & Cloud"
  },
  {
    titleFr: "Gestion des Opérateurs & Paie Mensuelle",
    titleEn: "Operator Payroll Automation",
    subtitleFr: "Automation Paie & Fiches de Salaire",
    subtitleEn: "Payroll & Payslip Calculator Engine",
    techStack: "Vue.js 3 • Pinia • LocalStorage • JavaScript",
    descriptionFr: "Outil d'automatisation de la paie mensuelle pour la gestion administrative des opérateurs. Intègre un moteur de calcul automatique des fiches de paie basé sur les heures et rendements enregistrés.",
    descriptionEn: "Monthly payroll automation system for operator administrative management. Features an automated payslip calculation engine based on recorded hours and productivity outputs.",
    highlightsFr: [
      "Moteur de calcul automatique de salaires",
      "Gestion d'état globale avec Pinia",
      "Persistance locale des données"
    ],
    highlightsEn: [
      "Automated salary calculation engine",
      "Global state management with Pinia",
      "Local storage data persistence"
    ],
    ctaTextFr: "En savoir plus →",
    ctaTextEn: "Learn More →",
    ctaLink: "https://salary-lnb.vercel.app/",
    badgeFr: "Vue.js & Automation",
    badgeEn: "Vue.js & Automation"
  },
  {
    titleFr: "Éditeur Visuel de Règles Métier",
    titleEn: "Visual Business Rule Editor",
    subtitleFr: "Outil Drag & Drop / Graph Engine (Sanlam)",
    subtitleEn: "Drag & Drop Graph Engine (Sanlam)",
    techStack: "Vue.js 3 • Vue Flow • TypeScript • Tailwind CSS",
    descriptionFr: "Outil no-code / drag-and-drop permettant d'automatiser et paramétrer visuellement les règles de souscription d'assurance sans intervention technique.",
    descriptionEn: "No-code visual drag-and-drop tool empowering insurance teams to configure and automate underwriting rules without technical intervention.",
    highlightsFr: [
      "Graphes dynamiques avec Vue Flow",
      "Validation automatique des données temps réel",
      "Gain de temps majeur pour les équipes métier"
    ],
    highlightsEn: [
      "Dynamic node graphs powered by Vue Flow",
      "Real-time automatic data validation",
      "Substantial time reduction for business operations"
    ],
    ctaTextFr: "En savoir plus →",
    ctaTextEn: "Learn More →",
    ctaLink: "#",
    badgeFr: "No-Code / Vue Flow",
    badgeEn: "No-Code / Vue Flow"
  }
];
