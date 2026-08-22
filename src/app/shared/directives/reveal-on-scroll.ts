import { Directive, ElementRef, afterNextRender, inject } from '@angular/core';
import { observeOnce } from '../utils/observe-once';
import { prefersReducedMotion } from '../utils/reduced-motion';

/** Adds the `in-view` class (see .reveal / .timeline-item / .exp-item in utilities.css) once scrolled into view. */
@Directive({
  selector: '[appReveal]',
})
export class RevealOnScroll {
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  constructor() {
    afterNextRender(() => {
      const el = this.elementRef.nativeElement;
      if (prefersReducedMotion()) {
        el.classList.add('in-view');
        return;
      }
      observeOnce(el, () => el.classList.add('in-view'));
    });
  }
}
