export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/></svg>`,
    title: "System Design & Architecture",
    description: "Designing scalable, resilient services, clear boundaries, and data models; pragmatic trade‑offs documented via ADRs/RFCs.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 17l-5-5 5-5v3l-2 2 2 2v3zm8-10l5 5-5 5v-3l2-2-2-2V7z"/></svg>`,
    title: "Front-end Development",
    description: "End‑to‑end features with React/Next.js, Node.js, and TypeScript, with strong UX, accessibility, and performance.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/></svg>`,
    title: "Testing & CI/CD",
    description: "Unit, integration, and E2E tests (Jest, Playwright) with GitHub Actions pipelines, preview envs, and quality gates.",
  },
];

export type Skill = (typeof skills)[number];

