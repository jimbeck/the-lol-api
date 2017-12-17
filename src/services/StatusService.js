"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const UrlRetriever_1 = require("../helpers/UrlRetriever");
let secrets = require('../config/secrets.json');
const leagueApiKey = secrets.leagueApiKey;
class StatusService {
    constructor() { }
    /**
     * This call does not count towards the api limit
     * @returns {Promise<ShardStatus>}
     */
    retrieveLeagueStatus(regionCode) {
        return new Promise((resolve, reject) => {
            let url = UrlRetriever_1.UrlRetriever.retrieveUrlByRegion(regionCode) +
                'status/v3/shard-data?api_key=' + leagueApiKey;
            console.log(url);
            request(url, function (err, response, body) {
                if (err) {
                    reject(new Error(err));
                }
                else {
                    let shardStatus = body;
                    resolve(shardStatus);
                }
            });
        });
    }
}
exports.StatusService = StatusService;
//# sourceMappingURL=StatusService.js.map