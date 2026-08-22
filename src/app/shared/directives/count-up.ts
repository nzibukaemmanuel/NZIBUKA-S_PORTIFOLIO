import { Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';
import { observeOnce } from '../utils/observe-once';
import { animateCount } from '../utils/animate-count';
import { prefersReducedMotion } from '../utils/reduced-motion';

/** Counts the host's text content up to `countTo` (with `suffix`) once it scrolls into view. */
@Directive({
  selector: '[appCountUp]',
})
export class CountUp {
  readonly countTo = input.required<number>({ alias: 'appCountUp' });
  readonly suffix = input('');
  readonly duration = input(1500);

  private readonly elementRef = inject(ElementRef<HTMLElement>);

  constructor() {
    afterNextRender(() => {
      const el = this.elementRef.nativeElement;
      observeOnce(el, () => {
        if (prefersReducedMotion()) {
          el.textContent = this.countTo() + this.suffix();
          return;
        }
        animateCount(this.countTo(), this.duration(), (value) => {
          el.textContent = value + this.suffix();
        });
      });
    });
  }
}
