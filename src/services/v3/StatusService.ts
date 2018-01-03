import {ShardStatus} from '../../domain/index';
import {LeagueUrl, UrlBuilder} from '../../helpers/UrlBuilder';
import {BaseService} from './BaseService';

export class StatusService extends BaseService {
    public getShardData(regionCode?: string): Promise<ShardStatus> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/status/v3/shard-data`,
            this.apiKey,
            this.getRegionCode(regionCode));
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
