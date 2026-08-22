import { Component, ElementRef, HostListener, effect, input, output, viewChild } from '@angular/core';
import { Project } from '../../../core/data/projects.data';
import { trapTabKey } from '../../../shared/utils/focus-trap';

@Component({
  imports: [],
  selector: 'app-project-modal',
  styleUrl: './project-modal.css',
  templateUrl: './project-modal.html',
})
export class ProjectModal {
  readonly project = input<Project | null>(null);
  readonly close = output<void>();

  private readonly dialog = viewChild<ElementRef<HTMLElement>>('dialog');
  private triggerElement: HTMLElement | null = null;

  constructor() {
    effect(() => {
      if (this.project()) {
        document.body.style.overflow = 'hidden';
        this.triggerElement = document.activeElement as HTMLElement;
        queueMicrotask(() => this.dialog()?.nativeElement.querySelector<HTMLElement>('.modal-close')?.focus());
      } else {
        document.body.style.overflow = '';
        this.triggerElement?.focus();
        this.triggerElement = null;
      }
    });
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (!this.project()) return;
    if (event.key === 'Escape') {
      this.close.emit();
      return;
    }
    const dialogEl = this.dialog()?.nativeElement;
    if (dialogEl) trapTabKey(dialogEl, event);
  }

  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) this.close.emit();
  }
}
