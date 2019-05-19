import { MiniSeriesDto } from '.';

export interface LeagueEntryDto {
    queueType: string;
    summonerName: string;
    hotStreak: boolean;
    miniSeries: MiniSeriesDto;
    wins: number;
    veteran: boolean;
    losses:	number;
    rank: string;
    leagueId: string;
    inactive: boolean;
    freshBlood: boolean;
    tier: string;
    summonerId:	string;
    leaguePoints: number;
}
