export interface CommandItem {
  label: string;
  hint: string;
  target: string;
}

export const COMMANDS: CommandItem[] = [
  { label: 'Home', hint: 'Hero section', target: '#home' },
  { label: 'About', hint: 'Who I am', target: '#about' },
  { label: 'Skills', hint: 'Proficiency levels', target: '#skills' },
  { label: 'Projects', hint: 'Featured work', target: '#projects' },
  { label: 'GitHub Activity', hint: 'Live stats', target: '#github' },
  { label: 'Blog', hint: 'Writings', target: '#blog' },
  { label: 'Contact', hint: 'Get in touch', target: '#contact' },
];
