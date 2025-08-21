import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink]
})
export class RegisterComponent implements OnInit {
  form;
  success: string | undefined;
  error: string | undefined;
  submitted = false;
  shakeError = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z0-9]+$')]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z0-9]+$')]],
      rePassword: ['', [Validators.required]],
      tel: ['']
    }, { validators: this.passwordsMatch });
  }

  ngOnInit() {
    this.form.get('email')?.valueChanges.subscribe(() => { if (this.submitted) this.submitted = false; });
    this.form.get('username')?.valueChanges.subscribe(() => { if (this.submitted) this.submitted = false; });
    this.form.get('password')?.valueChanges.subscribe(() => { if (this.submitted) this.submitted = false; });
    this.form.get('rePassword')?.valueChanges.subscribe(() => { if (this.submitted) this.submitted = false; });
    this.form.get('tel')?.valueChanges.subscribe(() => { if (this.submitted) this.submitted = false; });
  }

  passwordsMatch(formGroup: any) {
    const pass = formGroup.get('password')?.value;
    const confirm = formGroup.get('rePassword')?.value;
    return pass === confirm ? null : { mismatch: true };
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
    this.authService.register(this.form.value).subscribe({
      next: () => {
        this.success = 'Успешна регистрация!';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1200);
      },
      error: err => {
        this.error = err.error?.message || 'Грешка при регистрация!';
        this.shakeError = true;
        setTimeout(() => this.shakeError = false, 500);
      }
    });
  }
}
