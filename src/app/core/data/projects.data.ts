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
    id: 'auts',
    name: 'Achievement Utilization Tracking System',
    tags: ['angular'],
    tagLabels: ['Angular', 'GraphQL', 'TypeScript'],
    description:
      'Angular frontend for tracking employee achievements, utilization rates, and bonus metrics across teams, talking to a Spring Boot backend entirely over GraphQL.',
    features: [
      'Standalone components with a signal-based store (@ngrx/signals) — no actions, reducers, or effects',
      'Every server call goes through Apollo GraphQL, no REST calls in feature code',
      'Styled with Tailwind CSS v4 on a shared design system package',
      'Unit tested with Vitest and linted with ESLint + Prettier on every commit',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/nzibukaemmanuel/Achievement_and_utilization_tracking_system',
    architecture:
      'Angular 21 standalone-component app with a signalStore-based state layer and an Apollo GraphQL data layer as the sole path to the backend. Design tokens come from a shared @amalitechnpm/at-design-system package copied in at build time.',
    technologies: 'Angular 21, @ngrx/signals, apollo-angular (GraphQL), Tailwind CSS v4, Vitest, Yarn 4.',
    challenges:
      'Keeping the data layer 100% GraphQL while the backend schema was still evolving meant coordinating typed query/mutation contracts closely with the backend team instead of falling back to ad-hoc REST calls.',
    lessons:
      "Signal stores remove most of classic NgRx's boilerplate for this kind of app, and a typed GraphQL schema surfaces frontend/backend contract mismatches far earlier than REST did.",
  },
  {
    id: 'insightflow-dashboard',
    name: 'InsightFlow — Reporting Dashboard',
    tags: ['angular'],
    tagLabels: ['Angular', 'TypeScript', 'REST API'],
    description:
      'A retail analytics reporting dashboard — revenue trends, top products, customer satisfaction, and regional performance — built frontend-first against a Spring Boot API contract.',
    features: [
      'Fully clickable with zero backend running, via a mock-API HTTP interceptor seeded with realistic data',
      'JWT auth interceptor and route guards (auth + admin) protecting the dashboard and admin views',
      'Data-source and pipeline management, including a live-updating pipeline run status',
      'One config flag swaps the whole app from mock data to the real Spring Boot backend',
    ],
    demoUrl: 'https://retail-analytics-management-system.vercel.app',
    githubUrl: 'https://github.com/nzibukaemmanuel/retail_analytics_management_system',
    architecture:
      'Angular 19 standalone components with no UI framework or chart library. A single `useMockApi` flag controls an HTTP interceptor that answers every request with in-memory seed data shaped exactly like the real backend DTOs, so the UI could be built and demoed before backend endpoints existed.',
    technologies: 'Angular 19, TypeScript, custom CSS, RxJS, JWT auth, route guards.',
    challenges:
      'Several metrics endpoints the dashboard depends on were still stubs on the backend, so the mock layer had to mirror the agreed DTO shapes precisely to make the eventual cutover a one-line config change instead of a rewrite.',
    lessons:
      'Building against a mocked, DTO-accurate API let frontend work proceed in parallel with backend development without blocking on it — a pattern worth reusing on the next team project.',
  },
  {
    id: 'insightflow-bi-pipeline',
    name: 'InsightFlow — Multi-Source BI Pipeline',
    tags: ['python', 'angular'],
    tagLabels: ['Python', 'Django', 'Angular', 'Docker'],
    description:
      'A multi-source business intelligence pipeline for retail data — ingesting POS CSVs, API feeds, and internal databases, then transforming and loading them into a star-schema warehouse. Built as part of an AmaliTech team project spanning backend, data engineering, and frontend roles.',
    features: [
      'Django REST Framework backend for ingestion, auth, and reporting/admin metrics APIs',
      'ETL pipeline and star-schema warehouse design for ingested retail data',
      'Angular dashboard and admin panel consuming the reporting API',
      'Fully containerized: Postgres, RabbitMQ, and MinIO orchestrated with Docker Compose',
    ],
    demoUrl: 'https://dev.d1q94y1kk58abn.amplifyapp.com/',
    githubUrl: 'https://github.com/nzibukaemmanuel/busness-data-analyser',
    architecture:
      'A Dockerized, multi-service stack: Django/DRF backend, Angular frontend, an ETL consumer reading from RabbitMQ, Postgres for both app data and the warehouse, and MinIO for object storage. `docker compose up` brings up every service, with migrations run automatically on backend startup.',
    technologies: 'Python, Django REST Framework, Angular, PostgreSQL, RabbitMQ, MinIO, Docker Compose, Terraform.',
    challenges:
      'Coordinating a pipeline that spans ingestion, transformation, and reporting across a multi-role team meant getting the warehouse schema and DTO contracts agreed early, since every layer downstream depended on them.',
    lessons:
      'Working data engineering and Python into a primarily Angular/TypeScript skill set showed how much frontend patterns (typed contracts, clear service boundaries) carry over directly into backend and pipeline design.',
  },
  {
    id: 'gather-ecommerce',
    name: 'Gather — E-commerce UI',
    tags: ['angular'],
    tagLabels: ['Angular', 'TypeScript', 'Reactive Forms'],
    description:
      'An Angular 17 implementation of an e-commerce homepage, sign-up/login, and full forgot-password flow, built from a design spec with a fully reusable component library.',
    features: [
      'Reactive forms with a custom cross-field validator for password confirmation',
      'A 5-step forgot-password flow: request → check inbox → set new password → success → expired link',
      'Shared inline-SVG icon library and view-encapsulated styles reused across every component',
      'An RxJS-backed AuthModalService so any component can open the login/signup modal without prop-drilling',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/nzibukaemmanuel/GatherEverydayProducts',
    architecture:
      'Angular 17 standalone components, each with its own view-encapsulated stylesheet. Shared design tokens, resets, and icon-tint utilities live in the global stylesheet since they cross component boundaries; everything else stays local.',
    technologies: 'Angular 17, TypeScript, Reactive Forms, RxJS, custom CSS.',
    challenges:
      'Modeling a 5-step forgot-password flow as a single component with clean state transitions — without a router for each step — took a few iterations to keep readable.',
    lessons:
      'A small shared service (AuthModalService) turned out to be a much simpler answer than prop-drilling or a heavier state library for a UI-only, non-persisted flow like this.',
  },
  {
    id: 'marginalia-notes',
    name: 'Marginalia — Note Taking App',
    tags: ['javascript', 'pwa'],
    tagLabels: ['JavaScript', 'PWA', 'CSS'],
    description:
      'A dependency-free, installable note-taking PWA with categories, theming, a full auth-flow demo, and offline support — no framework, no build step.',
    features: [
      'Category-based organization with color labels, search, and filtering',
      'Light/dark/auto theme switching plus font-family preference, both persisted',
      'Toast notifications with Web Audio sound cues, and a Geolocation-tagged note option',
      'Installable and fully offline via a dedicated service worker',
    ],
    demoUrl: 'https://fem-06-note-taking-app.vercel.app',
    githubUrl: 'https://github.com/nzibukaemmanuel/fem-06-note_taking_app',
    architecture:
      'Vanilla ES modules split by responsibility: `storage.js` owns every localStorage/sessionStorage read and write, `noteManager.js` holds the in-memory note model and mutations, `ui.js` is pure rendering with no storage access, and `main.js` wires up whichever page is currently loaded (the notes app or one of the four auth pages). A separate service worker handles the offline/PWA layer.',
    technologies: 'JavaScript (ES6+), HTML5, CSS3, Web Storage API, Geolocation API, Service Workers, Web App Manifest.',
    challenges:
      'Keeping the module count to exactly five (an assignment constraint) while still cleanly separating five auth pages, theming, and note management meant merging several page-specific scripts into one dispatch-by-page `main.js` without losing separation of concerns.',
    lessons:
      'Building storage, rendering, and state as strictly separate modules — with no framework enforcing it — made very concrete why frameworks separate those concerns for you by default.',
  },
  {
    id: 'task-manager-api',
    name: 'Task Manager API Client',
    tags: ['javascript', 'node.js'],
    tagLabels: ['JavaScript', 'Node.js', 'Testing'],
    description:
      'A JavaScript client that fetches, models, and analyzes task data from a public REST API, sharing the exact same ES modules between a Node CLI and a browser UI.',
    features: [
      'One set of ES modules powers both a readline-based Node CLI and a zero-build browser UI',
      'Custom APIError/ValidationError classes and a closure-based memoization cache',
      'A promise-based concurrency limiter for rate-limited requests',
      'Offline unit tests plus a mocked-fetch integration test suite, run with Jest',
    ],
    demoUrl: '#',
    githubUrl:
      'https://github.com/nzibukaemmanuel/Amalitech-Apprenticeship-specialization-labs/tree/main/FEM_07_(testing%20basics)_TaskManagerAPI',
    architecture:
      'Plain ES modules for API access, data models, and processing are imported unchanged by two entry points: a Node CLI (`main.js`) and a browser app (`app.js`) served by a zero-dependency static file server. Node-only concerns (file export) are isolated so the shared modules stay environment-agnostic.',
    technologies: 'JavaScript (ES6+), Node.js, Jest, native fetch, Promise.all-based concurrency.',
    challenges:
      'Writing API and model logic that runs unmodified in both Node and the browser meant avoiding any Node-only API in the shared modules and pushing environment-specific code (file export, CLI menus) to the edges.',
    lessons:
      'Testing offline logic and network logic separately (unit tests vs. a mocked-fetch integration suite) caught bugs earlier and made the suite fast enough to run on every change.',
  },
];

export const PROJECT_FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Angular', value: 'angular' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'Python', value: 'python' },
  { label: 'Node.js', value: 'node.js' },
  { label: 'PWA', value: 'pwa' },
];
