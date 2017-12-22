import axios from 'axios';
import {BaseService} from './BaseService';
import {LeagueUrl, UrlBuilder} from '../../helpers/UrlBuilder';
import {LobbyEventDTOWrapper, TournamentCodeDTO} from '../../domain/index';

export class TournamentService extends BaseService {
    public createTournamentCode(regionCode?: string): Promise<string[]> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/tournament/v3/codes`,
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

    public updateTournamentInformation(tournamentCode: string, regionCode?: string): Promise<void> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/tournament/v3/codes/${tournamentCode}`,
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

    public getTournamentInformation(tournamentCode: string, regionCode?: string): Promise<TournamentCodeDTO> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/tournament/v3/codes/${tournamentCode}`,
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

    public getLobbyEventsByTournamentCode(tournamentCode?: string, regionCode?: string): Promise<LobbyEventDTOWrapper> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `/lol/tournament/v3/lobby-events/by-code/${tournamentCode}`,
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

    public getTournamentProviders(regionCode?: string): Promise<number> {
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

    public createTournament(regionCode?: string): Promise<number> {
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
