import { GPSInfo } from "./gps-info";

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    photo: string;
    url: string;
    email: string;
    address: string;
    gps: GPSInfo;
}
