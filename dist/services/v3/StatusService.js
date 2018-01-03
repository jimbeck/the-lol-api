"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UrlBuilder_1 = require("../../helpers/UrlBuilder");
const BaseService_1 = require("./BaseService");
class StatusService extends BaseService_1.BaseService {
    getShardData(regionCode) {
        const url = UrlBuilder_1.UrlBuilder.buildUrl(UrlBuilder_1.LeagueUrl.SERVICE, `lol/status/v3/shard-data`, this.apiKey, this.getRegionCode(regionCode));
        return this
            .get(url, true)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            return error;
        });
    }
}
exports.StatusService = StatusService;
