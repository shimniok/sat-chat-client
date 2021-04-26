import {
  AfterViewChecked,
  Directive,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";

@Directive({
  selector: "[scroll-to-bottom]",
})
export class ScrollToBottomDirective implements OnInit, AfterViewChecked {
  // @ViewChild("scrollMe") private myScrollContainer: ElementRef;
  @ViewChild("scrollBottom") private bottom: ElementRef;

  constructor(private _el: ElementRef) {}

  ngAfterViewChecked(): void {
    console.log("ScrollToBottom: ngAfterViewChecked()");
    this.scrollToBottom();
  }

  ngOnInit(): void {
    console.log("ScrollToBottom: ngOnInit");
    this.scrollToBottom();
  }

  public scrollToBottom() {
    console.log("ScrollToBottom: scrollToBottom()");
    this.bottom.nativeElement.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "start",
    });
    // try {
    //   this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    // } catch (err) {}
    // const el: HTMLDivElement = this._el.nativeElement;
    // el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight);
  }
}
