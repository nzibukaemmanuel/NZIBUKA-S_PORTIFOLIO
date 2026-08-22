import { Component, computed, signal } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { ProjectModal } from './project-modal/project-modal';
import { PROJECTS, PROJECT_FILTERS, Project } from '../../core/data/projects.data';

@Component({
  imports: [RevealOnScroll, ProjectModal],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly filters = PROJECT_FILTERS;
  protected readonly activeFilter = signal('all');
  protected readonly searchQuery = signal('');
  protected readonly selectedProject = signal<Project | null>(null);

  protected readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    const query = this.searchQuery().trim().toLowerCase();
    return PROJECTS.filter((project) => {
      const matchesFilter = filter === 'all' || project.tags.includes(filter);
      const matchesQuery =
        !query || project.name.toLowerCase().includes(query) || project.tags.some((t) => t.includes(query));
      return matchesFilter && matchesQuery;
    });
  });

  setFilter(filter: string): void {
    this.activeFilter.set(filter);
  }

  onSearchInput(event: Event): void {
    this.searchQuery.set((event.target as HTMLInputElement).value);
  }

  openProject(project: Project): void {
    this.selectedProject.set(project);
  }

  closeProject(): void {
    this.selectedProject.set(null);
  }
}
