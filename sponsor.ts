import { GPSInfo } from "./gps-info";

export interface Sponsor {
    id: number;
    name: string;
    description: string;
    logo: string;
    url: string;
    email: string;
    address: string;
    gps: GPSInfo
}
