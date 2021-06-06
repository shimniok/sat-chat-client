import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Device } from "../types/device-type";
import { DeviceService } from "../services/device.service";
import { UserService } from "../services/user.service";
import { User } from "../types/user-type";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"],
})
export class SettingsComponent implements OnInit {
  myDevice: Device = new Device();
  phone: string;

  constructor(private deviceService: DeviceService, private userService: UserService) {
    console.log(this.myDevice);
  }

  onSubmitDevice(form: NgForm) {
    console.log(form.value); // { first: '', last: '' }
    console.log(form.valid); // false
    // TODO: use device service to update
    // if id exists
    this.deviceService.post(this.myDevice).subscribe(
      (d) => { 
        console.log("success");
        this.myDevice = d;
        // TODO: indicate success
      },
      (err: any) => {
        console.log("error");
        // TODO: handle error
      }
    );
  }

  onSubmitPhone(form: NgForm) {
    //console.log("Submit phone=%s", this.me.phone);
  }

  ngOnInit() {
    this.deviceService.get().subscribe((d) => this.myDevice = d);
    this.userService.get().subscribe((u) => this.phone = u.phone);
    // TODO: handle error
  }
}
