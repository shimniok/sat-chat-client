export interface Message {
  id: string;
  device_id: number;
  sender_id: number;
  momsn: number;
  transmit_time: string;
  time: string;
  iridium_latitude: number;
  iridium_longitude: number;
  iridium_cep: number;
  message: string;
}
