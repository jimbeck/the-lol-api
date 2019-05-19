import { MatchDto, MatchlistDto } from '../domain';
import { LeagueUrl, UrlBuilder } from '../helpers/UrlBuilder';
import { BaseService } from './BaseService';

export class MatchService extends BaseService {
    private version = 'v4';

    public getMatchById(matchId: string, regionCode?: string): Promise<MatchDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/match/${this.version}/matches/${matchId}`,
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

    public getMatchListByAccountId(encryptedAccountId: string, regionCode?: string): Promise<MatchlistDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `/lol/match/${this.version}/matchlists/by-account/${encryptedAccountId}`,
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

    public getMatchTimelineByMatchId(matchId: string, regionCode?: string): Promise<MatchlistDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `/lol/match/${this.version}/timelines/by-match/${matchId}`,
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

    public getMatchIdsByTournamentCode(tournamentCode: string, regionCode?: string): Promise<number[]> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/match/${this.version}/matches/by-tournament-code/${tournamentCode}/ids`,
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

    public getMatchByMatchIdAndTournamentCode(matchId: string,
                                              tournamentCode: string, regionCode?: string): Promise<MatchDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/match/${this.version}/matches/${matchId}/by-tournament-code/${tournamentCode}`,
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
