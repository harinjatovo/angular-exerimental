import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class InjectTokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const securedReq = req.clone({
        headers: req.headers
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/json')
          .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      });
      return next.handle(securedReq);
  }
}
