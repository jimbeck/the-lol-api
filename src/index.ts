import {NoApiKeyError} from './errors';
import {ChampionMasteryService} from './services/v3/ChampionMasteryService';
import {ChampionService} from "./services/v3/ChampionService";
import {LeagueService} from "./services/v3/LeagueService";
import {StaticDataService} from "./services/v3/StaticDataService";
import {StatusService} from "./services/v3/StatusService";

export class LolApi {
    public championMastery: ChampionMasteryService;
    public champion: ChampionService;
    public league: LeagueService;
    public staticData: StaticDataService;
    public status: StatusService;

    constructor(apiKey: string, region?: string) {
        if (!apiKey) {
            throw new NoApiKeyError();
        }
        this.championMastery = new ChampionMasteryService(apiKey, region);
        this.champion = new ChampionService(apiKey, region);
        this.league = new LeagueService(apiKey, region);
        this.staticData = new StaticDataService(apiKey, region);
        this.status = new StatusService(apiKey, region);
    }
}
