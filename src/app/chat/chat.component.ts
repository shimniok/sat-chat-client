import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "../services/auth.service";
import { User } from "../types/user-type";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"],
})
export class ChatComponent implements OnInit {
  me: User = new User();

  logout() {
    this.auth.logout().subscribe(
      () => {
        console.log("chat: logout() success");
        this.router.navigateByUrl("/login");
      },
      () => console.log("chat: logout() fail")
    );
  }

  constructor(private auth: AuthService, private router: Router) {
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.auth.getUser().subscribe((x) => (this.me = x));
  }
}
