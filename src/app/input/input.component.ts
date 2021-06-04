import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { RockblockService } from "../rockblock.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MessageService } from "../message.service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent implements OnInit {
  min: number = 1;
  max: number = 150;

  message = new FormControl("", [Validators.maxLength(this.max), Validators.minLength(this.min)]);

  constructor(private rockblock: RockblockService, private _snackBar: MatSnackBar, private messageService: MessageService) {}

  getError() {
    if (this.message.hasError("maxlength")) return "message too long";
  }

  isInvalid() {
    return this.message.invalid || this.message.value == "";
  }

  openSnackBar(message: string, action: string, duration: number) {
    this._snackBar.open(message, action, {
      duration: duration,
    });
  }

  send() {
    const m: string = this.message.value;
    console.log("sending " + m);
    this.rockblock.send(m).subscribe(
      (x) => {
        //console.log("sent: %s", x.toString());
        this.message.reset();
        this.messageService.refresh()
        //this.openSnackBar("Message sent", "Ok", 2000);
      },
      (error) => {
        console.log("message send error");
        // TODO: more detailed error messages
        this.openSnackBar("Error sending message", "Ok", 5000);
      }
    );
  }

  ngOnInit() {}
}
