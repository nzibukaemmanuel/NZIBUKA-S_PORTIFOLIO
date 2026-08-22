import { Component } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { CERTIFICATIONS } from '../../core/data/certifications.data';

@Component({
  imports: [RevealOnScroll],
  selector: 'app-certifications',
  styleUrl: './certifications.css',
  templateUrl: './certifications.html',
})
export class Certifications {
  protected readonly certifications = CERTIFICATIONS;
}
