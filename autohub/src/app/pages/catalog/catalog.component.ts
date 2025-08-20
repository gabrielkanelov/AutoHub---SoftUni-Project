import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService, Post } from '../../core/services/post.service';
import { Observable } from 'rxjs';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  posts: Post[] = [];
  themes: any[] = [];
  error: any;

  constructor(private postService: PostService, private themeService: ThemeService) {}

  ngOnInit() {
    this.postService.getAll().subscribe({
      next: (posts) => this.posts = posts,
      error: (err) => console.error(err)
    });

    this.themeService.getThemes().subscribe({
      next: (themes) => this.themes = themes,
      error: (err) => this.error = err
    });
  }
}