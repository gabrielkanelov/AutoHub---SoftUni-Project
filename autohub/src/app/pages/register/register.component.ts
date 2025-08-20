import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class RegisterComponent {
  name = '';
  email = '';
  username = '';
  password = '';
  rePassword = '';

  constructor(private authService: AuthService, private router: Router) {}

  
//Logic for registration form submission
  onSubmit() {
    this.authService.register({
      name: this.name, 
      email: this.email,
      username: this.username,
      password: this.password,
      rePassword: this.rePassword 
    }).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err) => alert('Регистрацията неуспешна!')
    });
  }
}
