import {LobbyEventDtoWrapper} from '../domain/index';
import {LeagueUrl, UrlBuilder} from '../helpers/UrlBuilder';
import {BaseService} from './BaseService';

// TODO - handle query adn body params
export class TournamentStubService extends BaseService {
    private version = 'v4';

    public createMockTournamentCode(regionCode?: string): Promise<string[]> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/tournament-stub/${this.version}/codes`,
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

    public getMockLobbyEventsByTournamentCode(tournamentCode?: string,
                                              regionCode?: string): Promise<LobbyEventDtoWrapper> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `/lol/tournament-stub/${this.version}/lobby-events/by-code/${tournamentCode}`,
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

    public getMockTournamentProviders(regionCode?: string): Promise<number> {
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

    public createMockTournament(regionCode?: string): Promise<number> {
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
