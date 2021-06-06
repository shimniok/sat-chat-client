import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Device } from "../device-type";
import { DeviceService } from "../device.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"],
})
export class SettingsComponent implements OnInit {
  myDevice: Device = new Device();
  myPhone: String;

  constructor(private deviceService: DeviceService) {
    console.log(this.myDevice);
  }

  onSubmitDevice(form: NgForm) {
    console.log(form.value); // { first: '', last: '' }
    console.log(form.valid); // false
    // TODO: use device service to update
    // if id exists
    this.deviceService.post(this.myDevice).subscribe(
      (x) => console.log("success"), // TODO: indicate success
      (err: any) => console.log("error") // TODO: handle error
    );
  }

  onSubmitPhone(form: NgForm) {
    console.log("Submit phone=%s", this.myPhone);
  }

  ngOnInit() {
    this.deviceService.get().subscribe((x) => this.myDevice = x)
    // TODO: handle error
    // TODO: get user
  }
}
