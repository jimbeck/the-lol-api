import axios from 'axios';
import {ChampionMasteryDTO} from '../../domain/index';
import {LeagueUrl, UrlBuilder} from '../../helpers/UrlBuilder';
import {BaseService} from './BaseService';

export class ChampionMasteryService extends BaseService {
    public getChampionMasteries(summonerId: string, regionCode?: string): Promise<ChampionMasteryDTO[]> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/champion-mastery/v3/champion-masteries/by-summoner/${summonerId}`,
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

    public getChampionMastery(summonerId: string, championId: string,
                              regionCode?: string): Promise<ChampionMasteryDTO> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/champion-mastery/v3/champion-masteries/by-summoner/${summonerId}/by-champion/${championId}`,
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

    public getTotalChampionMasteryScore(summonerId: string, regionCode?: string): Promise<number> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/champion-mastery/v3/scores/by-summoner/${summonerId}`,
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
