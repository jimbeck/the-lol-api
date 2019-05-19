import {LeagueUrl, UrlBuilder} from '../helpers/UrlBuilder';
import {BaseService} from './BaseService';

export class ThirdPartyService extends BaseService {
    private version = 'v4';

    public getThirdPartyCodeBySummonerId(encryptedSummonerId: string, regionCode?: string): Promise<string> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/platform/${this.version}/third-party-code/by-summoner/${encryptedSummonerId}`,
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
