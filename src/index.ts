import {NoApiKeyError} from './errors';
import {LeagueServices} from './services/LeagueServices';

export class LolApi {
    public services: LeagueServices;

    constructor(apiKey: string) {
        if (!apiKey) {
            throw new NoApiKeyError();
        }
        this.services = new LeagueServices(apiKey);
    }
}
