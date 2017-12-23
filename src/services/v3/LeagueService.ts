import axios from 'axios';
import {LeagueListDTO, LeaguePositionDTO} from '../../domain/index';
import {LeagueUrl, UrlBuilder} from '../../helpers/UrlBuilder';
import {BaseService} from './BaseService';

export class LeagueService extends BaseService {
    // TODO - make queue enum RANKED_SOLO_5X5, RANKED_FLEX_SR, RANKED_FLEX_TT
    public getChallengerLeagueByQueue(queue: string, regionCode?: string): Promise<LeagueListDTO> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/league/v3/challengerleagues/by-queue/${queue}`,
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

    // @deprecated
    public getLeagueForSummonerInAllQueues(summonerId: string, regionCode?: string): Promise<Set<LeagueListDTO>> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/league/v3/leagues/by-summoner/${summonerId}`,
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

    public getLeagueByLeagueId(leagueId: string, regionCode?: string): Promise<LeagueListDTO> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/league/v3/leagues/${leagueId}`,
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

    // TODO - make queue enum RANKED_SOLO_5X5, RANKED_FLEX_SR, RANKED_FLEX_TT
    public getMasterLeagueByQueue(queue: string, regionCode?: string): Promise<LeagueListDTO> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/league/v3/masterleagues/by-queue/${queue}`,
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

    public getAllLeaguePositionsForSummoner(summonerId: string, regionCode?: string): Promise<Set<LeaguePositionDTO>> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/league/v3/positions/by-summoner/${summonerId}`,
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
