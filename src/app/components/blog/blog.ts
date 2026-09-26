import { Component, signal } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { BlogPostModal } from './blog-post-modal/blog-post-modal';
import { BLOG_POSTS, BlogPost } from '../../core/data/blog.data';

@Component({
  imports: [RevealOnScroll, BlogPostModal],
  selector: 'app-blog',
  styleUrl: './blog.css',
  templateUrl: './blog.html',
})
export class Blog {
  protected readonly posts = BLOG_POSTS;
  protected readonly selectedPost = signal<BlogPost | null>(null);

  openPost(post: BlogPost): void {
    this.selectedPost.set(post);
  }

  closePost(): void {
    this.selectedPost.set(null);
  }
}
