import { Component, ElementRef, HostListener, computed, effect, inject, signal, viewChild } from '@angular/core';
import { CommandPaletteService } from '../../core/services/command-palette.service';
import { ScrollService } from '../../core/services/scroll.service';
import { COMMANDS } from '../../core/data/command-palette.data';
import { trapTabKey } from '../../shared/utils/focus-trap';

@Component({
  imports: [],
  selector: 'app-command-palette',
  styleUrl: './command-palette.css',
  templateUrl: './command-palette.html',
})
export class CommandPalette {
  protected readonly palette = inject(CommandPaletteService);
  private readonly scroll = inject(ScrollService);

  protected readonly query = signal('');
  protected readonly activeIndex = signal(0);

  private readonly input = viewChild<ElementRef<HTMLInputElement>>('cmdkInput');
  private readonly dialog = viewChild<ElementRef<HTMLElement>>('dialog');

  protected readonly filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    if (!q) return COMMANDS;
    return COMMANDS.filter((c) => c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q));
  });

  constructor() {
    effect(() => {
      if (this.palette.isOpen()) {
        this.query.set('');
        this.activeIndex.set(0);
        queueMicrotask(() => this.input()?.nativeElement.focus());
      }
    });
  }

  @HostListener('document:keydown', ['$event'])
  onGlobalKeydown(event: KeyboardEvent): void {
    if ((event.metaKey || event.ctrlKey) && (event.key === 'k' || event.key === 'K')) {
      event.preventDefault();
      this.palette.toggle();
    } else if (event.key === 'Escape' && this.palette.isOpen()) {
      this.palette.close();
    }
  }

  onQueryInput(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
    this.activeIndex.set(0);
  }

  onInputKeydown(event: KeyboardEvent): void {
    const items = this.filtered();
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.activeIndex.set(Math.min(this.activeIndex() + 1, items.length - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.activeIndex.set(Math.max(this.activeIndex() - 1, 0));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      this.select(this.activeIndex());
    } else {
      const dialogEl = this.dialog()?.nativeElement;
      if (dialogEl) trapTabKey(dialogEl, event);
    }
  }

  select(index: number): void {
    const cmd = this.filtered()[index];
    if (!cmd) return;
    this.palette.close();
    this.scroll.scrollToId(cmd.target);
  }

  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) this.palette.close();
  }
}
