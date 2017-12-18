import {NoApiKeyError} from './errors';
import {ChampionMasteryService} from './services/v3/ChampionMasteryService';

export class LolApi {
    public championMastery: ChampionMasteryService;

    constructor(apiKey: string, region?: string) {
        if (!apiKey) {
            throw new NoApiKeyError();
        }
        this.championMastery = new ChampionMasteryService(apiKey, region);
    }
}
