"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
const ChampionMasteryService_1 = require("./services/v3/ChampionMasteryService");
const ChampionService_1 = require("./services/v3/ChampionService");
const LeagueService_1 = require("./services/v3/LeagueService");
const MatchService_1 = require("./services/v3/MatchService");
const SpectatorService_1 = require("./services/v3/SpectatorService");
const StaticDataService_1 = require("./services/v3/StaticDataService");
const StatusService_1 = require("./services/v3/StatusService");
const SummonerService_1 = require("./services/v3/SummonerService");
const ThirdPartyService_1 = require("./services/v3/ThirdPartyService");
const TournamentService_1 = require("./services/v3/TournamentService");
const TournamentStubService_1 = require("./services/v3/TournamentStubService");
class LolApi {
    constructor(apiKey, region) {
        if (!apiKey) {
            throw new errors_1.NoApiKeyError();
        }
        this.championMastery = new ChampionMasteryService_1.ChampionMasteryService(apiKey, region);
        this.champion = new ChampionService_1.ChampionService(apiKey, region);
        this.league = new LeagueService_1.LeagueService(apiKey, region);
        this.staticData = new StaticDataService_1.StaticDataService(apiKey, region);
        this.status = new StatusService_1.StatusService(apiKey, region);
        this.match = new MatchService_1.MatchService(apiKey, region);
        this.spectactor = new SpectatorService_1.SpectactorService(apiKey, region);
        this.summoner = new SummonerService_1.SummonerService(apiKey, region);
        this.thirdPartyCode = new ThirdPartyService_1.ThirdPartyService(apiKey, region);
        this.tournamentStub = new TournamentStubService_1.TournamentStubService(apiKey, region);
        this.tournament = new TournamentService_1.TournamentService(apiKey, region);
    }
}
exports.LolApi = LolApi;
const api = module.exports.LolApi;
