import { Component, ViewChild } from "@angular/core";
import { ScrollToBottomDirective } from "./scroll-to-bottom.directive";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild(ScrollToBottomDirective)
  scroll: ScrollToBottomDirective;

  constructor() {}

  ngOnInit() {}
}
