export interface InfoCard {
  title: string;
  body: string;
  icon: 'who' | 'what' | 'learning' | 'goals';
}

export const ABOUT_CARDS: InfoCard[] = [
  {
    icon: 'who',
    title: 'Who I am',
    body: 'A full-stack developer who enjoys turning ideas into complete, working products — from a solid backend up to a polished interface.',
  },
  {
    icon: 'what',
    title: 'What I do',
    body: 'Full-stack engineering with Angular on the frontend and Node.js with Express.js on the backend — owning a feature end to end.',
  },
  {
    icon: 'learning',
    title: "What I'm learning",
    body: 'Advanced Angular patterns (signals, RxJS) and scalable Express API design.',
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
  { year: '2025', title: 'Started JavaScript', body: 'Began learning core JavaScript fundamentals — syntax, the DOM, and the event loop.' },
  { year: '2025', title: 'Built a Note Taking App', body: 'Shipped a full-featured PWA with export/import, categories, and offline support.' },
  { year: '2025', title: 'Learned Git Workflow', body: 'Adopted feature-branch workflows, pull requests, and disciplined code review habits.' },
  { year: '2025', title: 'Learned Express.js', body: 'Built REST APIs with Express — routing, middleware, and error handling — to power full-stack apps.' },
  { year: '2025 →', title: 'Building Full-Stack Applications with Angular', body: 'Currently building complete applications end to end with Angular, Node.js, and Express.' },
];
