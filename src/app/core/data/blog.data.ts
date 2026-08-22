export interface BlogPost {
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    date: 'Mar 2025',
    readTime: '6 min read',
    title: 'How I Built My Note-Taking App: Architecture & Lessons',
    excerpt: 'A walkthrough of the module structure, state management, and offline strategy behind the app.',
  },
  {
    date: 'Apr 2025',
    readTime: '5 min read',
    title: 'Understanding JavaScript Closures with Real Examples',
    excerpt: 'Closures explained through practical patterns I actually use, not just textbook definitions.',
  },
  {
    date: 'May 2025',
    readTime: '4 min read',
    title: 'My Git Workflow: Feature Branches, PRs, and Code Reviews',
    excerpt: 'The habits that keep my commit history clean and my collaborators happy.',
  },
];
