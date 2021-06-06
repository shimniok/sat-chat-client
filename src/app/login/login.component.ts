import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { UserLogin } from "../types/user-type";

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
  return = "";
  error = false;

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) {
    // auth.getUser().subscribe((u) => {
    //   console.log("login: constructor getUser() u = %s", u.email);
    //   this.router.navigateByUrl(this.return)
    // },
    // (err) => {
    //   console.log("login: constructor getUser() error");
    // });
  }

  login() {
    console.log("login");
    this.auth.login(this.loginInfo).subscribe(
      (x) => {
        this.error = false;
        this.router.navigateByUrl(this.return);
      },
      (err) => (this.error = true)
    );
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => (this.return = params["return"] || "/chat"));
  }
}
