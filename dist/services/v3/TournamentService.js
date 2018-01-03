"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UrlBuilder_1 = require("../../helpers/UrlBuilder");
const BaseService_1 = require("./BaseService");
class TournamentService extends BaseService_1.BaseService {
    createTournamentCode(regionCode) {
        const url = UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, `lol/tournament/v3/codes`, this.apiKey, this.getRegionCode(regionCode));
        return this
            .post(url)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            return error;
        });
    }
    updateTournamentInformation(tournamentCode, regionCode) {
        const url = UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, `lol/tournament/v3/codes/${tournamentCode}`, this.apiKey, this.getRegionCode(regionCode));
        return this
            .post(url)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            return error;
        });
    }
    getTournamentInformation(tournamentCode, regionCode) {
        const url = UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, `lol/tournament/v3/codes/${tournamentCode}`, this.apiKey, this.getRegionCode(regionCode));
        return this
            .post(url)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            return error;
        });
    }
    getLobbyEventsByTournamentCode(tournamentCode, regionCode) {
        const url = UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, `/lol/tournament/v3/lobby-events/by-code/${tournamentCode}`, this.apiKey, this.getRegionCode(regionCode));
        return this
            .get(url)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            return error;
        });
    }
    getTournamentProviders(regionCode) {
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
    createTournament(regionCode) {
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
exports.TournamentService = TournamentService;
