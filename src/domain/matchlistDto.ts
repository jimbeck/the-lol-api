import { MatchReferenceDto } from '.';

export interface MatchlistDto {
    matches: MatchReferenceDto[];
    totalGames: number;
    startIndex: number;
    endIndex: number;
}
