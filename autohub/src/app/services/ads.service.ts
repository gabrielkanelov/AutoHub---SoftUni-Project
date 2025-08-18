import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../core/models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user$ = new BehaviorSubject<User | null>(null);
  public user$: Observable<User | null> = this._user$.asObservable();

  login(user: User) {
    this._user$.next(user);
  }

  logout() {
    this._user$.next(null);
  }

  get isLoggedIn(): boolean {
    return this._user$.value !== null;
  }
}
