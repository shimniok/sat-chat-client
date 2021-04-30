import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { RockblockService } from "../rockblock.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
})
export class InputComponent implements OnInit {
  min: number = 1;
  max: number = 150;

  message = new FormControl("", [
    Validators.maxLength(this.max),
    Validators.minLength(this.min),
  ]);

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
        console.log("sent message ");
        console.log(x);
        this.message.reset();
        //this.openSnackBar("Message sent", "Ok", 2000);
      },
      (error) => {
        console.log("message send error");
        this.openSnackBar("Error sending message", "Ok", 5000);
      }
    );
  }

  constructor(
    private rockblock: RockblockService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {}
}
