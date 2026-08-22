import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CommandPaletteService {
  readonly isOpen = signal(false);

  private triggerElement: HTMLElement | null = null;

  open(): void {
    this.triggerElement = document.activeElement as HTMLElement;
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
    this.triggerElement?.focus();
    this.triggerElement = null;
  }

  toggle(): void {
    if (this.isOpen()) this.close();
    else this.open();
  }
}
