import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User, UserLogin } from "../types/user-type";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService implements OnInit {
  endpoint: string = "/api/auth";
  headers = { "content-type": "application/json" };
  user: Observable<User> = this.http.get<User>(this.endpoint);
  isLoggedIn: Boolean;

  constructor(private http: HttpClient) {
    this.user.subscribe((u) => {
      console.log("auth: constructor getUser() u = %s", u.email);
      this.isLoggedIn = true;
    },
    (err) => {
      console.log("auth: constructor getUser() error");
      this.isLoggedIn = false;
    });
  }

  getUser(): Observable<User> {
    return this.user;
  }

  login(loginInfo: UserLogin) {
    return this.http.post<User>(this.endpoint, JSON.stringify(loginInfo), { headers: this.headers }).pipe(
      map((u) => {
        console.log("pipe map u = %s", u.email);
        this.isLoggedIn = true;
        return u;
      })
    );
  }

  logout() {
    return this.http.delete<User>(this.endpoint).pipe(
      map((u) => {
        console.log("logout u=", u.email);
        this.isLoggedIn = false;
      })
    );
  }

  ngOnInit() {}
}
