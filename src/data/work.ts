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
    title: "Internship Front-End Developer",
    company: "Sanlam Allianz",
    region: "Bénin",
    description:
      "Architected event‑driven payment services with idempotency and retries, introduced Kafka for async processing, enforced API versioning, and drove observability with structured logging and tracing.",
    technologies: [
      "JavaScript",
      "CSS",
      "TypeScript",
      "Vue.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Internship Front-End Developer",
    company: "Confledis SAS ",
    region: "France",
    description:
      "Owned the design system and SSR/ISR strategy, improved Core Web Vitals (LCP/INP) into the green, and shipped accessible UI components with strong tests and story coverage.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "CSS",
      "Next.js",
      "Ionic",
      "AWS Amplify",
    ],
  },
  {
    title: "Internship Front-End Developer",
    company: "Intside Sarl",
    region: "Bénin",
    description:
      "Built MVPs end‑to‑end: designed REST/GraphQL APIs, set up CI/CD with preview environments, introduced feature flags, and migrated data to Postgres.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "React.js",
      "Vue.js",
      "Next.js",
      "Nuxt.js",
      "Gitlab Actions",
      "Jira",
      "Figma",
      "Argile methodology",
    ],
  },
];

export type WorkItem = (typeof work)[number];

