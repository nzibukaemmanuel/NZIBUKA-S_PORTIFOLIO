export interface BlogPost {
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    date: 'Mar 2025',
    readTime: '6 min read',
    title: 'How I Built My Note-Taking App: Architecture & Lessons',
    excerpt: 'A walkthrough of the module structure, state management, and offline strategy behind the app.',
    content: [
      "I wanted a note-taking app that stayed fast and predictable as the number of notes grew, so I split it into feature modules from day one: notes, folders, sync, and search each own their own state and only talk to each other through a small set of shared services.",
      'State management leans on signals rather than a heavyweight store. Each module exposes a signal-based facade, which keeps the component templates simple and makes it trivial to see where a piece of state is written versus read.',
      "Offline support was the trickiest part. Notes are written to IndexedDB first and treated as the source of truth on the client, then a background sync queue replays changes against the server when the connection comes back, resolving conflicts with a last-write-wins strategy plus a manual merge prompt for the rare case both sides changed.",
      'The biggest lesson: designing the sync queue before writing a single UI component saved me from a rewrite. Once the queue could represent "create", "update", and "delete" as replayable operations, everything else — undo, offline mode, multi-tab support — fell out of that model almost for free.',
    ],
  },
  {
    date: 'Apr 2025',
    readTime: '5 min read',
    title: 'Understanding JavaScript Closures with Real Examples',
    excerpt: 'Closures explained through practical patterns I actually use, not just textbook definitions.',
    content: [
      "A closure is just a function that remembers the variables from the scope it was created in, even after that scope has finished running. That definition is accurate but it doesn't tell you why you'd care, so here are the places closures actually show up in day-to-day code.",
      "The first is private state. Instead of reaching for a class with underscored fields, a factory function can close over a variable and return only the methods that are allowed to touch it — the variable itself is never exposed, so it can't be mutated from outside by accident.",
      'The second is event handlers and callbacks that need to remember context. A click handler created inside a loop that closes over the current index, rather than a shared mutable variable, is the classic case where understanding closures prevents an entire class of "why is this always the last item" bugs.',
      "The third is memoization. A cache object declared outside the returned function and captured by closure lets you build a simple memoize wrapper in a few lines, without any external state management. Once these three patterns clicked for me, closures stopped being an interview trivia question and became a everyday tool.",
    ],
  },
  {
    date: 'May 2025',
    readTime: '4 min read',
    title: 'My Git Workflow: Feature Branches, PRs, and Code Reviews',
    excerpt: 'The habits that keep my commit history clean and my collaborators happy.',
    content: [
      'Every change starts on its own branch, named after the ticket or the intent, never off another feature branch. That keeps `main` deployable at all times and means a branch can be reverted or abandoned without touching anyone else\'s work.',
      "Commits are small and scoped to one logical change, with messages that explain why, not just what changed — the diff already shows what changed. I rebase locally to keep the history linear before opening a pull request, so reviewers see a clean, readable sequence rather than a string of \"fix typo\" commits.",
      'Every PR gets a short description covering the problem, the approach, and how it was tested, plus a checklist for anything risky like migrations or breaking API changes. That context turns a review from "does this look right" into "does this solve the right problem the right way."',
      'For reviews, I focus on correctness and maintainability first, style second — a linter should catch style, a human should catch logic. Conflicts get resolved by rebasing onto the target branch rather than merging it in, which keeps the history easy to follow after the fact.',
    ],
  },
];
