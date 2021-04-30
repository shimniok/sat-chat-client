import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { MessageService } from "../message.service";
import { Message } from "../message-type";
import { Observable } from "rxjs";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"],
})
export class MessagesComponent implements OnInit, AfterViewChecked {
  @ViewChild("scrollBottom") private bottom: ElementRef;

  messages: Observable<Message[]> = this.messageService.get();

  constructor(private messageService: MessageService) {}

  ngAfterViewChecked() {
    this.bottom.nativeElement.scrollIntoView();
  }

  ngOnInit() {
  }
}
