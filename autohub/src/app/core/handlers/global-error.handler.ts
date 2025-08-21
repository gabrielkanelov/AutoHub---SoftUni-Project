import { ErrorHandler, Injectable } from '@angular/core';
import { ErrorService } from '../services/error.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private errorService: ErrorService) {}

  handleError(error: unknown): void {
    let message = 'Възникна неочаквана грешка!';
    if (error instanceof Error) {
      message = error.message;
    }
    this.errorService.addError({ message });
    // Може да логнеш грешката в конзолата за дебъг
    console.error(error);
  }
}