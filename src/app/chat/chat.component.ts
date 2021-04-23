import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";
import { User } from "../user-type";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
})
export class ChatComponent implements OnInit {
  // name: Observable<string>;

  logout() {
    this.auth.logout().subscribe(
      (x) => this.router.navigate(["login"]),
      (err: any) => console.log("logout error")
    );
  }

  constructor(private auth: AuthService, private router: Router) {
    console.log("constructor");
    // this.me = this.auth.getUser();
    // .subscribe(
    //   (x) => (this.me = x),
    //   (err) => this.router.navigate(["login"])
    // );
    // this.me = {
    //   id: 0,
    //   name: "?",
    //   email: "",
    //   device: null,
    // };
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    // Check authentication
    // this.auth.getUser().subscribe(
    //   (x) => (this.me = x[0]),
    //   (err) => this.router.navigate(["login"])
    // );
  }
}
