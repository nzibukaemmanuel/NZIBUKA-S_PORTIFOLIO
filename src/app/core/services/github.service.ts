import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface GithubRepo {
  name: string;
  description: string | null;
  stars: number;
  forks: number;
  language: string | null;
  url: string;
}

export interface GithubStats {
  publicRepos: number;
  followers: number;
  following: number;
  stars: number;
  topRepos: GithubRepo[];
}

interface GithubState {
  status: 'loading' | 'ready' | 'error';
  data: GithubStats | null;
  statusText: string;
}

interface RawGithubUser {
  public_repos: number;
  followers: number;
  following: number;
}

interface RawGithubRepo {
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
  updated_at: string;
}

const USERNAME = 'nzibukaemmanuel';
const CACHE_KEY = 'gh-dashboard-cache';
const CACHE_TTL_MS = 60 * 60 * 1000;

@Injectable({ providedIn: 'root' })
export class GithubService {
  private readonly http = inject(HttpClient);

  readonly state = signal<GithubState>({ status: 'loading', data: null, statusText: 'Fetching latest activity…' });

  async load(): Promise<void> {
    const cached = this.readCache();
    if (cached) {
      this.state.set({ status: 'ready', data: cached, statusText: 'Loaded from cache (refreshes hourly)' });
      return;
    }

    try {
      const [user, repos] = await Promise.all([
        firstValueFrom(this.http.get<RawGithubUser>(`https://api.github.com/users/${USERNAME}`)),
        firstValueFrom(
          this.http.get<RawGithubRepo[]>(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`)
        ),
      ]);
      const data = this.computeStats(user, repos);
      this.writeCache(data);
      this.state.set({ status: 'ready', data, statusText: 'Live data from the GitHub API' });
    } catch {
      const stale = this.readCache(true);
      if (stale) {
        this.state.set({ status: 'ready', data: stale, statusText: 'Unable to reach GitHub — showing cached data' });
      } else {
        this.state.set({
          status: 'error',
          data: null,
          statusText: 'Unable to fetch GitHub activity right now. Please try again later.',
        });
      }
    }
  }

  private computeStats(user: RawGithubUser, repos: RawGithubRepo[]): GithubStats {
    let stars = 0;
    for (const r of repos) stars += r.stargazers_count || 0;

    const topRepos = [...repos]
      .sort((a, b) => b.stargazers_count - a.stargazers_count || Date.parse(b.updated_at) - Date.parse(a.updated_at))
      .slice(0, 5)
      .map((r) => ({
        name: r.name,
        description: r.description,
        stars: r.stargazers_count,
        forks: r.forks_count,
        language: r.language,
        url: r.html_url,
      }));

    return {
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      stars,
      topRepos,
    };
  }

  private readCache(ignoreTtl = false): GithubStats | null {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw) as { savedAt: number; data: GithubStats };
      if (!ignoreTtl && Date.now() - parsed.savedAt > CACHE_TTL_MS) return null;
      return parsed.data;
    } catch {
      return null;
    }
  }

  private writeCache(data: GithubStats): void {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ savedAt: Date.now(), data }));
    } catch {
      /* storage full or unavailable — ignore */
    }
  }
}
