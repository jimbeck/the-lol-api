import { MiniSeriesDto } from '.';

export interface LeagueItemDto {
    summonerName: string;
    hotStreak: boolean;
    miniSeries:	MiniSeriesDto;
    wins: number;
    veteran: boolean;
    losses:	number;
    freshBlood:	boolean;
    inactive: boolean;
    rank: string;
    summonerId: string;
    leaguePoints: number;
}
