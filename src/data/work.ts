import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    titleFr: "Développeur web front-end stagiaire",
    titleEn: "Front-End Developer Intern",
    company: "Sanlam Assurances",
    regionFr: "Bénin",
    regionEn: "Benin",
    periodFr: "Mai 2025 – Octobre 2025",
    periodEn: "May 2025 – October 2025",
    descriptionFr:
      "Conception d'un éditeur visuel no-code / drag-and-drop de règles métier d'assurance (Vue.js 3, Vue Flow, TypeScript) avec gestion d'états complexes et validation temps réel. Déploiement également d'un module d'évaluation des performances des employés avec suivi d'indicateurs et reporting temps réel.",
    descriptionEn:
      "Engineered a no-code visual drag-and-drop business rules editor (Vue.js 3, Vue Flow, TypeScript) featuring complex state management and real-time validation. Also deployed an employee performance evaluation module with real-time KPI tracking.",
    technologies: [
      "Vue.js 3",
      "Vue Flow",
      "TypeScript",
      "Pinia",
      "Tailwind CSS",
      "REST APIs"
    ],
  },
  {
    titleFr: "Développeur web front-end stagiaire",
    titleEn: "Front-End Developer Intern",
    company: "Confledis SAS",
    regionFr: "France / Remote",
    regionEn: "France / Remote",
    periodFr: "Septembre 2024 – Décembre 2024",
    periodEn: "September 2024 – December 2024",
    descriptionFr:
      "Développement d'une plateforme e-Santé bivalente (Next.js, Ionic) pour la prise de rendez-vous (interfaces patients & médecins). Synchronisation fluide des données médicales, gestion des flux d'authentification multi-rôles et déploiement cloud via pipelines CI/CD sur AWS Amplify.",
    descriptionEn:
      "Developed a dual-sided e-Health appointment booking platform (Next.js, Ionic) for patients and doctors. Managed medical data sync, multi-role auth flows, and cloud CI/CD deployment on AWS Amplify.",
    technologies: [
      "Next.js",
      "Ionic",
      "TypeScript",
      "AWS Amplify",
      "CI/CD Pipelines",
      "Multi-role Auth"
    ],
  },
  {
    titleFr: "Développeur web front-end stagiaire",
    titleEn: "Front-End Developer Intern",
    company: "Intside Sarl",
    regionFr: "Bénin",
    regionEn: "Benin",
    periodFr: "Mars 2023 – Septembre 2024",
    periodEn: "March 2023 – September 2024",
    descriptionFr:
      "Intégration haute fidélité de maquettes Figma complexes pour des applications web internationales. Structuration d'une architecture modulaire multilingue (i18n), optimisation SEO, accélération des temps de chargement et consommation d'APIs REST sécurisées.",
    descriptionEn:
      "High-fidelity integration of complex Figma mocks for international web apps. Architected modular i18n localization, SEO optimization, load time acceleration, and secure REST API consumption.",
    technologies: [
      "Next.js",
      "Vue.js",
      "React.js",
      "Nuxt.js",
      "Bootstrap",
      "Tailwind CSS",
      "i18n",
      "SEO",
      "Figma",
      "GitLab",
      "Jira"
    ],
  },
  {
    titleFr: "Participant Bootcamp - L'Arène",
    titleEn: "Bootcamp Participant - L'Arène",
    company: "Initiative Etrilabs",
    regionFr: "Bénin",
    regionEn: "Benin",
    periodFr: "Avril 2023 – Mai 2023",
    periodEn: "April 2023 – May 2023",
    descriptionFr:
      "Immersion pratique axée sur les meilleures pratiques de développement web moderne, le travail en équipe agile et le perfectionnement sur l'écosystème JavaScript.",
    descriptionEn:
      "Intensive bootcamp focused on modern web development standards, agile software teamwork, and advanced JavaScript ecosystem practice.",
    technologies: [
      "JavaScript (ES6+)",
      "HTML5 / CSS3",
      "Agile / Scrum",
      "Git"
    ],
  },
];

export type WorkItem = (typeof work)[number];
