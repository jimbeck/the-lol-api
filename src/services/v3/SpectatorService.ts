import axios from 'axios';
import {MatchDto} from '../../domain/index';
import {LeagueUrl, UrlBuilder} from '../../helpers/UrlBuilder';
import {BaseService} from './BaseService';

export class SpectactorService extends BaseService {
    public getCurrentGameBySummoner(summonerId: string, regionCode?: string): Promise<MatchDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/spectator/v3/active-games/by-summoner/${summonerId}`,
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

    public getFeaturedGames(regionCode?: string): Promise<MatchDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/spectator/v3/featured-games`,
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
