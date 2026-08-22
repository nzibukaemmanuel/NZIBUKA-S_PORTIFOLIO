import { Component } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { CountUp } from '../../shared/directives/count-up';
import { STATS } from '../../core/data/stats.data';

@Component({
  imports: [RevealOnScroll, CountUp],
  selector: 'app-stats',
  styleUrl: './stats.css',
  templateUrl: './stats.html',
})
export class Stats {
  protected readonly stats = STATS;
}
