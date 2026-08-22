import { Component, inject, signal } from '@angular/core';
import { PhotoLightbox } from './photo-lightbox/photo-lightbox';
import { ThemeService, ThemeMode } from '../../core/services/theme.service';
import { CommandPaletteService } from '../../core/services/command-palette.service';
import { ScrollService } from '../../core/services/scroll.service';

interface NavLink {
  label: string;
  target: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'About', target: '#about' },
  { label: 'Skills', target: '#skills' },
  { label: 'Projects', target: '#projects' },
  { label: 'GitHub', target: '#github' },
  { label: 'Blog', target: '#blog' },
  { label: 'Contact', target: '#contact' },
];

@Component({
  imports: [PhotoLightbox],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly theme = inject(ThemeService);
  protected readonly commandPalette = inject(CommandPaletteService);
  private readonly scroll = inject(ScrollService);

  protected readonly navLinks = NAV_LINKS;
  protected readonly isMobileMenuOpen = signal(false);
  protected readonly isLightboxOpen = signal(false);

  setTheme(mode: ThemeMode): void {
    this.theme.setMode(mode);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((v) => !v);
  }

  navigate(target: string): void {
    this.isMobileMenuOpen.set(false);
    this.scroll.scrollToId(target);
  }
}
