import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { ErrorService } from '../../core/services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink]
})
export class LoginComponent implements OnInit {
  form;
  success: string | undefined;
  error: string | undefined;
  submitted = false;
  shakeError = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private errorService: ErrorService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.form.get('email')?.valueChanges.subscribe(() => {
      if (this.submitted) {
        this.submitted = false;
      }
    });
    this.form.get('password')?.valueChanges.subscribe(() => {
      if (this.submitted) {
        this.submitted = false;
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    this.success = undefined;
    this.error = undefined;
    this.shakeError = false;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.authService.login(this.form.value).subscribe({
      next: () => {
        this.success = 'Успешно влязохте!';
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1200);
      },
      error: err => {
        this.error = err.error?.message || 'Грешен email или парола!';
        this.shakeError = true;
        setTimeout(() => this.shakeError = false, 500); // премахва shake след анимацията
      }
    });
  }
}
