import axios from 'axios';
import {
    ChampionListDto, ItemDto, ItemListDto, LanguageStringsDto, MapDataDto, MasteryDto,
    MasteryListDto, ProfileIconDataDto, RealmDto, RuneDto, RuneListDto, ShardStatus
} from '../../domain/index';
import {LeagueUrl, UrlBuilder} from '../../helpers/UrlBuilder';
import {BaseService} from './BaseService';

export class ThirdPartyService extends BaseService {
    public getThirdPartyCodeBySummonerId(summonerId: string, regionCode?: string): Promise<ShardStatus> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/platform/v3/third-party-code/by-summoner/${summonerId}`,
            this.apiKey,
            this.getRegionCode(regionCode));
        return axios
            .get(url)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }
}
