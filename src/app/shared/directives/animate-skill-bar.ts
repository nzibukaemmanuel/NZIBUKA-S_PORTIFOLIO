import { Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';
import { observeOnce } from '../utils/observe-once';
import { prefersReducedMotion } from '../utils/reduced-motion';

/** Sets the host's width to `percent` once its containing `.skill-row` scrolls into view. */
@Directive({
  selector: '[appAnimateSkillBar]',
})
export class AnimateSkillBar {
  readonly percent = input.required<number>({ alias: 'appAnimateSkillBar' });

  private readonly elementRef = inject(ElementRef<HTMLElement>);

  constructor() {
    afterNextRender(() => {
      const el = this.elementRef.nativeElement;
      if (prefersReducedMotion()) {
        el.style.transition = 'none';
      }
      const row = el.closest('.skill-row') ?? el;
      observeOnce(row, () => {
        el.style.width = this.percent() + '%';
      });
    });
  }
}
