import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Device } from "./device-type";

@Injectable()
export class DeviceService {
  getDevices() {
    return this.http.get<Device[]>("/api/device");
  }
  constructor(private http: HttpClient) {}
}
