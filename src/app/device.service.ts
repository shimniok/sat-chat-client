import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { DeviceSettings } from "./models/device-settings";

@Injectable()
export class DeviceService {
  getDevices() {
    return []; 
    // this.http.get<
    //   { name: string; imei: string; username: string; password: string }[]
    // >("/assets/devices.json");
  }
  constructor(private http: HttpClient) {}
}
