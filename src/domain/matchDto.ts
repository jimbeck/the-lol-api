import { ParticipantDto, ParticipantIdentityDto, TeamStatsDto } from '.';

export interface MatchDto {
    seasonId: number;
    queueId: number;
    gameId: number;
    participantIdentities: ParticipantIdentityDto[];
    gameVersion: string;
    platformId: string;
    gameMode: string;
    mapId: number;
    gameType: string;
    teams: TeamStatsDto[];
    participants: ParticipantDto[];
    gameDuration: number;
    gameCreation: number;
}
