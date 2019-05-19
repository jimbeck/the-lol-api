import { BannedChampion, Observer, Participant } from '.';

export interface FeaturedGameInfo {
    gameId: number;
    gameStartTime: number;
    platformId: string;
    gameMode: string;
    mapId: number;
    gameType: string;
    bannedChampions: BannedChampion[];
    observers: Observer;
    participants: Participant[];
    gameLength: number;
    gameQueueConfigId: number;
}
