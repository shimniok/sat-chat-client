import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User, UserLogin } from "./user-type";

@Injectable({
  providedIn: "root",
})
export class AuthService implements OnInit {
  endpoint: string = "/api/auth";
  headers = { "content-type": "application/json" };

  getUser() {
    return this.http.get<User>(this.endpoint);
  }

  login(loginInfo: UserLogin) {
    const body = JSON.stringify(loginInfo);
    console.log(body);
    return this.http.post(this.endpoint, body, { headers: this.headers });
  }

  logout() {
    return this.http.delete(this.endpoint);
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {}
}
