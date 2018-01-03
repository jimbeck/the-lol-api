import { ChampionListDto } from '../../domain/index';
import { BaseService } from './BaseService';
export declare class ChampionService extends BaseService {
    getChampions(regionCode?: string): Promise<ChampionListDto>;
    getChampion(championId: string, regionCode?: string): Promise<ChampionListDto>;
}
