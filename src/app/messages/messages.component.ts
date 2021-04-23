import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs/internal/observable/interval";
import { startWith, switchMap } from "rxjs/operators";

import { MessageService } from "../message.service";
import { Message } from "../message-type";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"],
})
export class MessagesComponent implements OnInit {
  messages: Message[];

  constructor(private messageService: MessageService) {
  }

  updateMessages() {
    this.messageService.getMessages().subscribe((msgList) => {
       this.messages = msgList;
    });
  }

  ngOnInit() {
    interval(10000).pipe(
      startWith(0),
      switchMap(() => this.messageService.getMessages())
    ).subscribe({
      next: x => this.messages = x
    });
    //.subscribe(res => this.statuses = res.statuses});
  }
}
