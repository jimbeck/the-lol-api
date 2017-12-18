import * as request from 'request';
import {ChampionMasteryDTO} from '../../domain/index';
import {LeagueUrl, UrlBuilder} from '../../helpers/UrlBuilder';
import {BaseService} from './BaseService';

export class ChampionMasteryService extends BaseService {
    public getChampionMasteries(summonerId: string, regionCode?: string): Promise<ChampionMasteryDTO[]> {
        return new Promise((resolve, reject) => {
            const url = UrlBuilder.buildUrl(
                LeagueUrl.SERVICE,
                `/lol/champion-mastery/v3/champion-masteries/by-summoner/${summonerId}`,
                this.apiKey,
                this.getRegionCode(regionCode));
            request(url, (err, response, body) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    const championMasteries: ChampionMasteryDTO[] = body;
                    resolve(championMasteries);
                }
            });
        });
    }
}
