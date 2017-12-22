import axios from 'axios';
import {MatchDto, MatchlistDto} from '../../domain/index';
import {LeagueUrl, UrlBuilder} from '../../helpers/UrlBuilder';
import {BaseService} from './BaseService';

export class MatchService extends BaseService {
    public getMatch(matchId: string, regionCode?: string): Promise<MatchDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/match/v3/matches/${matchId}`,
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

    public getMatchListByAccountId(accountId: string, regionCode?: string): Promise<MatchlistDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `/lol/match/v3/matchlists/by-account/${accountId}`,
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

    public getRecentMatchListByAccountId(accountId: string, regionCode?: string): Promise<MatchlistDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `/lol/match/v3/matchlists/by-account/${accountId}/recent`,
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

    public getMatchTimelineByMatchId(matchId: string, regionCode?: string): Promise<void> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/match/v3/timelines/by-match/${matchId}`,
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

    public getMatchIdsByTournamentCode(tournamentCode: string, regionCode?: string): Promise<number[]> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/match/v3/matches/by-tournament-code/${tournamentCode}/ids`,
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

    public getMatchByMatchIdAndTournamentCode(matchId: string,
                                              tournamentCode: string, regionCode?: string): Promise<MatchDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/match/v3/matches/{matchId}/by-tournament-code/{tournamentCode}`,
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
