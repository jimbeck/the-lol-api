import { BaseService } from '.';

export class ImageService extends BaseService {
    private version: string;

    constructor(version: string) {
        super();
        this.version = version;
    }

    public getProfileIconUrl(iconNumber: number, localVersion?: string): string {
        const version = localVersion ? localVersion : this.version;
        return `${this.baseUrl}/${version}/img/profileicon/${iconNumber}.png`;
    }

    public getChampionSplashArt(championName: string, championSkinNumber: number): string {
        return `${this.baseUrl}/img/champion/splash/${championName}_${championSkinNumber}.jpg`;
    }

    public getChampionLoadingScreenArt(championName: string, championSkinNumber: number): string {
        return `${this.baseUrl}/img/champion/loading/${championName}_${championSkinNumber}.jpg`;
    }

    public getChampionSquare(championFileName: string, localVersion?: string): string {
        const version = localVersion ? localVersion : this.version;
        return `${this.baseUrl}/${version}/img/champion/${championFileName}`;
    }

    public getPassiveAbility(passiveAbilityFileName: string, localVersion?: string): string {
        const version = localVersion ? localVersion : this.version;
        return `${this.baseUrl}/${version}/img/passive/${passiveAbilityFileName}`;
    }

    public getChampionAbility(championAbilityFileName: string, localVersion?: string): string {
        const version = localVersion ? localVersion : this.version;
        return `${this.baseUrl}/${version}/img/spell/${championAbilityFileName}`;
    }

    public getSummonerSpell(summonerSpellFileName: string, localVersion?: string): string {
        const version = localVersion ? localVersion : this.version;
        return `${this.baseUrl}/${version}/img/spell/${summonerSpellFileName}`;
    }

    public getItem(itemNumber: string, localVersion?: string): string {
        const version = localVersion ? localVersion : this.version;
        return `${this.baseUrl}/${version}/img/item/${itemNumber}.png`;
    }

    public getMastery(masteryNumber: string, localVersion?: string): string {
        const version = localVersion ? localVersion : this.version;
        return `${this.baseUrl}/${version}/img/mastery/${masteryNumber}.png`;
    }

    public getRune(runeFileName: string, localVersion?: string): string {
        const version = localVersion ? localVersion : this.version;
        return `${this.baseUrl}/${version}/img/rune/${runeFileName}`;
    }

    public getSprite(spriteNumber: string, localVersion?: string): string {
        const version = localVersion ? localVersion : this.version;
        return `${this.baseUrl}/${version}/img/sprite/${spriteNumber}.png`;
    }

    public getMiniMap(mapId: string, localVersion?: string): string {
        const version = localVersion ? localVersion : this.version;
        return `${this.baseUrl}/${version}/img/map/map${mapId}.png`;
    }

    public getScoreboardIcon(iconName: string, localVersion?: string): string {
        const version = localVersion ? localVersion : this.version;
        // TODO http://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/champion.png
        return `${this.baseUrl}/${version}/img/ui/${iconName}.png`;
    }
}
