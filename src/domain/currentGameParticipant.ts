import { GameCustomizationObject, Perks } from '.';

export interface CurrentGameParticipant {
    profileIconId: number;
    championId: number;
    summonerName: string;
    gameCustomizationObjects: GameCustomizationObject[];
    bot: boolean;
    perks: Perks;
    spell2Id: number;
    teamId: number;
    spell1Id: number;
    summonerId: number;
}