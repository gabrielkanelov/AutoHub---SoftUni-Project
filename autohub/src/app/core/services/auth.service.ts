import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user$ = new BehaviorSubject<User | null>(this.getUserFromStorage());
  public user$ = this._user$.asObservable();

  get isLoggedIn(): boolean {
    return !!this._user$.value;
  }

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  login(data: any): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/login', data).pipe(
      tap((user: User) => {
        this._user$.next(user); 
        this.setUserToStorage(user);
      })
    );
  }

  register(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/register', data);
  }

  logout(): Observable<any> {
    return this.http.post('http://localhost:3000/api/logout', {}, { withCredentials: true }).pipe(
      tap(() => {
        this.clearUser(); // Clear user data after logout
        this.removeUserFromStorage();
      })
    );
  }

  getProfile(): Observable<User> {
    return this.http.get<User>(
      `${this.apiUrl}/profile`,
      { withCredentials: true }
    );
  }

  updateProfile(data: Partial<User>): Observable<User> {
    return this.http.patch<User>(
      `${this.apiUrl}/profile`,
      data,
      { withCredentials: true }
    ).pipe(
      tap((user: User) => {
        this._user$.next(user);
        this.setUserToStorage(user);
      })
    );
  }

  private setUserToStorage(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  private removeUserFromStorage() {
    localStorage.removeItem('user');
  }

  private getUserFromStorage(): User | null {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }

  clearUser() {
    this._user$.next(null);
  }
}


