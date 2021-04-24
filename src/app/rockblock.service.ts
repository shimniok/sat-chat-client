import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RockblockService {
  headers = { "content-type": "application/json" };

  send(messageText: string) {
    let url = "/api/send";
    let body = { message: messageText };
    return this.http.post(url, body, { headers: this.headers });
  }

  constructor(private http: HttpClient) {}
}
