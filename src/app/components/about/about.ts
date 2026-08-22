import { Component } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { ABOUT_CARDS, ABOUT_TIMELINE } from '../../core/data/about.data';

@Component({
  imports: [RevealOnScroll],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  protected readonly cards = ABOUT_CARDS;
  protected readonly timeline = ABOUT_TIMELINE;
}
