"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UrlBuilder_1 = require("../../helpers/UrlBuilder");
const BaseService_1 = require("./BaseService");
class ChampionService extends BaseService_1.BaseService {
    getChampions(regionCode) {
        const url = UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, `lol/platform/v3/champions`, this.apiKey, this.getRegionCode(regionCode));
        return this
            .get(url)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            return error;
        });
    }
    getChampion(championId, regionCode) {
        const url = UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, `lol/platform/v3/champions/${championId}`, this.apiKey, this.getRegionCode(regionCode));
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
exports.ChampionService = ChampionService;
