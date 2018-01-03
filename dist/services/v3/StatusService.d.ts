import { ShardStatus } from '../../domain/index';
import { BaseService } from './BaseService';
export declare class StatusService extends BaseService {
    getShardData(regionCode?: string): Promise<ShardStatus>;
}
