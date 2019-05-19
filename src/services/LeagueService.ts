import axios from 'axios';
import { LeagueEntryDto, LeagueListDto, LeaguePositionDto } from '../domain';
import { LeagueUrl, UrlBuilder } from '../helpers/UrlBuilder';
import { BaseService } from './BaseService';

export class LeagueService extends BaseService {
    private version = 'v4';

    // TODO - make queue enum RANKED_SOLO_5X5, RANKED_FLEX_SR, RANKED_FLEX_TT
    public getChallengerLeagueByQueue(queue: string, regionCode?: string): Promise<LeagueListDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/league/${this.version}/challengerleagues/by-queue/${queue}`,
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

    public getLeagueForSummonerInAllQueues(encryptedSummonerId: string,
                                           regionCode?: string): Promise<Set<LeagueEntryDto>> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/league/${this.version}/leagues/by-summoner/${encryptedSummonerId}`,
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

    public getAllLeagueEntries(queue: string, tier: string, division: string,
                               regionCode?: string): Promise<LeagueEntryDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `/lol/league/${this.version}/entries/${queue}/${tier}/${division}`,
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

    public getGrandMasterLeagueByQueue(queue: string, regionCode?: string): Promise<LeagueListDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/league/${this.version}/grandmasterleagues/by-queue/${queue}`,
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
    public getMasterLeagueByQueue(queue: string, regionCode?: string): Promise<LeagueListDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/league/${this.version}/masterleagues/by-queue/${queue}`,
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

    public getLeagueById(leagueId: string, regionCode?: string): Promise<Set<LeagueListDto>> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `/lol/league/${this.version}/leagues/${leagueId}`,
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
