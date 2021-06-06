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
  me: User;
  userSaveError: boolean = false;
  userSaveOk: boolean = false;

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

  onSubmitUser(form: NgForm) {
    console.log("Submit new phone = <%s>", this.me.phone);
    this.userService.saveUser(this.me).subscribe(
      (u) => { 
        this.me = u;
        this.userSaveOk = true;
        this.userSaveError = false;
      },
      (err) => {
        this.userSaveError = true;
        this.userSaveOk = false;
      }
    );
  }

  ngOnInit() {
    this.deviceService.get().subscribe((d) => this.myDevice = d);
    this.userService.user.subscribe({
      next: (u) => { 
        console.log("next user: %s", u.name);
        this.me = u
      }
    });
    // TODO: handle errors
  }
}
