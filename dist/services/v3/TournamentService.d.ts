import { LobbyEventDTOWrapper, TournamentCodeDTO } from '../../domain/index';
import { BaseService } from './BaseService';
export declare class TournamentService extends BaseService {
    createTournamentCode(regionCode?: string): Promise<string[]>;
    updateTournamentInformation(tournamentCode: string, regionCode?: string): Promise<void>;
    getTournamentInformation(tournamentCode: string, regionCode?: string): Promise<TournamentCodeDTO>;
    getLobbyEventsByTournamentCode(tournamentCode?: string, regionCode?: string): Promise<LobbyEventDTOWrapper>;
    getTournamentProviders(regionCode?: string): Promise<number>;
    createTournament(regionCode?: string): Promise<number>;
}
