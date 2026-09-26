export interface InfoCard {
  title: string;
  body: string;
  icon: 'who' | 'what' | 'learning' | 'goals';
}

export const ABOUT_CARDS: InfoCard[] = [
  {
    icon: 'who',
    title: 'Who I am',
    body: 'A full-stack developer who enjoys turning ideas into complete, working products — from a solid backend or data pipeline up to a polished, accessible interface.',
  },
  {
    icon: 'what',
    title: 'What I do',
    body: 'Angular on the frontend — standalone components, signals, and GraphQL/REST integrations — paired with Node.js/Express, Python/Django, and Spring Boot APIs on the backend.',
  },
  {
    icon: 'learning',
    title: "What I'm learning",
    body: 'Signal-based state management in Angular, schema-first GraphQL, and data pipeline design (ETL, star-schema warehousing) alongside Python/Django.',
  },
  {
    icon: 'goals',
    title: 'My goals',
    body: 'Growing into a well-rounded full-stack engineer, contributing to products at scale, and eventually mentoring the next generation of developers.',
  },
];

export interface TimelineItem {
  year: string;
  title: string;
  body: string;
}

export const ABOUT_TIMELINE: TimelineItem[] = [
  {
    year: 'Jul 2026',
    title: 'Started the AmaliTech Apprenticeship',
    body: 'JavaScript fundamentals, the DOM and browser APIs, and disciplined Git workflows — feature branches, PRs, and code review.',
  },
  {
    year: 'Aug 2026',
    title: 'Advanced JS, TypeScript & Testing',
    body: 'Shipped the Marginalia note-taking PWA and a Jest-tested Task Manager API client shared between a Node CLI and a browser UI.',
  },
  {
    year: 'Aug 2026',
    title: 'Angular Specialization',
    body: 'Frontend Engineering Masterclass challenges in Angular, plus the Gather e-commerce UI — reactive forms, shared component libraries, RxJS-backed services.',
  },
  {
    year: 'Sep 2026',
    title: 'Full-Stack Team Projects',
    body: 'Built the InsightFlow reporting dashboard and a multi-source BI pipeline (Angular + Python/Django + Docker) as part of cross-functional teams.',
  },
  {
    year: 'Sep 2026 →',
    title: 'Achievement Utilization Tracking System',
    body: 'Currently building the Angular + GraphQL frontend for a full performance-tracking system, integrated against a Spring Boot backend.',
  },
];
