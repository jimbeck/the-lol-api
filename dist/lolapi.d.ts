import { ChampionMasteryService } from './services/v3/ChampionMasteryService';
import { ChampionService } from './services/v3/ChampionService';
import { LeagueService } from './services/v3/LeagueService';
import { MatchService } from './services/v3/MatchService';
import { SpectactorService } from './services/v3/SpectatorService';
import { StaticDataService } from './services/v3/StaticDataService';
import { StatusService } from './services/v3/StatusService';
import { SummonerService } from './services/v3/SummonerService';
import { ThirdPartyService } from './services/v3/ThirdPartyService';
import { TournamentService } from './services/v3/TournamentService';
import { TournamentStubService } from './services/v3/TournamentStubService';
export declare class LolApi {
    championMastery: ChampionMasteryService;
    champion: ChampionService;
    league: LeagueService;
    staticData: StaticDataService;
    status: StatusService;
    match: MatchService;
    spectactor: SpectactorService;
    summoner: SummonerService;
    thirdPartyCode: ThirdPartyService;
    tournamentStub: TournamentStubService;
    tournament: TournamentService;
    constructor(apiKey: string, region?: string);
}
