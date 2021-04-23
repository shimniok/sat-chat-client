import { Device } from "./device-type";

export interface User {
    id: number;
    name: string;
    email: string;
    device: Device;
}

export interface UserLogin {
    email: string;
    password: string;
}
