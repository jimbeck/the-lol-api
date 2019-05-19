import { NoApiKeyError } from './errors';
import { ChampionMasteryService, ChampionService, LeagueService, 
    StaticDataService, StatusService, MatchService, SpectactorService, SummonerService, 
    ThirdPartyService, TournamentStubService, TournamentService } from './services';

export class LolApi {
    public championMastery: ChampionMasteryService;
    public champion: ChampionService;
    public league: LeagueService;
    public staticData: StaticDataService;
    public status: StatusService;
    public match: MatchService; // TODO - finish query params and validate the calls work
    public spectactor: SpectactorService;
    public summoner: SummonerService;
    public thirdPartyCode: ThirdPartyService;
    public tournamentStub: TournamentStubService; // TODO - finish query params and validate the calls work
    public tournament: TournamentService; // TODO - finish query params and validate the calls work

    constructor(apiKey: string, region?: string) {
        if (!apiKey) {
            throw new NoApiKeyError();
        }
        this.championMastery = new ChampionMasteryService(apiKey, region);
        this.champion = new ChampionService(apiKey, region);
        this.league = new LeagueService(apiKey, region);
        this.staticData = new StaticDataService(apiKey, region);
        this.status = new StatusService(apiKey, region);
        this.match = new MatchService(apiKey, region);
        this.spectactor = new SpectactorService(apiKey, region);
        this.summoner = new SummonerService(apiKey, region);
        this.thirdPartyCode = new ThirdPartyService(apiKey, region);
        this.tournamentStub = new TournamentStubService(apiKey, region);
        this.tournament = new TournamentService(apiKey, region);
    }
}

const api = module.exports.LolApi;
