import { Component, HostListener, inject, signal } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  imports: [],
  selector: 'app-back-to-top',
  styleUrl: './back-to-top.css',
  templateUrl: './back-to-top.html',
})
export class BackToTop {
  private readonly scroll = inject(ScrollService);
  protected readonly isVisible = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isVisible.set(window.scrollY > 600);
  }

  goToTop(): void {
    this.scroll.scrollToTop();
  }
}
