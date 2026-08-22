export interface Skill {
  label: string;
  level: number;
  detail: string;
}

export const SKILLS_COLUMN_1: Skill[] = [
  { label: 'Angular', level: 95, detail: 'Standalone components, signals, RxJS, reactive forms' },
  { label: 'JavaScript / TypeScript', level: 97, detail: 'ES6+, closures, async/await, generics, type safety' },
  { label: 'HTML5 & CSS3', level: 99, detail: 'Semantic markup, Flexbox, Grid, responsive design' },
  { label: 'Git & GitHub', level: 96, detail: 'Branching, rebasing, PR reviews, conflict resolution' },
];

export const SKILLS_COLUMN_2: Skill[] = [
  { label: 'Node.js', level: 95, detail: 'Runtime internals, npm ecosystem, scripting, tooling' },
  { label: 'Express.js', level: 91, detail: 'REST APIs, middleware, authentication, error handling' },
  { label: 'Accessibility (a11y)', level: 100, detail: 'ARIA, keyboard nav, focus management, contrast' },
  { label: 'Responsive Design', level: 100, detail: 'Mobile-first approach, flexible grids, media queries'},
];
