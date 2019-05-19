import { LeagueItemDto } from '.';

export interface LeagueListDto {
    leagueId: string;
    tier: string;
    entries: LeagueItemDto[];
    queue: string;
    name: string;
}
