import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Message } from "./message-type";
import { MessagesComponent } from "./messages/messages.component";

@Injectable()
export class MessageService {
  constructor(private http: HttpClient) {}

  getMessages() {
    //return this.http.get<Message[]>("/assets/messages.json");
    console.log("getMessages()");
    return this.http.get<Message[]>("/api/message");
  }

  getMessagesSince(message: Message) {
    return this.http.get<Message[]>("/api/message/since/"+message.momsn);
  }

}
