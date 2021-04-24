import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs/internal/observable/interval";
import { startWith, switchMap } from "rxjs/operators";

import { MessageService } from "../message.service";
import { Message } from "../message-type";
import { Observable } from "rxjs";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"],
})
export class MessagesComponent implements OnInit {
  messages: Observable<Message[]> = this.messageService.getMessages();

  constructor(private messageService: MessageService) {}

  ngOnInit() {
  }
}
