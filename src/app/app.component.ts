import { Component, VERSION, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { ScrollToBottomDirective } from "./scroll-to-bottom.directive";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild(ScrollToBottomDirective)
  scroll: ScrollToBottomDirective;

  constructor() {}

  ngOnInit() {}
}
