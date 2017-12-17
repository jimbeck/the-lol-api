import {ChampionMasteryService} from './v3/ChampionMasteryService';

export class LeagueServices {
     public championMastery: ChampionMasteryService;
    // champion mastery
    // champion
    // league
    // static data
    // status
    // match
    // spectator
    // summoner
    // third-party-code
    // tournament-stub
    // tournament
    constructor(apiKey: string, region?: string) {
        this.championMastery = new ChampionMasteryService(apiKey, region);
    }
}
