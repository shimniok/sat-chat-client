import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
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
  return = "";
  error = false;

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) {
    auth.getUser().subscribe(() => this.router.navigateByUrl(this.return));
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
