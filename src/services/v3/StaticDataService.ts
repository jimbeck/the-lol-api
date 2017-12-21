import axios from 'axios';
import {
    ChampionListDto,
    ItemDto,
    ItemListDto,
    LanguageStringsDto,
    MapDataDto,
    MasteryDto,
    MasteryListDto,
    ProfileIconDataDto,
    RealmDto,
    RuneDto,
    SummonerSpellDto,
    SummonerSpellListDto
} from '../../domain/index';
import {LeagueUrl, UrlBuilder} from '../../helpers/UrlBuilder';
import {BaseService} from './BaseService';

export class StaticDataService extends BaseService {
    public getChampions(regionCode?: string): Promise<ChampionListDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/static-data/v3/champions`,
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

    public getChampion(championId: string, regionCode?: string): Promise<ChampionListDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/static-data/v3/champions/${championId}`,
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

    public getItems(regionCode?: string): Promise<ItemListDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/static-data/v3/items`,
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

    public getItem(itemId: string, regionCode?: string): Promise<ItemDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/static-data/v3/items/${itemId}`,
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

    // TODO enum for locale and add patch verison. and add them as params
    public getLanguageString(locale?: string, patchVersion?: string, regionCode?: string): Promise<LanguageStringsDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/static-data/v3/language-strings`,
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

    public getLanguages(regionCode?: string): Promise<string[]> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/static-data/v3/languages`,
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

    public getMaps(locale?: string, version?: string, regionCode?: string): Promise<MapDataDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/static-data/v3/maps`,
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

    public getMasteries(locale?: string, version?: string, tags?: Set<string>, regionCode?: string): Promise<MasteryListDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/static-data/v3/masteries`,
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

    public getMastery(masteryId: string, locale?: string, version?: string, tags?: Set<string>, regionCode?: string): Promise<MasteryDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/static-data/v3/masteries/${masteryId}`,
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

    public getProfileIcons(locale?: string, version?: string, tags?: Set<string>, regionCode?: string): Promise<ProfileIconDataDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/static-data/v3/profile-icons`,
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

    public getRealms(locale?: string, version?: string, tags?: Set<string>, regionCode?: string): Promise<RealmDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/static-data/v3/realms`,
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

    public getRune(runeId: string, locale?: string, version?: string, tags?: Set<string>, regionCode?: string): Promise<RuneDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/static-data/v3/runes/${runeId}`,
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

    public getSummonerSpells(locale?: string, version?: string, tags?: Set<string>, regionCode?: string): Promise<SummonerSpellListDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/static-data/v3/summoner-spells`,
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

    public getSummonerSpell(summonerSpellId: string, locale?: string, version?: string, tags?: Set<string>, regionCode?: string): Promise<SummonerSpellDto> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/static-data/v3/summoner-spells/${summonerSpellId}`,
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

    public getVersions(locale?: string, version?: string, tags?: Set<string>, regionCode?: string): Promise<string> {
        const url = UrlBuilder.buildUrl(
            LeagueUrl.SERVICE,
            `lol/static-data/v3/versions`,
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