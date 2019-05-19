import { LobbyEventDtoWrapper, TournamentCodeDto } from '../domain';
import { LeagueUrl, UrlBuilder } from '../helpers/UrlBuilder';
import { BaseService } from './BaseService';

export class TournamentService extends BaseService {
    private version = 'v4';

    public createTournamentCode(regionCode?: string): Promise<string[]> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/tournament/${this.version}/codes`,
            this.apiKey,
            this.getRegionCode(regionCode));
        return this
            .post(url)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }

    public updateTournamentInformation(tournamentCode: string, regionCode?: string): Promise<void> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/tournament/${this.version}/codes/${tournamentCode}`,
            this.apiKey,
            this.getRegionCode(regionCode));
        return this
            .post(url)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }

    public getTournamentInformation(tournamentCode: string, regionCode?: string): Promise<TournamentCodeDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/tournament/${this.version}/codes/${tournamentCode}`,
            this.apiKey,
            this.getRegionCode(regionCode));
        return this
            .post(url)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }

    public getLobbyEventsByTournamentCode(tournamentCode?: string, regionCode?: string): Promise<LobbyEventDtoWrapper> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `/lol/tournament/${this.version}/lobby-events/by-code/${tournamentCode}`,
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

    public createTournamentProvider(regionCode?: string): Promise<number> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/tournament-stub/${this.version}/providers`,
            this.apiKey,
            this.getRegionCode(regionCode));
        return this
            .post(url)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }

    public createTournament(regionCode?: string): Promise<number> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/tournament-stub/${this.version}/tournaments`,
            this.apiKey,
            this.getRegionCode(regionCode));
        return this
            .post(url)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }
}
