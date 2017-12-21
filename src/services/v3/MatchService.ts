import axios from 'axios';
import {
    ChampionListDto, ItemDto, ItemListDto, LanguageStringsDto, MapDataDto, MasteryDto,
    MasteryListDto, MatchDto, ProfileIconDataDto, RealmDto, RuneDto, RuneListDto, ShardStatus
} from '../../domain/index';
import {LeagueUrl, UrlBuilder} from '../../helpers/UrlBuilder';
import {BaseService} from './BaseService';

export class MatchService extends BaseService {
    //test
    public getMatch(matchId: string, regionCode?: string): Promise<MatchDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/match/v3/matches/${matchId}`,
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