import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { User } from "../user-type";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"],
})
export class ChatComponent implements OnInit {
  me: User = new User();
  
  logout() {
    this.auth.logout();
    this.router.navigateByUrl("/login");
  }

  constructor(private auth: AuthService, private router: Router) {
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.auth.getUser().subscribe((x) => (this.me = x));
  }
}
