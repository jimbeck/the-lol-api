import { ShardStatus } from '../../domain/index';
import { BaseService } from './BaseService';
export declare class ThirdPartyService extends BaseService {
    getThirdPartyCodeBySummonerId(summonerId: string, regionCode?: string): Promise<ShardStatus>;
}
