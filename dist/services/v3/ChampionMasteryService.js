"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UrlBuilder_1 = require("../../helpers/UrlBuilder");
const BaseService_1 = require("./BaseService");
class ChampionMasteryService extends BaseService_1.BaseService {
    getChampionMasteries(summonerId, regionCode) {
        const url = UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, `lol/champion-mastery/v3/champion-masteries/by-summoner/${summonerId}`, this.apiKey, this.getRegionCode(regionCode));
        return this.get(url)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            return error;
        });
    }
    getChampionMastery(summonerId, championId, regionCode) {
        const url = UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, `lol/champion-mastery/v3/champion-masteries/by-summoner/${summonerId}/by-champion/${championId}`, this.apiKey, this.getRegionCode(regionCode));
        return this.get(url)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            return error;
        });
    }
    getTotalChampionMasteryScore(summonerId, regionCode) {
        const url = UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, `lol/champion-mastery/v3/scores/by-summoner/${summonerId}`, this.apiKey, this.getRegionCode(regionCode));
        return this.get(url)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            return error;
        });
    }
}
exports.ChampionMasteryService = ChampionMasteryService;
