export interface StatBlock {
  target: number;
  suffix: string;
  label: string;
}

export const STATS: StatBlock[] = [
  { target: 10, suffix: '+', label: 'Projects' },
  { target: 600, suffix: '+', label: 'Commits' },
  { target: 40, suffix: '+', label: 'Pull Requests' },
  { target: 8, suffix: '', label: 'Certificates' },
];
