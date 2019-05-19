import { ChampionInfo } from '../domain';
import { LeagueUrl, UrlBuilder } from '../helpers/UrlBuilder';
import { BaseService } from './BaseService';

export class ChampionService extends BaseService {
    private version = 'v3';

    public getChampionRotations(regionCode?: string): Promise<ChampionInfo> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `/lol/platform/${this.version}/champion-rotations`,
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
