import * as request from 'request';
import {ShardStatus} from '../../temp';
import {UrlRetriever} from '../helpers/UrlRetriever';

export class StatusService {
    /**
     * This call does not count towards the api limit
     * @returns {Promise<ShardStatus>}
     */
    public retrieveLeagueStatus(regionCode: string): Promise<ShardStatus> {
        return new Promise((resolve, reject) => {
            const url = UrlRetriever.retrieveServiceUrlByRegionCode(regionCode) +
                'status/v3/shard-data?api_key=';
            request(url, (err, response, body) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    const shardStatus: ShardStatus = body;
                    resolve(shardStatus);
                }
            });
        });
    }
}
