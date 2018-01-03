import { ChampionListDto, ItemDto, ItemListDto, LanguageStringsDto, MapDataDto, MasteryDto, MasteryListDto, ProfileIconDataDto, RealmDto, RuneDto, SummonerSpellDto, SummonerSpellListDto } from '../../domain/index';
import { BaseService } from './BaseService';
export declare class StaticDataService extends BaseService {
    getChampions(regionCode?: string): Promise<ChampionListDto>;
    getChampion(championId: string, regionCode?: string): Promise<ChampionListDto>;
    getItems(regionCode?: string): Promise<ItemListDto>;
    getItem(itemId: string, regionCode?: string): Promise<ItemDto>;
    getLanguageString(locale?: string, patchVersion?: string, regionCode?: string): Promise<LanguageStringsDto>;
    getLanguages(regionCode?: string): Promise<string[]>;
    getMaps(locale?: string, version?: string, regionCode?: string): Promise<MapDataDto>;
    getMasteries(locale?: string, version?: string, tags?: Set<string>, regionCode?: string): Promise<MasteryListDto>;
    getMastery(masteryId: string, locale?: string, version?: string, tags?: Set<string>, regionCode?: string): Promise<MasteryDto>;
    getProfileIcons(locale?: string, version?: string, tags?: Set<string>, regionCode?: string): Promise<ProfileIconDataDto>;
    getRealms(locale?: string, version?: string, tags?: Set<string>, regionCode?: string): Promise<RealmDto>;
    getRune(runeId: string, locale?: string, version?: string, tags?: Set<string>, regionCode?: string): Promise<RuneDto>;
    getSummonerSpells(locale?: string, version?: string, tags?: Set<string>, regionCode?: string): Promise<SummonerSpellListDto>;
    getSummonerSpell(summonerSpellId: string, locale?: string, version?: string, tags?: Set<string>, regionCode?: string): Promise<SummonerSpellDto>;
    getVersions(locale?: string, version?: string, tags?: Set<string>, regionCode?: string): Promise<string>;
}
