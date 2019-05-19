import { Message } from '.';

export interface Incident {
    active: boolean;
    created_at: string;
    id: number;
    updates: Message[];
}
