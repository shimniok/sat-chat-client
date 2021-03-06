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
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private auth: AuthService) {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("intercepting http request");
    return next.handle(httpRequest).pipe(
      catchError((err) => {
        if ([401, 403].includes(err.status)) {
          console.log("intercept 401/403");
          this.auth.logout();
          this.router.navigate(["login"]);
          return throwError(err);
        }
        return next.handle(httpRequest.clone());
      })
    );
  }
}
