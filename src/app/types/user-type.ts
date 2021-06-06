import { Device } from "./device-type";

export class User {
    id: number;
    name: string;
    email: string;
    device: Device;
}

export interface UserLogin {
    email: string;
    password: string;
}
