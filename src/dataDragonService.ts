import { ImageService, Version} from './dataDragon';
import { RealmDto } from './domain/dataDragon';

export class DataDragonService {
    public defaultRegion: string;
    public version: Version;
    public imageService: ImageService;

    constructor(realmInfo?: RealmDto) {
        this.version = new Version(realmInfo.cdn);
        this.imageService = new ImageService(realmInfo.n.profileicon);
    }

    /*
    realms/${region}.json
            {
                "n": {
                    "item": "9.10.1",
                    "rune": "7.23.1",
                    "mastery": "7.23.1",
                    "summoner": "9.10.1",
                    "champion": "9.10.1",
                    "profileicon": "9.10.1",
                    "map": "9.10.1",
                    "language": "9.10.1",
                    "sticker": "9.10.1"
                },
                "v": "9.10.1",
                "l": "en_US",
                "cdn": "https://ddragon.leagueoflegends.com/cdn",
                "dd": "9.10.1",
                "lg": "9.10.1",
                "css": "9.10.1",
                "profileiconmax": 28,
                "store": null
            }
    versions.json

    locationlization http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/language.json
    languages https://ddragon.leagueoflegends.com/cdn/languages.json

    images
        profile-icons: http://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${championId}.png
        champions-splash-art http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg  (number is their skin)
        champions-loading-art http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg  (number is their skin)
        champion square http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png
        passive ability http://ddragon.leagueoflegends.com/cdn/6.24.1/img/passive/Cryophoenix_Rebirth.png 
        champion ability http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/FlashFrost.png 
        summoner spell http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerFlash.png 
        items http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1001.png 
        masteries http://ddragon.leagueoflegends.com/cdn/6.24.1/img/mastery/6111.png 
        runes http://ddragon.leagueoflegends.com/cdn/6.24.1/img/rune/8001.png 
        sprites http://ddragon.leagueoflegends.com/cdn/6.24.1/img/sprite/spell0.png 
        minimaps http://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map11.png 
        scoreboard icons http://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/champion.png

    data
        Profile Icons:
        http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/profileicon.json 

        Champions:
        http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json 

        Individual Champions:
        http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/Aatrox.json 

        Items:
        http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/item.json 

        Masteries:
        http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/mastery.json 

        Runes:
        http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/rune.json 

        Summoner Spells:
        http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/summoner.json 
    */
}
