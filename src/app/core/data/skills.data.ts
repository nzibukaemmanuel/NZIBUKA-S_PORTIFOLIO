export interface Skill {
  label: string;
  level: number;
  detail: string;
}

export const SKILLS_COLUMN_1: Skill[] = [
  { label: 'Angular', level: 95, detail: 'Standalone components, signals, RxJS, reactive forms, Apollo GraphQL' },
  { label: 'JavaScript / TypeScript', level: 96, detail: 'ES6+, closures, async/await, generics, strict typing' },
  { label: 'HTML5 & CSS3', level: 96, detail: 'Semantic markup, Flexbox, Grid, responsive layouts' },
  { label: 'Git & GitHub', level: 94, detail: 'Feature branches, PR reviews, conflict resolution, clean history' },
];

export const SKILLS_COLUMN_2: Skill[] = [
  { label: 'Node.js & Express.js', level: 88, detail: 'REST APIs, middleware, JWT auth, error handling' },
  { label: 'GraphQL & REST Integration', level: 82, detail: 'Apollo client, schema-driven queries, wiring against Spring Boot & Django APIs' },
  { label: 'Python & Data Pipelines', level: 72, detail: 'Django REST Framework, ETL pipelines, containerized services' },
  { label: 'Accessibility & Responsive Design', level: 98, detail: 'ARIA, keyboard nav, focus management, mobile-first, AA contrast' },
];
