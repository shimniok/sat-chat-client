import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.service";
import { Message } from "../message-type";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {
  messages: Message[];

  constructor(private messageService: MessageService) {
    this.messageService.getMessages().subscribe(msgList => {
      this.messages = msgList;
    });
  }

  ngOnInit() {}
}
