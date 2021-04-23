import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User, UserLogin } from "./user-type";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  endpoint: string = "/api/auth";
  headers = { "content-type": "application/json" };

  get() {
    return this.http.get<User[]>(this.endpoint);
  }

  login(loginInfo: UserLogin) {
    const body = JSON.stringify(loginInfo);
    console.log(body);
    return this.http.post(this.endpoint, body, { headers: this.headers });
  }

  constructor(private http: HttpClient) {}
}
