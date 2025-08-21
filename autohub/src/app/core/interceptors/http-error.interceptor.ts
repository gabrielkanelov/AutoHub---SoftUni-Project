import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ErrorService } from '../services/error.service';
import { catchError } from 'rxjs/operators';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(ErrorService);
  return next(req).pipe(
    catchError((err: any) => {
      errorService.addError({
        message: err.error?.message || err.statusText || 'HTTP Error',
        details: `Status: ${err.status}`
      });
      throw err;
    })
  );
};