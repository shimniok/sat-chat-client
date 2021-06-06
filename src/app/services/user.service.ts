import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { User } from "../types/user-type";

@Injectable({
  providedIn: "root",
})
export class UserService {
  endpoint: string = "/api/user";
  headers = { "content-type": "application/json" };
  private _user: BehaviorSubject<User> = new BehaviorSubject<User>(new User());
  public readonly user: Observable<User> = this._user.asObservable();

  saveUser(user: User): Observable<User> {
    const body = JSON.stringify(user);
    console.log(body);
    return this.http.patch<User>(this.endpoint, body, { headers: this.headers }).pipe(
      shareReplay(),
      map((u) => {
        this._user.next(u);
        return u;
      })
    );
  }

  constructor(private http: HttpClient) {
    this.http.get<User>(this.endpoint).subscribe(
      (res) => this._user.next(res),
      (err) => console.log("UserService: error calling user api")
    );
  }
}
