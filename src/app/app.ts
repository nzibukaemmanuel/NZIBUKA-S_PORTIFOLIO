import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { GithubDashboard } from './components/github-dashboard/github-dashboard';
import { Blog } from './components/blog/blog';
import { Stats } from './components/stats/stats';
import { Testimonials } from './components/testimonials/testimonials';
import { Certifications } from './components/certifications/certifications';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { BackToTop } from './components/back-to-top/back-to-top';
import { CommandPalette } from './components/command-palette/command-palette';

@Component({
  imports: [
    Navbar,
    Hero,
    About,
    Skills,
    Projects,
    GithubDashboard,
    Blog,
    Stats,
    Testimonials,
    Certifications,
    Contact,
    Footer,
    BackToTop,
    CommandPalette,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
