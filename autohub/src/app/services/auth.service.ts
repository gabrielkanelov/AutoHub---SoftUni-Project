import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user$ = new BehaviorSubject<any>(null); // null = не е логнат
  user$: Observable<any> = this._user$.asObservable();

  login() {
    this._user$.next({ name: 'Demo User' }); // примерно потребителско име
  }

  logout() {
    this._user$.next(null);
  }

  get isLoggedIn(): boolean {
    // Примерна логика – ако имаш token в localStorage
    return !!localStorage.getItem('token');
}
}

