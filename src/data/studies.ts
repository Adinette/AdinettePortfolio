export const studies = [
  {
    titleFr: "Master 1 en Génie Logiciel",
    titleEn: "Master's Degree in Software Engineering (Year 1)",
    institutionFr: "Institut de Formation et de Recherche en Informatique (IFRI)",
    institutionEn: "Computer Training & Research Institute (IFRI)",
    periodFr: "2025 – 2026 (En cours)",
    periodEn: "2025 – 2026 (In progress)",
    descriptionFr:
      "Approfondissement en génie logiciel, ingénierie des exigences, modèles d'architectures distribuées et développement d'applications d'entreprise.",
    descriptionEn:
      "Advanced study in software engineering, requirements analysis, distributed architecture patterns, and enterprise application development.",
    tagsFr: [
      "Génie Logiciel",
      "Architecture Distribuée",
      "Intelligence Artificielle",
      "Big Data",
      "Conception d'APIs",
      "Qualité Logicielle",
      "Gestion de Projet"
    ],
    tagsEn: [
      "Software Engineering",
      "Distributed Architecture",
      "Artificial Intelligence",
      "Big Data",
      "API Design",
      "Software Quality",
      "Project Management"
    ]
  },
  {
    titleFr: "Licence en Architecture Logicielle",
    titleEn: "Bachelor's Degree in Software Architecture",
    institutionFr: "Ecole Supérieure de Gestion en Informatique et Sciences (ESGIS)",
    institutionEn: "School of IT Management & Sciences (ESGIS)",
    periodFr: "2022 – 2023",
    periodEn: "2022 – 2023",
    descriptionFr:
      "Formation académique spécialisée en conception d'architectures applicatives, algorithmique avancée, structures de données et gestion de projets logiciels.",
    descriptionEn:
      "Specialized academic degree focusing on application software design, data structures, algorithmics, and software project management.",
    tagsFr: [
      "Architecture Logicielle",
      "Algorithmique",
      "Bases de Données",
      "Systèmes Web"
    ],
    tagsEn: [
      "Software Architecture",
      "Algorithms",
      "Databases",
      "Web Systems"
    ]
  },
  {
    titleFr: "Formations Intensives & Perfectionnement Anglais",
    titleEn: "Intensive Corporate Internships & English Program",
    institutionFr: "Immersion & Pratique Professionnelle",
    institutionEn: "Corporate Immersion & Language Mastery",
    periodFr: "2023 – 2025",
    periodEn: "2023 – 2025",
    descriptionFr:
      "Mise en pratique au cours de 3 stages en entreprise (Intside, Confledis, Sanlam) et immersion linguistique intensive de 3 mois sanctionnée par une attestation d'anglais intermédiaire.",
    descriptionEn:
      "Practical execution across 3 corporate internships (Intside, Confledis, Sanlam) paired with a 3-month intensive language immersion certifying intermediate English proficiency.",
    tagsFr: [
      "Anglais Professionnel",
      "Stages Entreprise",
      "Travail en Équipe Agile"
    ],
    tagsEn: [
      "Professional English",
      "Corporate Internships",
      "Agile Teamwork"
    ]
  },
];

export type StudyItem = (typeof studies)[number];
