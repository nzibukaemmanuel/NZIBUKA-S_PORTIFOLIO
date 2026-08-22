export interface Project {
  id: string;
  name: string;
  tags: string[];
  tagLabels: string[];
  description: string;
  features: string[];
  demoUrl: string;
  githubUrl: string;
  architecture: string;
  technologies: string;
  challenges: string;
  lessons: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'fullstack-app',
    name: 'Full-Stack App (Coming Soon)',
    tags: ['angular', 'node.js', 'express.js'],
    tagLabels: ['Angular', 'Node.js', 'Express.js'],
    description:
      'A full-stack application built with Angular, Node.js, and Express — write-up and live demo coming soon.',
    features: [
      'Angular frontend with standalone components and signals',
      'REST API built with Node.js and Express',
      'End-to-end feature ownership, from API to UI',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/nzibukaemmanuel',
    architecture: 'Architecture write-up coming soon once this project ships.',
    technologies: 'Angular, Node.js, Express.js, REST APIs.',
    challenges: 'To be documented once this project is complete.',
    lessons: 'To be documented once this project is complete.',
  },
  {
    id: 'note-app',
    name: 'Note Taking App',
    tags: ['javascript', 'pwa', 'css'],
    tagLabels: ['JavaScript', 'PWA', 'CSS'],
    description: 'A categorized note-taking PWA with rich text, export/import, and offline-first storage.',
    features: [
      'Category-based organization with color labels',
      'Export / import notes as JSON',
      'Rich text editing toolbar',
      'Toast notifications for every action',
      'Installable, works fully offline',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/nzibukaemmanuel',
    architecture:
      'Built with vanilla ES Modules following an MVC-style split: a NoteStore module owns state and persistence, view modules render from store snapshots, and a thin controller wires DOM events to store actions. A Service Worker precaches the app shell for offline use.',
    technologies: 'JavaScript (ES6+), HTML5, CSS3, Web Storage API, Service Workers, Web App Manifest.',
    challenges:
      'Keeping the UI in sync with localStorage without a framework required a small pub/sub layer so any view could react to state changes. Import/export needed careful schema validation to avoid corrupting existing notes.',
    lessons:
      'Building state management by hand made the tradeoffs frameworks solve for you very concrete — especially around avoiding unnecessary re-renders and keeping persistence atomic.',
  },
  {
    id: 'git-workflow',
    name: 'Git Workflow Playground',
    tags: ['javascript', 'node.js'],
    tagLabels: ['JavaScript', 'Node.js'],
    description: 'A small CLI that visualizes feature-branch workflows and generates PR-ready commit summaries.',
    features: [
      'Parses local git history into a branch graph',
      'Suggests conventional-commit messages',
      'Generates a PR description draft',
      'Zero external dependencies',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/nzibukaemmanuel',
    architecture:
      'A Node.js CLI that shells out to git plumbing commands, parses the output into a lightweight graph structure, and renders it back to the terminal.',
    technologies: 'Node.js, JavaScript, Git internals.',
    challenges:
      'Parsing git log output reliably across edge cases (merge commits, detached HEAD, rebases) took more iteration than expected.',
    lessons: "Reinforced how much of Git's power lives in its plumbing commands, not just the porcelain CLI.",
  },
  {
    id: 'component-lab',
    name: 'Accessible Component Lab',
    tags: ['css', 'javascript'],
    tagLabels: ['CSS', 'Accessibility', 'JavaScript'],
    description:
      'A library of hand-built, fully accessible UI components — modals, tabs, comboboxes — with zero dependencies.',
    features: [
      'Full keyboard navigation on every component',
      'ARIA roles and live regions done correctly',
      'Automatic focus trapping and restoration',
      'Dark mode and reduced-motion aware',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/nzibukaemmanuel',
    architecture:
      'Each component is a self-contained ES module exposing a small factory function, with shared focus-management utilities extracted into a common helper.',
    technologies: 'JavaScript, CSS3, WAI-ARIA Authoring Practices.',
    challenges:
      'Getting focus trapping right inside modals while still respecting screen-reader announcement order was the hardest part.',
    lessons: 'Accessibility is a design constraint that, taken seriously from the start, actually simplifies component APIs.',
  },
];

export const PROJECT_FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'PWA', value: 'pwa' },
  { label: 'CSS', value: 'css' },
  { label: 'Node.js', value: 'node.js' },
];
