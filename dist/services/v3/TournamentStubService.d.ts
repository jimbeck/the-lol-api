import { LobbyEventDTOWrapper } from '../../domain/index';
import { BaseService } from './BaseService';
export declare class TournamentStubService extends BaseService {
    createMockTournamentCode(regionCode?: string): Promise<string[]>;
    getMockLobbyEventsByTournamentCode(tournamentCode?: string, regionCode?: string): Promise<LobbyEventDTOWrapper>;
    getMockTournamentProviders(regionCode?: string): Promise<number>;
    createMockTournament(regionCode?: string): Promise<number>;
}
