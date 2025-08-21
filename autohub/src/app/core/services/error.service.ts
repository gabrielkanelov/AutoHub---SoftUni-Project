import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface AppError {
  message: string;
  details?: string;
  timestamp?: Date;
}

@Injectable({ providedIn: 'root' })
export class ErrorService {
  private _errors$ = new BehaviorSubject<AppError[]>([]);
  public errors$ = this._errors$.asObservable();

  addError(error: AppError) {
    const current = this._errors$.value;
    this._errors$.next([...current, { ...error, timestamp: new Date() }]);
  }

  removeError(index: number) {
    const current = [...this._errors$.value];
    current.splice(index, 1);
    this._errors$.next(current);
  }

  clearErrors() {
    this._errors$.next([]);
  }
}