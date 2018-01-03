"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const UrlBuilder_1 = require("../../helpers/UrlBuilder");
const BaseService_1 = require("./BaseService");
class LeagueService extends BaseService_1.BaseService {
    // TODO - make queue enum RANKED_SOLO_5X5, RANKED_FLEX_SR, RANKED_FLEX_TT
    getChallengerLeagueByQueue(queue, regionCode) {
        const url = UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, `lol/league/v3/challengerleagues/by-queue/${queue}`, this.apiKey, this.getRegionCode(regionCode));
        return axios_1.default
            .get(url)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            return error;
        });
    }
    // @deprecated
    getLeagueForSummonerInAllQueues(summonerId, regionCode) {
        const url = UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, `lol/league/v3/leagues/by-summoner/${summonerId}`, this.apiKey, this.getRegionCode(regionCode));
        return this
            .get(url)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            return error;
        });
    }
    getLeagueByLeagueId(leagueId, regionCode) {
        const url = UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, `lol/league/v3/leagues/${leagueId}`, this.apiKey, this.getRegionCode(regionCode));
        return this
            .get(url)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            return error;
        });
    }
    // TODO - make queue enum RANKED_SOLO_5X5, RANKED_FLEX_SR, RANKED_FLEX_TT
    getMasterLeagueByQueue(queue, regionCode) {
        const url = UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, `lol/league/v3/masterleagues/by-queue/${queue}`, this.apiKey, this.getRegionCode(regionCode));
        return this
            .get(url)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            return error;
        });
    }
    getAllLeaguePositionsForSummoner(summonerId, regionCode) {
        const url = UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, `lol/league/v3/positions/by-summoner/${summonerId}`, this.apiKey, this.getRegionCode(regionCode));
        return this
            .get(url)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            return error;
        });
    }
}
exports.LeagueService = LeagueService;
