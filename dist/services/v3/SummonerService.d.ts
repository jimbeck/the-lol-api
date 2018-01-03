import { ShardStatus } from '../../domain/index';
import { BaseService } from './BaseService';
export declare class SummonerService extends BaseService {
    getSummonerByAccountId(accountId: string, regionCode?: string): Promise<ShardStatus>;
    getSummonerBySummonerName(summonerName: string, regionCode?: string): Promise<ShardStatus>;
    getSummonerBySummonerId(summonerId: string, regionCode?: string): Promise<ShardStatus>;
}
