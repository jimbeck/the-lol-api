"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UrlBuilder_1 = require("../../helpers/UrlBuilder");
const BaseService_1 = require("./BaseService");
// TODO - handle query adn body params
class TournamentStubService extends BaseService_1.BaseService {
    createMockTournamentCode(regionCode) {
        const url = UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, `lol/tournament-stub/v3/codes`, this.apiKey, this.getRegionCode(regionCode));
        return this
            .post(url)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            return error;
        });
    }
    getMockLobbyEventsByTournamentCode(tournamentCode, regionCode) {
        const url = UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, `/lol/tournament-stub/v3/lobby-events/by-code/${tournamentCode}`, this.apiKey, this.getRegionCode(regionCode));
        return this
            .get(url)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            return error;
        });
    }
    getMockTournamentProviders(regionCode) {
        const url = UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, `lol/tournament-stub/v3/providers`, this.apiKey, this.getRegionCode(regionCode));
        return this
            .post(url)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            return error;
        });
    }
    createMockTournament(regionCode) {
        const url = UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, `lol/tournament-stub/v3/tournaments`, this.apiKey, this.getRegionCode(regionCode));
        return this
            .post(url)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            return error;
        });
    }
}
exports.TournamentStubService = TournamentStubService;
