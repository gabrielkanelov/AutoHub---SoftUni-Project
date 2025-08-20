import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  username = ''; 
  email = '';
  password = '';
  error: string | undefined;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.authService.login({
      email: this.email,
      password: this.password
    }).subscribe({
      next: () => this.router.navigate(['/']),
      error: err => {
        this.error = err.error?.message || 'Login failed';
      }
    });
  }
}
