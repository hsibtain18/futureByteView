import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes('login')) {
      const token = JSON.parse(sessionStorage.getItem('Data') || '');
      if (token) {
        const clonedRequest = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        });

        // Pass the cloned request to the next handler
        return next.handle(clonedRequest);
      }
    }

    // If no token, pass the request as is
    return next.handle(req);
  }
}
