import { Device } from "./device-type";

export class User {
    id: number;
    name: string;
    email: string;
    device: Device;
    phone: string;
}

export interface UserLogin {
    email: string;
    password: string;
}
