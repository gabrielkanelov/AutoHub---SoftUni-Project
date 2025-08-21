import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { Theme } from '../../core/models/theme.model';
import { Post } from '../../core/models/comment.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class DetailsComponent implements OnInit {
  theme: Theme | null = null;
  newPostText: string = '';
  error: string | null = null;

  constructor(private route: ActivatedRoute, private themeService: ThemeService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id || !/^[a-f\d]{24}$/i.test(id)) {
      this.error = 'Invalid theme id!';
      return;
    }
    this.themeService.getThemeById(id).subscribe({
      next: (theme: Theme) => this.theme = theme,
      error: (err: any) => {
        this.error = 'Could not load theme';
        console.error(err);
      }
    });
  }

  onAddPost() {
    this.themeService.addPost(this.theme!._id!, this.newPostText).subscribe({
      next: (theme: Theme) => this.theme = theme,
      error: (err: any) => this.error = 'Could not add post'
    });
  }

  editPost(themeId: string, postId: string, postText: string) {
    this.themeService.editPost(themeId, postId, postText).subscribe({
      next: (post: Post) => { /* update post in theme */ },
      error: (err: any) => this.error = 'Could not edit post'
    });
  }

  deletePost(themeId: string, postId: string) {
    this.themeService.deletePost(themeId, postId).subscribe({
      next: () => { /* remove post from theme */ },
      error: (err: any) => this.error = 'Could not delete post'
    });
  }

  likePost(postId: string) {
    this.themeService.likePost(postId).subscribe({
      next: () => { /* update likes count */ },
      error: (err: any) => this.error = 'Could not like post'
    });
  }
}
