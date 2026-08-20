export interface SkillCategory {
  categoryFr: string;
  categoryEn: string;
  icon: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  tags: string[];
}

export const skills: SkillCategory[] = [
  {
    categoryFr: "Frameworks & Architecture Front-End",
    categoryEn: "Front-End Frameworks & Architecture",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    titleFr: "Frameworks UI & Moteurs Dynamiques",
    titleEn: "UI Frameworks & Dynamic Engines",
    descriptionFr: "Maîtrise de Vue.js 3 (Composition API, Pinia), React.js, Next.js et Nuxt.js. Spécialiste dans la création d'éditeurs visuels complexes (graphes dynamiques avec Vue Flow) et d'architectures applicatives réutilisables.",
    descriptionEn: "Deep expertise in Vue.js 3 (Composition API, Pinia), React.js, Next.js, and Nuxt.js. Specialized in building complex visual editors (dynamic graphs with Vue Flow) and scalable UI architectures.",
    tags: ["Vue.js 3", "React.js", "Next.js", "Nuxt.js", "Vue Flow", "Astro.js", "Ionic"]
  },
  {
    categoryFr: "Langages & Stylisation Moderne",
    categoryEn: "Languages & Modern Styling",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>`,
    titleFr: "TypeScript, JavaScript & Design Systems",
    titleEn: "TypeScript, JavaScript & Design Systems",
    descriptionFr: "Code fortement typé et maintenable avec TypeScript. Intégration haute fidélité de maquettes Figma complexes avec Tailwind CSS, Bootstrap et CSS3 moderne, garantissant réactivité et UX soignée.",
    descriptionEn: "Strongly-typed, maintainable code using TypeScript. High-fidelity integration of Figma designs using Tailwind CSS, Bootstrap, and modern CSS3 with a strong emphasis on responsiveness and UX.",
    tags: ["TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "HTML5 / CSS3", "Figma Integration"]
  },
  {
    categoryFr: "Back-End & Intégration d'APIs",
    categoryEn: "Back-End & API Integration",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
    titleFr: "Node.js, REST APIs & Sécurisation",
    titleEn: "Node.js, REST APIs & Security",
    descriptionFr: "Conception et consommation d'APIs REST sécurisées. Gestion des flux d'authentification multi-rôles (JWT), sécurisation via intercepteurs de requêtes (Axios) et gestion des politiques CORS.",
    descriptionEn: "Design and consumption of secure REST APIs. Multi-role authentication flows (JWT), request interception (Axios), and production CORS policy enforcement.",
    tags: ["Node.js", "Express.js", "APIs REST", "JWT Auth", "Axios Interceptors", "CORS"]
  },
  {
    categoryFr: "Cloud, CI/CD & Bases de Données",
    categoryEn: "Cloud, CI/CD & Databases",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    titleFr: "Déploiement Cloud & Persistance",
    titleEn: "Cloud Deployment & Persistence",
    descriptionFr: "Configuration de pipelines CI/CD et déploiements d'applications front-end et micro-services sur AWS Amplify, Plesk et PM2. Gestion et requêtage de bases de données relationnelles PostgreSQL et MySQL.",
    descriptionEn: "CI/CD pipeline configuration and cloud deployment of front-end applications & microservices on AWS Amplify, Plesk, and PM2. Relational database management with PostgreSQL & MySQL.",
    tags: ["AWS Amplify", "Plesk", "PM2", "PostgreSQL", "MySQL", "CI/CD Pipelines"]
  },
  {
    categoryFr: "Internationalisation, SEO & Outillage",
    categoryEn: "Internationalization, SEO & Tooling",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    titleFr: "SEO, i18n & Collaboration Agile",
    titleEn: "SEO, i18n & Agile Collaboration",
    descriptionFr: "Optimisation du référencement naturel (SEO), amélioration des temps de chargement et structuration d'architectures multilingues (i18n). Collaboration agile via GitHub, GitLab, Jira et Figma.",
    descriptionEn: "Search Engine Optimization (SEO), Core Web Vitals performance tuning, and internationalization (i18n). Agile teamwork utilizing GitHub, GitLab, Jira, and Figma.",
    tags: ["i18n (Multilingual)", "SEO & Web Vitals", "GitHub", "GitLab", "Jira", "Figma", "Canva", "Agile / Scrum"]
  }
];

export type Skill = (typeof skills)[number];
