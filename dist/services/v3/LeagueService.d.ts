import { LeagueListDTO, LeaguePositionDTO } from '../../domain/index';
import { BaseService } from './BaseService';
export declare class LeagueService extends BaseService {
    getChallengerLeagueByQueue(queue: string, regionCode?: string): Promise<LeagueListDTO>;
    getLeagueForSummonerInAllQueues(summonerId: string, regionCode?: string): Promise<Set<LeagueListDTO>>;
    getLeagueByLeagueId(leagueId: string, regionCode?: string): Promise<LeagueListDTO>;
    getMasterLeagueByQueue(queue: string, regionCode?: string): Promise<LeagueListDTO>;
    getAllLeaguePositionsForSummoner(summonerId: string, regionCode?: string): Promise<Set<LeaguePositionDTO>>;
}
