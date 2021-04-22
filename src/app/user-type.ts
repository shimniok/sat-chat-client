export interface User {
    id: number;
    email: string;
    device_id: string;
}

export interface UserLogin {
    email: string;
    password: string;
}
