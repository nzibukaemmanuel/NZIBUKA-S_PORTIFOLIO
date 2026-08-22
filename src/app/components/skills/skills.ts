import { Component } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { AnimateSkillBar } from '../../shared/directives/animate-skill-bar';
import { SKILLS_COLUMN_1, SKILLS_COLUMN_2 } from '../../core/data/skills.data';

@Component({
  imports: [RevealOnScroll, AnimateSkillBar],
  selector: 'app-skills',
  styleUrl: './skills.css',
  templateUrl: './skills.html',
})
export class Skills {
  protected readonly column1 = SKILLS_COLUMN_1;
  protected readonly column2 = SKILLS_COLUMN_2;
}
