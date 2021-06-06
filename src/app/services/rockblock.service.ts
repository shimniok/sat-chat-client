import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RockblockService {
  options = { headers: { "content-type": "application/json" } };

  send(messageText: string) {
    let url = "/api/send";
    let body = { message: messageText };
    return this.http.post(url, body, this.options);
  }

  constructor(private http: HttpClient) {}
}
