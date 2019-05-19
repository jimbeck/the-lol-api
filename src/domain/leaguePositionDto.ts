import { MiniSeriesDto } from '.';

export interface LeaguePositionDto {
    queueType: string;
    summonerName: string;
    hotStreak: boolean;
    miniSeries: MiniSeriesDto;
    wins: number;
    veteran: boolean;
    losses: number;
    rank: string;
    leagueId: string;
    inactive: boolean;
    freshBlood: boolean;
    leagueName: string;
    position: string; // (Legal values: APEX, TOP, JUNGLE, MIDDLE, BOTTOM, UTILITY, NONE)
    tier: string;
    summonerId: string;
    leaguePoints: number;
}
