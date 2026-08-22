import { Component } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { TESTIMONIALS } from '../../core/data/testimonials.data';

@Component({
  imports: [RevealOnScroll],
  selector: 'app-testimonials',
  styleUrl: './testimonials.css',
  templateUrl: './testimonials.html',
})
export class Testimonials {
  protected readonly testimonials = TESTIMONIALS;
}
