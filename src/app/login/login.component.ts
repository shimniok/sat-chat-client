import { Component, OnInit } from "@angular/core";
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
        console.log("authentication next");
      },
      (error) => {
        console.log("authentication error");
      },
      () => {
        console.log("authentication complete notification");
      }
    );
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
