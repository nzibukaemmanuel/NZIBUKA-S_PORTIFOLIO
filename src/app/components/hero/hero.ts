import { Component, afterNextRender, signal } from '@angular/core';
import { prefersReducedMotion } from '../../shared/utils/reduced-motion';

type SegmentType = 'kw' | 'var' | 'str' | 'com' | 'fn' | 'plain';

interface Segment {
  type: SegmentType;
  text: string;
}

const SNIPPET: Segment[] = [
  { type: 'kw', text: 'const' },
  { type: 'var', text: ' engineer ' },
  { type: 'plain', text: '= ' },
  { type: 'plain', text: '{\n  ' },
  { type: 'var', text: 'name' },
  { type: 'plain', text: ': ' },
  { type: 'str', text: "'Emmanuel Nzibuka'" },
  { type: 'plain', text: ',\n  ' },
  { type: 'var', text: 'stack' },
  { type: 'plain', text: ': [' },
  { type: 'str', text: "'Angular'" },
  { type: 'plain', text: ', ' },
  { type: 'str', text: "'GraphQL'" },
  { type: 'plain', text: ', ' },
  { type: 'str', text: "'Node.js'" },
  { type: 'plain', text: ', ' },
  { type: 'str', text: "'Python'" },
  { type: 'plain', text: '],\n  ' },
  { type: 'var', text: 'focus' },
  { type: 'plain', text: ': ' },
  { type: 'str', text: "'full-stack, end to end'" },
  { type: 'plain', text: ',\n};\n\n' },
  { type: 'com', text: '// building something new' },
  { type: 'fn', text: '\nship' },
  { type: 'plain', text: '(engineer);' },
];

const CLASS_FOR: Record<SegmentType, string> = {
  kw: 'tk-kw',
  var: 'tk-var',
  str: 'tk-str',
  com: 'tk-com',
  fn: 'tk-fn',
  plain: '',
};

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function segmentHtml(type: SegmentType, text: string): string {
  return `<span class="${CLASS_FOR[type]}">${escapeHtml(text)}</span>`;
}

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly terminalHtml = signal('<span class="terminal-cursor"></span>');

  constructor() {
    afterNextRender(() => this.typeTerminal());
  }

  private typeTerminal(): void {
    if (prefersReducedMotion()) {
      this.terminalHtml.set(SNIPPET.map((seg) => segmentHtml(seg.type, seg.text)).join(''));
      return;
    }

    let segIndex = 0;
    let charIndex = 0;

    const typeNext = (): void => {
      if (segIndex >= SNIPPET.length) return;
      const seg = SNIPPET[segIndex];
      charIndex++;
      const done = SNIPPET.slice(0, segIndex)
        .map((s) => segmentHtml(s.type, s.text))
        .join('');
      const partial = segmentHtml(seg.type, seg.text.slice(0, charIndex));
      this.terminalHtml.set(done + partial + '<span class="terminal-cursor"></span>');

      if (charIndex >= seg.text.length) {
        segIndex++;
        charIndex = 0;
      }
      setTimeout(typeNext, 14 + Math.random() * 22);
    };

    setTimeout(typeNext, 400);
  }
}
