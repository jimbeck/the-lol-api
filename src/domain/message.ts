import { Translation } from '.';

export interface Message {
    severity: string;
    author: string;
    created_at: string;
    translations: Translation[];
    updated_at: string;
    content: string;
    id: string;
}