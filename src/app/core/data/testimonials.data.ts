export interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Emmanuel picks up new concepts fast and isn't afraid to dig into the DOM instead of reaching for a library first.",
    initials: 'DK',
    name: 'David K.',
    role: 'Peer Developer',
  },
  {
    quote: 'Clear commit history, thoughtful PRs, and a genuine eye for accessibility — rare at this stage.',
    initials: 'AM',
    name: 'Aline M.',
    role: 'Mentor',
  },
  {
    quote: 'The kind of engineer who reads the spec twice before writing a line of code.',
    initials: 'JT',
    name: 'Jean T.',
    role: 'Code Reviewer',
  },
];
