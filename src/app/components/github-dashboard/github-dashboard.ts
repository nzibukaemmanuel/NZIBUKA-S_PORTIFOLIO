import { Component, inject, OnInit } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { GithubService } from '../../core/services/github.service';

@Component({
  imports: [RevealOnScroll],
  selector: 'app-github-dashboard',
  styleUrl: './github-dashboard.css',
  templateUrl: './github-dashboard.html',
})
export class GithubDashboard implements OnInit {
  protected readonly github = inject(GithubService);

  ngOnInit(): void {
    void this.github.load();
  }
}
