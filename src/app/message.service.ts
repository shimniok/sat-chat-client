import { Injectable, Input, OnDestroy, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Message } from "./message-type";
import { BehaviorSubject, Observable, Subject, timer } from "rxjs";
import { retry, share, switchMap, takeUntil } from "rxjs/operators";


@Injectable()
export class MessageService implements OnDestroy {
  url = "/api/message";
  headers = { "content-type": "application/json" };
  messages: Observable<Message[]>;
  private stopPolling = new Subject();

  constructor(private http: HttpClient) {
    this.messages = timer(1, 30000).pipe(
      switchMap(() =>
        this.http.get<Message[]>("/api/message", { headers: this.headers })
      ),
      retry(2),
      share(),
      takeUntil(this.stopPolling)
    );
  }

  getMessages() {
    console.log("getMessages()");
    return this.messages;
  }

  ngOnDestroy() {
    this.stopPolling.next();
  }
}
