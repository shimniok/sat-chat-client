import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types/user-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint: string = "/api/user";
  headers = { "content-type": "application/json" };

  get(): Observable<User> {
    return this.http.get<User>(this.endpoint);
  }

  update(user: User): Observable<User> {
    const body = JSON.stringify(user);
    console.log(body);
    return this.http.patch<User>(this.endpoint, body, { "headers": this.headers });
  }

  constructor(private http: HttpClient) {}
}
