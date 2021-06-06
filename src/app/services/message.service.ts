import { Injectable, Input, OnDestroy, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Message } from "../types/message-type";
import { BehaviorSubject, Observable, Subject, timer } from "rxjs";
import { retry, share, switchMap, takeUntil } from "rxjs/operators";


@Injectable()
export class MessageService implements OnDestroy {
  options = { headers: { "content-type": "application/json" } };
  messages: Observable<Message[]>;
  private stopPolling = new Subject();
  private pollingInterval: number = 10;
  private timeToCheck: number = -1;
  private pleaseRefresh: boolean = true;

  constructor(private http: HttpClient) {
    this.timeToCheck = this.pollingInterval;
    this.messages = timer(1, 1000).pipe(
      switchMap((x) => {
        if (this.pleaseRefresh || x >= this.timeToCheck) {
          //console.log("polling messages %d", x);
          this.timeToCheck = x + this.pollingInterval;
          this.pleaseRefresh = false;
          return this.loadMessages();
        }
        return this.messages;
      }),
      retry(2),
      share(),
      takeUntil(this.stopPolling)
    );
  }

  loadMessages(): Observable<Message[]> {
    //console.log("loadMessages()");
    return this.http.get<Message[]>("/api/message", this.options);
  }

  refresh() {
    console.log("refresh()");
    this.pleaseRefresh = true;
  }

  get() {
    //console.log("getMessages()");
    return this.messages;
  }

  ngOnDestroy() {
    this.stopPolling.next();
  }
}
