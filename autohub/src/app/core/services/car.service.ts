import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Car {
  _id?: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  body: string;
  fuel: string;
}

@Injectable({ providedIn: 'root' })
export class CarService {
  private apiUrl = 'http://localhost:3000/cars';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  create(car: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, car);
  }
}