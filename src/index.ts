import {NoApiKeyError} from './errors';
import {ChampionMasteryService} from './services/v3/ChampionMasteryService';
import {ChampionService} from "./services/v3/ChampionService";

export class LolApi {
    public championMastery: ChampionMasteryService;
    public champion: ChampionService;
    public league: LeagueService;

    constructor(apiKey: string, region?: string) {
        if (!apiKey) {
            throw new NoApiKeyError();
        }
        this.championMastery = new ChampionMasteryService(apiKey, region);
        this.champion = new ChampionService(apiKey, region);
        this.league = new LeagueService(apiKey, region);
    }
}
