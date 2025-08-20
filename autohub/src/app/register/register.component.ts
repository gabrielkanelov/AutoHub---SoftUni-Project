import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  form = {
    name: '',
    email: '',
    username: '',
    password: '',
    rePassword: '',
    tel: ''
  };
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register({
      name: this.form.name,
      email: this.form.email,
      username: this.form.username,
      password: this.form.password,
      rePassword: this.form.rePassword,
      tel: this.form.tel
    }).subscribe({
      next: user => { /* успех */ },
      error: err => { /* грешка */ }
    });
  }
}