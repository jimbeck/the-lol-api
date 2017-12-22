import axios from 'axios';
import {BaseService} from './BaseService';
import {LeagueUrl, UrlBuilder} from '../../helpers/UrlBuilder';
import {LobbyEventDTOWrapper} from '../../domain/index';

// TODO - handle query adn body params
export class TournamentStubService extends BaseService {
    public createMockTournamentCode(regionCode?: string): Promise<string[]> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/tournament-stub/v3/codes`,
            this.apiKey,
            this.getRegionCode(regionCode));
        return axios
            .post(url)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }

    public getMockLobbyEventsByTournamentCode(tournamentCode?: string,
                                              regionCode?: string): Promise<LobbyEventDTOWrapper> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `/lol/tournament-stub/v3/lobby-events/by-code/${tournamentCode}`,
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

    public getMockTournamentProviders(regionCode?: string): Promise<number> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/tournament-stub/v3/providers`,
            this.apiKey,
            this.getRegionCode(regionCode));
        return axios
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
            `lol/tournament-stub/v3/tournaments`,
            this.apiKey,
            this.getRegionCode(regionCode));
        return axios
            .post(url)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }
}
