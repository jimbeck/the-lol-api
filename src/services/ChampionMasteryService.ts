import { ChampionMasteryDto } from '../domain';
import { LeagueUrl, UrlBuilder } from '../helpers/UrlBuilder';
import { BaseService } from './BaseService';

export class ChampionMasteryService extends BaseService {
    private version = 'v4';

    public getChampionMasteries(encryptedSummonerId: string, regionCode?: string): Promise<ChampionMasteryDto[]> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `/lol/champion-mastery/${this.version}/champion-masteries/by-summoner/${encryptedSummonerId}`,
            this.apiKey,
            this.getRegionCode(regionCode));
        return this.get(url)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }

    public getChampionMastery(encryptedSummonerId: string, championId: string,
                              regionCode?: string): Promise<ChampionMasteryDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `/lol/champion-mastery/v4/champion-masteries/by-summoner/${encryptedSummonerId}/by-champion/${championId}`,
            this.apiKey,
            this.getRegionCode(regionCode));
        return this.get(url)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }

    public getTotalChampionMasteryScore(encryptedSummonerId: string, regionCode?: string): Promise<number> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `/lol/champion-mastery/v4/scores/by-summoner/${encryptedSummonerId}`,
            this.apiKey,
            this.getRegionCode(regionCode));
        return this.get(url)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }
}
