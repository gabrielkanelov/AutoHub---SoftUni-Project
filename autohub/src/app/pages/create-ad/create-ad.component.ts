import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService, Post } from '../../core/services/post.service';

@Component({
  selector: 'app-create-ad',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.scss']
})
export class CreateAdComponent {
  post: Post = {
    title: '',
    description: '',
    imageUrl: '',
    price: 0
  };

  constructor(private postService: PostService, private router: Router) {}

  onSubmit() {
    this.postService.create(this.post).subscribe({
      next: () => this.router.navigate(['/catalog']),
      error: (err) => alert('Грешка при създаване!')
    });
  }
}
