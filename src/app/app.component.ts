import { Component, VERSION, ViewChild } from "@angular/core";
import { ScrollToBottomDirective } from "./scroll-to-bottom.directive";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild(ScrollToBottomDirective)
  scroll: ScrollToBottomDirective;

  showSettings = false;

  constructor() {}

  toggleSettings() {
    this.showSettings = !this.showSettings;
  }
}
