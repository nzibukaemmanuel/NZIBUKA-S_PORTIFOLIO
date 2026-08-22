import { Component } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { BLOG_POSTS } from '../../core/data/blog.data';

@Component({
  imports: [RevealOnScroll],
  selector: 'app-blog',
  styleUrl: './blog.css',
  templateUrl: './blog.html',
})
export class Blog {
  protected readonly posts = BLOG_POSTS;
}
