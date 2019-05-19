import {MatchDto} from '../domain';
import {LeagueUrl, UrlBuilder} from '../helpers/UrlBuilder';
import {BaseService} from './BaseService';

export class SpectactorService extends BaseService {
    private version = 'v4';

    public getCurrentGameBySummoner(encryptedSummonerId: string, regionCode?: string): Promise<MatchDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/spectator/${this.version}/active-games/by-summoner/${encryptedSummonerId}`,
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

    public getFeaturedGames(regionCode?: string): Promise<MatchDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/spectator/${this.version}/featured-games`,
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
