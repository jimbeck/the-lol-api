import {NoApiKeyError} from './errors';
import {ChampionMasteryService} from './services/v3/ChampionMasteryService';
import {ChampionService} from './services/v3/ChampionService';
import {LeagueService} from './services/v3/LeagueService';

import {SpectactorService} from './services/v3/SpectatorService';
import {StaticDataService} from './services/v3/StaticDataService';
import {StatusService} from './services/v3/StatusService';
import {SummonerService} from './services/v3/SummonerService';
import {ThirdPartyService} from './services/v3/ThirdPartyService';
import {TournamentService} from './services/v3/TournamentService';
import {TournamentStubService} from './services/v3/TournamentStubService';

export class LolApi {
    public championMastery: ChampionMasteryService;
    public champion: ChampionService;
    public league: LeagueService;
    public staticData: StaticDataService;
    public status: StatusService;

    public spectactor: SpectactorService;
    public summoner: SummonerService;
    public thirdPartyCode: ThirdPartyService;
    private tournamentStub: TournamentStubService;
    private tournament: TournamentService;

    constructor(apiKey: string, region?: string) {
        if (!apiKey) {
            throw new NoApiKeyError();
        }
        this.championMastery = new ChampionMasteryService(apiKey, region);
        this.champion = new ChampionService(apiKey, region);
        this.league = new LeagueService(apiKey, region);
        this.staticData = new StaticDataService(apiKey, region);
        this.status = new StatusService(apiKey, region);
        this.spectactor = new SpectactorService(apiKey, region);
        this.summoner = new SummonerService(apiKey, region);
        this.thirdPartyCode = new ThirdPartyService(apiKey, region);
        this.tournamentStub = new TournamentStubService(apiKey, region);
        this.tournament = new TournamentService(apiKey, region);
    }
}
