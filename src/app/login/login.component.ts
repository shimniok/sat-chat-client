import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { UserLogin } from "../user-type";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginInfo: UserLogin = {
    email: "",
    password: "",
  };

  login() {
    console.log("login");

    this.authService.login(this.loginInfo).subscribe(
      (x) => {
        this.router.navigate(["chat"]);
      },
      (error) => {
        console.log("authentication error");
        // TODO: Indicate error
      }
    );
  }

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
}
