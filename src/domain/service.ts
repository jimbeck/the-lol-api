import { Incident } from '.';

export interface Service {
    status: string;
    incidents: Incident[];
    name: string;
    slug: string;
}
