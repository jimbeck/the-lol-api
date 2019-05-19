import { MatchPositionDto } from '.';

export interface MatchParticipantFrameDto {
    totalGold: number;
    teamScore: number;
    participantId: number;
    level: number;
    currentGold: number;
    minionsKilled: number;
    dominionScore: number;
    position: MatchPositionDto;
    xp: number;
    jungleMinionsKilled: number;
}