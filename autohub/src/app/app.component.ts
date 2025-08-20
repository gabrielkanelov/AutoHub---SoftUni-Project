import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule] 
})
export class AppComponent {
  title = 'AutoHub';
  currentYear = new Date().getFullYear();

  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.authService.clearUser();
        this.router.navigate(['/']);
      },
      error: err => {
        console.error('Logout error:', err);
      }
    });
  }
}
