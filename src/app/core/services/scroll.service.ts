import { Injectable } from '@angular/core';
import { prefersReducedMotion } from '../../shared/utils/reduced-motion';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  scrollToId(id: string): void {
    const targetId = id.startsWith('#') ? id.slice(1) : id;
    const el = document.getElementById(targetId);
    if (!el) return;
    el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
    history.pushState(null, '', '#' + targetId);
    this.moveFocusTo(el);
  }

  /** Moves keyboard/AT focus to a non-interactive target after in-page navigation. */
  private moveFocusTo(el: HTMLElement): void {
    const hadTabIndex = el.hasAttribute('tabindex');
    if (!hadTabIndex) el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
    if (!hadTabIndex) {
      el.addEventListener('blur', () => el.removeAttribute('tabindex'), { once: true });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  }
}
