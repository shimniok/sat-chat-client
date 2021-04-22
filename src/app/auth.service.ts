import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user-type';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<User[]>("/api/auth");
  }

  // post() {
  //   return
  // }
  
}
