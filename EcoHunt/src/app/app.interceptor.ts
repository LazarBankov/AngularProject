import { HttpInterceptorFn } from '@angular/common/http';
import { API } from './constants';
import { environment } from '../environments/environment.development';
import { catchError } from 'rxjs';
import { inject } from '@angular/core';
import { ErrorMsgService } from './core/error-msg/error-msg.service';
import { Router } from '@angular/router';

const {apiUrl} = environment

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith(API)) {
    req = req.clone({
      url: req.url.replace(API, apiUrl),
      withCredentials: true
    })
  }

  const errorMsgService = inject(ErrorMsgService);
  const router = inject(Router)

  return next(req).pipe(
    catchError((err) => {
      if (err.status === 401) {
        router.navigate(['/404']);
      }else {
        errorMsgService.setError(err);
        router.navigate(['/error']);
      }

      return [err];
    })
  )
};
