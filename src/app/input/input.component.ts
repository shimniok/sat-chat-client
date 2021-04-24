import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { RockblockService } from "../rockblock.service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
})
export class InputComponent implements OnInit {
  // TODO: add validators
  // max length, min length
  // https://angular.io/api/forms/Validators

  input: string;

  send() {
    console.log("sending " + this.input);
    this.rockblock.send(this.input).subscribe(
      (x) => {
        console.log("sent message ");
        console.log(x);
        this.input = "";
      },
      (error) => {
        console.log("message send error");
        // TODO: UI error
      }
    );
  }

  constructor(private rockblock: RockblockService) {}

  ngOnInit() {}
}
