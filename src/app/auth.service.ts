import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User, UserLogin } from "./user-type";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService implements OnInit {
  endpoint: string = "/api/auth";
  headers = { "content-type": "application/json" };
  user: Observable<User> = this.http.get<User>(this.endpoint);
  isLoggedIn: Boolean = false;

  getUser(): Observable<User> {
    return this.user;
  }

  login(loginInfo: UserLogin) {
    const body = JSON.stringify(loginInfo);
    // console.log(body);
    this.user = this.http.post<User>(this.endpoint, body, { headers: this.headers });
    this.user.subscribe(
      (x) => (this.isLoggedIn = true),
      () => (this.isLoggedIn = false)
    );
    return this.user;
  }

  logout() {
    this.http.delete<User>(this.endpoint).subscribe(
      () => (this.isLoggedIn = false),
      () => console.log("logout error")
    );
  }

  constructor(private http: HttpClient) {
    this.user.subscribe(
      (x) => (this.isLoggedIn = true),
      () => (this.isLoggedIn = false)
    );
  }

  ngOnInit() {}
}
