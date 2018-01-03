import { MatchDto } from '../../domain/index';
import { BaseService } from './BaseService';
export declare class SpectactorService extends BaseService {
    getCurrentGameBySummoner(summonerId: string, regionCode?: string): Promise<MatchDto>;
    getFeaturedGames(regionCode?: string): Promise<MatchDto>;
}
