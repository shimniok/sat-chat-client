import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  HttpInterceptor,
  HttpEvent,
  HttpErrorResponse,
  HttpRequest,
  HttpHandler,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("intercepting http request");
    return next.handle(httpRequest).pipe(
      catchError((err) => {
        if (err.status == 401) {
          console.log("intercept: 401");
          this.router.navigate(["login"]);
          return throwError(err);
        }
        return next.handle(httpRequest.clone());
      })
    );
  }

  constructor(private router: Router) {}
}
