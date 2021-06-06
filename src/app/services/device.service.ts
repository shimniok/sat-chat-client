import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Device } from "../types/device-type";
import { Observable } from "rxjs";

@Injectable()
export class DeviceService {
  endpoint: string = "/api/device";
  headers = { "content-type": "application/json" };

  get() {
    return this.http.get<Device>(this.endpoint);
  }

  post(device: Device) {
    const body = JSON.stringify(device);
    console.log(body);
    return this.http.post(this.endpoint, body, { "headers": this.headers });
  }

  constructor(private http: HttpClient) {}
}
