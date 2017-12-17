import * as request from 'request';
import {UrlRetriever} from "../helpers/UrlRetriever";
import {ShardStatus} from 'league-of-legends';

let secrets = require('../config/secrets.json');
const leagueApiKey = secrets.leagueApiKey;

export class StatusService {

    constructor() {}

    /**
     * This call does not count towards the api limit
     * @returns {Promise<ShardStatus>}
     */
    public retrieveLeagueStatus(regionCode: string): Promise<ShardStatus> {
        return new Promise((resolve, reject) => {
            let url = UrlRetriever.retrieveUrlByRegion(regionCode) +
                'status/v3/shard-data?api_key=' + leagueApiKey;
            console.log(url);
            request(url, function(err, response, body) {
                if (err) {
                    reject(new Error(err));
                }
                else {
                    let shardStatus: ShardStatus = body;
                    resolve(shardStatus);
                }
            });
        });
    }
}