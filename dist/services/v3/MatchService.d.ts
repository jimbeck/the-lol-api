import { MatchDto, MatchlistDto } from '../../domain/index';
import { BaseService } from './BaseService';
export declare class MatchService extends BaseService {
    getMatch(matchId: string, regionCode?: string): Promise<MatchDto>;
    getMatchListByAccountId(accountId: string, regionCode?: string): Promise<MatchlistDto>;
    getRecentMatchListByAccountId(accountId: string, regionCode?: string): Promise<MatchlistDto>;
    getMatchTimelineByMatchId(matchId: string, regionCode?: string): Promise<void>;
    getMatchIdsByTournamentCode(tournamentCode: string, regionCode?: string): Promise<number[]>;
    getMatchByMatchIdAndTournamentCode(matchId: string, tournamentCode: string, regionCode?: string): Promise<MatchDto>;
}
