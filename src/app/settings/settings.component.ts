import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DeviceService } from "../device.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
  deviceSettings = {
    name: "",
    email: "",
    imei: "",
    password: ""
  };

  constructor(private deviceService: DeviceService) {
    console.log(this.deviceSettings);
  }

  onSubmitDevice(device: NgForm) {
    console.log(device.value); // { first: '', last: '' }
    console.log(device.valid); // false
  }

  ngOnInit() {}
}
