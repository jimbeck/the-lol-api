import axios from 'axios';
import {ShardStatus} from '../../domain/index';
import {LeagueUrl, UrlBuilder} from '../../helpers/UrlBuilder';
import {BaseService} from './BaseService';

export class SummonerService extends BaseService {
    public getSummonerByAccountId(accountId: string, regionCode?: string): Promise<ShardStatus> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/summoner/v3/summoners/by-account/${accountId}`,
            this.apiKey,
            this.getRegionCode(regionCode));
        return axios
            .get(url)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }

    public getSummonerBySummonerName(summonerName: string, regionCode?: string): Promise<ShardStatus> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/summoner/v3/summoners/by-name/${summonerName}`,
            this.apiKey,
            this.getRegionCode(regionCode));
        return axios
            .get(url)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }

    public getSummonerBySummonerId(summonerId: string, regionCode?: string): Promise<ShardStatus> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/summoner/v3/summoners/${summonerId}`,
            this.apiKey,
            this.getRegionCode(regionCode));
        return axios
            .get(url)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }
}
