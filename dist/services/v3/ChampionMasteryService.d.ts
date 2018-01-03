import { ChampionMasteryDTO } from '../../domain/index';
import { BaseService } from './BaseService';
export declare class ChampionMasteryService extends BaseService {
    getChampionMasteries(summonerId: string, regionCode?: string): Promise<ChampionMasteryDTO[]>;
    getChampionMastery(summonerId: string, championId: string, regionCode?: string): Promise<ChampionMasteryDTO>;
    getTotalChampionMasteryScore(summonerId: string, regionCode?: string): Promise<number>;
}
