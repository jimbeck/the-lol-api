export interface ChampionMasteryDto {
    chestGranted: boolean;
    championLevel: number;
    championPoints: number;
    championId: number;
    championPointsUntilNextLevel: number;
    lastPlayTime: number;
    tokensEarned: number;
    championPointsSinceLastLevel: number;
    summonerId: string;
}
