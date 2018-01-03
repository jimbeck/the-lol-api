"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UrlBuilder_1 = require("../../helpers/UrlBuilder");
const BaseService_1 = require("./BaseService");
class SpectactorService extends BaseService_1.BaseService {
    getCurrentGameBySummoner(summonerId, regionCode) {
        const url = UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, `lol/spectator/v3/active-games/by-summoner/${summonerId}`, this.apiKey, this.getRegionCode(regionCode));
        return this
            .get(url)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            return error;
        });
    }
    getFeaturedGames(regionCode) {
        const url = UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, `lol/spectator/v3/featured-games`, this.apiKey, this.getRegionCode(regionCode));
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
exports.SpectactorService = SpectactorService;
