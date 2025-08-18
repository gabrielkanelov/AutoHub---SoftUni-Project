import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- добави това
import { Observable } from 'rxjs';
import { User } from './core/models/user.model';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // ако използваш standalone компоненти
  imports: [CommonModule, RouterModule], // <-- добави CommonModule тук
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user$: Observable<User | null>;
  currentYear = new Date().getFullYear(); // <-- също добавено за footer

  constructor(private authService: AuthService) {
    this.user$ = this.authService.user$;
  }

  logout(): void {
    this.authService.logout();
  }
}
