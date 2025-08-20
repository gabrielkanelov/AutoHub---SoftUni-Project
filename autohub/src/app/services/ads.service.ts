import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../core/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Car } from '../core/models/car.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user$ = new BehaviorSubject<User | null>(null);
  public user$: Observable<User | null> = this._user$.asObservable();

  constructor(private http: HttpClient) {}

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

//CRUD operations for ads

@Injectable({ providedIn: 'root' })
export class AdsService {
  private apiUrl = 'http://localhost:3000/cars'; // Adjust the API

  constructor(private http: HttpClient) {}

  getAds(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  getAd(id: string): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${id}`);
  }

  createAd(car: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, car);
  }

  updateAd(id: string, car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.apiUrl}/${id}`, car);
  }

  deleteAd(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getThemes(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/themes');
  }

  getThemeById(id: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/themes/${id}`);
  }

  createTheme(data: { themeName: string; postText: string; imageUrl: string }) {
    return this.http.post('http://localhost:3000/api/themes', data);
  }
}


