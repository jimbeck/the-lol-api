import { SummonerDto } from '../domain';
import { LeagueUrl, UrlBuilder } from '../helpers/UrlBuilder';
import { BaseService } from './BaseService';

export class SummonerService extends BaseService {
    private version = 'v4';

    public getSummonerByAccountId(encryptedAccountId: string, regionCode?: string): Promise<SummonerDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/summoner/${this.version}/summoners/by-account/${encryptedAccountId}`,
            this.apiKey,
            this.getRegionCode(regionCode));
        return this
            .get(url)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }

    public getSummonerBySummonerName(summonerName: string, regionCode?: string): Promise<SummonerDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/summoner/${this.version}/summoners/by-name/${summonerName}`,
            this.apiKey,
            this.getRegionCode(regionCode));
        return this
            .get(url)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }

    public getSummonerBySummonerPUUID(encryptedPUUID: string, regionCode?: string): Promise<SummonerDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/summoner/${this.version}/summoners/${encryptedPUUID}`,
            this.apiKey,
            this.getRegionCode(regionCode));
        return this
            .get(url)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }

    public getSummonerBySummonerId(encryptedSummonerId: string, regionCode?: string): Promise<SummonerDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/summoner/${this.version}/summoners/${encryptedSummonerId}`,
            this.apiKey,
            this.getRegionCode(regionCode));
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
